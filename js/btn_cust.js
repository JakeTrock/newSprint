(function (d) {
  var s = d.createElement("script");
  s.src = "https://cdn.jsdelivr.net/gh/jaketrock/newSprint/js/ns_opt.js";
  s.type = "text/javascript";
  function isc(obj = c) {
    while (obj.tagName.toUpperCase() != "BODY") {
      if (obj.href == h.href) {
        return true;
      }
      obj = obj.parentNode;
    }
    return false;
  }
  if (isc()) {
    s.onload = function () {
      nsprint(d.getElementsByClassName("sprtxt"), d.getElementById("sprFocus"));
    };
    d.head.appendChild(s);
  }
})(document);
