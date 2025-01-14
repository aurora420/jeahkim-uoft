const ver = navigator.userAgent;
console.log(ver);

const isIE = /trident/i.test(ver);
console.log(isIE);

if(isIE){
  alert("You are using the Internet Explorer browser. This webpage does not support Internet Explorer. Please use a different browser.")
}