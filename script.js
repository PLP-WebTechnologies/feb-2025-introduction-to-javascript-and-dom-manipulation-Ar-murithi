// styling the page dynamically
// Change text content dynamically
// 1. Select elements
const mainTitle = document.getElementById("MainTitle");
const description = document.getElementById("description");
const welcomeHeading = document.querySelector("h2.big-text");

// 2. Append extra text to existing content
description.textContent += " Our services extend across Meru County and its environs.";

// 3. Create and insert a new paragraph after the description
const extraInfo = document.createElement("p");
extraInfo.textContent = "Contact us today for GPS mapping, boundary marking, and deed processing.";
description.parentNode.insertBefore(extraInfo, welcomeHeading);

// 4. Replace the welcome heading with an updated one
const newHeading = document.createElement("h2");
newHeading.textContent = "Trusted Land Experts in Meru";
newHeading.className = "big-text";
welcomeHeading.replaceWith(newHeading);

// 5. Toggle a class for styling emphasis
mainTitle.classList.toggle("highlight-color");

// 6. Set a custom attribute for data tracking
mainTitle.setAttribute("data-section", "header-hero");
