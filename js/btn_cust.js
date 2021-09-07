(function (d) {
  var s = d.createElement("script");
  s.src = "https://cdn.jsdelivr.net/gh/jaketrock/newSprint@master/js/ns_opt.js";
  s.type = "text/javascript";
  function x() {
      nsprint(d.getElementsByClassName("sprtxt")
      // , d.getElementById("sprFocus")
      );
  }
  if (!window.nsprint) {
    s.onload = function(){x()};
    d.head.appendChild(s);
  } else if (!window.nsht) x();
})(document);
