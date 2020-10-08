

function newId() {
    const shortId = require('short-uuid');
    console.log(shortId.generate());
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