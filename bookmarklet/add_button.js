// prepend input, button, click button to copy link to clipboard
//
function cplink() {
  document.querySelector('#copyme').select();
  document.execCommand('copy');
}

b = document.createElement("button");
b.addEventListener("click",cplink, false);
b.appendChild(document.createTextNode("copyMe"));
i = document.createElement("input");
i.setAttribute("id", "copyme");
url = location.href;
title=document.title;
link=url+"["+title+"]";
document.body.prepend(b);
i.value = link;
document.body.prepend(i);
