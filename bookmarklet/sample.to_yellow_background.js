// https://greasyfork.org/en/forum/discussion/353/doesnt-work-because-of-content-security-policy#Comment_1586
// sample code to resolve CSP pages with bookmarklet
function yellowbod(){
  document.body.style.backgroundColor = "yellow";
}
var s=document.createElement("button"); 
s.addEventListener("click", yellowbod, false); 
s.appendChild(document.createTextNode("TEST")); 
document.body.appendChild(s);
