(function (d) {
  function x() {
      nsprint(new Readability(document.cloneNode(true)).parse().textContent);
  }

  if (!window.nsprint) {
    var p = "https://cdn.jsdelivr.net/gh/jaketrock/";
    var t = "text/javascript";
    var h = d.head;
    var s = d.createElement("script"),
      c = d.createElement("script");
    c.src = p + "rb-c-stage/Readable_closure.js";
    s.src = p + "newSprint/js/ns_opt.js";
  
    s.type = t;
    c.type = t;
    s.onload = function () {
      d.head.appendChild(c);
    };
    c.onload = function(){x()};
    h.appendChild(s);
  } else if (!window.nsht) x();
})(document);
