let btnFirstName = document.querySelector("#btnFirstName"); // grab the element
let firstName = document.querySelector("#firstName");
let errMsg = document.querySelector("#errMsg");

function displayfirstBlock() {
  // write the function
  if (firstName.value == "") {
    errMsg.innerHTML = "Name cannot be left blank";
    document.querySelector("#errMsg").style.color = "#ff0000";
    firstName.style.borderColor = "red";
    firstName.focus();
  } else {
    errMsg.innerHTML = "";
    document.querySelector("#simleyDiv").style.display = "block";
    document.querySelector(
      "#welcomeText"
    ).innerHTML = `Hi ${firstName.value}, How do you feel today?`;
  }
}
btnFirstName.addEventListener("click", displayfirstBlock); // add event listner

///----------------
let sad = document.querySelector("#sad");
let displayMood = document.querySelector("#displayMood");
let displayMessage = document.querySelector("#displayMessage");

sad.addEventListener("mouseover", displayAlt);

function displayAlt() {
  displayMood.innerHTML = sad.getAttribute("alt");
  displayMood.style.color = "red";
}

// -----
let btnMessage = document.querySelector("#btnMessage");
btnMessage.addEventListener("click", displayLastMessage);
function displayLastMessage() {
  displayMessage.style.display = "block";
  displayMessage.innerHTML = `You need to take a vacation <br/>
  <img src="./myimages/beach.jpg" alt="beach" class="beachimg">`;
}