
//grab the element from the document
let btnFirstName = document.querySelector("#btnFirstName");
let firstName = document.querySelector("#firstName");
let errMsg = document.querySelector("#errMsg");
let simleyDiv = document.querySelector("#simleyDiv");
let welcomeText = document.querySelector("#welcomeText");
//console.log(btnFirstName);

//add an eventlistener
btnFirstName.addEventListener("click",displaySecond);

//define the function
function displaySecond() {
//alert("here");
if (firstName.value === ""){
errMsg.innerHTML = "Please enter your name in the box";
errMsg.style.color = "red";
} else {
simleyDiv.style.display = "block";
welcomeText.innerHTML = `Welcome ${firstName.value}. What is your mood today?`;
}
}


//second part
// let sad = document.querySelector("#sad");
// let displayMood = document.querySelector("#displayMood");
// sad.addEventListener("mouseover",function2);

// function function2() {
//   displayMood.innerHTML = sad.getAttribute("alt");
//   displayMood.style.color = "red";  
// }

let imgTag = document.querySelectorAll("img");
let displayMood = document.querySelector("#displayMood");

for(let i=0; i<imgTag.length; i++) {
    imgTag[i].addEventListener("mouseover",() => {
        displayMood.innerHTML = imgTag[i].getAttribute("alt");
        displayMood.style.color = "red";  
      });
}

//third part
let btnMessage = document.querySelector("#btnMessage");

btnMessage.addEventListener("click",displayLastMessage);

function displayLastMessage() {
    displayMessage.style.display = "block";
    displayMessage.innerHTML = `You need to take a vacation <br/>
    <img src="./myimages/beach.jpg" alt="beach" class="beachimg">`;
    
    }