    window.addEventListener('DOMContentLoaded', (event) => {
        document.getElementById("lcipl").innerHTML = " in " + Math.ceil(Array.prototype.slice.call(document.getElementsByClassName("sprtxt")).map(r => r.innerHTML).join(" ").split(" ").reduce((tmp, i) =>
            tmp + (1000 / ((localStorage.getItem('4f:04:82') || 200) / 60)) * ((i.length / 5 - 1) * 0.5 + 1), 0) / 60000) + " minutes or less.";
    });

    function spr(input) {
        let wpm = localStorage.getItem('4f:04:82') || 200;
        let gtimeout = 0;
        let inner;
        let outer;
        let pgb;
        let pb;
        let wpmCounter;
        let timect;
        let play = false;
        let getText = () => ["--3--", "--2--", "--1--"].concat(Array.prototype.slice.call(input).map(r => (r.href) ? r.innerHTML + "&!$!&" + r.href : (r.innerHTML||r.value)).join(" ")
            .split(" "));
        let tCalc = (pos) => term.slice(pos).reduce((tmp, i) => tmp + (1000 / (wpm / 60)) * ((i.length / 5 - 1) * 0.5 + 1), 0);
        let term = getText();
        let wordIndex = term.length;
        let timeRem = timeTotal = tCalc(0);
        let setWpm = (dif) => {
            if (parseInt(wpm, 10) + dif >= 0) {
                wpm = parseInt(wpm, 10) + dif;
                timeTotal = tCalc(0);
                wpmCounter.value = wpm;
                localStorage.setItem('4f:04:82', wpm);
            }
        };
        let tosec = (ms) => {
            let s = ((ms % 60000) / 1000).toFixed(0);
            return Math.floor(ms / 60000) + ":" + (s < 10 ? '0' : '') + s;
        };
        (() => {
            var node = document.querySelector(".sprFocus");
            node.innerHTML = "";
            outer = document.querySelector(".sprFocus").appendChild(document.createElement('div'));
            inner = outer.appendChild(document.createElement('div'));
            outer.style.cssText =
                "position:fixed;top:calc(50% - 50px);margin:auto;height:100px;min-width:800px;background:#f5f5f5;left:calc(50% - 400px);font-size:70px;text-align:center;line-height:100px;flex-direction:row;justify-content:center;align-items:center;display:flex;border-top:3px solid;border-bottom:3px solid;";
            let temp = outer.appendChild(document.createElement('div'));
            temp.style.cssText =
                "width:3px;background:black;height:7px;position:absolute;top:0px;left:50%;";
            pgb = outer.appendChild(document.createElement('input'));
            pgb.type="range";
            pgb.min=0;
            pgb.step=1;
            pgb.max=term.length;
            pgb.value=0;
            pgb.style.cssText =
                "width:800px;height:4px;position:absolute;bottom:0px;";//TODO:can't make it red
            pgb.disabled=true;
            pgb.addEventListener('change', () => {
                nextWord(pgb.value);
                inner.innerHTML=term[pgb.value];
            });
            temp = outer.appendChild(document.createElement('div'));
            temp.style.cssText =
                "width:3px;background:black;height:7px;position:absolute;bottom:0px;left:50%;";
            let temp1 = outer.appendChild(document.createElement('div'));
            temp1.style.cssText =
                "position:absolute;left:10px;flex-direction:row;display:flex;align-items:center;top:5px;";
            temp = temp1.appendChild(document.createElement('button'));
            temp.style.cssText =
                "background:#eeeeee;color:black;border:none;font-size:10px;";
            temp.innerHTML = '-';
            temp.addEventListener('click', () => setWpm(-10));
            wpmCounter = temp1.appendChild(document.createElement('input'));
            wpmCounter.type = "text";
            wpmCounter.size = "2";
            wpmCounter.style.cssText =
                "font-size:10px;line-height:10px;height:10px;margin:10px;";
            wpmCounter.value = wpm;
            wpmCounter.addEventListener('input', () => wpm = wpmCounter.value);
            temp = temp1.appendChild(document.createElement('button'));
            temp.style.cssText =
                "background:#eeeeee;color:black;border:none;font-size:10px;";
            temp.innerHTML = '+';
            temp.addEventListener('click', () => setWpm(10));
            temp1 = outer.appendChild(document.createElement('div'));
            temp1.style.cssText =
                "position:absolute;right:10px;flex-direction:row;display:flex;align-items:center;top:5px;";
            pb = temp1.appendChild(document.createElement('button'));
            pb.style.cssText =
                "background:red;color:black;border:none;font-size:10px;height:20px;";
            pb.innerHTML = '&#9199;';
            pb.addEventListener('click', () => {
                play = !play;
                pgb.disabled=false;
                if (play)nextWord(pgb.value);
            });
            temp = temp1.appendChild(document.createElement('button'));
            temp.style.cssText =
                "background:red;color:black;border:none;border-left:1px solid black;font-size:10px;height:20px;";
            temp.innerHTML = '&#8635;';
            temp.addEventListener('click', () => {
                timeRem = timeTotal = tCalc(0);
                nextWord(0);
            });
            temp = temp1.appendChild(document.createElement('button'));
            temp.style.cssText =
                "background:red;color:black;border:none;border-left:1px solid black;font-size:10px;height:20px;";
            temp.innerHTML = '_';
            temp.addEventListener('click', () => {
                 node.innerHTML = "";
            });
            timect = outer.appendChild(document.createElement('div'));
            timect.style.cssText =
                "position:absolute;right:10px;flex-direction:row;display:flex;align-items:center;bottom:5px;font-size:10px;height:15px;";
            timect.innerHTML = tosec(timeTotal - timeRem) + "/" + tosec(timeTotal);
            inner.style.cssText = "display:inline-block;transform:translate(8%);";
            inner.innerHTML = 'Press play';
        })();
        let nextWord = (pos) => {
            if (play) {
                let next = term[pos++];
                pgb.value = pos;
                if (next.length < 3 && term.length && term[term.length - 1].length < 6) {
                    next += ' ' + term[pos++];
                }
                if (next.indexOf('&!$!&') !== -1) {
                    inner.innerHTML = "";
                    let tmp = inner.appendChild(document.createElement('a'));
                    let tmp2 = next.split("&!$!&");
                    tmp.innerHTML = tmp2[0];
                    tmp.href = tmp2[1];
                } else inner.innerHTML = next;

                let duration = (1000 / (wpm / 60)) * ((next.length / 5 - 1) * 0.5 + 1);
                timeRem = tCalc(pos);
                timect.innerHTML = tosec(timeTotal - timeRem) + "/" + tosec(timeTotal);
                let timeout = setTimeout(() => {
                    if (term.length) {
                        if (timeout !== gtimeout) {
                            return;
                        }
                        nextWord(pos);
                    } else {
                        clearTimeout(gtimeout);
                    }
                }, duration);
                gtimeout = timeout;
            }
        };
    }
    window['nsprint'] = spr;
