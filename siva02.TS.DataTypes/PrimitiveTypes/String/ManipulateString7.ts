let email:String="siva.muluguri@gmail.com";
console.log(email);

let atops:number=email.indexOf("@");
console.log(atops);

let emailId:String=email.substring(0,13);
console.log(emailId);

let domain:String=email.substring(atops+1);
console.log(domain);