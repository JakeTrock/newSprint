   function spr(input, output=Array.from(document.getElementsByTagName('body'))[0].appendChild(document.createElement('div'))) {
       //TODO: add 15s back, 15s forward, better mobile support
        let wpm = localStorage.getItem('4f:04:82') || 200;
        let gtimeout = 0;
        let inner;
        let outer;
        let pgb;
        let pb;
        let wpmCounter;
        let timect;
        let play = false;
        const lCalc = (x) => (1000 / (wpm / 60)) * ((x.length / 5 - 1) * 0.5 + 1);
        const tCalc = (pos=0) => term.slice(pos).reduce((tmp, i) => tmp + lCalc(i), 0);
        const term = ["--3--", "--2--", "--1--"].concat(
            [].concat.apply([],Array.prototype.slice.call(input).map(r =>
            (r.href) ? r.innerHTML.link(r.href) : (r.innerHTML||r.value).split` `)).filter(n => n));
        let timeTotal = tCalc();
        const setWpm = (dif) => {
            if (+wpm + dif >= 0) {
                localStorage.setItem('4f:04:82', wpm = +wpm + dif);
                timeTotal = tCalc();
            }
            wpmCounter.value = wpm;
        };
        const tosec = (ms) => {
            let s = ((ms % 60000) / 1000).toFixed(0);
            return ~~(ms / 60000) + ":" + (s < 10 ? '0' : '') + s;
        };
        const nextWord = (pos) => {
            if (play) {
                let next = term[pos++];
                if(next){
                pgb.value = pos;
                if (next.length < 3 && term.length && term[term.length - 1].length < 6) {
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
            }
            }
        };
        const pause = () =>{
                play = !play;
                pgb.disabled=false;
                if (play)nextWord(pgb.value);
        };
        const esc = () =>{
          output.innerHTML = "";  
        };
        const sk = (skv) =>{
            pause();
            nextWord(Number(pgb.value)+skv);
            pause();
        };
        (() => {
            esc();
            outer = output.appendChild(document.createElement('div'));
            inner = outer.appendChild(document.createElement('div'));
            outer.style.cssText =
                "position:sticky;left:0px;height:10%;width:100%;background:#f5f5f5;font-size:70px;font-size: 5em;text-align:center;line-height:100px;flex-direction:row;justify-content:center;align-items:center;display:flex;border-top:3px solid;border-bottom:3px solid;";
            let temp = outer.appendChild(document.createElement('div'));
            temp.style.cssText =
                "width:3px;background:black;height:7px;position:absolute;top:0px;left:50%;";
            temp = outer.appendChild(document.createElement('div'));
            temp.style.cssText =
                "width:3px;background:black;height:7px;position:absolute;bottom:0px;left:50%;";
            pgb = outer.appendChild(document.createElement('input'));
            pgb.type="range";
            pgb.value=pgb.min=0;
            pgb.step=1;
            pgb.max=term.length;
            pgb.style.cssText =
                "width:100%;height:4px;position:absolute;bottom:0px;";//TODO:can't make it red
            pgb.disabled=true;
            pgb.addEventListener('change', () => {
                nextWord(pgb.value);
                inner.innerHTML=term[pgb.value];
            });
            let temp1 = outer.appendChild(document.createElement('div'));
            temp1.style.cssText =
                "position:absolute;left:10px;flex-direction:row;display:flex;align-items:center;top:5px;";
            temp = temp1.appendChild(document.createElement('button'));
            temp.style.cssText =
                "background:#eeeeee;color:black;border:none;font-size:10px;font-size: 0.25em;";
            temp.innerHTML = '-';
            temp.addEventListener('click', () => setWpm(-10));
            wpmCounter = temp1.appendChild(document.createElement('input'));
            wpmCounter.type = "text";
            wpmCounter.size = "2";
            wpmCounter.style.cssText =
                "font-size:10px;font-size: 0.25em;line-height:10px;height:50%;margin:10px;";
            wpmCounter.value = wpm;
            wpmCounter.addEventListener('blur', () => setWpm(wpmCounter.value-wpm));
            temp = temp1.appendChild(document.createElement('button'));
            temp.style.cssText =
                "background:#eeeeee;color:black;border:none;font-size:10px;font-size: 0.25em;";
            temp.innerHTML = '+';
            temp.addEventListener('click', () => setWpm(10));
            temp1 = outer.appendChild(document.createElement('div'));
            temp1.style.cssText =
                "position:absolute;right:10px;flex-direction:row;display:flex;align-items:center;top:5px;";
                
            temp = temp1.appendChild(document.createElement('button'));
            temp.style.cssText =
                "background:red;color:black;border:none;font-size:10px;font-size: 0.25em;";
            temp.innerHTML = '&#9194;&#xFE0E;';
            temp.addEventListener('click', () => sk(-wpm/4));
            
            temp = temp1.appendChild(document.createElement('button'));
            temp.style.cssText =
                "background:red;color:black;border:none;border-left: 1px solid black;font-size:10px;font-size: 0.25em;";
            temp.innerHTML = '&#9199;&#xFE0E;';
            temp.addEventListener('click', () => pause());
            
            temp = temp1.appendChild(document.createElement('button'));
            temp.style.cssText =
                "background:red;color:black;border:none;border-left: 1px solid black;font-size:10px;font-size: 0.25em;";
            temp.innerHTML = '&#9193;&#xFE0E;';
            temp.addEventListener('click', () => sk(wpm/4));
            temp = temp1.appendChild(document.createElement('button'));
            temp.style.cssText =
                "background:red;color:black;border:none;border-left:1px solid black;font-size:10px;font-size: 0.25em;";
            temp.innerHTML = '&#8635;&#xFE0E;';
            temp.addEventListener('click', () => nextWord(0));
            temp = temp1.appendChild(document.createElement('button'));
            temp.style.cssText =
                "background:red;color:black;border:none;border-left:1px solid black;font-size:10px;font-size: 0.25em;";
            temp.innerHTML = '_';
            temp.addEventListener('click', () => esc());
            timect = outer.appendChild(document.createElement('div'));
            timect.style.cssText =
                "position:absolute;right:10px;flex-direction:row;display:flex;align-items:center;bottom:5px;font-size:10px;font-size: 0.25em;height:15px;";
            timect.innerHTML = "0:00/" + tosec(timeTotal);
            inner.style.cssText = "display:inline-block;transform:translate(8%);";
            inner.innerHTML = 'Press play';
            outer.onkeydown = (e) => {
            switch (e.keyCode) {
                case 32:
                    pause();
                break;
                case 27:
                    esc();
                break;
                case 39:
                    sk(wpm/4);
                break;
                case 37:
                    sk(-wpm/4);
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
                sk(e.wheelDelta/12)
            });
        })();
    }
    window['nsprint'] = spr;
