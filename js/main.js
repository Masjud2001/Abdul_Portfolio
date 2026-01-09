const text = "Azure | SOC Analyst | Cloud Security | Linux | Docker";
let idx = 0;
function typingEffect(){
  if(idx < text.length){
    document.getElementById("typing").innerHTML += text.charAt(idx);
    idx++;
    setTimeout(typingEffect, 70);
  }
}
typingEffect();
