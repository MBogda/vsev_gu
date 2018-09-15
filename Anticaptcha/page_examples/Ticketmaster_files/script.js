(function () {
  'use strict';
  var pageid;
  var ENV_ENDPOINT = {
    DEV: 'https://d3113turpqi13v.cloudfront.net/',
    PREPROD: 'https://d2xrds41oyj8rt.cloudfront.net/',
    PROD: 'https://d340r8tz5vq0ll.cloudfront.net/'
  };
  var eventId = (
    window.queueViewModel &&
    window.queueViewModel.options &&
    window.queueViewModel.options.eventId
  ) || (
    window.queueViewModel &&
    window.queueViewModel.eventId
  ) || null;
  var logEnabled = window.localStorage.getItem('loglevel');
  var environmentOverride = window.localStorage.getItem('env') && window.localStorage.getItem('env').toUpperCase();
  var LINE_NUMBER_THRESHOLD = 2000;
  
  function logger() {
    if (!logEnabled) { return; }
    // basic logging hidden from user
    console.log.apply(this, arguments);
  }

  function setRelativeTime(waitTime) {
    if (waitTime && $.isNumeric(waitTime.charAt(0))) {
      $('#relativeTimeGroup h4').removeClass("text");
      return waitTime.replace("minutes", "mins").replace("minute", "min");
    } else {
      $('#MainPart_lbWhichIsIn').addClass("text");
      return waitTime;
    }
  }

  function preGTM() {
    // TMWR-617 - "Update datalayer for Queue It Queue page"
    var GA_PID = {
      before: 'Waiting Room',
      queue: 'In Queue',
      after: 'After Event',
      exit: 'Exit Queue',
      error: 'Error',
    };

    // guard assignments
    window.digitalData = window.digitalData || {};
    window.digitalData.page = window.digitalData.page || {};
    window.digitalData.page.pageInfo = window.digitalData.page.pageInfo || {};
    var domain = window.digitalData.page.pageInfo.domain || 'TM_US'; // confirmed || statement with GA team
    var gaPageId = GA_PID[pageid] || GA_PID.queue; // confirmed || statement with GA team
    window.digitalData.page.pageInfo.pageName = domain + ': Queue: ' + gaPageId;
    if (!window.digitalData.page.pageInfo.domain) { logger('PreGTM: No domain specified. Fallback to TM_US'); }
    if (!GA_PID[pageid]) { logger('PreGTM: GA_PID[] is undefined. Fallback to GA_PID.queue'); }
  }

  function addGTM() {
    preGTM();
    var gtm = document.createElement('script');
    gtm.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-K4QMLG';
    gtm.onload = function() {
      logger('inside gtm.onload()');
      /* eslint-disable */
      /* Google Analytics Snippet */
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-K4QMLG');
      /* eslint-enable */
    }
    document.body.appendChild(gtm);
    logger('gtm script added to document.body');
  }

  function updateDigitalData(obj) {
    /* ======== update dataLayer ===== //
    Manual method. Procedural exists in react version.
    We also cover both methods. As this discrepency is
    killing us in testing */

    var oldFormat = function(s3) {
      window.digitalData = Object.assign({}, window.digitalData, {
        page: {
          attributes: {
            artistName: s3['page.attributes.artistName'],
            artistID: s3['page.attributes.artistID'],
            city: s3['page.attributes.city'],
            country: s3['page.attributes.country'],
            eventID: s3['page.attributes.eventID'],
            eventName: s3['page.attributes.eventName'],
            eventDate: s3['page.attributes.eventDate'],
            eventOnsaleDateTime: s3['page.attributes.eventOnsaleDateTime'],
            eventOnsaleTime: s3['page.attributes.eventOnsaleTime'],
            eventTime: s3['page.attributes.eventTime'],
            eventResaleEligible: s3['page.attributes.eventResaleEligible'],
            secondaryArtistID: s3['page.attributes.secondaryArtistID'],
            secondaryArtistName: s3['page.attributes.secondaryArtistName'],
            state: s3['page.attributes.state'],
            venueID: s3['page.attributes.venueID'],
            venueName: s3['page.attributes.venueName'],
            zip: s3['page.attributes.zip'],
            discovery: {
              event: [{
                id: s3['page.attributes.discovery.event[0].id'],
                classifications: {
                  segment: {
                    id: s3['page.attributes.discovery.event[0].classifications.segment.id'],
                    name: s3['page.attributes.discovery.event[0].classifications.segment.name']
                  },
                  genre: {
                    id: s3['page.attributes.discovery.event[0].classifications.genre.id'],
                    name: s3['page.attributes.discovery.event[0].classifications.genre.name']
                  },
                  subGenre: {
                    id: s3['page.attributes.discovery.event[0].classifications.subGenre.id'],
                    name: s3['page.attributes.discovery.event[0].classifications.subGenre.name']
                  }
                },
                attraction: {
                  id: s3['page.attributes.discovery.event[0].attraction.id']
                },
                venue: {
                  id: s3['page.attributes.discovery.event[0].venue.id']
                }
              }]
            },
          },
          pageInfo: {
            domain: s3['page.pageInfo.domain'],
            environment: s3['page.pageInfo.environment'],
            pageChannel: s3['page.pageInfo.pageChannel'],
            pageExperience: s3['page.pageInfo.pageExperience'],
            pageID: s3['page.pageInfo.pageID'],
            pageName: s3['page.pageInfo.pageName'],
            pageType: s3['page.pageInfo.pageType'],
            pageVariant: s3['page.pageInfo.pageVariant'],
            platform: s3['page.pageInfo.platform'],
            promoterID: s3['page.pageInfo.promoterID'],
            publisher: s3['page.pageInfo.publisher'],
            publisherDivision: s3['page.pageInfo.publisherDivision'],
            referringURL: s3['page.pageInfo.referringURL']
          },
          category: {
            organization: s3['page.category.organization']
          }
        }
      });
    }

    var newFormat = function(s3) {
      // new format has both analytics and sales. So we pass in analytics for digitalData
      window.digitalData = Object.assign({}, window.digitalData, s3.analytics);
    }

    // check for a old format key. .artistName should always exist as a key.
    if (obj.hasOwnProperty('page.attributes.artistName')) {
      oldFormat(obj); // old format example: https://d340r8tz5vq0ll.cloudfront.net/smoke
    } else {
      newFormat(obj); // new format example: https://d340r8tz5vq0ll.cloudfront.net/blackbird
    }
  }

  function onSuccess(data) {
    var s3 = {};

    try {
      s3 = (data && data.responseText) ? JSON.parse(data.responseText) : {};
    } catch (e) {
      s3 = {};
    }

    updateDigitalData(s3);

    logger('adding GTM');
    addGTM();
  }

  function getDigitalData() {
    if (!eventId) {
      logger('no event id found (for populating window.digitalData)')
      addGTM();
      return;
    }

    

    var environment = ENV_ENDPOINT[environmentOverride || 'PROD'] || ENV_ENDPOINT.PROD;
    $.ajax({
      type: 'GET',
      url: environment + eventId, // prod
      complete: onSuccess,
      dataType: 'application/json'
    });
  }

  function pageReady(/* data */) {
    logger('Page Ready');
    getDigitalData(); // start the ajax request ASAP;

    // elevate scope for modelUpdated() use later
    pageid = $("body").attr("data-pageid");
    logger('pageid', pageid);

    // toggle the class every two second
    setInterval(function() {
      $("#defaultViewRedDotPb1").toggleClass("active");
    }, 2000);

    // var culture = $("body").attr("data-culture");
    $('#headerImage').insertBefore('#header h2')
    if ($('#headerImage').length === 0) {
      $('#header h2').css({
        'background-image': 'none',
        'top': '0',
        'margin-top': '0px',
      });
    }

    // style for all pages
    // style page based on page type
    if (pageid === "before") {
      $("#headerparagraph").appendTo(".processbar-box");
      $('.countdown_row span:last-child').text("SECS");
      $('.countdown_row span:nth-last-child(2)').text("MINS");
      $('.countdown_row span:nth-last-child(3)').text("HOURS");
      $('#lbHeaderBefore').insertBefore('#MainPart_divProgressbarBox').addClass('lb-header-before');
      $('#footer-direct-link a').after(
        '<a href="https://www.ticketmaster.com/h/waitingroom.html?tm_link=help_nav_0_waitingroom" target="_blank" id="needHelp">Need Help?</a>'
      );
      $("#MainPart_divTimeBox").prepend("<h1>Messages</h1>");
    } else if (pageid === "queue") {
      $('<div id="customGroups"><div class="customGroup" id="numberInLineGroup"></div>' +
        '<div class="customGroup" id="estimatedWaitGroup"><h4></h4><h5></h5></div>' +
        '<div class="customGroup" id="usersAheadGroup"><h4></h4><h5></h5></div>' +
        '<div class="customGroup" id="expectedArrivalTimeGroup"><h4></h4><h5></h5></div></div>').insertAfter(
        "#header");
      $('.warning-box').clone().insertBefore('.warning-box').attr('id', 'runnerContainer')
      $('#runnerContainer .progressbar .progress .runner').attr('id', 'runner')
      $('#runner').append('<span id="runnerTriangle"></span>')
      $('#MainPart_pProgressbarBox_Holder_Larger span:first-child').appendTo("#numberInLineGroup")
      $('#numberInLineGroup span:last-child').remove()
      $('#MainPart_lbQueueNumberText').insertAfter('#MainPart_lbQueueNumber').text('Your number in line')
      $(
        '<span id="MainPart_lbUsersInLineAheadOfYouSub" data-bind="visible: layout.usersInLineAheadOfYouVisible"></span>'
      ).appendTo("#usersAheadGroup h4");
      $("#MainPart_lbUsersInLineAheadOfYouText").appendTo("#usersAheadGroup h5").text("People in front of you").hide();
      $("#MainPart_lbExpectedServiceTime").appendTo("#expectedArrivalTimeGroup h4");
      $("#MainPart_lbExpectedServiceTimeText").appendTo("#expectedArrivalTimeGroup h5").text(
        "Expected arrival time on the website");
      $("#MainPart_lbWhichIsIn").appendTo("#estimatedWaitGroup h4");
      $("#MainPart_lbWhichIsInText").appendTo("#estimatedWaitGroup h5").text("Estimated wait time");
      $("#headerparagraph").appendTo(".processbar-box");
      $(".time-box").insertAfter("#MainPart_divExitLine");
      $("#MainPart_lbNotyfyMeText").text("Email Address");
      $("#aUpdateEmail .l").text("Notify Me");
      $("#MainPart_divExitLine a").insertBefore("#MainPart_divExitLine p");
      $("#MainPart_divExitLine a").text("Exit the Queue");
      $("#MainPart_divExitLine p").text("");
      $('#lbHeaderBefore').insertBefore('#customGroups');
      $('#MainPart_lbManualUpdateWarning').prepend(
        '<ul id="MainPart_ulProgressbarBox_Holder_Processbar" class="processbar" style="width:21px"><li id="defaultViewRedDotPb1" class="active"><span id="redDot">&nbsp;</span></li></ul><img class="redDotLoad" src="//assets.queue-it.net/ticketmastertest/userdata/layout/CustomLayout/v02/ico-round-tm-red.png">'
      )
      // $('#queue-paused').insertAfter('#lbHeaderBefore'); // NOTE: disabled for TMWR-484
      $('#first-in-line').insertAfter('#lbHeaderBefore').text("You're up next!");
      $('#first-in-line').append(
        '<span id="first-in-line-p">In just a few moments your page will refresh, and you may begin to shop for tickets.<span>'
      )
      $('<div id="lessThanAMinute">Less than a minute</div>').insertAfter('#relativeTimeGroup h4')
      $('#lessThanAMinute').hide()
      if ($("#MainPart_divTimeBox h1").length < 1) {
        $("#MainPart_divTimeBox").prepend("<h1>Messages</h1>");
      }
      if ($('#footer-direct-link a').length < 2) {
        $('#footer-direct-link a').after(
          '<a href="https://www.ticketmaster.com/h/waitingroom.html?tm_link=help_nav_0_waitingroom" target="_blank" id="needHelp">Need Help?</a>'
        );
      }
      if (window.queueViewModel.ticket && window.queueViewModel.ticket.whichIsIn) {
        var whichIsIn = (
          window.queueViewModel.options &&
          window.queueViewModel.options.inqueueInfo &&
          window.queueViewModel.options.inqueueInfo.ticket &&
          window.queueViewModel.options.inqueueInfo.ticket.whichIsIn
        ) || null;
        var time = setRelativeTime(whichIsIn);
        window.queueViewModel.ticket.whichIsIn(time);
      }

      // If page loaded, you are first in line, then hide the duplicate header. This is a bugfix. TMWR-472
      var firstInLine = (
        window.queueViewModel &&
        window.queueViewModel.layout &&
        window.queueViewModel.layout.firstInLineVisible &&
        window.queueViewModel.layout.firstInLineVisible()
      ) || false;
      if (firstInLine) {
        $('#lbHeaderBefore').hide();
      } else {
        $('#lbHeaderBefore').show();
      }
    } else if (pageid === "after") {
      $('#lbHeaderBefore').insertBefore('#MainPart_divBlock');
    } else if (pageid === "exit") {
      $('#headerparagraph').insertBefore('#MainPart_divWarningBox')
      $('#detailExpander').insertBefore('#MainPart_divWarningBox')
    } else if (pageid === "error") {
      $('#headerparagraph').insertBefore('#MainPart_divWarningBox')
      $('#detailExpander').insertBefore('#MainPart_divWarningBox')
        // detailExpander MainPart_divWarningBox
        // var errorid = $("body").attr("data-errorid");
        // old queue number
        // if (errorid === "4") {}
        // Max No Of Redirects Per QId
        // if (errorid === "5") {}
    }
    // Fix: double header problem. We don't want both headers showing at the same time
    var yourUpNext = $('#content > #first-in-line');
    var youAreNowInLine = $('#content > #lbHeaderBefore');
    if (yourUpNext.is(':visible') && youAreNowInLine.is(':visible')) {
      youAreNowInLine.hide();
    }
  }

  function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function modelUpdated(data) {
    logger('model updated');
    //update before page header if changes to event are made
    if (pageid == "before") {
      if ($('#lbHeaderP #lbHeaderBefore').length === 1) {
        $('.lb-header-before').hide();
        $('#lbHeaderP #lbHeaderBefore').insertBefore('#MainPart_divProgressbarBox').addClass('lb-header-before');
      }
    }
    if (pageid !== "queue" || !data) { return; }

    if (data.ticket) {
      if (data.ticket.whichIsIn !== null) {
        data.ticket.whichIsIn = setRelativeTime(data.ticket.whichIsIn);
      }

      if (data.ticket.secondsToStart < 60) {
        $('#relativeTimeGroup h4').hide()
        $('#lessThanAMinute').show();
      } else {
        $('#relativeTimeGroup h4').show();
        $('#lessThanAMinute').hide();
      }
      if (data.ticket.usersInLineAheadOfYou) {
        var usersAhead = parseInt(data.ticket.usersInLineAheadOfYou.replace(',', ''));
        if (Number.isInteger(usersAhead) && usersAhead >= LINE_NUMBER_THRESHOLD) {
          $("#MainPart_lbUsersInLineAheadOfYouSub").text(numberWithCommas(LINE_NUMBER_THRESHOLD) + "+");
        } else {
          $("#MainPart_lbUsersInLineAheadOfYouSub").text(usersAhead);
        }
        $("#MainPart_lbUsersInLineAheadOfYouText").show();
      }
    }

    if (data.layout) {
      if (data.layout.firstInLineVisible == true) {
        $('#lbHeaderBefore').hide();
      } else {
        $('#lbHeaderBefore').show();
      }

      // NOTE: disabled for TMWR-484
      // if (data.layout.queueIsPausedVisible) {
      //   $('#customGroups').hide();
      // } else {
      //   $('#customGroups').show();
      // }

      // NOTE: created just for TMWR-484
      if (data.layout.queueIsPausedVisible) {
        if (data.ticket.whichIsIn) {
        $('#MainPart_lbWhichIsIn').text('~' + data.ticket.whichIsIn);
        }
        $('#MainPart_lbWhichIsIn').show();
        $('#MainPart_lbWhichIsInText').show();
      }
    }
    // Fix: The number would continue to show even when the text was hidden.
    var usersInLineAheadOfYouText = $('#MainPart_lbUsersInLineAheadOfYouText');
    var usersInLineAheadOfYouSub = $('#MainPart_lbUsersInLineAheadOfYouSub');
    if (!usersInLineAheadOfYouText.is(':visible') && usersInLineAheadOfYouSub.is(':visible')) {
      usersInLineAheadOfYouText.show();
    }
  }

  $(document).ready(function() {
    logger('document.ready');
    // found in /ticketmaster/userdata/v02/appview.js. Consolidated
    try {
      if (window.android) {
        window.android.stopAnimating();
      } else if (window.webkit) {
        window.webkit.messageHandlers.stopAnimating.postMessage(null);
      }
      logger('done removing android/webkit');
    } catch (e) {
      logger('error in `window.android` or `window.webkit` stop procedure');
    }

    // must be placed in document-ready to prevent race condition
    logger('adding modelUpdated()');
    if (window.queueViewModel.modelUpdated) {
      window.queueViewModel.modelUpdated(modelUpdated);
    }

    //does not like being placed in the pageReady. formatting for pre-queue countdown numbers and titles
    if (pageid === "before") {
      $("#defaultCountdown").countdown('option', {
        layout: '',
        format: 'dHMS',
        padZeroes: true
      });
    }

    if (window.queueViewModel && window.queueViewModel.layout) {
      //check if first in line to hide numbers
      if (window.queueViewModel.layout.firstInLineVisible()) {
        $('#customGroups').hide();
      } else {
        $('#customGroups').show();
      }

      //hide numbers immediately if queue is paused
      if (window.queueViewModel.layout.queueIsPausedVisible()) {
        $('#customGroups').hide();
      } else {
        $('#customGroups').show();
      }
    }
    // Hide ETA timer altogether
    $('#estimatedWaitGroup').hide();
  });
  // does not like being placed in document-ready
  if (window.queueViewModel.pageReady) {
    window.queueViewModel.pageReady(pageReady);
  }
})();
