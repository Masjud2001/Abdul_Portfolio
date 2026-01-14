const text = "Azure | SOC Analyst | Cloud Security | Linux | Docker";
let index = 0;
function typingEffect(){
  const typingElement = document.getElementById("typing");
  if(typingElement && index < text.length){
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typingEffect, 65);
  }
}
typingEffect();

// Hamburger Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    // Optional: Toggle icon from bars to times
    const icon = hamburger.querySelector("i");
    if (navLinks.classList.contains("active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
       const icon = hamburger.querySelector("i");
       icon.classList.remove("fa-times");
       icon.classList.add("fa-bars");
    });
  });
}
