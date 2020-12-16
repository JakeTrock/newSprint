function spr(input, output = document.body.appendChild(document.createElement('div')), css = "https://cdn.jsdelivr.net/gh/jaketrock/newSprint/css/ns_prod.css") {
    const head = document.head.appendChild(document.createElement('link'));
    head.rel = "stylesheet";
    head.href = css;
    let wpm = localStorage.getItem('4f:04:82') || 200;
    let gtimeout = 0;
    let inner;
    let outer;
    let pgb;
    let wpmCounter;
    let timect;
    let play = false;
    const lCalc = (x) => (1000 / (wpm / 60)) * ((x.length / 5 - 1) * 0.5 + 1);
    const tCalc = (pos = 0) => term.slice(pos).reduce((tmp, i) => tmp + lCalc(i), 0);
    const term = (typeof input == "string") ? input.split ` `.filter(n => n) : ["--3--", "--2--", "--1--"].concat(
        [].concat.apply([], Array.prototype.slice.call(input).map(r =>
            (r.href) ? r.innerHTML.link(r.href) : (r.innerHTML || r.value).split ` `)).filter(n => n));
    let timeTotal = tCalc();
    const setWpm = (dif) => {
        if (+wpm + dif >= 0) {
            localStorage.setItem('4f:04:82', wpm = +wpm + dif);
            timeTotal = tCalc();
        }
        wpmCounter.value = wpm;
    };
    const tosec = (ms) => {
        const s = ((ms % 60000) / 1000).toFixed(0);
        return ~~(ms / 60000) + ":" + (s < 10 ? '0' : '') + s;
    };
    const nextWord = (pos) => {
        if (play && term.length) {
            let next = term[pos++];
            if (next) {
                pgb.value = pos;
                if (next.length < 3) {
                    next += ' ' + term[pos++];
                }
                inner.innerHTML = next;
                timect.innerHTML = tosec(timeTotal - tCalc(pos)) + "/" + tosec(timeTotal);
                let timeout = setTimeout(() => {
                    if (timeout !== gtimeout) {
                        return;
                    }
                    nextWord(pos);
                }, lCalc(next));
                gtimeout = timeout;
            } else {
                clearTimeout(gtimeout);
                inner.innerHTML = '&#8635;&#xFE0E;';
                inner.addEventListener('click', () => nextWord(0));
            }
        }
    };
    const pause = () => {
        play = !play;
        pgb.disabled = false;
        if (play) nextWord(pgb.value);
    };
    const esc = () => {
        output.innerHTML = "";
    };
    const sk = (skv) => {
        const np = ~~Number(pgb.value) + skv;
        pause();
        switch (np) {
            case np < 0:
                pgb.value = 0;
                break;
            case np > term.length:
                pgb.value = term.length;
                break;
            default:
                pgb.value = np;
                break;
        }
        pause();
    };
    (() => {
        esc();
        outer = output.appendChild(document.createElement('div'));
        inner = outer.appendChild(document.createElement('div'));
        outer.className = "nsp_out";
        pgb = outer.appendChild(document.createElement('input'));
        pgb.type = "range";
        pgb.value = pgb.min = 0;
        pgb.step = 1;
        pgb.max = term.length;
        pgb.className = "nsp_sli";
        pgb.disabled = true;
        pgb.addEventListener('change', () => {
            nextWord(pgb.value);
            inner.innerHTML = term[pgb.value];
        });
        let temp1 = outer.appendChild(document.createElement('div'));
        temp1.className = "nsp_wdu";

        let temp = temp1.appendChild(document.createElement('button'));
        temp.className = "nsp_wb";
        temp.innerHTML = '-';
        temp.addEventListener('click', () => setWpm(-10));

        wpmCounter = temp1.appendChild(document.createElement('input'));
        wpmCounter.type = "text";
        wpmCounter.size = "2";
        wpmCounter.className = "nsp_wad";
        wpmCounter.value = wpm;
        wpmCounter.addEventListener('blur', () => setWpm(wpmCounter.value - wpm));

        temp = temp1.appendChild(document.createElement('button'));
        temp.className = "nsp_wb";
        temp.innerHTML = '+';
        temp.addEventListener('click', () => setWpm(10));

        temp1 = outer.appendChild(document.createElement('div'));
        temp1.className = "nsp_mcl";

        temp = temp1.appendChild(document.createElement('button'));
        temp.className = "nsp_pb";
        temp.innerHTML = '&#9199;&#xFE0E;';
        temp.addEventListener('click', () => pause());

        temp = temp1.appendChild(document.createElement('button'));
        temp.className = "nsp_btn";
        temp.innerHTML = '&#9194;&#xFE0E;';
        temp.addEventListener('click', () => sk(-wpm / 4));

        timect = outer.appendChild(document.createElement('div'));
        timect.className = "nsp_tmr";
        timect.innerHTML = "0:00/" + tosec(timeTotal);

        temp = temp1.appendChild(document.createElement('button'));
        temp.className = "nsp_btn";
        temp.innerHTML = '&#9193;&#xFE0E;';
        temp.addEventListener('click', () => sk(wpm / 4));

        temp = temp1.appendChild(document.createElement('button'));
        temp.className = "nsp_btn";
        temp.innerHTML = '&times;&#xFE0E;';
        temp.addEventListener('click', () => esc());

        inner.className = "nsp_inr";
        inner.innerHTML = 'Press play';
        inner.addEventListener('click', () => pause());
        outer.onkeydown = (e) => {
            switch (e.keyCode) {
                case 32:
                    pause();
                    break;
                case 27:
                    esc();
                    break;
                case 39:
                    sk(wpm / 4);
                    break;
                case 37:
                    sk(-wpm / 4);
                    break;
                case 38:
                    setWpm(10)
                    break;
                case 40:
                    setWpm(-10)
                    break;
            }
        };
        outer.addEventListener('wheel', (e) => {
            sk(e.wheelDelta / 12)
        });
    })();
}
window['nsprint'] = spr;