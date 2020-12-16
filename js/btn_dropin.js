(function (d) {
    var s = d.createElement('script'),
        c = d.createElement('script');
    c.src = 'https://cdn.jsdelivr.net/gh/mozilla/readability/Readability.js';
    s.src = 'https://cdn.jsdelivr.net/gh/jaketrock/newSprint/js/ns_opt.js';

    s.type = 'text/javascript';
    c.type = 'text/javascript';
    s.onload = d.head.appendChild(c);
    c.onload = function () {
        nsprint(new Readability(document.cloneNode(true)).parse().textContent)
    };
    d.head.appendChild(s);
}(document));