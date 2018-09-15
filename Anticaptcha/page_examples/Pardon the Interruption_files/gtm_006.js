
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"40",
  "macros":[{
      "function":"__j",
      "vtp_name":"digitalData.transaction.profile.profileInfo.email"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var k=",["escape",["macro",0],8,16],";k=k.toLowerCase().replace(\/\\s\/g,\"\");return 5\u003Ck.length\u0026\u0026(CryptoJS=function(r,k){var q={},l=q.lib={},n=function(){},e=l.Base={extend:function(a){n.prototype=this;var c=new n;a\u0026\u0026c.mixIn(a);c.hasOwnProperty(\"init\")||(c.init=function(){c.$super.init.apply(this,arguments)});c.init.prototype=c;c.$super=this;return c},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var c in a)a.hasOwnProperty(c)\u0026\u0026(this[c]=\na[c]);a.hasOwnProperty(\"toString\")\u0026\u0026(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}},f=l.WordArray=e.extend({init:function(a,c){a=this.words=a||[];this.sigBytes=c!=k?c:4*a.length},toString:function(a){return(a||h).stringify(this)},concat:function(a){var c=this.words,t=a.words,d=this.sigBytes;a=a.sigBytes;this.clamp();if(d%4)for(var b=0;b\u003Ca;b++)c[d+b\u003E\u003E\u003E2]|=(t[b\u003E\u003E\u003E2]\u003E\u003E\u003E24-b%4*8\u0026255)\u003C\u003C24-(d+b)%4*8;else if(65535\u003Ct.length)for(b=0;b\u003Ca;b+=4)c[d+b\u003E\u003E\u003E2]=t[b\u003E\u003E\u003E2];else c.push.apply(c,\nt);this.sigBytes+=a;return this},clamp:function(){var a=this.words,c=this.sigBytes;a[c\u003E\u003E\u003E2]\u0026=4294967295\u003C\u003C32-c%4*8;a.length=r.ceil(c\/4)},clone:function(){var a=e.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var c=[],b=0;b\u003Ca;b+=4)c.push(4294967296*r.random()|0);return new f.init(c,a)}}),b=q.enc={},h=b.Hex={stringify:function(a){var c=a.words;a=a.sigBytes;for(var b=[],d=0;d\u003Ca;d++){var e=c[d\u003E\u003E\u003E2]\u003E\u003E\u003E24-d%4*8\u0026255;b.push((e\u003E\u003E\u003E4).toString(16));b.push((e\u002615).toString(16))}return b.join(\"\")},\nparse:function(a){for(var c=a.length,b=[],d=0;d\u003Cc;d+=2)b[d\u003E\u003E\u003E3]|=parseInt(a.substr(d,2),16)\u003C\u003C24-d%8*4;return new f.init(b,c\/2)}},g=b.Latin1={stringify:function(a){var c=a.words;a=a.sigBytes;for(var b=[],d=0;d\u003Ca;d++)b.push(String.fromCharCode(c[d\u003E\u003E\u003E2]\u003E\u003E\u003E24-d%4*8\u0026255));return b.join(\"\")},parse:function(a){for(var c=a.length,b=[],d=0;d\u003Cc;d++)b[d\u003E\u003E\u003E2]|=(a.charCodeAt(d)\u0026255)\u003C\u003C24-d%4*8;return new f.init(b,c)}},u=b.Utf8={stringify:function(a){try{return decodeURIComponent(escape(g.stringify(a)))}catch(c){throw Error(\"Malformed UTF-8 data\");\n}},parse:function(a){return g.parse(unescape(encodeURIComponent(a)))}},m=l.BufferedBlockAlgorithm=e.extend({reset:function(){this._data=new f.init;this._nDataBytes=0},_append:function(a){\"string\"==typeof a\u0026\u0026(a=u.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(a){var c=this._data,b=c.words,d=c.sigBytes,e=this.blockSize,h=d\/(4*e);h=a?r.ceil(h):r.max((h|0)-this._minBufferSize,0);a=h*e;d=r.min(4*a,d);if(a){for(var g=0;g\u003Ca;g+=e)this._doProcessBlock(b,g);g=b.splice(0,a);c.sigBytes-=\nd}return new f.init(g,d)},clone:function(){var a=e.clone.call(this);a._data=this._data.clone();return a},_minBufferSize:0});l.Hasher=m.extend({cfg:e.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){m.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a\u0026\u0026this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){return function(c,b){return(new a.init(b)).finalize(c)}},_createHmacHelper:function(a){return function(c,\nb){return(new p.HMAC.init(a,b)).finalize(c)}}});var p=q.algo={};return q}(Math),function(){var k=CryptoJS,p=k.lib,q=p.WordArray,l=p.Hasher,n=[];p=k.algo.SHA1=l.extend({_doReset:function(){this._hash=new q.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(e,k){for(var b=this._hash.words,h=b[0],g=b[1],f=b[2],m=b[3],l=b[4],a=0;80\u003Ea;a++){if(16\u003Ea)n[a]=e[k+a]|0;else{var c=n[a-3]^n[a-8]^n[a-14]^n[a-16];n[a]=c\u003C\u003C1|c\u003E\u003E\u003E31}c=(h\u003C\u003C5|h\u003E\u003E\u003E27)+l+n[a];c=20\u003Ea?c+((g\u0026f|~g\u0026m)+1518500249):\n40\u003Ea?c+((g^f^m)+1859775393):60\u003Ea?c+((g\u0026f|g\u0026m|f\u0026m)-1894007588):c+((g^f^m)-899497514);l=m;m=f;f=g\u003C\u003C30|g\u003E\u003E\u003E2;g=h;h=c}b[0]=b[0]+h|0;b[1]=b[1]+g|0;b[2]=b[2]+f|0;b[3]=b[3]+m|0;b[4]=b[4]+l|0},_doFinalize:function(){var e=this._data,f=e.words,b=8*this._nDataBytes,h=8*e.sigBytes;f[h\u003E\u003E\u003E5]|=128\u003C\u003C24-h%32;f[(h+64\u003E\u003E\u003E9\u003C\u003C4)+14]=Math.floor(b\/4294967296);f[(h+64\u003E\u003E\u003E9\u003C\u003C4)+15]=b;e.sigBytes=4*f.length;this._process();return this._hash},clone:function(){var e=l.clone.call(this);e._hash=this._hash.clone();return e}});k.SHA1=\nl._createHelper(p);k.HmacSHA1=l._createHmacHelper(p)}(),k=CryptoJS.SHA1(k)+\"\",delete CryptoJS,k\u0026\u002640==k.length)?k:\"\"})();"]
    },{
      "function":"__j",
      "vtp_name":"digitalData.page.attributes.artistName"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a=",["escape",["macro",2],8,16],".replace(\/\u0026#x2F;\/g,\"-\").replace(\/\\x27\/g,\"\")}catch(b){a=\"\"}return a})();"]
    },{
      "function":"__j",
      "vtp_name":"digitalData.page.attributes.eventName"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a=",["escape",["macro",4],8,16],".replace(\/\\\/\/g,\"-\").replace(\/\\x27\/g,\"\")}catch(b){a=\"\"}return a})();"]
    },{
      "function":"__u",
      "vtp_component":"PATH"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\/^\\\/promo\/i.test(",["escape",["macro",6],8,16],")?",["escape",["macro",6],8,16],".split(\"\/\")[2]:\"\"})();"]
    },{
      "function":"__j",
      "vtp_name":"digitalData.page.attributes.venueID"
    },{
      "function":"__j",
      "vtp_name":"digitalData.page.category.organization"
    },{
      "function":"__j",
      "vtp_name":"digitalData.page.attributes.artistID"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",0],8,16],"||\"\";if(\"undefined\"!==typeof a\u0026\u0026a.length){a=",["escape",["macro",8],8,16],"||\"\";var b=",["escape",["macro",9],8,16],"||\"\",c=",["escape",["macro",10],8,16],"||\"\";if(b.length\u0026\u0026\"mlb\"!==b\u0026\u0026c.length\u0026\u0026-1==\"805926 805917 805992 805892 806032 806019 805895 805896 805919\".split(\" \").indexOf(c)\u0026\u0026a.length\u0026\u0026-1==\"483425 57522 491523 483329 483330 73750\".split(\" \").indexOf(a)\u0026\u0026a.length\u0026\u0026-1==\"352281 352273 360467 360461 360454 360460 352270 360456 360468 360475 360476 352280 360457 352274 352282 360451 360480 360455 360450 360464 360463 360477 352257 352277 237575 74600 73969 74599 74515 90165 73781 74277 229399 107337 180945 180631 50600 245900 74479 337542 74500 338533 73901 338261 279369 16390 74438 245772 123532 50225 73985 929 49298 82448 188944 74504 74263 229653 122955 229423 98744 352273 352280 352282 352270 352274 352257 352277 352256 352295 352293 352279 352278 352281 352286 352296 352294 352297 360452 360448 360467 360478 360461 360477 360460 360464 360482 360468 360455 360457 360456 360480 360454 360493 360451 360450 360463 360475 360476 360487 360479 360474 360453 360494\".split(\" \").indexOf(a))return\"yes\"}return\"no\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return[\"2116\",\"1583506\",\"893715\",\"1278561\"].indexOf(",["escape",["macro",10],8,16],"||\"\")?\"yes\":\"no\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b={};if(\"undefined\"!==typeof digitalData.transaction.transactionID){for(var c=[],a=0;a\u003CdigitalData.transaction.item.length;a++)c.push({name:digitalData.transaction.item[a].productInfo.productName,id:digitalData.transaction.item[a].productInfo.productID,price:digitalData.transaction.item[a].price.basePrice,quantity:digitalData.transaction.item[a].quantity});b.ecommerce={purchase:{actionField:{id:digitalData.transaction.transactionID,revenue:digitalData.transaction.total.basePrice},\nproducts:c}}}return b})();"]
    },{
      "function":"__e"
    },{
      "function":"__r"
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_autoLinkDomains":"harrypottertheplay.com",
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":"auto",
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",13],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":true,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"]],
      "vtp_trackerName":"aka",
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":"UA-98307558-3",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_ecommerceIsEnabled":true
    },{
      "function":"__j",
      "vtp_name":"digitalData.transaction.total.basePrice"
    },{
      "function":"__j",
      "vtp_name":"digitalData.transaction.transactionID"
    },{
      "function":"__j",
      "vtp_name":"digitalData.transaction.total.currency"
    },{
      "function":"__u"
    },{
      "function":"__j",
      "vtp_name":"digitalData.page.pageInfo.pageName"
    },{
      "function":"__u",
      "vtp_component":"URL"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"com.silverpop.iMA.mid"
    },{
      "function":"__j",
      "vtp_name":"digitalData.page.attributes.eventID"
    },{
      "function":"__j",
      "vtp_name":"digitalData.transaction.attributes.ticketQuantity"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return-1!==\"cs3bqg mbw1rj ruvgy1 ydrp0p 1dphcn d5nsti 7o8um1 d5nsti\".split(\" \").indexOf(",["escape",["macro",7],8,16],")?\"8132099.fls.doubleclick.net\/activityi;src\\x3d8132099;type\\x3daband0;cat\\x3drtg_a00\":-1!==\"3u2lfq 60sgt0 56cpgg i2zh67 90uwkw pgjh82 kefvfs xy8ld1 em8uut 5zm2qz 5lzlwm q1spd5 zgtrnl b7wku7 lyux8n wrm2my xmbq5f c6upv7\".split(\" \").indexOf(",["escape",["macro",7],8,16],")?\"8132099.fls.doubleclick.net\/activityi;src\\x3d8132099;type\\x3daband0;cat\\x3drtg_a001\":-1!==\"tnfijj lwzizs 506xvk 6x8cmp 0iyrgw p7v5c8 syrns3 yqv5xq ygw52b jws5kl c1sfnl i2xknt gyj4g5 8mh00c 2zhpkw q0w4bh nax5cq 70ewbq groout fserl6 nk54db s77vvk xdxcih 0z6m2z jvtt5h xdzl5k gh42fb mbn80s 8n30zg f6i22u fxphvu 6ws3os f2sv0x s32nev f2sv0x d4mi6i swesm5 69ccbi 9ef80l udckgd xzvx7a 4fzox7 env7od lmr1vn qehqs0 x5m3k8 z6osj7\".split(\" \").indexOf(",["escape",["macro",7],8,16],")?\n\"8132099.fls.doubleclick.net\/activityi;src\\x3d8132099;type\\x3daband0;cat\\x3drtg_a000\":-1!==\"qud6ij zbezv4 2qn11i 1udjep ozj1rg misbx6 44x3em bndces\".split(\" \").indexOf(",["escape",["macro",7],8,16],")?\"8132099.fls.doubleclick.net\/activityi;src\\x3d8132099;type\\x3daband0;cat\\x3drtg_a0\":\"no\"})();"]
    },{
      "function":"__j",
      "vtp_name":"digitalData.cart.total.basePrice"
    },{
      "function":"__j",
      "vtp_name":"digitalData.page.pageInfo.promoterID"
    },{
      "function":"__j",
      "vtp_name":"digitalData.transaction.total.isResale"
    },{
      "function":"__u",
      "vtp_component":"HOST"
    },{
      "function":"__e"
    }],
  "tags":[{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":["template","https:\/\/aa.agkn.com\/adscores\/s.pixel?sid=9112290728\u0026em=",["escape",["macro",1],12]],
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",15],
      "tag_id":12
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.googleadservices.com\/pagead\/conversion\/1015715446\/?label=2PahCKjIkH4Q9qyq5AM\u0026guid=ON\u0026script=0",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",15],
      "tag_id":14
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=211238529446001\u0026ev=PageView\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",15],
      "tag_id":15
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",16],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":18
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",17],
      "vtp_orderId":["macro",18],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"853039732",
      "vtp_currencyCode":["macro",19],
      "vtp_conversionLabel":"0n-4CLXcl4EBEPS04ZYD",
      "vtp_url":["macro",20],
      "vtp_enableReadGaCookie":false,
      "tag_id":19
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"809396050",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":false,
      "vtp_url":["macro",20],
      "tag_id":26
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"promo0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"phxme0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8052339",
      "vtp_ordinalStandard":["macro",15],
      "vtp_url":["macro",20],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":28
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"1029414600",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":false,
      "vtp_url":["macro",20],
      "tag_id":30
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"musconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"katyp0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"6035383",
      "vtp_ordinalStandard":["macro",15],
      "vtp_url":["macro",20],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":31
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"sitev0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"ticke0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8239348",
      "vtp_ordinalStandard":["macro",15],
      "vtp_url":["macro",20],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":33
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_customParams":["list",["map","key","genre","value","Music"],["map","key","subgenre","value","Country"],["map","key","artistname","value","Luke Combs"]],
      "vtp_conversionId":"854631222",
      "vtp_customParamsFormat":"USER_SPECIFIED",
      "vtp_enableOgtRmktParams":false,
      "vtp_url":["macro",20],
      "tag_id":34
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u8","value","Luke Combs"],["map","key","u18","value","tmverifiedfan.com"],["map","key","u19","value","Music"],["map","key","u20","value","Country"]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"retarget",
      "vtp_useImageTag":false,
      "vtp_activityTag":"retarg0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"6719212",
      "vtp_ordinalStandard":["macro",15],
      "vtp_url":["macro",20],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":35
    },{
      "function":"__twitter_website_tag",
      "once_per_event":true,
      "vtp_event_type":"PageView",
      "vtp_twitter_pixel_id":"nygj9",
      "tag_id":38
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar ibmdom=document.createElement(\"meta\"),ibmcot=document.createElement(\"meta\"),ibmlib=document.createElement(\"script\");ibmdom.name=\"com.silverpop.brandeddomains\";ibmdom.content=\"www.pages08.net,www.ticketmaster.com,www1.ticketmaster.com,m.ticketmaster.com,www.livenation.com,concerts.livenation.com,concerts1.livenation.com,m.concerts.livenation.com,oss.ticketmaster.com,am.ticketmaster.com\";document.head.appendChild(ibmdom);ibmcot.name=\"com.silverpop.cothost\";ibmcot.content=\"pod8.ibmmarketingcloud.com\";\ndocument.head.appendChild(ibmcot);ibmlib.src=\"https:\/\/www.pages08.net\/LP_CONTENT\/12664\/40721\/iMAWebCookie.js?bc50888-15a62f490d1-6681ada67421f5d3ed5e65517ed2e77a\\x26h\\x3dwww.pages08.net\";document.head.appendChild(ibmlib);\u003C\/script\u003E  ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":6
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cimg height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"\/\/googleads.g.doubleclick.net\/pagead\/viewthroughconversion\/835619580\/?value=1.00\u0026amp;label=hnSVCKrsp3QQ_JW6jgM\u0026amp;guid=ON\u0026amp;script=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=147748859148728\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ega(\"create\",{trackingId:\"UA-105981826-1\",cookieDomain:\"auto\",name:\"anta1673\",allowLinker:!0});ga(\"anta1673.require\",\"displayfeatures\");ga(\"anta1673.send\",\"pageview\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":9
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar ibmdom=document.createElement(\"meta\"),ibmcot=document.createElement(\"meta\"),ibmlib=document.createElement(\"script\");ibmdom.name=\"com.silverpop.brandeddomains\";ibmdom.content=\"www.pages08.net,www.ticketmaster.com,www1.ticketmaster.com,m.ticketmaster.com,www.livenation.com,concerts.livenation.com,concerts1.livenation.com,m.concerts.livenation.com,oss.ticketmaster.com,am.ticketmaster.com\";document.head.appendChild(ibmdom);ibmcot.name=\"com.silverpop.cothost\";ibmcot.content=\"pod8.ibmmarketingcloud.com\";\ndocument.head.appendChild(ibmcot);ibmlib.src=\"https:\/\/www.pages08.net\/LP_CONTENT\/12664\/40721\/iMAWebCookie.js?bc50888-15a62f490d1-6681ada67421f5d3ed5e65517ed2e77a\\x26h\\x3dwww.pages08.net\";ibmlib.onload=function(){var a={action:\"purchase\",detail:[\"",["escape",["macro",24],7],"\",\"",["escape",["macro",5],7],"\".replace(\/;\/g,\"\"),\"",["escape",["macro",25],7],";",["escape",["macro",19],7],"\"].join(\";\"),amount:\"",["escape",["macro",17],7],"\"};try{window.ewt.cot(a)}catch(b){}};document.head.appendChild(ibmlib);\u003C\/script\u003E  "],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":11
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar anta1708ua=\"\";switch(",["escape",["macro",7],8,16],"){case \"pk2j5k\":anta1708ua=\"UA-469361-1\";break;case \"7t5431\":anta1708ua=\"UA-48975122-1\";break;case \"xvn83c\":anta1708ua=\"UA-469361-3\"}ga(\"create\",{trackingId:anta1708ua,cookieDomain:\"auto\",name:\"anta1708\",allowLinker:!0});ga(\"anta1708.send\",\"pageview\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":13
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ega(\"create\",{trackingId:\"UA-469361-2\",cookieDomain:\"auto\",name:\"anta1763\",allowLinker:!0});ga(\"anta1763.send\",\"pageview\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":16
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/ad.doubleclick.net\/ddm\/activity\/src=189445;type=2018exp;cat=18teostm;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1;num=1?\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/ad.doubleclick.net\/ddm\/activity\/src=6356955;type=tmsite;cat=tmusopen;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1;num=1?\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=700078673390591\u0026amp;ev=PageView\u0026amp;cd[page description]=Tennis_US_Open\u0026amp;noscript=1\"\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":17
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=123078845047925\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=123078845047925\u0026amp;ev=ViewContent\u0026amp;cd[artist_id]=805987\u0026amp;cd[artist_name]=New%20York%20Jets\u0026amp;cd[platform]=promo\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":23
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Ciframe id=\"bmgpromo\" src=\"about:blank\" width=\"1\" height=\"1\" frameborder=\"0\" style=\"display:none\"\u003E\u003C\/iframe\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b='\\x3ciframe src\\x3d\"https:\/\/'+",["escape",["macro",26],8,16],"+\";ord\\x3d1;u3\\x3d\"+",["escape",["macro",22],8,16],"+';dc_lat\\x3d;dc_rdid\\x3d;tag_for_child_directed_treatment\\x3d;tfua\\x3d;npa\\x3d;ord\\x3d1?\" width\\x3d\"1\" height\\x3d\"1\" frameborder\\x3d\"0\" style\\x3d\"display:none\"\\x3e\\x3c\/iframe\\x3e \\x3cimg height\\x3d\"1\" width\\x3d\"1\" style\\x3d\"display:none\" src\\x3d\"https:\/\/www.facebook.com\/tr?id\\x3d111612016179881\\x26ev\\x3dPageView\\x26noscript\\x3d1\"\/\\x3e',a=document.getElementById(\"bmgpromo\"),c=a.contentWindow||\na;a=a.contentDocument||c.document;a.open();a.write(b);a.close()})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":25
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Ciframe id=\"GTMPBGSVPK-lnevegasfb\" src=\"about:blank\" width=\"1\" height=\"1\" frameborder=\"0\" style=\"display:none\"\u003E\u003C\/iframe\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b='\\x3cscript\\x3e!function(f,b,e,v,n,t,s){if(f.fbq)return;n\\x3df.fbq\\x3dfunction(){n.callMethod?\\n    n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq\\x3dn;\\n    n.push\\x3dn;n.loaded\\x3d!0;n.version\\x3d\"2.0\";n.queue\\x3d[];t\\x3db.createElement(e);t.async\\x3d!0;\\n    t.src\\x3dv;s\\x3db.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,\\n    document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");\\n    fbq(\"set\", \"autoConfig\", false, \"733366670102540\"); \\n    fbq(\"init\", \"733366670102540\");\\n      fbq(\"trackCustom\", \"PageView\", {\\n      });\\n \\x3c\/script\\x3e',\na=document.getElementById(\"GTMPBGSVPK-lnevegasfb\"),c=a.contentWindow||a;a=a.contentDocument||c.document;a.open();a.write(b);a.close()})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":27
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar ssaUrl=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"pixel-a.basis.net\/iap\/962edd521c7dc71e\";(new Image).src=ssaUrl;(function(a){var c=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"pixel-a.basis.net\/dmp\/asyncPixelSync\",b=a.createElement(\"iframe\");(b.frameElement||b).style.cssText=\"width: 0; height: 0; border: 0;\";b.src=\"javascript:false\";a.body.appendChild(b);a=b.contentWindow.document;a.open().write(\"\\x3cbody onload\\x3d\\\"window.location.href\\x3d'\"+c+\"'\\\"\\x3e\");a.close()})(document);\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Ega(\"create\",{trackingId:\"UA-123980339-1\",cookieDomain:\"auto\",name:\"anta1960\",allowLinker:!0});ga(\"anta1960.require\",\"displayfeatures\");ga(\"anta1960.send\",\"pageview\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":29
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Ciframe id=\"GTMPBGSVPK-vfkatyfb\" src=\"about:blank\" width=\"1\" height=\"1\" frameborder=\"0\" style=\"display:none\"\u003E\u003C\/iframe\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b='\\x3cscript\\x3e!function(f,b,e,v,n,t,s){if(f.fbq)return;n\\x3df.fbq\\x3dfunction(){n.callMethod?\\n    n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq\\x3dn;\\n    n.push\\x3dn;n.loaded\\x3d!0;n.version\\x3d\"2.0\";n.queue\\x3d[];t\\x3db.createElement(e);t.async\\x3d!0;\\n    t.src\\x3dv;s\\x3db.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,\\n    document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");\\n    fbq(\"set\", \"autoConfig\", false, \"1791859664263153\"); \\n    fbq(\"init\", \"1791859664263153\");\\n      fbq(\"trackCustom\", \"CompleteRegistration\", {\\n      });\\n \\x3c\/script\\x3e',\na=document.getElementById(\"GTMPBGSVPK-vfkatyfb\"),c=a.contentWindow||a;a=a.contentDocument||c.document;a.open();a.write(b);a.close()})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":32
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Ciframe id=\"GTMNCQFXFL-vfcombsfb\" src=\"about:blank\" width=\"1\" height=\"1\" frameborder=\"0\" style=\"display:none\"\u003E\u003C\/iframe\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b='\\x3cscript\\x3e!function(f,b,e,v,n,t,s){if(f.fbq)return;n\\x3df.fbq\\x3dfunction(){n.callMethod?\\n    n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq\\x3dn;\\n    n.push\\x3dn;n.loaded\\x3d!0;n.version\\x3d\"2.0\";n.queue\\x3d[];t\\x3db.createElement(e);t.async\\x3d!0;\\n    t.src\\x3dv;s\\x3db.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,\\n    document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");\\n    fbq(\"set\", \"autoConfig\", false, \"217011611820041\"); \\n    fbq(\"init\", \"217011611820041\");\\n    fbq(\"track\", \"PageView\");\\n      fbq(\"track\", \"ViewContent\", {\\n          \"subGenre\" : \"Country\",\\n          \"funnelStep\" : \"artistsite\",\\n          \"artistName\" : \"Luke Combs\",\\n          \"genre\" : \"music\",\\n          \"host\" : \"tmverifiedfan.com\"\\n      });\\n\\x3c\/script\\x3e',\na=document.getElementById(\"GTMNCQFXFL-vfcombsfb\"),c=a.contentWindow||a;a=a.contentDocument||c.document;a.open();a.write(b);a.close()})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":36
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Ciframe id=\"GTMNCQFXFL-vfcombsfb\" src=\"about:blank\" width=\"1\" height=\"1\" frameborder=\"0\" style=\"display:none\"\u003E\u003C\/iframe\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b='\\x3cscript\\x3e!function(f,b,e,v,n,t,s){if(f.fbq)return;n\\x3df.fbq\\x3dfunction(){n.callMethod?\\n    n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq\\x3dn;\\n    n.push\\x3dn;n.loaded\\x3d!0;n.version\\x3d\"2.0\";n.queue\\x3d[];t\\x3db.createElement(e);t.async\\x3d!0;\\n    t.src\\x3dv;s\\x3db.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,\\n    document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");\\n    fbq(\"set\", \"autoConfig\", false, \"217011611820041\"); \\n    fbq(\"init\", \"217011611820041\");\\n    fbq(\"track\", \"PageView\");\\n      fbq(\"track\", \"CompleteRegistration\", {\\n          \"subGenre\" : \"Country\",\\n          \"funnelStep\" : \"artistsite\",\\n          \"artistName\" : \"Luke Combs\",\\n          \"genre\" : \"music\",\\n          \"host\" : \"tmverifiedfan.com\"\\n      });\\n\\x3c\/script\\x3e',\na=document.getElementById(\"GTMNCQFXFL-vfcombsfb\"),c=a.contentWindow||a;a=a.contentDocument||c.document;a.open();a.write(b);a.close()})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":37
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",11],
      "arg1":"yes"
    },{
      "function":"_re",
      "arg0":["macro",14],
      "arg1":"transaction.(us|ca).(ticketmaster|livenation)"
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"75ukzu"
    },{
      "function":"_re",
      "arg0":["macro",14],
      "arg1":"page_postload.(us|ca).ticketmaster.promo"
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"2c1o29"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"page_postload.us.harrypotter.vf-hp"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"2395774"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"393320"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"transaction.us.ticketmaster.uco-widget"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"Splash Page: Backstreet Boys"
    },{
      "function":"_re",
      "arg0":["macro",14],
      "arg1":"page_postload.us.ticketmaster.tmol"
    },{
      "function":"_eq",
      "arg0":["macro",22],
      "arg1":"https:\/\/www.ticketmaster.com\/Lionel"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"Splash Page: Gwen Stefani: 2018"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"Splash Page: Jennifer Lopez: 2016"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"TM_US: Splash Page: Queen \u0026 Adam Lambert: 2018"
    },{
      "function":"_eq",
      "arg0":["macro",22],
      "arg1":"https:\/\/www.ticketmaster.com\/brunomars"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"page_postload.us.ticketmaster.tmol"
    },{
      "function":"_cn",
      "arg0":["macro",22],
      "arg1":"www.ticketmaster.com\/gagavegas"
    },{
      "function":"_cn",
      "arg0":["macro",22],
      "arg1":"www.ticketmaster.com\/ladygaga"
    },{
      "function":"_cn",
      "arg0":["macro",22],
      "arg1":"www.ticketmaster.com\/gaga"
    },{
      "function":"_sw",
      "arg0":["macro",22],
      "arg1":"http:\/\/www.ticketmaster.com\/Aerosmith"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"sgvmu7"
    },{
      "function":"_re",
      "arg0":["macro",14],
      "arg1":"page_postload.us.ticketmaster."
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"780815"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"Registration: Sign in"
    },{
      "function":"_re",
      "arg0":["macro",14],
      "arg1":"page_postload.us.verifiedfan.vf"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"Registration: Details"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"Registration: Complete"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"1265325"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"o7kbh6"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"lil7sx"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"Verified Fan: Registration: Complete"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"2150342"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"page_postload.us.verifiedfan.vf"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"Verified Fan: Registration: Sign in"
    },{
      "function":"_cn",
      "arg0":["macro",22],
      "arg1":"spMailingID"
    },{
      "function":"_re",
      "arg0":["macro",14],
      "arg1":"page_preload.(us|ca).(livenation|ticketmaster|accountmanager)"
    },{
      "function":"_re",
      "arg0":["macro",7],
      "arg1":"(12yzhw|2hm2dy|2s3rhs|44iuki|74z67r|ayy1iq|exytjp|fwbmxb|iy43im|voo4hb|xxx7sb|dv2d68|pge5fn|l3ymy7|x9gcdl|w4gbdd|imi0uh|22gbr7)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",23],
      "arg1":"\\d+"
    },{
      "function":"_re",
      "arg0":["macro",14],
      "arg1":"transaction.(us|ca).(livenation|ticketmaster|accountmanager)"
    },{
      "function":"_re",
      "arg0":["macro",7],
      "arg1":"(pk2j5k|7t5431|xvn83c|3cgkll)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",7],
      "arg1":"(skdwdc|rt5sry|ndyfux)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"usopentennis"
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"ih4a3o"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"no"
    }],
  "rules":[
    [["if",0,1],["add",0]],
    [["if",2,3],["add",1]],
    [["if",3,4],["add",2]],
    [["if",5],["add",3]],
    [["if",6,7,8],["add",3,4]],
    [["if",9,10],["add",5,21]],
    [["if",10,11],["add",5,21]],
    [["if",10,12],["add",5,21]],
    [["if",10,13],["add",5,21]],
    [["if",10,14],["add",5,21]],
    [["if",15,16],["add",5,21]],
    [["if",16,17],["add",5,21]],
    [["if",10,18],["add",5,21]],
    [["if",10,19],["add",5,21]],
    [["if",16,20],["add",5,21,22]],
    [["if",21,22],["add",6]],
    [["if",23,24,25],["add",7]],
    [["if",23,25,26],["add",7]],
    [["if",23,25,27],["add",7]],
    [["if",25,27,28],["add",8,23]],
    [["if",10,29],["add",9]],
    [["if",10,30],["add",9]],
    [["if",31,32,33],["add",10,11,12,25]],
    [["if",32,33,34],["add",10,11,12,24]],
    [["if",35,36],["add",13]],
    [["if",3,37],["add",14]],
    [["if",38,39],["add",15]],
    [["if",3,40],["add",16]],
    [["if",3,41],["add",17]],
    [["if",16,42],["add",18]],
    [["if",3,43],["add",19]],
    [["if",3],["unless",44],["add",20]]]
},
"runtime":[
[],[]
]};

