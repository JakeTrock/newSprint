(function(a){var b=a.createElement('script'),c=a.createElement('script');c.src='https://cdn.jsdelivr.net/gh/mozilla/readability/Readability.js';b.src='https://cdn.jsdelivr.net/gh/jaketrock/newSprint@e116810/js/ns_opt.js';b.type='text/javascript';c.type='text/javascript';b.onload=a.head.appendChild(c);c.onload=function(){nsprint((new Readability(document.cloneNode(!0))).parse().textContent)};a.head.appendChild(b)})(document);