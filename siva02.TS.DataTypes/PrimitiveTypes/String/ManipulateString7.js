var email = "siva.muluguri@gmail.com";
console.log(email);
var atops = email.indexOf("@");
console.log(atops);
var emailId = email.substring(0, 13);
console.log(emailId);
var domain = email.substring(atops + 1);
console.log(domain);
