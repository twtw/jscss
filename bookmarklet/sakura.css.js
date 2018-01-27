// https://oxal.org/projects/sakura/bookmark
// 改不同 css frameworks 之網址
// origin:
// javascript:(function()%7B(function()%7B%22use%20strict%22%3Bfunction%20e(e)%7Breturn%20Array.prototype.slice.call(window.document.querySelectorAll(e))%7Dfunction%20t()%7Balert(%22Sorry%2C%20sakura%20styles%20could%20not%20be%20applied%20to%20this%20page.%22)%7Dfunction%20r()%7Bvar%20t%3De(%22link%22).filter(function(e)%7Breturn%22stylesheet%22%3D%3D%3De.getAttribute(%22rel%22)%26%26e!%3D%3Dn%7D)%2Cr%3De(%22style%22)%2Co%3Dt.concat(r)%3Bo.forEach(function(e)%7Be.parentElement.removeChild(e)%7D)%7Dvar%20n%3Dwindow.document.createElement(%22link%22)%3Bn.addEventListener(%22error%22%2Ct)%2Cn.addEventListener(%22load%22%2Cr)%2Cn.setAttribute(%22rel%22%2C%22stylesheet%22)%2Cn.setAttribute(%22href%22%2C%22https%3A%2F%2Funpkg.com%2Fsakura.css%2Fcss%2Fsakura.css%22)%2Cwindow.document.head.appendChild(n)%7D)()%3B%7D)()

// beautifier
function() {
    (function() {
        "use strict";

        function e(e) {
            return Array.prototype.slice.call(window.document.querySelectorAll(e))
        }

        function t() {
            alert("Sorry, sakura styles could not be applied to this page.")
        }

        function r() {
            var t = e("link").filter(function(e) {
                    return "stylesheet" === e.getAttribute("rel") && e !== n
                }),
                r = e("style"),
                o = t.concat(r);
            o.forEach(function(e) {
                e.parentElement.removeChild(e)
            })
        }
        var n = window.document.createElement("link");
        n.addEventListener("error", t), n.addEventListener("load", r), n.setAttribute("rel", "stylesheet"), n.setAttribute("href", "https://unpkg.com/sakura.css/css/sakura.css"), window.document.head.appendChild(n)
    })();
}
