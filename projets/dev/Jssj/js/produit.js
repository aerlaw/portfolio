btnplus = document.querySelector("#btn-plus");
btnqtte = document.querySelector("#btn-quantity");
btnmoins = document.querySelector("#btn-moins");
bigimg = document.querySelector("#img-principale");
img1 = document.querySelector(".img1");
img2 = document.querySelector(".img2");
img3 = document.querySelector(".img3");
img4 = document.querySelector(".img4");
txt = document.querySelector("#avis")

btnplus.addEventListener("click", function(event) {
    console.log(btnqtte.innerHTML);
    btnqtte.innerHTML = parseInt(btnqtte.innerText) + 1;
    console.log(btnqtte.innerHTML);
});

btnmoins.addEventListener("click", function(event) {
    console.log(btnqtte.innerHTML);
    if (btnqtte.innerHTML > 0) {
        btnqtte.innerHTML = parseInt(btnqtte.innerText) - 1;
    }
    console.log(btnqtte.innerHTML);
});
img1.addEventListener("click", function(event) {
    bigimg.src = img1.src;
});
img2.addEventListener("click", function(event) {
    bigimg.src = img2.src;
});
img3.addEventListener("click", function(event) {
    bigimg.src = img3.src;
});
img4.addEventListener("click", function(event) {
    bigimg.src = img4.src;
});

const input = document.querySelector("input");

input.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
        console.log(Date() + "\nText : \n" + event.target.value)
    }
});