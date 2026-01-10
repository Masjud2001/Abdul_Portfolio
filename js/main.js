const text = "Azure | SOC Analyst | Cloud Security | Linux | Docker";
let index = 0;
function typingEffect(){
  if(index < text.length){
    document.getElementById("typing")?.innerHTML += text.charAt(index);
    index++;
    setTimeout(typingEffect, 65);
  }
}
typingEffect();
