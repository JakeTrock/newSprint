(function (d) {
    var s = d.createElement('script'),
        c = d.createElement('script');
    c.src = 'https://cdn.jsdelivr.net/gh/jaketrock/rb-c-stage@master/Readable_closure.js';
    s.src = 'https://cdn.jsdelivr.net/gh/jaketrock/newSprint@master/js/ns_opt.js';

    s.type = 'text/javascript';
    c.type = 'text/javascript';
    s.onload = function() {
        d.head.appendChild(c)
    };
    c.onload = function () {
        nsprint(new Readability(document.cloneNode(true)).parse().textContent)
    };
    d.head.appendChild(s);
}(document));
