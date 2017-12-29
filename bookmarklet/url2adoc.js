// one line
url=location.href;title=document.title;link=url+"["+title+"]";input=document.createElement("input");input.setAttribute("id","bottom");txt=document.createTextNode(link);input.value=link;document.body.appendChild(input);document.querySelector('#bottom').select();document.execCommand('copy');

// by lines
url=location.href;
title=document.title;
link=url+"["+title+"]";
input = document.createElement("input");
input.setAttribute("id", "bottom");
txt = document.createTextNode(link);
input.value = link;
document.body.appendChild(input);
document.querySelector('#bottom').select();
document.execCommand('copy');
