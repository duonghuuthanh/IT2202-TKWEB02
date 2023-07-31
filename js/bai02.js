function loadCates() {
    fetch("data/categories.json").then(res => res.json()).then(data => {
        let h = "";
        for (let c of data) {
            h += `<li><a href="#">${c.name}</a></li>`;
        }

        // let e = document.getElementById("menu");
        // if (e !== null)
        //     e.innerHTML += h;
        let e = document.querySelector("#menu :first-child");
        e.insertAdjacentHTML("afterend", h);
    })
}

function loadProducts() {
    fetch("data/products.json").then(res => res.json()).then(data => {
        let h = "";
        for (let p of data) {
            h += `
            <div class="product">
                <div>
                    <div><img src="${p.image}" alt="iPhone" /></div>
                    <h3>${p.name}</h3>
                    <p>${p.price} VNĐ</p>
                    <a href="javascript:;" class="del">&times;</a>
                </div>
            </div>
            `;
        }
        let e = document.getElementById("products");
        if (e !== null)
            e.innerHTML = h;


        let buttons = document.getElementsByClassName("del");
        for (let b of buttons)
            b.addEventListener("click", function() {
                if (confirm("Bạn chắc chắn xóa không?") === true)
                    this.parentNode.parentNode.remove();
            });

    })
}

window.onload = () => {
    loadCates();
    loadProducts();

    let k = document.getElementById("kw");
    if (k !== null)
        k.addEventListener("blur", function() {
            this.classList.toggle("error");
        })

    let s = document.querySelector(".show");
    s.onclick = function() {
        let m = document.getElementById("menu");
        m.classList.add("show-nav");
    }

    let c = document.querySelector(".close");
    c.onclick = function() {
        let m = document.getElementById("menu");
        m.classList.remove("show-nav");
    }
}
