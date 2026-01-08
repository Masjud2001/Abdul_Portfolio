const text = "Cybersecurity | SOC Analyst | Cloud Security";
let i = 0;
function typing(){
  if(i < text.length){
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 80);
  }
}
typing();
