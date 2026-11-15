
/* Add a class to the body when the page opens.
   CSS uses this class to start entrance animations. */

document.body.classList.add("loaded");


// Update the copyright year automatically.

const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();
