// function newId(){
// const shortid = require('shortid');
// let newId = shortid.generate();
// console.log(newId);
// }

function quote1(){

    var emailQuote1 = document.getElementById("email-quote1").value.trim();
    if (emailQuote1.indexOf("@") === -1 || emailQuote1.indexOf(" ") != -1) {
        alert("Please enter a valid e-mail address");
    return;
    }

    var numberOfPeople = document.getElementById("number-people1").value;
    var option1;
    var option2;
    var option3;
    var option4;

    document.getElementById('option1').checked === true ? 
    option1 = "selected" :
    option1 = "not selected";

    document.getElementById('option2').checked === true ? 
    option2 = "selected" :
    option2 = "not selected";

    document.getElementById('option3').checked === true ? 
    option3 = "selected" :
    option3 = "not selected";

    document.getElementById('option4').checked === true ? 
    option4 = "selected" :
    option4 = "not selected";

    document.getElementById('option5').checked === true ? 
    option5 = "selected" :
    option5 = "not selected";



    const information = "Email: " + emailQuote1 + "\nNumber of People " + numberOfPeople 
    + "\nOption1: " + option1 +   "\nOption2: " + option2
    + "\nOption3: " + option3 +   "\nOption4: " + option4;

    console.log(information);

    //     var nodemailer = require("nodemailer");
    //     var transporter = nodemailer.createTransport({
    //     service: "gmail",
    //     auth: {
    //         user: "guilhermecaeirotests@gmail.com",
    //         pass: "12345678SUP",
    //     },
    //     });
    //     var mailOptions = {
    //     from: "guilhermecaeirotests@gmail.com",
    //     to: "toolt2y@gmail.com",
    //     subject: information,
    //     text: "That was easy!",
    //     };
    //     transporter.sendMail(mailOptions, function (error, info) {
    //     if (error) {
    //         console.log(error);
    //     } else {
    //         console.log("Email sent: " + info.response);
    //     }
    //     });


}


function writeToFile() { 

    var firstName = document.getElementById("first-name").value; 
    var lastName  = document.getElementById('last-name').value; 
    var country = document.getElementById('country').value;
    var subject = document.getElementById('subject').value;

    const information = "First Name: " + firstName + "\nLast Name: " + lastName 
    + "\nCountry: " + country +   "\nSubject: " + subject;
    
    var blob = new Blob([information], {type: "text/plain;charset=utf-8"});
    saveAs(blob, `${firstName}.txt`);
}



function clearSelection1(){

    document.getElementById('option1').checked = false;
    document.getElementById('option2').checked = false;
    document.getElementById('option3').checked = false;
    document.getElementById('option4').checked = false;
    }
    
function clearSelection2(){

    document.getElementById('option5').checked = false;
    document.getElementById('option6').checked = false;
    document.getElementById('option7').checked = false;
    document.getElementById('option8').checked = false;
     }

function clearSelection3(){

    document.getElementById('option9').checked = false;
    document.getElementById('option10').checked = false;
    document.getElementById('option11').checked = false;
    document.getElementById('option12').checked = false;
    }

function clearSelection4(){

    document.getElementById('option13').checked = false;
    document.getElementById('option14').checked = false;
    document.getElementById('option15').checked = false;
    document.getElementById('option16').checked = false;
    }

function clearSelection5(){

    document.getElementById('option17').checked = false;
    document.getElementById('option18').checked = false;
    document.getElementById('option19').checked = false;
    document.getElementById('option20').checked = false;
    }

function openSubmit(){
    alert("Your selction was saved. Now please fill your information so we can contact you")
    window.open('https://sebasbar.github.io/techLodge/contact.html');
}