var da="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ea;if("function"==typeof Object.setPrototypeOf)ea=Object.setPrototypeOf;else{var fa;a:{var ha={Lc:!0},ja={};try{ja.__proto__=ha;fa=ja.Lc;break a}catch(a){}fa=!1}ea=fa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ka=ea,la=this,oa=function(){if(null===ma){var a;a:{var b=la.document,c=b.querySelector&&b.querySelector("script[nonce]");if(c){var d=c.nonce||c.getAttribute("nonce");if(d&&na.test(d)){a=d;break a}}a=null}ma=a||""}return ma},na=/^[\w+/_-]+[=]{0,2}$/,ma=null,pa=function(a,b){function c(){}c.prototype=b.prototype;a.Be=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Oe=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,
d)}};var g=function(a,b){this.B=a;this.qd=b};g.prototype.Dd=function(){return this.B};g.prototype.getType=g.prototype.Dd;g.prototype.getData=function(){return this.qd};g.prototype.getData=g.prototype.getData;var qa=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},ra=function(){this.ja={};this.za=!1};ra.prototype.get=function(a){return this.ja["dust."+a]};ra.prototype.set=function(a,b){!this.za&&(this.ja["dust."+a]=b)};ra.prototype.has=function(a){return this.ja.hasOwnProperty("dust."+a)};var sa=function(a){var b=[],c;for(c in a.ja)a.ja.hasOwnProperty(c)&&b.push(c.substr(5));return b};
ra.prototype.remove=function(a){!this.za&&delete this.ja["dust."+a]};ra.prototype.L=function(){this.za=!0};var v=function(a){this.ma=new ra;this.h=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(qa(b)?this.h[Number(b)]=a[Number(b)]:this.ma.set(b,a[b]))};v.prototype.toString=function(){for(var a=[],b=0;b<this.h.length;b++){var c=this.h[b];null===c||void 0===c?a.push(""):a.push(c.toString())}return a.join(",")};v.prototype.set=function(a,b){if("length"==a){if(!qa(b))throw"RangeError: Length property must be a valid integer.";this.h.length=Number(b)}else qa(a)?this.h[Number(a)]=b:this.ma.set(a,b)};
v.prototype.set=v.prototype.set;v.prototype.get=function(a){return"length"==a?this.length():qa(a)?this.h[Number(a)]:this.ma.get(a)};v.prototype.get=v.prototype.get;v.prototype.length=function(){return this.h.length};v.prototype.U=function(){for(var a=sa(this.ma),b=0;b<this.h.length;b++)a.push(b+"");return new v(a)};v.prototype.getKeys=v.prototype.U;v.prototype.remove=function(a){qa(a)?delete this.h[Number(a)]:this.ma.remove(a)};v.prototype.remove=v.prototype.remove;v.prototype.pop=function(){return this.h.pop()};
v.prototype.pop=v.prototype.pop;v.prototype.push=function(a){return this.h.push.apply(this.h,Array.prototype.slice.call(arguments))};v.prototype.push=v.prototype.push;v.prototype.shift=function(){return this.h.shift()};v.prototype.shift=v.prototype.shift;v.prototype.splice=function(a,b,c){return new v(this.h.splice.apply(this.h,arguments))};v.prototype.splice=v.prototype.splice;v.prototype.unshift=function(a){return this.h.unshift.apply(this.h,Array.prototype.slice.call(arguments))};
v.prototype.unshift=v.prototype.unshift;v.prototype.has=function(a){return qa(a)&&this.h.hasOwnProperty(a)||this.ma.has(a)};var ta=function(){function a(a,b){c[a]=b}function b(){c={};f=!1}var c={},d,e={},f=!1,h={add:a,Tb:function(a,b,c){e[a]||(e[a]={});e[a][b]=c},create:function(e){var h={add:a,request:function(a,b){if(!f){var h=c[a]||d;h&&h.apply(e,Array.prototype.slice.call(arguments,0))}},reset:b};h.add=h.add;h.request=h.request;h.reset=h.reset;return h},oc:function(a){return e[a]?(b(),c=e[a],!0):!1},na:function(a){d=a},reset:b,Bc:function(a){f=a}};h.add=h.add;h.addToCache=h.Tb;h.loadFromCache=h.oc;h.registerDefaultPermission=
h.na;h.reset=h.reset;h.setPermitAllRequests=h.Bc;return h};var ua=function(){function a(a,c){if(b[a]){if(b[a].Na+c>b[a].max)throw Error("Quota exceeded");b[a].Na+=c}}var b={},c=void 0,d=void 0,e={$d:function(a){c=a},Ub:function(){c&&a(c,1)},ae:function(a){d=a},Y:function(b){d&&a(d,b)},xe:function(a,c){b[a]=b[a]||{Na:0};b[a].max=c},Cd:function(a){return b[a]&&b[a].Na||0},reset:function(){b={}},kd:a};e.onFnConsume=e.$d;e.consumeFn=e.Ub;e.onStorageConsume=e.ae;e.consumeStorage=e.Y;e.setMax=e.xe;e.getConsumed=e.Cd;e.reset=e.reset;e.consume=e.kd;return e};var wa=function(a,b,c){this.M=a;this.H=b;this.aa=c;this.h=new ra};wa.prototype.add=function(a,b){this.h.za||(this.M.Y(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.h.set(a,b))};wa.prototype.add=wa.prototype.add;wa.prototype.set=function(a,b){this.h.za||(this.aa&&this.aa.has(a)?this.aa.set(a,b):(this.M.Y(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.h.set(a,b)))};wa.prototype.set=wa.prototype.set;
wa.prototype.get=function(a){return this.h.has(a)?this.h.get(a):this.aa?this.aa.get(a):void 0};wa.prototype.get=wa.prototype.get;wa.prototype.has=function(a){return!!this.h.has(a)||!(!this.aa||!this.aa.has(a))};wa.prototype.has=wa.prototype.has;wa.prototype.K=function(){return this.M};wa.prototype.L=function(){this.h.L()};var xa=function(){},za=function(a){return"function"==typeof a},Aa=function(a){return"string"==typeof a},Ba=function(a){return"number"==typeof a&&!isNaN(a)},Ca=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},Da=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Ea=function(a,b){if(!Ba(a)||!Ba(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Fa=function(a){return Math.round(Number(a))||
0},Ga=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Ha=function(a){var b=[];if(Ca(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Ia=function(){this.prefix="gtm.";this.values={}};Ia.prototype.set=function(a,b){this.values[this.prefix+a]=b};Ia.prototype.get=function(a){return this.values[this.prefix+a]};Ia.prototype.contains=function(a){return void 0!==this.get(a)};
var Ja=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ka=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},La=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ma=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1};var w=function(a,b){ra.call(this);this.qc=a;this.Ad=b};pa(w,ra);var Oa=function(a,b){for(var c,d=0;d<b.length&&!(c=Na(a,b[d]),c instanceof g);d++);return c},Na=function(a,b){var c=a.get(String(b[0]));if(!(c&&c instanceof w))throw"Attempting to execute non-function "+b[0]+".";return c.m.apply(c,[a].concat(b.slice(1)))};w.prototype.toString=function(){return this.qc};w.prototype.getName=function(){return this.qc};w.prototype.getName=w.prototype.getName;w.prototype.U=function(){return new v(sa(this))};
w.prototype.getKeys=w.prototype.U;w.prototype.m=function(a,b){var c,d={F:function(){return a},evaluate:function(b){var c=a;return Ca(b)?Na(c,b):b},wa:function(b){return Oa(a,b)},K:function(){return a.K()},cc:function(){c||(c=a.H.create(d));return c}};a.K().Ub();return this.Ad.apply(d,Array.prototype.slice.call(arguments,1))};w.prototype.invoke=w.prototype.m;var Pa=function(){ra.call(this)};pa(Pa,ra);Pa.prototype.U=function(){return new v(sa(this))};Pa.prototype.getKeys=Pa.prototype.U;/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Qa=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Ra=function(a){if(null==a)return String(a);var b=Qa.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Sa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Ta=function(a){if(!a||"object"!=Ra(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Sa(a,"constructor")&&!Sa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Sa(a,b)},Ua=function(a,b){var c=b||("array"==Ra(a)?[]:{}),d;for(d in a)if(Sa(a,d)){var e=a[d];"array"==Ra(e)?("array"!=Ra(c[d])&&(c[d]=[]),c[d]=Ua(e,c[d])):Ta(e)?(Ta(c[d])||(c[d]={}),c[d]=Ua(e,c[d])):c[d]=e}return c};var Va=function(a){if(a instanceof v){for(var b=[],c=a.length(),d=0;d<c;d++)a.has(d)&&(b[d]=Va(a.get(d)));return b}if(a instanceof Pa){for(var e={},f=a.U(),h=f.length(),k=0;k<h;k++)e[f.get(k)]=Va(a.get(f.get(k)));return e}return a instanceof w?function(){for(var b=Array.prototype.slice.call(arguments,0),c=0;c<b.length;c++)b[c]=Wa(b[c]);var d=new wa(ua(),ta());return Va(a.m.apply(a,[d].concat(b)))}:a},Wa=function(a){if(Ca(a)){for(var b=[],c=0;c<a.length;c++)a.hasOwnProperty(c)&&(b[c]=Wa(a[c]));return new v(b)}if(Ta(a)){var d=
new Pa,e;for(e in a)a.hasOwnProperty(e)&&d.set(e,Wa(a[e]));return d}if("function"===typeof a)return new w("",function(b){for(var c=Array.prototype.slice.call(arguments,0),d=0;d<c.length;d++)c[d]=Va(this.evaluate(c[d]));return Wa(a.apply(a,c))});var f=typeof a;if(null===a||"string"===f||"number"===f||"boolean"===f)return a};var Xa={control:function(a,b){return new g(a,this.evaluate(b))},fn:function(a,b,c){var d=this.F(),e=this.evaluate(b);if(!(e instanceof v))throw"Error: non-List value given for Fn argument names.";var f=Array.prototype.slice.call(arguments,2);this.K().Y(a.length+f.length);return new w(a,function(){return function(a){for(var b=new wa(d.M,d.H,d),c=Array.prototype.slice.call(arguments,0),h=0;h<c.length;h++)if(c[h]=this.evaluate(c[h]),c[h]instanceof g)return c[h];for(var n=e.get("length"),p=0;p<n;p++)p<
c.length?b.set(e.get(p),c[p]):b.set(e.get(p),void 0);b.set("arguments",new v(c));var q=Oa(b,f);if(q instanceof g)return"return"===q.B?q.getData():q}}())},list:function(a){var b=this.K();b.Y(arguments.length);for(var c=new v,d=0;d<arguments.length;d++){var e=this.evaluate(arguments[d]);"string"===typeof e&&b.Y(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.K(),c=new Pa,d=0;d<arguments.length-1;d+=2){var e=this.evaluate(arguments[d])+"",f=this.evaluate(arguments[d+1]),h=e.length;
h+="string"===typeof f?f.length:1;b.Y(h);c.set(e,f)}return c},undefined:function(){}};var x=function(){this.M=ua();this.H=ta();this.xa=new wa(this.M,this.H)};x.prototype.W=function(a,b){var c=new w(a,b);c.L();this.xa.set(a,c)};x.prototype.addInstruction=x.prototype.W;x.prototype.Sb=function(a,b){Xa.hasOwnProperty(a)&&this.W(b||a,Xa[a])};x.prototype.addNativeInstruction=x.prototype.Sb;x.prototype.K=function(){return this.M};x.prototype.getQuota=x.prototype.K;x.prototype.Ua=function(){this.M=ua();this.xa.M=this.M};x.prototype.resetQuota=x.prototype.Ua;
x.prototype.ue=function(){this.H=ta();this.xa.H=this.H};x.prototype.resetPermissions=x.prototype.ue;x.prototype.R=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.vb(c)};x.prototype.execute=x.prototype.R;x.prototype.vb=function(a){for(var b,c=0;c<arguments.length;c++){var d=Na(this.xa,arguments[c]);b=d instanceof g||d instanceof w||d instanceof v||d instanceof Pa||null===d||void 0===d||"string"===typeof d||"number"===typeof d||"boolean"===typeof d?d:void 0}return b};
x.prototype.run=x.prototype.vb;x.prototype.L=function(){this.xa.L()};x.prototype.makeImmutable=x.prototype.L;var Ya=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b};var Za={Ce:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(d=1;d<arguments.length;d++)if(arguments[d]instanceof v)for(var e=arguments[d],f=0;f<e.length();f++)c.push(e.get(f));else c.push(arguments[d]);return new v(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&
!b.m(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.m(a,this.get(e),e,this)&&d.push(this.get(e));return new v(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.m(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&this.get(f)===
b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.m(a,this.get(e),e,this));return new v(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,Array.prototype.slice.call(arguments,
1))},reduce:function(a,b,c){var d=this.length(),e,f;if(void 0!==c)e=c,f=0;else{if(0==d)throw"TypeError: Reduce on List with no elements.";for(var h=0;h<d;h++)if(this.has(h)){e=this.get(h);f=h+1;break}if(h==d)throw"TypeError: Reduce on List with no elements.";}for(h=f;h<d;h++)this.has(h)&&(e=b.m(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f;if(void 0!==c)e=c,f=d-1;else{if(0==d)throw"TypeError: ReduceRight on List with no elements.";for(var h=1;h<=d;h++)if(this.has(d-
h)){e=this.get(d-h);f=d-(h+1);break}if(h>d)throw"TypeError: ReduceRight on List with no elements.";}for(h=f;0<=h;h--)this.has(h)&&(e=b.m(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=Ya(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):this.remove(c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?Math.max(d+c,0):Math.min(c,d);c=Math.max(b,
c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new v(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.m(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=Ya(this);void 0===b?c.sort():c.sort(function(c,d){return Number(b.m(a,c,d))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):this.remove(d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,1,arguments.length-1))},toString:function(){return this.toString()},
unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var y={hc:{ADD:0,AND:1,APPLY:2,ASSIGN:3,BREAK:4,CASE:5,CONTINUE:6,CONTROL:49,CREATE_ARRAY:7,CREATE_OBJECT:8,DEFAULT:9,DEFN:50,DIVIDE:10,DO:11,EQUALS:12,EXPRESSION_LIST:13,FN:51,FOR:14,FOR_IN:47,GET:15,GET_CONTAINER_VARIABLE:48,GET_INDEX:16,GET_PROPERTY:17,GREATER_THAN:18,GREATER_THAN_EQUALS:19,IDENTITY_EQUALS:20,IDENTITY_NOT_EQUALS:21,IF:22,LESS_THAN:23,LESS_THAN_EQUALS:24,MODULUS:25,MULTIPLY:26,NEGATE:27,NOT:28,NOT_EQUALS:29,NULL:45,OR:30,PLUS_EQUALS:31,POST_DECREMENT:32,POST_INCREMENT:33,PRE_DECREMENT:34,
PRE_INCREMENT:35,QUOTE:46,RETURN:36,SET_PROPERTY:43,SUBTRACT:37,SWITCH:38,TERNARY:39,TYPEOF:40,UNDEFINED:44,VAR:41,WHILE:42}},ab="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),bb=new g("break"),cb=new g("continue");y.add=function(a,b){return this.evaluate(a)+this.evaluate(b)};y.and=function(a,b){return this.evaluate(a)&&this.evaluate(b)};
y.apply=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(!(c instanceof v))throw"Error: Non-List argument given to Apply instruction.";if(null===a||void 0===a)throw"TypeError: Can't read property "+b+" of "+a+".";if("boolean"==typeof a||"number"==typeof a){if("toString"==b)return a.toString();throw"TypeError: "+a+"."+b+" is not a function.";}if("string"==typeof a){if(0<=Da(ab,b))return Wa(a[b].apply(a,Ya(c)));throw"TypeError: "+b+" is not a function";}if(a instanceof v){if(a.has(b)){var d=
a.get(b);if(d instanceof w){var e=Ya(c);e.unshift(this.F());return d.m.apply(d,e)}throw"TypeError: "+b+" is not a function";}if(0<=Da(Za.Ce,b))return e=Ya(c),e.unshift(this.F()),Za[b].apply(a,e)}if(a instanceof w||a instanceof Pa){if(a.has(b)){d=a.get(b);if(d instanceof w)return e=Ya(c),e.unshift(this.F()),d.m.apply(d,e);throw"TypeError: "+b+" is not a function";}if("toString"==b)return a instanceof w?a.getName():a.toString();if("hasOwnProperty"==b)return a.has.apply(a,Ya(c))}throw"TypeError: Object has no '"+
b+"' property.";};y.assign=function(a,b){a=this.evaluate(a);if("string"!=typeof a)throw"Invalid key name given for assignment.";var c=this.F();if(!c.has(a))throw"Attempting to assign to undefined value "+b;var d=this.evaluate(b);c.set(a,d);return d};y["break"]=function(){return bb};y["case"]=function(a){for(var b=this.evaluate(a),c=0;c<b.length;c++){var d=this.evaluate(b[c]);if(d instanceof g)return d}};y["continue"]=function(){return cb};
y.rd=function(a,b,c){var d=new v;b=this.evaluate(b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[y.hc.FN,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.F().set(a,this.evaluate(f))};y.ud=function(a,b){return this.evaluate(a)/this.evaluate(b)};y.xd=function(a,b){return this.evaluate(a)==this.evaluate(b)};y.yd=function(a){for(var b,c=0;c<arguments.length;c++)b=this.evaluate(arguments[c]);return b};
y.Bd=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);var d=this.F();if("string"==typeof b)for(var e=0;e<b.length;e++){d.set(a,e);var f=this.wa(c);if(f instanceof g){if("break"==f.B)break;if("return"==f.B)return f}}else if(b instanceof Pa||b instanceof v||b instanceof w){var h=b.U(),k=h.length();for(e=0;e<k;e++)if(d.set(a,h.get(e)),f=this.wa(c),f instanceof g){if("break"==f.B)break;if("return"==f.B)return f}}};y.get=function(a){return this.F().get(this.evaluate(a))};
y.fc=function(a,b){var c;a=this.evaluate(a);b=this.evaluate(b);if(void 0===a||null===a)throw"TypeError: cannot access property of "+a+".";a instanceof Pa||a instanceof v||a instanceof w?c=a.get(b):"string"==typeof a&&("length"==b?c=a.length:qa(b)&&(c=a[b]));return c};y.Ed=function(a,b){return this.evaluate(a)>this.evaluate(b)};y.Fd=function(a,b){return this.evaluate(a)>=this.evaluate(b)};y.Jd=function(a,b){return this.evaluate(a)===this.evaluate(b)};y.Kd=function(a,b){return this.evaluate(a)!==this.evaluate(b)};
y["if"]=function(a,b,c){var d=[];this.evaluate(a)?d=this.evaluate(b):c&&(d=this.evaluate(c));var e=this.wa(d);if(e instanceof g)return e};y.Sd=function(a,b){return this.evaluate(a)<this.evaluate(b)};y.Td=function(a,b){return this.evaluate(a)<=this.evaluate(b)};y.Vd=function(a,b){return this.evaluate(a)%this.evaluate(b)};y.multiply=function(a,b){return this.evaluate(a)*this.evaluate(b)};y.Wd=function(a){return-this.evaluate(a)};y.Xd=function(a){return!this.evaluate(a)};
y.Yd=function(a,b){return this.evaluate(a)!=this.evaluate(b)};y["null"]=function(){return null};y.or=function(a,b){return this.evaluate(a)||this.evaluate(b)};y.xc=function(a,b){var c=this.evaluate(a);this.evaluate(b);return c};y.yc=function(a){return this.evaluate(a)};y.quote=function(a){return Array.prototype.slice.apply(arguments)};y["return"]=function(a){return new g("return",this.evaluate(a))};
y.setProperty=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(null===a||void 0===a)throw"TypeError: Can't set property "+b+" of "+a+".";(a instanceof w||a instanceof v||a instanceof Pa)&&a.set(b,c);return c};y.Ae=function(a,b){return this.evaluate(a)-this.evaluate(b)};
y["switch"]=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(!Ca(b)||!Ca(c))throw"Error: Malformed switch instruction.";for(var d,e=!1,f=0;f<b.length;f++)if(e||a===this.evaluate(b[f]))if(d=this.evaluate(c[f]),d instanceof g){var h=d.B;if("break"==h)return;if("return"==h||"continue"==h)return d}else e=!0;if(c.length==b.length+1&&(d=this.evaluate(c[c.length-1]),d instanceof g&&("return"==d.B||"continue"==d.B)))return d};
y.De=function(a,b,c){return this.evaluate(a)?this.evaluate(b):this.evaluate(c)};y["typeof"]=function(a){a=this.evaluate(a);return a instanceof w?"function":typeof a};y.undefined=function(){};y["var"]=function(a){for(var b=this.F(),c=0;c<arguments.length;c++){var d=arguments[c];"string"!=typeof d||b.add(d,void 0)}};
y["while"]=function(a,b,c,d){var e,f=this.evaluate(d);if(this.evaluate(c)&&(e=this.wa(f),e instanceof g)){if("break"==e.B)return;if("return"==e.B)return e}for(;this.evaluate(a);){e=this.wa(f);if(e instanceof g){if("break"==e.B)break;if("return"==e.B)return e}this.evaluate(b)}};var eb=function(){this.gc=!1;this.D=new x;db(this);this.gc=!0};eb.prototype.Pd=function(){return this.gc};eb.prototype.isInitialized=eb.prototype.Pd;eb.prototype.R=function(a){this.D.H.oc(String(a[0]))||(this.D.H.reset(),this.D.H.Bc(!0));return this.D.vb(a)};eb.prototype.execute=eb.prototype.R;eb.prototype.L=function(){this.D.L()};eb.prototype.makeImmutable=eb.prototype.L;
var db=function(a){function b(a,b){e.D.Sb(a,String(b))}function c(a,b){e.D.W(String(d[a]),b)}var d=y.hc,e=a;b("control",d.CONTROL);b("fn",d.FN);b("list",d.CREATE_ARRAY);b("map",d.CREATE_OBJECT);b("undefined",d.UNDEFINED);c("ADD",y.add);c("AND",y.and);c("APPLY",y.apply);c("ASSIGN",y.assign);c("BREAK",y["break"]);c("CASE",y["case"]);c("CONTINUE",y["continue"]);c("DEFAULT",y["case"]);c("DEFN",y.rd);c("DIVIDE",y.ud);c("EQUALS",y.xd);c("EXPRESSION_LIST",y.yd);c("FOR_IN",y.Bd);c("GET",y.get);c("GET_INDEX",
y.fc);c("GET_PROPERTY",y.fc);c("GREATER_THAN",y.Ed);c("GREATER_THAN_EQUALS",y.Fd);c("IDENTITY_EQUALS",y.Jd);c("IDENTITY_NOT_EQUALS",y.Kd);c("IF",y["if"]);c("LESS_THAN",y.Sd);c("LESS_THAN_EQUALS",y.Td);c("MODULUS",y.Vd);c("MULTIPLY",y.multiply);c("NEGATE",y.Wd);c("NOT",y.Xd);c("NOT_EQUALS",y.Yd);c("NULL",y["null"]);c("OR",y.or);c("POST_DECREMENT",y.xc);c("POST_INCREMENT",y.xc);c("PRE_DECREMENT",y.yc);c("PRE_INCREMENT",y.yc);c("QUOTE",y.quote);c("RETURN",y["return"]);c("SET_PROPERTY",y.setProperty);
c("SUBTRACT",y.Ae);c("SWITCH",y["switch"]);c("TERNARY",y.De);c("TYPEOF",y["typeof"]);c("VAR",y["var"]);c("WHILE",y["while"])};eb.prototype.W=function(a,b){this.D.W(a,b)};eb.prototype.addInstruction=eb.prototype.W;eb.prototype.K=function(){return this.D.K()};eb.prototype.getQuota=eb.prototype.K;eb.prototype.Ua=function(){this.D.Ua()};eb.prototype.resetQuota=eb.prototype.Ua;eb.prototype.na=function(a){this.D.H.na(a)};eb.prototype.La=function(a,b,c){this.D.H.Tb(a,b,c)};var fb=function(){this.Qa={}};fb.prototype.get=function(a){return this.Qa.hasOwnProperty(a)?this.Qa[a]:void 0};fb.prototype.add=function(a,b){if(this.Qa.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";var c=new w(a,function(){for(var a=Array.prototype.slice.call(arguments,0),c=0;c<a.length;c++)a[c]=this.evaluate(a[c]);return b.apply(this,a)});c.L();this.Qa[a]=c};fb.prototype.addAll=function(a){for(var b in a)a.hasOwnProperty(b)&&this.add(b,a[b])};var z=window,B=document,gb=navigator,hb=function(a,b){var c=z[a];z[a]=void 0===c?b:c;return z[a]},jb=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},kb=function(a,b,c){var d=B.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;jb(d,b);c&&(d.onerror=c);oa()&&d.setAttribute("nonce",oa());var e=B.getElementsByTagName("script")[0]||B.body||B.head;e.parentNode.insertBefore(d,e);return d},
lb=function(a,b){var c=B.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=B.body&&B.body.lastChild||B.body||B.head;d.parentNode.insertBefore(c,d);jb(c,b);void 0!==a&&(c.src=a);return c},C=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a},mb=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},nb=function(a,b,
c,d){a.removeEventListener?a.removeEventListener(b,c,!!d):a.detachEvent&&a.detachEvent("on"+b,c)},H=function(a){z.setTimeout(a,0)},pb=function(a){var b=B.getElementById(a);if(b&&ob(b,"id")!=a)for(var c=1;c<document.all[a].length;c++)if(ob(document.all[a][c],"id")==a)return document.all[a][c];return b},ob=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},qb=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=
b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},rb=function(a){var b=B.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},sb=function(a){gb.sendBeacon&&gb.sendBeacon(a)||C(a)};var tb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var vb=/:[0-9]+$/,wb=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var f=d[e].split("=");if(decodeURIComponent(f[0]).replace(/\+/g," ")==b){var h=f.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},xb=function(a,b,c,d,e){var f,h=function(a){return a?a.replace(":","").toLowerCase():""},k=h(a.protocol)||h(z.location.protocol);b&&(b=String(b).toLowerCase());switch(b){case "protocol":f=k;break;case "host":f=(a.hostname||z.location.hostname).replace(vb,"").toLowerCase();
if(c){var l=/^www\d*\./.exec(f);l&&l[0]&&(f=f.substr(l[0].length))}break;case "port":f=String(Number(a.hostname?a.port:z.location.port)||("http"==k?80:"https"==k?443:""));break;case "path":f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var m=f.split("/");0<=Da(d||[],m[m.length-1])&&(m[m.length-1]="");f=m.join("/");break;case "query":f=a.search.replace("?","");e&&(f=wb(f,e));break;case "extension":var n=a.pathname.split(".");f=1<n.length?n[n.length-1]:"";f=f.split("/")[0];break;case "fragment":f=
a.hash.replace("#","");break;default:f=a&&a.href}return f},yb=function(a){var b="";a&&a.href&&(b=a.hash?a.href.replace(a.hash,""):a.href);return b},N=function(a){var b=document.createElement("a");a&&(tb.test(a),b.href=a);var c=b.pathname;"/"!==c[0]&&(c="/"+c);var d=b.hostname.replace(vb,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var Bb=function(){this.Ta=new eb;var a=new fb;a.addAll(zb());Ab(this,function(b){return a.get(b)})},zb=function(){return{callInWindow:Cb,encodeURI:encodeURI,encodeURIComponent:encodeURIComponent,getCurrentUrl:Db,getInWindow:Eb,getReferrer:Fb,getUrlComponent:Gb,getUrlFragment:Hb,isPlainObject:Ib,loadIframe:Jb,loadJavaScript:Kb,removeUrlFragment:Lb,replaceAll:Mb,sendTrackingBeacon:Nb,setInWindow:Qb,queryPermission:Rb}};Bb.prototype.R=function(a){return this.Ta.R(a)};Bb.prototype.execute=Bb.prototype.R;
var Ab=function(a,b){a.Ta.W("require",b)};Bb.prototype.na=function(a){this.Ta.na(a)};Bb.prototype.La=function(a,b,c){this.Ta.La(a,b,c)};function Cb(a,b){for(var c=a.split("."),d=z,e=d[c[0]],f=1;e&&f<c.length;f++)d=e,e=e[c[f]];if("function"==Ra(e)){var h=[];for(f=1;f<arguments.length;f++)h.push(Va(arguments[f]));e.apply(d,h)}}function Db(){return z.location.href}
function Eb(a,b,c){for(var d=a.split("."),e=z,f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e||null===e)return;b&&(void 0===e[d[f]]||c&&!e[d[f]])&&(e[d[f]]=Va(b));return Wa(e[d[f]])}function Fb(){return B.referrer}function Gb(a,b,c,d,e){var f;if(d&&d instanceof v){f=[];for(var h=0;h<d.length();h++){var k=d.get(h);"string"==typeof k&&f.push(k)}}return xb(N(a),b,c,f,e)}function Hb(a){return xb(N(a),"fragment")}function Ib(a){return a instanceof Pa}
function Jb(a,b){var c=this.F();lb(a,function(){b instanceof w&&b.m(c)})}var Sb={};
function Kb(a,b,c,d){this.cc().request("loadJavaScript",a);var e=this.F(),f=function(){b instanceof w&&b.m(e)},h=function(){c instanceof w&&c.m(e)};d?Sb[d]?(Sb[d].onSuccess.push(f),Sb[d].onFailure.push(h)):(Sb[d]={onSuccess:[f],onFailure:[h]},f=function(){for(var a=Sb[d].onSuccess,b=0;b<a.length;b++)H(a[b]);a.push=function(a){H(a);return 0}},h=function(){for(var a=Sb[d].onFailure,b=0;b<a.length;b++)H(a[b]);Sb[d]=null},kb(a,f,h)):kb(a,f,h)}function Lb(a){return yb(N(a))}
function Mb(a,b,c){return a.replace(new RegExp(b,"g"),c)}function Nb(a,b,c){var d=this.F();C(a,function(){b instanceof w&&b.m(d)},function(){c instanceof w&&c.m(d)})}function Qb(a,b,c){for(var d=a.split("."),e=z,f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e)return!1;return void 0===e[d[f]]||c?(e[d[f]]=Va(b),!0):!1}function Tb(){return function(){}}function Ub(a,b){var c=a.url;return function(a,e){if(c!==e)throw b({permissionId:a,debugString:"\nURL = "+e});}}
function Rb(a,b){try{return this.cc().request.apply(null,Array.prototype.slice.call(arguments,0)),!0}catch(c){return!1}};
var Vb=[],Wb={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Xb=function(a){return Wb[a]},Yb=/[\x00\x22\x26\x27\x3c\x3e]/g;var bc=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,cc={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},dc=function(a){return cc[a]};Vb[7]=function(a){return String(a).replace(bc,dc)};
Vb[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(bc,dc)+"'"}};var jc=/['()]/g,kc=function(a){return"%"+a.charCodeAt(0).toString(16)};Vb[12]=function(a){var b=
encodeURIComponent(String(a));jc.lastIndex=0;return jc.test(b)?b.replace(jc,kc):b};var lc=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,mc={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},nc=function(a){return mc[a]};Vb[16]=function(a){return a};var rc,sc=[],tc=[],uc=[],vc=[],wc=[],xc={},yc,zc,Ac,Bc=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=!!xc[b],d={},e;for(e in a)a.hasOwnProperty(e)&&0===e.indexOf("vtp_")&&(d[c?e:e.substr(4)]=a[e]);return c?xc[b](d):rc(b,d)},Dc=function(a,b,c,d){c=c||[];d=d||xa;var e={},f;for(f in a)a.hasOwnProperty(f)&&(e[f]=Cc(a[f],b,c,d));return e},Cc=function(a,b,c,d){if(Ca(a)){var e;switch(a[0]){case "function_id":return a[1];case "list":e=[];for(var f=1;f<
a.length;f++)e.push(Cc(a[f],b,c,d));return e;case "macro":var h=a[1];if(c[h])return;var k=sc[h];if(!k||b(k))return;c[h]=!0;try{var l=Dc(k,b,c,d);e=Bc(l);Ac&&(e=Ac.md(e,l))}catch(A){d(h,A),e=!1}c[h]=!1;return e;case "map":e={};for(var m=1;m<a.length;m+=2)e[Cc(a[m],b,c,d)]=Cc(a[m+1],b,c,d);return e;case "template":e=[];for(var n=!1,p=1;p<a.length;p++){var q=Cc(a[p],b,c,d);zc&&(n=n||q===zc.Ga);e.push(q)}return zc&&n?zc.nd(e):e.join("");case "escape":e=Cc(a[1],b,c,d);if(zc&&Ca(a[1])&&"macro"===a[1][0]&&
zc.Qd(a))return zc.fe(e);e=String(e);for(var r=2;r<a.length;r++)Vb[a[r]]&&(e=Vb[a[r]](e));return e;case "tag":var u=a[1];if(!vc[u])throw Error("Unable to resolve tag reference "+u+".");return e={Zb:a[2],index:u};case "zb":var t=Ec({"function":a[1],arg0:a[2],arg1:a[3],ignore_case:a[5]},b,c,d);a[4]&&(t=!t);return t;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Ec=function(a,b,c,d){try{return yc(Dc(a,b,c,d))}catch(e){JSON.stringify(a)}return null};var Fc=null,Ic=function(a){function b(a){for(var b=0;b<a.length;b++)d[a[b]]=!0}var c=[],d=[];Fc=Gc(a,function(){});for(var e=0;e<tc.length;e++){var f=tc[e],h=Hc(f);if(h){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===h&&b(f.block||[])}var m=[];for(e=0;e<vc.length;e++)c[e]&&!d[e]&&(m[e]=!0);return m},Hc=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Fc(b[c]);if(!d)return null===d?null:!1}var e=a.unless||[];for(c=0;c<e.length;c++){d=Fc(e[c]);if(null===d)return null;
if(d)return!1}return!0};var Gc=function(a,b){var c=[];return function(d){void 0===c[d]&&(c[d]=Ec(uc[d],a,void 0,b));return c[d]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var Lc={},Mc=null;Lc.o="GTM-NCQFXFL";var Nc=null,Oc="//www.googletagmanager.com/a?id="+Lc.o+"&cv=40",Pc={},Qc={},Rc=B.currentScript?B.currentScript.src:void 0,Sc=function(){var a=Mc.sequence||0;Mc.sequence=a+1;return a};var P=function(){var a=function(a){return{toString:function(){return a}}};return{Hb:a("convert_case_to"),Ib:a("convert_false_to"),Jb:a("convert_null_to"),Kb:a("convert_true_to"),Lb:a("convert_undefined_to"),N:a("function"),Ec:a("instance_name"),Fc:a("live_only"),Gc:a("malware_disabled"),Hc:a("once_per_event"),Nb:a("once_per_load"),Ob:a("setup_tags"),Ic:a("tag_id"),Pb:a("teardown_tags")}}();var Tc=new Ia,Uc={},Xc={set:function(a,b){Ua(Vc(a,b),Uc)},get:function(a){return Wc(a,2)},reset:function(){Tc=new Ia;Uc={}}},Wc=function(a,b){return 2!=b?Tc.get(a):Yc(a)},Yc=function(a,b,c){var d=a.split(".");return $c(d)},$c=function(a){for(var b=Uc,c=0;c<a.length;c++){if(null===
b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var bd=function(a,b){Tc.set(a,b);Ua(Vc(a,b),Uc)},Vc=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c};var cd=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),dd={customPixels:["nonGooglePixels"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},ed={customPixels:["customScripts","html"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels",
"customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},fd=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};
var hd=function(a){var b=Wc("gtm.whitelist");var c=b&&fd(Ha(b),dd),d=Wc("gtm.blacklist")||Wc("tagTypeBlacklist")||[];
cd.test(z.location&&z.location.hostname)&&(d=Ha(d),d.push("nonGooglePixels","nonGoogleScripts"));var e=d&&fd(Ha(d),ed),f={};return function(h){var k=h&&h[P.N];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=Qc[k]||[],m=a(k);if(b){var n;if(n=m)a:{if(0>Da(c,k))if(l&&0<l.length)for(var p=0;p<l.length;p++){if(0>Da(c,l[p])){n=!1;break a}}else{n=!1;break a}n=!0}m=n}var q=!1;if(d){var r;if(!(r=0<=
Da(e,k)))a:{for(var u=l||[],t=new Ia,A=0;A<e.length;A++)t.set(e[A],!0);for(var D=0;D<u.length;D++)if(t.get(u[D])){r=!0;break a}r=!1}q=r}return f[k]=!m||q}};var id={md:function(a,b){b[P.Hb]&&"string"===typeof a&&(a=1==b[P.Hb]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(P.Jb)&&null===a&&(a=b[P.Jb]);b.hasOwnProperty(P.Lb)&&void 0===a&&(a=b[P.Lb]);b.hasOwnProperty(P.Kb)&&!0===a&&(a=b[P.Kb]);b.hasOwnProperty(P.Ib)&&!1===a&&(a=b[P.Ib]);return a}};var jd=function(a){var b;b=Error.call(this);this.message=b.message;"stack"in b&&(this.stack=b.stack);this.ce=a},kd=Error;jd.prototype=da(kd.prototype);jd.prototype.constructor=jd;if(ka)ka(jd,kd);else for(var ld in kd)if("prototype"!=ld)if(Object.defineProperties){var md=Object.getOwnPropertyDescriptor(kd,ld);md&&Object.defineProperty(jd,ld,md)}else jd[ld]=kd[ld];jd.Be=kd.prototype;jd.prototype.getParameters=function(){return this.ce};var nd=function(a){var b=Mc.zones;!b&&a&&(b=Mc.zones=a());return b},od={active:!0,isWhitelisted:function(){return!0}};var pd=!1,qd=0,rd=[];function sd(a){if(!pd){var b=B.createEventObject,c="complete"==B.readyState,d="interactive"==B.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){pd=!0;for(var e=0;e<rd.length;e++)H(rd[e])}rd.push=function(){for(var a=0;a<arguments.length;a++)H(arguments[a]);return 0}}}function td(){if(!pd&&140>qd){qd++;try{B.documentElement.doScroll("left"),sd()}catch(a){z.setTimeout(td,50)}}}var ud=function(a){pd?a():rd.push(a)};var vd=!1,wd=function(){return z.GoogleAnalyticsObject&&z[z.GoogleAnalyticsObject]};var xd=function(a){z.GoogleAnalyticsObject||(z.GoogleAnalyticsObject=a||"ga");var b=z.GoogleAnalyticsObject;if(!z[b]){var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);z[b]=c}return z[b]},yd=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=wd();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var Cd=function(){return"&tc="+vc.filter(function(a){return a}).length},Dd="0.005000">Math.random(),Ed=function(){var a=0,b=0;return{Rd:function(){if(2>a)return!1;1E3<=(new Date).getTime()-b&&(a=0);return 2<=a},oe:function(){1E3<=(new Date).getTime()-b&&(a=0);a++;b=(new Date).getTime()}}},Fd="",Gd=function(){Fd=[Oc,"&v=3&t=t","&pid="+Ea(),"&rv=94"].join("")},Hd={},Id="",Jd=void 0,Kd={},Ld={},Md=void 0,Nd=null,Od=1E3,Pd=function(){var a=Jd;return void 0===a?"":[Fd,
Hd[a]?"":"&es=1",Kd[a],Cd(),Id,"&z=0"].join("")},Qd=function(){Md&&(z.clearTimeout(Md),Md=void 0);void 0===Jd||Hd[Jd]&&!Id||(Ld[Jd]||Nd.Rd()||0>=Od--?Ld[Jd]=!0:(Nd.oe(),C(Pd()),Hd[Jd]=!0,Id=""))},Rd=function(a,b,c){if(Dd&&!Ld[a]&&b){a!==Jd&&(Qd(),Jd=a);var d=c+String(b[P.N]||"").replace(/_/g,"");Id=Id?Id+"."+d:"&tr="+d;Md||(Md=z.setTimeout(Qd,500));2022<=Pd().length&&Qd()}};function Sd(a,b,c,d,e,f){var h=vc[a],k=Td(a,b,c,d,e,f);if(!k)return null;var l=Cc(h[P.Ob],f.Z,[],Ud());if(l&&l.length){var m=l[0];k=Sd(m.index,b,k,1===m.Zb?e:k,e,f)}return k}
function Td(a,b,c,d,e,f){function h(){var b=Dc(k,f.Z,[],l);b.vtp_gtmOnSuccess=function(){Rd(f.id,vc[a],"5");c()};b.vtp_gtmOnFailure=function(){Rd(f.id,vc[a],"6");d()};b.vtp_gtmTagId=k.tag_id;if(k[P.Gc])d();else{Rd(f.id,k,"1");try{Bc(b)}catch(D){Rd(f.id,
k,"7");e()}}}var k=vc[a];if(f.Z(k))return null;var l=Ud(),m=Cc(k[P.Pb],f.Z,[],l);if(m&&m.length){var n=m[0],p=Sd(n.index,b,c,d,e,f);if(!p)return null;c=p;d=2===n.Zb?e:p}if(k[P.Nb]||k[P.Hc]){var q=k[P.Nb]?wc:b,r=c,u=d;if(!q[a]){h=Ka(h);var t=Vd(a,q,h);c=t.V;d=t.ka}return function(){q[a](r,u)}}return h}
function Vd(a,b,c){var d=[],e=[];b[a]=Wd(d,e,c);return{V:function(){b[a]=Xd;for(var c=0;c<d.length;c++)d[c]()},ka:function(){b[a]=Yd;for(var c=0;c<e.length;c++)e[c]()}}}function Wd(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Xd(a){a()}function Yd(a,b){b()}function Ud(){return function(){}};function Zd(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ka(function(){b++;d&&b>=c&&a()})},Uc:function(){d=!0;b>=c&&a()}}}function $d(a,b){if(!Dd)return;var c=function(a){var d=b.Z(vc[a])?"3":"4",f=Cc(vc[a][P.Ob],b.Z,[],xa);f&&f.length&&c(f[0].index);Rd(b.id,vc[a],d);var h=Cc(vc[a][P.Pb],b.Z,[],xa);h&&h.length&&c(h[0].index)};c(a);}var ae=!1;var be=function(a,b){var c={};c[P.N]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);for(d in void 0)(void 0).hasOwnProperty(d)&&(c[d]=(void 0)[d]);vc.push(c);return vc.length-1};var ce="allow_ad_personalization_signals cookie_domain cookie_expires cookie_name cookie_path custom_params event_callback event_timeout groups send_to send_page_view session_duration user_properties".split(" ");var de=/[A-Z]+/,ee=/\s/,fe=function(a){if(Aa(a)&&(a=a.trim(),!ee.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(de.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],ia:d}}}}};var ge=null,he={},ie={},je;function ke(){ge=ge||!Mc.gtagRegistered;Mc.gtagRegistered=!0;return ge}var le=function(a,b){var c={event:a};b&&(c.eventModel=Ua(b),b.event_callback&&(c.eventCallback=b.event_callback),b.event_timeout&&(c.eventTimeout=b.event_timeout));return c};
function me(a){if(void 0===ie[a.id]){var b;if("UA"==a.prefix)b=be("gtagua",{trackingId:a.id});else if("AW"==a.prefix)b=be("gtagaw",{conversionId:a});else if("DC"==a.prefix)b=be("gtagfl",{targetId:a.id});else if("GF"==a.prefix)b=be("gtaggf",{conversionId:a});else if("G"==a.prefix)b=be("get",{trackingId:a.id,isAutoTag:!0});else return;if(!je){var c={name:"send_to",dataLayerVersion:2},d={};d[P.N]="__v";for(var e in c)c.hasOwnProperty(e)&&(d["vtp_"+e]=c[e]);sc.push(d);je=["macro",sc.length-1]}var f={arg0:je,
arg1:a.id,ignore_case:!1};f[P.N]="_lc";uc.push(f);var h={"if":[uc.length-1],add:[b]};h["if"]&&(h.add||h.block)&&tc.push(h);ie[a.id]=b}}
var oe={event:function(a){var b=a[1];if(Aa(b)&&!(3<a.length)){var c;if(2<a.length){if(!Ta(a[2]))return;c=a[2]}var d=le(b,c);return d}},set:function(a){var b;2==a.length&&Ta(a[1])?
b=Ua(a[1]):3==a.length&&Aa(a[1])&&(b={},b[a[1]]=a[2]);if(b)return b.eventModel=Ua(b),b.event="gtag.set",b._clear=!0,b},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},config:function(a){}},ne=Ka(function(){});var pe=!1,qe=[];function re(){if(!pe){pe=!0;for(var a=0;a<qe.length;a++)H(qe[a])}};var se=[],te=!1,ue=function(a){var b=a.eventCallback,c=Ka(function(){za(b)&&H(function(){b(Lc.o)})}),d=a.eventTimeout;d&&z.setTimeout(c,Number(d));return c},ze=function(){for(var a=!1;!te&&0<se.length;){te=!0;delete Uc.eventModel;var b=se.shift();if(za(b))try{b.call(Xc)}catch(ve){}else if(Ca(b)){var c=b;if(Aa(c[0])){var d=c[0].split("."),e=d.pop(),f=c.slice(1),h=Wc(d.join("."),2);if(void 0!==h&&null!==h)try{h[e].apply(h,f)}catch(ve){}}}else{var k=b;if(k&&("[object Arguments]"==Object.prototype.toString.call(k)||
Object.prototype.hasOwnProperty.call(k,"callee"))){a:{if(b.length&&Aa(b[0])){var l=oe[b[0]];if(l){b=l(b);break a}}b=void 0}if(!b){te=!1;continue}}var m;var n=void 0,p=b,q=p._clear;for(n in p)p.hasOwnProperty(n)&&"_clear"!==n&&(q&&bd(n,void 0),bd(n,p[n]));var r=p.event;if(r){var u=p["gtm.uniqueEventId"];u||(u=Sc(),p["gtm.uniqueEventId"]=u,bd("gtm.uniqueEventId",u));Nc=r;var t;var A,D,E=p,M=E.event,F=E["gtm.uniqueEventId"],G=Mc.zones;D=G?G.checkState(Lc.o,F):od;if(D.active){var J=ue(E);c:{var I=D.isWhitelisted;
if("gtm.js"==M){if(ae){A=!1;break c}ae=!0}var K=F,R=M;if(Dd&&!Ld[K]&&Jd!==K){Qd();Jd=K;Id="";var ia=Kd,W=K,aa,L=R;aa=0===L.indexOf("gtm.")?encodeURIComponent(L):"*";ia[W]="&e="+aa+"&eid="+K;Md||(Md=z.setTimeout(Qd,500))}var S=hd(I),O={id:F,name:M,callback:J||xa,Z:S,Va:Ic(S)};for(var ya,$a=O,Ob=Zd($a.callback),oc=[],ub=[],ib=0;ib<vc.length;ib++)if($a.Va[ib]){var zg=vc[ib];var Pb=Ob.add();try{var we=Sd(ib,oc,Pb,Pb,Pb,$a);we?ub.push(we):($d(ib,$a),Pb())}catch(ve){Pb()}}Ob.Uc();for(var gd=0;gd<ub.length;gd++)ub[gd]();ya=0<ub.length;if("gtm.js"===M||"gtm.sync"===M)d:{}if(ya){for(var Ag={__cl:!0,__evl:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},pc=0;pc<O.Va.length;pc++)if(O.Va[pc]){var ye=vc[pc];if(ye&&!Ag[ye[P.N]]){A=!0;break c}}A=!1}else A=ya}t=A?!0:!1}else t=!1;Nc=null;m=t}else m=!1;a=m||a}te=!1}return!a},Ae=function(){var a=ze();try{var b=z["dataLayer"].hide;if(b&&void 0!==b[Lc.o]&&b.end){b[Lc.o]=!1;var c=!0,d;for(d in b)if(b.hasOwnProperty(d)&&!0===b[d]){c=!1;
break}c&&(b.end(),b.end=null)}}catch(e){}return a},Be=function(){var a=hb("dataLayer",[]),b=hb("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};rd.push(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});qe.push(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});var c=a.push;a.push=function(){var b=[].slice.call(arguments,0);c.apply(a,b);for(se.push.apply(se,b);300<this.length;)this.shift();return ze()};se.push.apply(se,a.slice(0));H(Ae)};var Ce={};Ce.Ga=new String("undefined");Ce.$a={};var De=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Ce.Ga?b:a[d]);return c.join("")}};De.prototype.toString=function(){return this.resolve("undefined")};De.prototype.valueOf=De.prototype.toString;Ce.nd=function(a){return new De(a)};var Ee={};Ce.pe=function(a,b){var c=Sc();Ee[c]=[a,b];return c};Ce.Vb=function(a){var b=a?0:1;return function(a){var c=Ee[a];if(c&&"function"===typeof c[b])c[b]();Ee[a]=void 0}};
Ce.Qd=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};Ce.fe=function(a){if(a===Ce.Ga)return a;var b=Sc();Ce.$a[b]=a;return'google_tag_manager["'+Lc.o+'"].macro('+b+")"};Ce.Jc=De;var Fe=new Ia,Ge=function(a,b){function c(a){var b=N(a),c=xb(b,"protocol"),d=xb(b,"host",!0),e=xb(b,"port"),f=xb(b,"path").toLowerCase().replace(/\/$/,"");if(void 0===c||"http"==c&&"80"==e||"https"==c&&"443"==e)c="web",e="default";return[c,d,e,f]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0};
function He(a){var b=a.arg0,c=a.arg1;switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var d;a:{if(b){var e=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var f=0;f<e.length;f++)if(b[e[f]]){d=b[e[f]](c);break a}}catch(u){}}d=!1}return d;case "_ew":var h,k;h=String(b);k=String(c);var l=h.length-k.length;return 0<=l&&h.indexOf(k,l)==l;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);
case "_gt":return Number(b)>Number(c);case "_lc":var m;m=String(b).split(",");return 0<=Da(m,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var n;var p=a.ignore_case?"i":void 0;try{var q=String(c)+p,r=Fe.get(q);r||(r=new RegExp(c,p),Fe.set(q,r));n=r.test(b)}catch(u){n=!1}return n;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Ge(b,c)}return!1};var Ie=function(){return!1};function Je(a,b,c,d){return(d||"https:"==z.location.protocol?a:b)+c}function Ke(a,b){for(var c=b||(a instanceof v?new v:new Pa),d=a.U(),e=0;e<d.length();e++){var f=d.get(e);if(a.has(f)){var h=a.get(f);h instanceof v?(c.get(f)instanceof v||c.set(f,new v),Ke(h,c.get(f))):h instanceof Pa?(c.get(f)instanceof Pa||c.set(f,new Pa),Ke(h,c.get(f))):c.set(f,h)}}return c}function Le(){return Lc.o}function Me(){return(new Date).getTime()}function Ne(a,b){return Wa(Wc(a,b||2))}function Oe(){return Nc}
function Pe(a){return rb('<a href="'+a+'"></a>')[0].href}function Qe(a){return Fa(Va(a))}function Re(a){return null===a?"null":void 0===a?"undefined":a.toString()}function Se(a,b){return Ea(a,b)}function Te(a,b,c){if(!(a instanceof v))return null;for(var d=new Pa,e=!1,f=0;f<a.length();f++){var h=a.get(f);h instanceof Pa&&h.has(b)&&h.has(c)&&(d.set(h.get(b),h.get(c)),e=!0)}return e?d:null}
var Ue=function(){var a=new fb,b=zb();Ie()&&(b.loadJavaScript=xa,b.loadIframe=xa);a.addAll(b);a.addAll({buildSafeUrl:Je,decodeHtmlUrl:Pe,copy:Ke,generateUniqueNumber:Sc,getContainerId:Le,getCurrentTime:Me,getDataLayerValue:Ne,getEventName:Oe,makeInteger:Qe,makeString:Re,randomInteger:Se,tableToMap:Te});return function(b){return a.get(b)}},We=function(){var a={callInWindow:Tb,encodeURI:Tb,encodeURIComponent:Tb,getCurrentUrl:Tb,getInWindow:Tb,getReferrer:Tb,getUrlComponent:Tb,getUrlFragment:Tb,isPlainObject:Tb,
loadIframe:Tb,loadJavaScript:Ub,removeUrlFragment:Tb,replaceAll:Tb,sendTrackingBeacon:Tb,setInWindow:Tb},b={buildSafeUrl:Ve,decodeHtmlUrl:Ve,copy:Ve,generateUniqueNumber:Ve,getContainerId:Ve,getCurrentTime:Ve,getDataLayerValue:Ve,getEventName:Ve,makeInteger:Ve,makeString:Ve,randomInteger:Ve,tableToMap:Ve},c={},d;for(d in a)a.hasOwnProperty(d)&&(c[d]=a[d]);for(var e in b)if(b.hasOwnProperty(e)){if(c[e])throw Error("Overriding an existing permission generator is forbidden: "+e);c[e]=b[e]}return function(a,
b,d){return c[a]?c[a](b,d):xa}};function Ve(){return xa};var Xe,Ze=function(){var a=data.runtime||[],b=data.permissions||{};Xe=new Bb;rc=function(a,b){var c=new Pa,d;for(d in b)b.hasOwnProperty(d)&&c.set(d,Wa(b[d]));var e=Xe.R([a,c]);e instanceof g&&"return"===e.B&&(e=e.getData());return Va(e)};yc=He;Ab(Xe,Ue());for(var c=0;c<a.length;c++){var d=a[c];if(!Ca(d)||3>d.length){if(0==d.length)continue;return}Xe.R(d)}var e=function(a){throw Ye({permissionId:a,debugString:"The requested permission does not exist."});};Xe.na(e);var f=We(),h;for(h in b)if(b.hasOwnProperty(h)){var k=
b[h],l=!1,m;for(m in k)if(k.hasOwnProperty(m)){l=!0;var n=f(m,k[m],Ye);Xe.La(h,m,n)}l||Xe.La(h,"default",e)}};function Ye(a){return new jd(a)};var $e=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var af=function(a){return encodeURIComponent(a)},bf=function(a,b){if(!a)return!1;var c=xb(N(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var Q=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null},cf=function(a,b){Ua(a,b)},df=function(a){return Fa(a)},ef=function(a,b){return Da(a,b)};var ff=function(a){var b={"gtm.element":a,"gtm.elementClasses":a.className,"gtm.elementId":a["for"]||ob(a,"id")||"","gtm.elementTarget":a.formTarget||a.target||""};b["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||a.href||a.src||a.code||a.codebase||"";return b},gf=function(a){Mc.hasOwnProperty("autoEventsSettings")||(Mc.autoEventsSettings={});var b=Mc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},hf=function(a,b,c,d){var e=gf(a),f=Ja(e,b,d);e[b]=
c(f)},jf=function(a,b,c){var d=gf(a);return Ja(d,b,c)};var kf=!1;if(B.querySelectorAll)try{var lf=B.querySelectorAll(":root");lf&&1==lf.length&&lf[0]==B.documentElement&&(kf=!0)}catch(a){}var mf=kf;var nf=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),f=0;f<e.length;f++){var h=e[f].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&!0===c&&(l=decodeURIComponent(l));d.push(l)}}return d},qf=function(a,b,c,d){var e=of(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=pf(e,function(a){return a.vd},b);if(1===e.length)return e[0].id;e=pf(e,function(a){return a.de},c);return e[0]?e[0].id:void 0}},tf=function(a,b,
c,d,e,f){c=void 0===c?"/":c;var h=d=void 0===d?"auto":d,k=c;if(rf.test(document.location.hostname)||"/"===k&&sf.test(h))return!1;f&&(b=encodeURIComponent(b));var l=b;l&&1200<l.length&&(l=l.substring(0,1200));b=l;var m=a+"="+b+"; path="+c+"; ";void 0!==e&&(m+="expires="+e.toGMTString()+"; ");if("auto"===d){var n=!1,p;a:{var q=[],r=document.location.hostname.split(".");if(4===r.length){var u=r[r.length-1];if(parseInt(u,10).toString()===u){p=["none"];break a}}for(var t=r.length-2;0<=t;t--)q.push(r.slice(t).join("."));
q.push("none");p=q}for(var A=p,D=0;D<A.length&&!n;D++)n=tf(a,b,c,A[D],e);return n}d&&"none"!==d&&(m+="domain="+d+";");var E=document.cookie;document.cookie=m;return E!=document.cookie||0<=nf(a).indexOf(b)};function pf(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}
function of(a,b){for(var c=[],d=nf(a),e=0;e<d.length;e++){var f=d[e].split("."),h=f.shift();if(!b||-1!==b.indexOf(h)){var k=f.shift();k&&(k=k.split("-"),c.push({id:f.join("."),vd:1*k[0]||1,de:1*k[1]||1}))}}return c}var sf=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,rf=/(^|\.)doubleclick\.net$/i;var uf=window,vf=document;var wf=function(){for(var a=uf.navigator.userAgent+(vf.cookie||"")+(vf.referrer||""),b=a.length,c=uf.history.length;0<c;)a+=c--^b++;var d=1,e,f,h;if(a)for(d=0,f=a.length-1;0<=f;f--)h=a.charCodeAt(f),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Date.now()/1E3)].join(".")},zf=function(a,b,c,d){var e=xf(b);return qf(a,e,yf(c),d)};
function xf(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length}function yf(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1}function Af(a,b){var c=""+xf(a),d=yf(b);1<d&&(c+="-"+d);return c};var Bf=["1"],Cf={},Ff=function(a,b,c){b=void 0===b?"auto":b;c=void 0===c?"/":c;var d=Df(void 0===a?"_gcl":a);if(!Cf[d]&&!Ef(d,b,c)){var e,f=wf();e=["1",Af(void 0,void 0),f].join(".");tf(d,e,c,b,new Date((new Date).getTime()+7776E6));Ef(d,b,c)}};function Ef(a,b,c){var d=zf(a,b,c,Bf);d&&(Cf[a]=d);return d}function Df(a){return(void 0===a?"_gcl":a)+"_au"};var Gf;var Hf=/(.*?)~(.*?)~(.*)/,If=/([^?#]+)(\?[^#]*)?(#.*)?/,Jf=/(^|&|#|\?)_gl=([^&]*)&?/,Lf=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(encodeURIComponent(String(c)).replace(/~/g,"%7E")),b.push(encodeURIComponent(String(d)).replace(/~/g,"%7E")))}var e=b.join("~");return"1~"+Kf(e)+"~"+e},Kf=function(a,b){var c=window.navigator.userAgent+"~"+(new Date).getTimezoneOffset()+"~"+(window.navigator.userLanguage||
window.navigator.language)+"~"+(Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b))+"~"+a,d;if(!(d=Gf)){for(var e=Array(256),f=0;256>f;f++){for(var h=f,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[f]=h}d=e}Gf=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Gf[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)};
function Mf(a,b){var c;a:{var d=a,e;e=void 0===e?3:e;try{if(d){var f=Hf.exec(d);if(!f&&(d=decodeURIComponent(d),f=Hf.exec(d),!f)){c=void 0;break a}if("1"===f[1]){var h=f[3],k;b:{for(var l=f[2],m=0;m<e;++m)if(l===Kf(h,m)){k=!0;break b}k=!1}if(k){for(var n={},p=h?h.split("~"):[],q=0;q<p.length;q+=2){var r=p[q+1];n[decodeURIComponent(p[q])]=decodeURIComponent(r)}c=n;break a}}}}catch(t){}c=void 0}var u=c;if(!u)return!1;La(b,u);return!0}
function Nf(a,b,c){function d(a,b){a=a.replace(Jf,"$1")||b;var c=a.charAt(a.length-1);c!==b&&"&"!==c&&(a+="&");return a+l}c=void 0===c?!1:c;var e=If.exec(b),f=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k=d(k,"#"):h=d(h,"?");return""+f+h+k}function Of(a,b,c,d){for(var e={},f={},h=Pf().decorators,k=0;k<h.length;++k){var l=h[k];(!d||l.forms)&&Qf(l.domains,b)&&(l.fragment?La(f,l.callback()):La(e,l.callback()))}if(Ma(e)){var m=Lf(e);c(m,a,!1)}if(Ma(f)){var n=Lf(f);c(n,a,!0)}}
function Rf(a,b,c){if(b.href){var d=Nf(a,b.href,void 0===c?!1:c);tb.test(d)&&(b.href=d)}}
function Sf(a,b){if(b&&b.action){var c=(b.method||"").toLowerCase();if("get"===c){for(var d=b.childNodes||[],e=!1,f=0;f<d.length;f++){var h=d[f];if("_gl"===h.name){h.setAttribute("value",a);e=!0;break}}if(!e){var k=B.createElement("input");k.setAttribute("type","hidden");k.setAttribute("name","_gl");k.setAttribute("value",a);b.appendChild(k)}}else if("post"===c){var l=Nf(a,b.action);tb.test(l)&&(b.action=l)}}}
function Qf(a,b){if(!a||b===B.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}function Tf(a){a=a||z.event;return a.target||a.srcElement||{}}
var Uf=function(a){try{var b;a:{for(var c=Tf(a),d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||Of(e,e.hostname,Rf,!1)}}catch(h){}},Vf=function(a){try{var b=Tf(a);if(b.action){var c=xb(N(b.action),"host");Of(b,c,Sf,!0)}}catch(d){}},Wf=function(a,b,c,d){var e=Pf();e.init||(mb(B,"mousedown",Uf),mb(B,"keyup",Uf),mb(B,"submit",Vf),e.init=!0);var f={callback:a,domains:b,fragment:"fragment"===c,forms:!!d};
Pf().decorators.push(f)};function Pf(){var a=hb("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Xf=/^\w+$/,Yf=/^[\w-]+$/,Zf=/^~?[\w-]+$/,$f={aw:"_aw",dc:"_dc",gf:"_gf"},ag=function(a){for(var b=[],c=B.cookie.split(";"),d=new RegExp("^\\s*"+a+"=\\s*(.*?)\\s*$"),e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push(f[1])}return b},cg=function(a){var b=ag(a),c=[];if(!b||0==b.length)return c;for(var d=0;d<b.length;d++){var e=b[d].split(".");3==e.length&&"GCL"==e[0]&&e[1]&&c.push(e[2])}return bg(c)};function dg(a){return a&&"string"==typeof a&&a.match(Xf)?a:"_gcl"}
var eg=function(a){if(a){if("string"==typeof a){var b=dg(a);return{dc:b,aw:b,gf:b}}if(a&&"object"==typeof a)return{dc:dg(a.dc),aw:dg(a.aw),gf:dg(a.gf)}}return{dc:"_gcl",aw:"_gcl",gf:"_gcl"}},fg=function(){var a=N(z.location.href),b=xb(a,"query",!1,void 0,"gclid"),c=xb(a,"query",!1,void 0,"gclsrc");if(!b||!c){var d=a.hash.replace("#","");b=b||wb(d,"gclid");c=c||wb(d,"gclsrc")}return void 0!==b&&b.match(Yf)?{T:b,J:c}:null},gg=function(a,b,c,d,e){if(Ca(b)){var f=eg(e);Wf(function(){for(var b={},c=0;c<
a.length;++c){var d=a[c],e=f[d],n=$f[d];if(e&&n){var p=e+n,q=ag(p);q.length&&(b[p]=q.sort()[q.length-1])}}return b},b,c,d)}},bg=function(a){return a.filter(function(a){return Zf.test(a)})};var hg=/^\d+\.fls\.doubleclick\.net$/;function ig(a){var b=N(z.location.href),c=xb(b,"host",!1);if(c&&c.match(hg)){var d=xb(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
var jg=function(a){var b=ig("gclaw");if(b)return b.split(".");var c=eg(a);if("_gcl"==c.aw){var d=fg();if(d&&(null==d.J||"aw.ds"==d.J))return[d.T]}return cg(c.aw+"_aw")},kg=function(a){var b=ig("gcldc");if(b)return b.split(".");var c=eg(a);if("_gcl"==c.dc){var d=fg();if(d&&("ds"==d.J||"aw.ds"==d.J))return[d.T]}return cg(c.dc+"_dc")},lg=function(){var a=ig("gac");if(a)return decodeURIComponent(a);for(var b=[],c=B.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);
f&&b.push({zb:f[1],value:f[2]})}var h={};if(b&&b.length)for(var k=0;k<b.length;k++){var l=b[k].value.split(".");"1"==l[0]&&3==l.length&&l[1]&&(h[b[k].zb]||(h[b[k].zb]=[]),h[b[k].zb].push({timestamp:l[1],T:l[2]}))}var m=[],n;for(n in h)if(h.hasOwnProperty(n)){for(var p=[],q=h[n],r=0;r<q.length;r++)p.push(q[r].T);p=bg(p);p.length&&m.push(n+":"+p.join(","))}return m.join(";")},mg=function(a,b,c){};var ng;a:{ng="G"}var og={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GTM:ng},pg=function(a){var b=Lc.o.split("-"),c=b[0].toUpperCase();return(og[c]||"i")+"94"+(a&&"GTM"===c?b[1]:"")};
var qg=function(a){return!(void 0===a||null===a||0===(a+"").length)},rg=function(a,b){var c;if(2===b.I)return a("ord",Ea(1E11,1E13)),!0;if(3===b.I)return a("ord","1"),a("num",Ea(1E11,1E13)),!0;if(4===b.I)return qg(b.sessionId)&&a("ord",b.sessionId),!0;if(5===b.I)c="1";else if(6===b.I)c=b.zc;else return!1;qg(c)&&a("qty",c);qg(b.fb)&&a("cost",b.fb);qg(b.Ab)&&a("ord",b.Ab);return!0},sg=encodeURIComponent,tg=function(a,b){function c(a,b,c){f.hasOwnProperty(a)||(b+="",e+=";"+a+"="+(c?b:sg(b)))}var d=a.hb,
e=a.protocol;e+=a.Wa?"//"+d+".fls.doubleclick.net/activityi":"//ad.doubleclick.net/activity";e+=";src="+sg(d)+(";type="+sg(a.ib))+(";cat="+sg(a.sa));var f=a.pd||{},h;for(h in f)f.hasOwnProperty(h)&&(e+=";"+sg(h)+"="+sg(f[h]+""));if(rg(c,a)){qg(a.Cb)&&c("u",a.Cb);qg(a.tran)&&c("tran",a.tran);c("gtm",pg());!1===a.Sc&&c("npa","1");if(a.eb){var k=kg(a.fa);k&&k.length&&c("gcldc",k.join("."));var l=jg(a.fa);l&&l.length&&c("gclaw",l.join("."));var m=lg();m&&c("gac",m);}qg(a.rb)&&c("prd",a.rb,!0);for(var p in a.Da)a.Da.hasOwnProperty(p)&&c(p,a.Da[p]);e+=b||"";qg(a.Ra)&&c("~oref",a.Ra);a.Wa?lb(e+"?",a.V):C(e+"?",a.V,a.ka)}else H(a.ka)};var wg=!!z.MutationObserver,xg=void 0,yg=function(a){if(!xg){var b=function(){var a=B.body;if(a)if(wg)(new MutationObserver(function(){for(var a=0;a<xg.length;a++)H(xg[a])})).observe(a,{childList:!0,subtree:!0});else{var b=!1;mb(a,"DOMNodeInserted",function(){b||(b=!0,H(function(){b=!1;for(var a=0;a<xg.length;a++)H(xg[a])}))})}};xg=[];B.body?b():H(b)}xg.push(a)};var Kg="www.googletagmanager.com/gtm.js";
var Lg=Kg,Mg=function(a,b,c,d){mb(a,b,c,d)},Ng=function(a,b){return z.setTimeout(a,b)},T=function(a,b,c){if(Ie()){b&&H(b)}else return kb(a,b,c)},Og=function(){return z.location.href},Pg=function(a){return xb(N(a),"fragment")},Qg=function(a,b,c,d,e){return xb(a,b,c,d,e)},U=function(a,b){return Wc(a,b||2)},Rg=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return z["dataLayer"].push(a)},Sg=function(a,
b){z[a]=b},V=function(a,b,c){b&&(void 0===z[a]||c&&!z[a])&&(z[a]=b);return z[a]},Tg=function(a,b,c){return nf(a,b,void 0===c?!0:!!c)},Ug=function(a,b,c){var d={prefix:a,path:b,domain:c};d=d||{};var e=eg(d.prefix),f=d.domain||"auto",h=d.path||"/",k=fg();if(null!=k){var l=(new Date).getTime(),m=new Date(l+7776E6),n=Math.round(l/1E3),p=["GCL",n,k.T].join("."),q;q=!0===d.hf?["GCL",n,"~"+k.T].join("."):p;k.J&&"aw.ds"!=k.J||tf(e.aw+"_aw",q,h,f,m,!0);"aw.ds"!=k.J&&"ds"!=k.J||tf(e.dc+"_dc",p,h,f,m,!0);"gf"==
k.J&&tf(e.gf+"_gf",p,h,f,m,!0)}},Vg=function(a,b){},Wg=function(a,b,c,d,e){},Xg=function(a,b){var c;a:{var d;d=100;for(var e={},f=0;f<b.length;f++)e[b[f]]=!0;for(var h=a,k=0;h&&k<=d;k++){if(e[String(h.tagName).toLowerCase()]){c=h;break a}h=h.parentElement}c=null}return c},Y=function(a,b,c,d){var e=!d&&"http:"==z.location.protocol;e&&(e=2!==Yg());return(e?b:a)+c},Zg=function(a,b){if(Ie()){b&&H(b)}else lb(a,b)};
var $g=function(a){var b=0;return b},ah=function(a){},bh=function(a){var b=!1;return b},ch=function(a,b){var c;a:{if(a&&
Ca(a))for(var d=0;d<a.length;d++)if(a[d]&&b(a[d])){c=a[d];break a}c=void 0}return c},dh=function(a,b,c,d){hf(a,b,c,d)},eh=function(a,b,c){return jf(a,b,c)},fh=function(a){return!!jf(a,"init",!1)},gh=function(a){gf(a).init=!0};
var Yg=function(){var a=Lg;if(Rc){if(0===Rc.toLowerCase().indexOf("https://"))return 2;if(0===Rc.toLowerCase().indexOf("http://"))return 3}a=a.toLowerCase();for(var b="https://"+a,c="http://"+a,d=1,e=B.getElementsByTagName("script"),f=0;f<e.length&&100>f;f++){var h=e[f].src;if(h){h=h.toLowerCase();if(0===h.indexOf(c))return 3;1===d&&0===h.indexOf(b)&&(d=2)}}return d};
var jh=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":Lg;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";if(b)for(var e in b)b[e]&&b.hasOwnProperty(e)&&(d+="&"+e+"="+encodeURIComponent(b[e]));T(Y("https://","http://",d))};var lh=function(a,b,c){a instanceof Ce.Jc&&(a=a.resolve(Ce.pe(b,c)),b=xa);return{jb:a,V:b}};var mh=function(a,b,c){this.n=a;this.t=b;this.p=c},nh=function(){this.c=1;this.e=[];this.p=null};function oh(a){var b=Mc,c=b.gss=b.gss||{};return c[a]=c[a]||new nh}var ph=function(a,b){oh(a).p=b},qh=function(a,b,c){var d=Math.floor((new Date).getTime()/1E3);oh(a).e.push(new mh(b,d,c))},rh=function(a){};var Ch=window,Dh=document,Eh=function(a){var b=Ch._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Ch["ga-disable-"+a])return!0;try{var c=Ch.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(m){}for(var d=[],e=Dh.cookie.split(";"),f=/^\s*AMP_TOKEN=\s*(.*?)\s*$/,h=0;h<e.length;h++){var k=e[h].match(f);k&&d.push(k[1])}for(var l=0;l<d.length;l++)if("$OPT_OUT"==decodeURIComponent(d[l]))return!0;return!1};var Jh=function(a){if(1===oh(a).c){oh(a).c=2;var b=encodeURIComponent(a);kb(("http:"!=z.location.protocol?"https:":"http:")+("//www.googletagmanager.com/gtag/js?id="+b+"&l=dataLayer&cx=c"))}},Kh=function(a,b){};var Z={a:{}};
Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=V("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Z.a.flc=[],function(){function a(a,c){c=c?c.slice(0,-1):void 0;tg(a,c)}(function(a){Z.__flc=a;Z.__flc.b="flc";Z.__flc.g=!0})(function(b){var c=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,d=Q(b.vtp_customVariable||[],"key","value")||{},e={sa:b.vtp_activityTag,eb:c,fa:b.vtp_conversionCookiePrefix||void 0,I:{UNIQUE:3,SESSION:4}[b.vtp_ordinalType]||2,hb:b.vtp_advertiserId,ib:b.vtp_groupTag,ka:b.vtp_gtmOnFailure,V:b.vtp_gtmOnSuccess,Ra:b.vtp_useImageTag?void 0:b.vtp_url,
protocol:"",Wa:!b.vtp_useImageTag,sessionId:b.vtp_sessionId,tran:b.vtp_transactionVariable,Cb:b.vtp_userVariable,Da:d};if(b.vtp_enableAttribution){var f=b.vtp_attributionFields||[];if(f.length){T("//www.gstatic.com/attribution/collection/attributiontools.js",function(){a(e,V("google_attr").build([Q(f,"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(e)})}();
Z.a.sp=["google"],function(){(function(a){Z.__sp=a;Z.__sp.b="sp";Z.__sp.g=!0})(function(a){var b=a.vtp_gtmOnFailure;T("//www.googleadservices.com/pagead/conversion_async.js",function(){var c=V("google_trackConversion");if(za(c)){var d={};"DATA_LAYER"==a.vtp_customParamsFormat?d=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(d=Q(a.vtp_customParams,"key","value"));var e={};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(d.event=a.vtp_eventName),a.vtp_eventValue&&(e.value=a.vtp_eventValue),
a.vtp_eventItems&&(e.items=a.vtp_eventItems));c({google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:d,google_gtag_event_data:e,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:pg(void 0)})||b()}else b()},b)})}();Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0})(function(){return Nc})}();

Z.a.j=["google"],function(){(function(a){Z.__j=a;Z.__j.b="j";Z.__j.g=!0})(function(a){for(var b=String(a.vtp_name).split("."),c=V(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();Z.a.k=["google"],function(){(function(a){Z.__k=a;Z.__k.b="k";Z.__k.g=!0})(function(a){return Tg(a.vtp_name,U("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();
Z.a.r=["google"],function(){(function(a){Z.__r=a;Z.__r.b="r";Z.__r.g=!0})(function(a){return Ea(a.vtp_min,a.vtp_max)})}();
Z.a.u=["google"],function(){var a=function(a){return{toString:function(){return a}}};(function(a){Z.__u=a;Z.__u.b="u";Z.__u.g=!0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:U("gtm.url",1))||Og();var d=b[a("vtp_component")];return d&&"URL"!=d?Qg(N(String(c)),d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,"QUERY"==d?b[a("vtp_queryKey")]:void 0):yb(N(String(c)))})}();

Z.a.ua=["google"],function(){var a,b=function(b){var c={},e={},f={},h={},k={};if(b.vtp_gaSettings){var l=b.vtp_gaSettings;cf(Q(l.vtp_fieldsToSet,"fieldName","value"),e);cf(Q(l.vtp_contentGroup,"index","group"),f);cf(Q(l.vtp_dimension,"index","dimension"),h);cf(Q(l.vtp_metric,"index","metric"),k);b.vtp_gaSettings=null;l.vtp_fieldsToSet=void 0;l.vtp_contentGroup=void 0;l.vtp_dimension=void 0;l.vtp_metric=void 0;var m=Ua(l,void 0);b=Ua(b,m)}cf(Q(b.vtp_fieldsToSet,"fieldName","value"),e);cf(Q(b.vtp_contentGroup,
"index","group"),f);cf(Q(b.vtp_dimension,"index","dimension"),h);cf(Q(b.vtp_metric,"index","metric"),k);var n=xd(b.vtp_functionName),p="",q="";b.vtp_setTrackerName&&"string"==typeof b.vtp_trackerName?""!==b.vtp_trackerName&&(q=b.vtp_trackerName,p=q+"."):(q="gtm"+Sc(),p=q+".");var r={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,
storage:!0,useAmpClientId:!0,storeGac:!0},u={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},t=function(a){var b=[].slice.call(arguments,0);b[0]=p+b[0];n.apply(window,b)},A=function(a,b){return void 0===b?b:a(b)},D=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&t("set",a+c,b[c])},E=function(){
var a=function(a,b,c){if(!Ta(b))return!1;var d;d=Ja(Object(b),c,[]);for(var e=0;d&&e<d.length;e++)t(a,d[e]);return!!d&&0<d.length},c;b.vtp_useEcommerceDataLayer?c=U("ecommerce",1):b.vtp_ecommerceMacroData&&(c=b.vtp_ecommerceMacroData.ecommerce);if(!Ta(c))return;c=Object(c);var d=Ja(e,"currencyCode",c.currencyCode);void 0!==d&&t("set","&cu",d);a("ec:addImpression",c,"impressions");if(a("ec:addPromo",c[c.promoClick?"promoClick":"promoView"],"promotions")&&c.promoClick){t("ec:setAction","promo_click",
c.promoClick.actionField);return}for(var f="detail checkout checkout_option click add remove purchase refund".split(" "),h=0;h<f.length;h++){var k=c[f[h]];if(k){a("ec:addProduct",k,"products");t("ec:setAction",f[h],k.actionField);break}}},M=function(a,b,c){var d=0;if(a)for(var e in a)if(a.hasOwnProperty(e)&&(c&&r[e]||!c&&void 0===r[e])){var f=u[e]?Ga(a[e]):a[e];"anonymizeIp"!=e||f||(f=void 0);b[e]=f;d++}return d},F={name:q};M(e,F,
!0);n("create",b.vtp_trackingId||c.trackingId,F);t("set","&gtm",pg(!0));(function(a,c){void 0!==b[c]&&t("set",a,b[c])})("nonInteraction","vtp_nonInteraction");D("contentGroup",f);D("dimension",h);D("metric",k);var G={};M(e,G,!1)&&t("set",G);var J;b.vtp_enableLinkId&&t("require","linkid","linkid.js");t("set","hitCallback",function(){var a=
e&&e.hitCallback;za(a)&&a();b.vtp_gtmOnSuccess()});if("TRACK_EVENT"==b.vtp_trackType){}else if("TRACK_SOCIAL"==
b.vtp_trackType){}else if("TRACK_TRANSACTION"==b.vtp_trackType){}else if("TRACK_TIMING"==b.vtp_trackType){}else if("DECORATE_LINK"==b.vtp_trackType){}else if("DECORATE_FORM"==b.vtp_trackType){}else if("TRACK_DATA"==
b.vtp_trackType){}else{b.vtp_enableEcommerce&&(t("require","ec","ec.js"),E());if(b.vtp_doubleClick||"DISPLAY_FEATURES"==b.vtp_advertisingFeaturesType){var S="_dc_gtm_"+String(b.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");t("require","displayfeatures",void 0,{cookieName:S})}"DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==b.vtp_advertisingFeaturesType&&
(S="_dc_gtm_"+String(b.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,""),t("require","adfeatures",{cookieName:S}));J?t("send","pageview",J):t("send","pageview");b.vtp_autoLinkDomains&&yd(p,b.vtp_autoLinkDomains,!!b.vtp_useHashAutoLink,!!b.vtp_decorateFormsAutoLink);}if(!a){var O=b.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";b.vtp_useInternalVersion&&!b.vtp_useDebugVersion&&
(O="internal/"+O);a=!0;T(Y("https:","http:","//www.google-analytics.com/"+O,e&&e.forceSSL),function(){var a=wd();a&&a.loaded||b.vtp_gtmOnFailure();},b.vtp_gtmOnFailure)}};Z.__ua=b;Z.__ua.b="ua";Z.__ua.g=!0}();



Z.a.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.b="gas";Z.__gas.g=!0})(function(a){var b=Ua(a,void 0),c=b;c[P.N]=null;c[P.Ec]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

Z.a.awct=["google"],function(){var a=!1,b=[],c=function(a){var b=V("google_trackConversion"),c=a.gtm_onFailure;"function"==typeof b?b(a)||c():c()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},f=function(){return function(){d();b={push:c};}},h=function(c){var d={google_conversion_domain:"",google_conversion_id:c.vtp_conversionId,google_conversion_label:c.vtp_conversionLabel,google_conversion_value:c.vtp_conversionValue||
0,google_remarketing_only:!1,onload_callback:c.vtp_gtmOnSuccess,gtm_onFailure:c.vtp_gtmOnFailure,google_gtm:pg(void 0)};c.vtp_currencyCode&&(d.google_conversion_currency=c.vtp_currencyCode);c.vtp_orderId&&(d.google_conversion_order_id=c.vtp_orderId);c.vtp_allowReadGaCookie&&(d.google_read_ga_cookie_opt_in=!0);!c.hasOwnProperty("vtp_enableConversionLinker")||c.vtp_enableConversionLinker?(c.vtp_conversionCookiePrefix&&(d.google_gcl_cookie_prefix=c.vtp_conversionCookiePrefix),d.google_read_gcl_cookie_opt_out=
!1):d.google_read_gcl_cookie_opt_out=!0;b.push(d);a||(a=!0,T("//www.googleadservices.com/pagead/conversion_async.js",f(),e("//www.googleadservices.com/pagead/conversion_async.js")))};Z.__awct=h;Z.__awct.b="awct";Z.__awct.g=!0}();



Z.a.twitter_website_tag=["nonGoogleScripts"],function(){(function(a){Z.__twitter_website_tag=a;Z.__twitter_website_tag.b="twitter_website_tag";Z.__twitter_website_tag.g=!0})(function(a){(function(a,b){a.twq||(b=a.twq=function(){b.exe?b.exe.apply(b,arguments):b.queue.push(arguments)},b.version="1",b.queue=[],T("//static.ads-twitter.com/uwt.js"))})(window,void 0);window.twq("init",String(a.vtp_twitter_pixel_id));var b=Q(a.vtp_event_parameters,"param_table_key_column","param_table_value_column");b&&
void 0!==b.content_ids&&(b.content_ids=JSON.parse(b.content_ids.replace(/'/g,'"')));window.twq("track",String(a.vtp_event_type),b);H(a.vtp_gtmOnSuccess)})}();
Z.a.html=["customScripts"],function(){var a=function(b,c,f,h){return function(){try{if(0<c.length){var d=c.shift(),e=a(b,c,f,h);if("SCRIPT"==String(d.nodeName).toUpperCase()&&"text/gtmscript"==d.type){var m=B.createElement("script");m.async=!1;m.type="text/javascript";m.id=d.id;m.text=d.text||d.textContent||d.innerHTML||"";d.charset&&(m.charset=d.charset);var n=d.getAttribute("data-gtmsrc");n&&(m.src=n,jb(m,e));b.insertBefore(m,null);n||e()}else if(d.innerHTML&&0<=d.innerHTML.toLowerCase().indexOf("<script")){for(var p=
[];d.firstChild;)p.push(d.removeChild(d.firstChild));b.insertBefore(d,null);a(d,p,e,h)()}else b.insertBefore(d,null),e()}else f()}catch(q){H(h)}}};var c=function(d){if(B.body){var e=
d.vtp_gtmOnFailure,f=lh(d.vtp_html,d.vtp_gtmOnSuccess,e),h=f.jb,k=f.V;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(B.body,rb(h),k,e)()}else Ng(function(){c(d)},200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0}();

Z.a.img=["customPixels"],function(){(function(a){Z.__img=a;Z.__img.b="img";Z.__img.g=!0})(function(a){var b=rb('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}C(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();



var Lh={macro:function(a){if(Ce.$a.hasOwnProperty(a))return Ce.$a[a]}};Lh.dataLayer=Xc;Lh.onHtmlSuccess=Ce.Vb(!0);Lh.onHtmlFailure=Ce.Vb(!1);Lh.callback=function(a){Pc.hasOwnProperty(a)&&za(Pc[a])&&Pc[a]();delete Pc[a]};Lh.Zc=function(){Mc[Lc.o]=Lh;Qc=Z.a;zc=zc||Ce;Ac=id};
Lh.Md=function(){Mc=z.google_tag_manager=z.google_tag_manager||{};if(Mc[Lc.o]){var a=Mc.zones;a&&a.unregisterChild(Lc.o)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)sc.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)vc.push(e[f]);for(var h=b.predicates||[],k=0;k<h.length;k++)uc.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],p={},q=0;q<n.length;q++)p[n[q][0]]=Array.prototype.slice.call(n[q],1);tc.push(p)}xc=Z;Ze();Lh.Zc();Be();pd=!1;qd=0;if("interactive"==
B.readyState&&!B.createEventObject||"complete"==B.readyState)sd();else{mb(B,"DOMContentLoaded",sd);mb(B,"readystatechange",sd);if(B.createEventObject&&B.documentElement.doScroll){var r=!0;try{r=!z.frameElement}catch(t){}r&&td()}mb(z,"load",sd)}pe=!1;"complete"===B.readyState?re():mb(z,"load",re);a:{
if(!Dd)break a;Gd();Jd=void 0;Kd={};Hd={};Md=void 0;Ld={};Id="";Nd=Ed();z.setInterval(Gd,864E5);}}};Lh.Md();

})()
