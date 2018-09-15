var xhr = new XMLHttpRequest();
xhr.open('POST', "/distil_r_captcha_challenge", false);
xhr.send();
var response = xhr.responseText.split(';');
return response[0];