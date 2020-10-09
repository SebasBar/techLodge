
//     import shortid from "shortid" 

// function newID(){


//     const myId = shortid()
//     console.log("my id", myId)
//     return myId;

// }

function quote1(){

    //I wanted to email the information ... 
    // not sure why when I try to call the function save file
    // it doesn't work from here, but it works in the contact page :(
    // So this page prints in the console the information 

    var emailQuote1 = document.getElementById("email-quote1").value.trim();
    
    //email validation
    if (emailQuote1.indexOf("@") === -1 || emailQuote1.indexOf(" ") != -1 ||
    emailQuote1.indexOf(".") === -1) {
        alert("Please enter a valid e-mail address");
        return;
    }

    var numberOfPeople = document.getElementById("number-people1").value;
    var option1;
    var option2;
    var option3;
    var option4;
    //not working :(
    // var internnalId = newId();

    //check for selected radio options
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

    //information collected
    const information = "Email: " + emailQuote1 + "\nNumber of People " + numberOfPeople 
    + "\nOption1: " + option1 +   "\nOption2: " + option2
    + "\nOption3: " + option3 +   "\nOption4: " + option4
    // + "\nInternal ID: " + internnalId;
 

    console.log(information);

    openSubmit();

    //This function is not working here!? but when I call it
    //from writeToFile it works .... :(
    // saveFile(information, emailQuote1); 
}


function writeToFile() { 

    var firstName = document.getElementById("first-name").value; 
    var lastName  = document.getElementById('last-name').value; 
    var country = document.getElementById('country').value;
    var subject = document.getElementById('subject').value;

    const information = "First Name: " + firstName + "\nLast Name: " + lastName 
    + "\nCountry: " + country +   "\nSubject: " + subject;

    //here this function works ....
    saveFile(information, firstName);

}

function saveFile(information, fileName){
    var blob = new Blob([information], {type: "text/plain;charset=utf-8"});
    saveAs(blob, `${fileName}.txt`);
}

    //to clear the selected radio options
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
    document.getElementById('option1contact you2').checked = false;
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
    alert("Your selction was saved. Now please fill your information so we can know more about you :)")
    window.open('https://sebasbar.github.io/techLodge/contact.html');
}


function quote2(){

    var emailQuote1 = document.getElementById("email-quote2").value.trim();
    
    //email validation
    if (emailQuote1.indexOf("@") === -1 || emailQuote1.indexOf(" ") != -1 ||
    emailQuote1.indexOf(".") === -1) {
        alert("Please enter a valid e-mail address");
        return;
    }

    var numberOfPeople = document.getElementById("number-people2").value;
    var option1;
    var option2;
    var option3;
    var option4;

    document.getElementById('option5').checked === true ? 
    option1 = "selected" :
    option1 = "not selected";

    document.getElementById('option6').checked === true ? 
    option2 = "selected" :
    option2 = "not selected";

    document.getElementById('option7').checked === true ? 
    option3 = "selected" :
    option3 = "not selected";

    document.getElementById('option8').checked === true ? 
    option4 = "selected" :
    option4 = "not selected";

    const information = "Email: " + emailQuote1 + "\nNumber of People " + numberOfPeople 
    + "\nOption1: " + option1 +   "\nOption2: " + option2
    + "\nOption3: " + option3 +   "\nOption4: " + option4
    // + "\nInternal ID: " + internnalId;
 
    console.log(information);

    openSubmit();

    // saveFile(information, emailQuote1); 
}

function quote3(){

    var emailQuote1 = document.getElementById("email-quote3").value.trim();
    
    //email validation
    if (emailQuote1.indexOf("@") === -1 || emailQuote1.indexOf(" ") != -1 ||
    emailQuote1.indexOf(".") === -1) {
        alert("Please enter a valid e-mail address");
        return;
    }

    var numberOfPeople = document.getElementById("number-people3").value;
    var option1;
    var option2;
    var option3;
    var option4;

    document.getElementById('option9').checked === true ? 
    option1 = "selected" :
    option1 = "not selected";

    document.getElementById('option10').checked === true ? 
    option2 = "selected" :
    option2 = "not selected";

    document.getElementById('option11').checked === true ? 
    option3 = "selected" :
    option3 = "not selected";

    document.getElementById('option12').checked === true ? 
    option4 = "selected" :
    option4 = "not selected";

    const information = "Email: " + emailQuote1 + "\nNumber of People " + numberOfPeople 
    + "\nOption1: " + option1 +   "\nOption2: " + option2
    + "\nOption3: " + option3 +   "\nOption4: " + option4
    // + "\nInternal ID: " + internnalId;
 
    console.log(information);

    openSubmit();

    // saveFile(information, emailQuote1); 
}

function quote4(){

    var emailQuote1 = document.getElementById("email-quote4").value.trim();
    
    //email validation
    if (emailQuote1.indexOf("@") === -1 || emailQuote1.indexOf(" ") != -1 ||
    emailQuote1.indexOf(".") === -1) {
        alert("Please enter a valid e-mail address");
        return;
    }

    var numberOfPeople = document.getElementById("number-people4").value;
    var option1;
    var option2;
    var option3;
    var option4;

    document.getElementById('option13').checked === true ? 
    option1 = "selected" :
    option1 = "not selected";

    document.getElementById('option14').checked === true ? 
    option2 = "selected" :
    option2 = "not selected";

    document.getElementById('option15').checked === true ? 
    option3 = "selected" :
    option3 = "not selected";

    document.getElementById('option16').checked === true ? 
    option4 = "selected" :
    option4 = "not selected";

    const information = "Email: " + emailQuote1 + "\nNumber of People " + numberOfPeople 
    + "\nOption1: " + option1 +   "\nOption2: " + option2
    + "\nOption3: " + option3 +   "\nOption4: " + option4
    // + "\nInternal ID: " + internnalId;
 
    console.log(information);

    openSubmit();

    // saveFile(information, emailQuote1); 
}

function quote5(){

    var emailQuote1 = document.getElementById("email-quote5").value.trim();
    
    //email validation
    if (emailQuote1.indexOf("@") === -1 || emailQuote1.indexOf(" ") != -1 ||
    emailQuote1.indexOf(".") === -1) {
        alert("Please enter a valid e-mail address");
        return;
    }

    var numberOfPeople = document.getElementById("number-people5").value;
    var option1;
    var option2;
    var option3;
    var option4;

    document.getElementById('option17').checked === true ? 
    option1 = "selected" :
    option1 = "not selected";

    document.getElementById('option18').checked === true ? 
    option2 = "selected" :
    option2 = "not selected";

    document.getElementById('option19').checked === true ? 
    option3 = "selected" :
    option3 = "not selected";

    document.getElementById('option20').checked === true ? 
    option4 = "selected" :
    option4 = "not selected";

    const information = "Email: " + emailQuote1 + "\nNumber of People " + numberOfPeople 
    + "\nOption1: " + option1 +   "\nOption2: " + option2
    + "\nOption3: " + option3 +   "\nOption4: " + option4
    // + "\nInternal ID: " + internnalId;
 
    console.log(information);

    openSubmit();

    // saveFile(information, emailQuote1); 
}