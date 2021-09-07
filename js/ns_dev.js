function spr(
  input,
  output = document.body.appendChild(document.createElement("div")),
  css = "https://cdn.jsdelivr.net/gh/jaketrock/newSprint@master/css/ns_prod.css"
) {
  _: "© Jacob Trock";
  if (!window.nsht) {
    const head = document.head.appendChild(document.createElement("link"));
    head.rel = "stylesheet";
    head.href = css;
  }
  let wpm =
    localStorage.getItem("nsp+") || localStorage.setItem("nsp+", "200") || 200;
  let gtimeout = 0;
  let inner;
  let outer;
  let pgb;
  let ppb;
  let wpmCounter;
  let timect;
  let play = false;
  const lCalc = (x) => (1000 / (wpm / 60)) * ((x.length / 5 - 1) * 0.5 + 1);
  const tCalc = (pos = 0) =>
    term.slice(pos).reduce((tmp, i) => tmp + lCalc(i), 0);
  const term =
    typeof input == "string"
      ? input.split` `
          .filter((n) => n)
          .map((r) =>
            r.includes("](")
              ? `<a href=${r.split(/[()]/)[1]}>${r.split(/\[(.*?)\]/)[1]}</a>`
              : r
          )
      : [].concat
          .apply(
            [],
            Array.prototype.slice
              .call(input)
              .map((r) =>
                r.href
                  ? r.innerHTML.link(r.href)
                  : (r.innerHTML || r.value).split` `
              )
          )
          .filter((n) => n);
  let timeTotal = tCalc();
  const setWpm = (dif) => {
    if (+wpm + dif >= 0) {
      localStorage.setItem("nsp+", (wpm = +wpm + dif));
      timeTotal = tCalc();
    }
    wpmCounter.value = wpm;
  };
  const tosec = (ms) => {
    const s = ((ms % 60000) / 1000).toFixed(0);
    return ~~(ms / 60000) + ":" + (s < 10 ? "0" : "") + s;
  };
  const nextWord = (pos) => {
    if (play && term.length) {
      let next = term[pos++];
      if (next) {
        pgb.value = pos;
        if (next.length < 3) {
          next += " " + term[pos++];
        }
        inner.innerHTML = next;
        timect.innerHTML =
          tosec(timeTotal - tCalc(pos)) + "/" + tosec(timeTotal);
        let timeout = setTimeout(() => {
          if (timeout !== gtimeout) {
            return;
          }
          nextWord(pos);
        }, lCalc(next));
        gtimeout = timeout;
      } else {
        clearTimeout(gtimeout);
        inner.innerHTML = "&#8635;&#xFE0E;";
        inner.addEventListener("click", () => nextWord(0));
      }
    }
  };
  const pause = () => {
    play = !play;
    ppb.innerHTML = `${play ? "&#9208;" : "&#9654;"}&#xFE0E;`;
    pgb.disabled = false;
    if (play) nextWord(pgb.value);
    else localStorage.setItem("nstcd", pgb.value);
  };
  const esc = () => {
    window.nsht = output.innerHTML = "";
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
  const kd = (e) => {
    switch (e.key) {
      case " ":
        pause();
        break;
      case "Escape":
        esc();
        break;
      case "ArrowRight":
        sk(term.length / wpm);
        break;
      case "ArrowLeft":
        sk(-term.length / wpm);
        break;
      case "ArrowUp":
        setWpm(10);
        break;
      case "ArrowDown":
        setWpm(-10);
        break;
    }
  };
  document.body.onwheel = (e) => sk(e.deltaY);
  document.body.onkeydown = (e) => kd(e);
  (() => {
    esc();
    outer = output.appendChild(document.createElement("div"));
    window.nsht = outer;
    inner = outer.appendChild(document.createElement("div"));
    outer.className = "nsp_out";
    pgb = outer.appendChild(document.createElement("input"));
    pgb.type = "range";
    pgb.value = pgb.min = 0;
    pgb.step = 1;
    pgb.max = term.length;
    pgb.className = "nsp_sli";
    pgb.disabled = true;
    pgb.addEventListener("change", () => {
      nextWord(pgb.value);
      inner.innerHTML = term[pgb.value];
    });
    let temp1 = outer.appendChild(document.createElement("div"));
    temp1.className = "nsp_wdu";

    let temp = temp1.appendChild(document.createElement("button"));
    temp.className = "nsp_btn";
    temp.innerHTML = "-";
    temp.addEventListener("click", () => setWpm(-10));

    wpmCounter = temp1.appendChild(document.createElement("input"));
    wpmCounter.type = "text";
    wpmCounter.size = "2";
    wpmCounter.className = "nsp_wad";
    wpmCounter.value = wpm;
    wpmCounter.addEventListener("blur", () => setWpm(wpmCounter.value - wpm));

    temp = temp1.appendChild(document.createElement("button"));
    temp.className = "nsp_btn";
    temp.innerHTML = "+";
    temp.addEventListener("click", () => setWpm(10));

    temp1 = outer.appendChild(document.createElement("div"));
    temp1.className = "nsp_mcl";

    ppb = temp1.appendChild(document.createElement("button"));
    ppb.className = "nsp_btn";
    ppb.innerHTML = "&#9654;&#xFE0E;";
    ppb.addEventListener("click", () => pause());

    temp = temp1.appendChild(document.createElement("button"));
    temp.className = "nsp_btn nsp_bl";
    temp.innerHTML = "&#9194;&#xFE0E;";
    temp.addEventListener("click", () => sk(-wpm / 4));

    timect = outer.appendChild(document.createElement("div"));
    timect.className = "nsp_tmr";
    timect.innerHTML = "0:00/" + tosec(timeTotal);

    temp = temp1.appendChild(document.createElement("button"));
    temp.className = "nsp_btn nsp_bl";
    temp.innerHTML = "&#9193;&#xFE0E;";
    temp.addEventListener("click", () => sk(wpm / 4));

    temp = temp1.appendChild(document.createElement("button"));
    temp.className = "nsp_btn nsp_bl";
    temp.innerHTML = "&times;&#xFE0E;";
    temp.addEventListener("click", () => esc());

    inner.className = "nsp_inr";
    inner.innerHTML = "&#9654;&#xFE0E;";
    inner.addEventListener("click", () => pause());
  })();
  pgb.value =
    Number(localStorage.getItem("nstcd")) ||
    localStorage.setItem("nstcd", 0) ||
    0;
}
window["nsprint"] = spr;
