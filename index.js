
function submit(){
    let {name,email,number,subject,message}="";
    name    = document.getElementById('name').value;
    email   = document.getElementById('email').value;
    number  = document.getElementById('number').value;
    subject = document.getElementById('subject').value;
    message = document.getElementById('messege').value;
    
    console.log(typeof number);

    if(!isNaN(name)){
        window.alert("name should not number");
    }

    if(isNaN(number)){
        window.alert("number phone must be  number");
    }

    let mail = document.createElement('a');
    mail.href=`mailto:${email}?subject=${subject}&body=hay, my name ${name}, ${subject}, ${message}`;
    mail.click();
}