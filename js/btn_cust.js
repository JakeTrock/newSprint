(function (d) {
  var s = d.createElement("script");
  s.src = "https://cdn.jsdelivr.net/gh/jaketrock/newSprint/js/ns_opt.js";
  s.type = "text/javascript";

  if (window.nswr!==true) {
    s.onload = function () {
      nsprint(d.getElementsByClassName("sprtxt"), d.getElementById("sprFocus"));
    };
    d.head.appendChild(s);
  }
})(document);
