function writeToFile() { 

    var firstName = document.getElementById("first-name").value; 
    var lastName  = document.getElementById('last-name').value; 
    var country = document.getElementById('country').value;
    var subject = document.getElementById('subject').value;

    const information = "First Name: " + firstName + "\nLast Name: " + lastName 
    + "\nCountry: " + country +   "\nSubject: " + subject;
 
    var blob = new Blob([information], {type: "text/plain;charset=utf-8"});
    saveAs(blob, `${toString(firstName)}.txt`);
}