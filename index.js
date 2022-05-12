
function submit(){
    let {name,email,number,subject,message}="";
    name    = document.getElementById('name').value;
    email   = document.getElementById('email').value;
    number  = document.getElementById('number').value;
    subject = document.getElementById('subject').value;
    message = document.getElementById('messege').value;

    console.log(name,email,number,subject,message);
}