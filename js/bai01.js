function validate(ele) {
    if (ele.value === "") {
        ele.classList.remove("error");
        setTimeout(() => ele.classList.add("error"), 10);
        return true;
    }

    return false;
}

function giaiBac2() {
    let a = document.getElementById("aId");
    let b = document.getElementById("bId");
    let c = document.getElementById("cId");
    if (a !== null && b !== null && c !== null) {
        if (validate(a) === true || validate(b) === true || validate(c) === true)
            return;

        a = parseFloat(a.value);
        b = parseFloat(b.value);
        c = parseFloat(c.value);

        let kq = "Kết quả tại đây...";
        if (a == 0) {
            // bx + c = 0
        } else {
            let delta = "";
            // ...
        }

        let d = document.getElementById("kq");
        d.innerHTML = `<h2 style="color:red;">${kq}</h2>`
    }
}

function doiTien() {
    let t = document.getElementById("stId");
    let dv = document.getElementById("dvId");
    if (t !== null && dv !== null) {
        if (validate(t) === true || validate(dv) === true)
            return;

        t = parseFloat(t.value);
        dv = dv.value;
        let k;
        switch (dv) {
            case "usd":
                k = t/22000;
                break;
            case "eur":
                k = t/26000;
                break;
            case "aud":
                k = t/16000;
                break;
        }

        let d = document.getElementById("kq2");
        d.innerHTML = `${t} VNĐ = ${k.toFixed(2)} ${dv.toUpperCase()}`;
    }
}

window.onload = function() {
    let images = document.querySelectorAll(".thumb img");
    for (let im of images)
        im.onmousemove = function() {
            let d = document.getElementById("main");
            d.src = this.src;
        }

    let buttons = document.querySelectorAll(".btn button");
    for (let b of buttons)
        b.onclick = function() {
            let c = this.getAttribute("rel");
            let d = document.getElementById("main");
            d.src = `images/galaxys8/${c}_1.jpg`;

            for (let i = 0; i < images.length; i++)
                images[i].src = `images/galaxys8/${c}_${i+1}.jpg`;
        }
}