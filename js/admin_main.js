console.log("hej mogge här");
console.log("Mimmi är också här ;)");
console.log("johanna är också här juuuu!!!")
console.log("Hej Johanna, Mimmi här!")

const toggleButton = document.getElementsByClassName('toggle-button')[0];

console.log(toggleButton);
const navbarLinks = document.getElementsByClassName('navbar-links')[0];


console.log(navbarLinks);

console.log(navbarLinks.classList)
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
})