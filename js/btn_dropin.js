(function (d) {
  var p = "https://cdn.jsdelivr.net/gh/jaketrock/";
  var t = "text/javascript";
  var h = d.head;
  var s = d.createElement("script"),
    c = d.createElement("script");
  c.src = p + "rb-c-stage@master/Readable_closure.js";
  s.src = p + "newSprint@master/js/ns_opt.js";

  s.type = t;
  c.type = t;

  function isc() {
    for (e in h.childNodes) {
      if (c.href === e.href) {
        return true;
      }
    }
    return false;
  }
  if (isc()) {
    s.onload = function () {
      d.head.appendChild(c);
    };
    c.onload = function () {
      nsprint(new Readability(document.cloneNode(true)).parse().textContent);
    };
    h.appendChild(s);
  }
})(document);
