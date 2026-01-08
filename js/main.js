const text = "Azure | SOC Analyst | Cloud Security | Docker";
let index = 0;

function typingEffect() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typingEffect, 70);
  }
}

typingEffect();
