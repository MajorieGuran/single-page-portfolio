function appendMailTo(){
    let message = document.getElementById("mailMessage").value;
    let message = document.getElementById("mailSubjuct").value;
    console.log(subject);
    console.log(message);

    let mialToAttr = document.getElementById("sendMail");
    mialToAttr.setAttribute("href", mailto: zollandreaguran43@gmail.com?subject= + subject + "&body=" + message);

}

let date = new Date();
let yearPos = document.getElementById(getYear);
let currYear = date.getFullYear();
yearPos.innerHTML = currYear;