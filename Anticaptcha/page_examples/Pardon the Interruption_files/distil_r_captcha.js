var isSafariOrIOS=function(){return!!navigator.userAgent.match(/Version\/[\d\.]+.*Safari|iPhone|iPad|iPod/)&&!window.MSStream};var isPostRequest=function(){return distilRequestMethod==="POST"};var getSafariStepsBackInHistory=function(){var steps=typeof distilSafariNumberStepsBack===typeof undefined?1:distilSafariNumberStepsBack;return-steps};
var distilAjaxCaptchaCallback=function(evt){var distilCaptchaForm=document.getElementById("distilCaptchaForm");if(!distilCaptchaForm)return false;var findUrl=/(https?:\/\/[^\/]+)?(\/[^\?]+).*/i;var currentPage=document.location.href.replace(findUrl,"$2");var captchaAction=distilCaptchaForm.action.replace(findUrl,"$2");if(currentPage==captchaAction)return false;try{var formData="";var inputs=distilCaptchaForm.getElementsByTagName("INPUT");for(var i=0;i<inputs.length;i++)if(inputs[i].name)formData+=
encodeURIComponent(inputs[i].name)+"="+encodeURIComponent(inputs[i].value)+"&";var textareas=distilCaptchaForm.getElementsByTagName("textarea");for(var i=0;i<textareas.length;i++)if(textareas[i].name)formData+=encodeURIComponent(textareas[i].name)+"="+encodeURIComponent(textareas[i].value)+"&";formData+="isAjax=1";var xhr;if(window.XMLHttpRequest)xhr=new XMLHttpRequest;else if(typeof XMLHttpRequest=="undefined")try{xhr=new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(err){try{xhr=new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(err2){try{xhr=
new ActiveXObject("Microsoft.XMLHTTP")}catch(err3){return false}}}xhr.onreadystatechange=function(){if(xhr.readyState==4)if(isSafariOrIOS()&&isPostRequest())window.history.go(getSafariStepsBackInHistory());else window.location.reload()};xhr.open("POST",distilCaptchaForm.action,true);xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");xhr.send(formData);if(evt)evt.preventDefault();return true}catch(err){return false}};
if(window.addEventListener)window.addEventListener("DOMContentLoaded",function(){var distilCaptchaForm=document.getElementById("distilCaptchaForm");if(distilCaptchaForm)distilCaptchaForm.addEventListener("submit",distilAjaxCaptchaCallback,false);distilSubmitButtonDisplay("none")},false);var distilSubmitButtonDisplay=function(value){var dCFic=document.getElementById("dCF_input_complete");if(dCFic)dCFic.style.display=value};
var distilCaptchaDoneCallback=function(){try{if(!distilAjaxCaptchaCallback()){var dCF=document.getElementById("distilCaptchaForm");if(dCF)dCF.submit()}}catch(e){distilSubmitButtonDisplay("inline")}};var distilHideSubmitButton=function(){distilSubmitButtonDisplay("none")};
