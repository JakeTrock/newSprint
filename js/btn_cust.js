(function (d) {
  var s = d.createElement("script");
  s.src = "https://cdn.jsdelivr.net/gh/jaketrock/newSprint/js/ns_opt.js";
  s.type = "text/javascript";
  function x() {
    if (!localStorage.getItem("nstcd"))
      nsprint(d.getElementsByClassName("sprtxt"), d.getElementById("sprFocus"));
  }
  if (!window.nsprint) {
    s.onload = x();
    d.head.appendChild(s);
  } else x();
})(document);
