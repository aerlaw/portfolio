function rab() {
    document.getElementById('zone_affichage').value = "";
}

function calcul() {
    var calcul = document.getElementById("zone_affichage");
    try {
        calcul.value = eval(calcul.value);
    } catch (e) {
        alert("I am in trouble... HELP!");
    }
}

function affiche(btn) {
    document.getElementById("zone_affichage").value += btn.value;
}

function init() {
    var output = document.getElementsByClassName("bouton_simple");
    for (let i = 0; i < output.length; i++) {
        let btn = output[i];
        btn.setAttribute('onclick', 'affiche(this)');
    }
}

function plusmoins() {
    var pm = document.getElementById('zone_affichage');
    var minus = "-";
    if (pm.value.charAt(0) == "-") {
        pm.value = pm.value.substring(1);
    } else {
        pm.value = "-" + pm.value;
    }
}

function range_memory() {
    var me = document.getElementById('zone_affichage');
    memory = me.value;
}

function affiche_memory() {
    if (memory != "") {
        var ze = document.getElementById('zone_affichage');
        ze.value += memory;
    }
}

function raz_memory() {
    memory = undefined;
}

edition = false;

function mode_edition() {
    edition = true;
    var btn_edition = document.getElementById('E');
    btn_edition.style.color = 'red';
    btn_edition.setAttribute('onclick', 'mode_calcul()');
    var btn_libre = document.getElementsByClassName('bouton_libre');
    for (let i = 0; i < btn_libre.length; i++) {
        let btn = btn_libre[i];
        btn.removeAttribute('onclick');
        btn.setAttribute('ondblclick', 'edit(this)');
    }
}

function mode_calcul() {
    edition = false;
    var btn_edition = document.getElementById('E');
    btn_edition.style.color = 'black';
    btn_edition.setAttribute('onclick', 'mode_edition()');
    var btn_libre = document.getElementsByClassName('bouton_libre');
    for (let i = 0; i < btn_libre.length; i++) {
        let btn = btn_libre[i];
        btn.removeAttribute('ondblclick');
        btn.setAttribute('onclick', 'affiche(this)');
        btn.setAttribute('type', 'button');
    }
}

function edit(btn) {
    btn.setAttribute('type', 'text');
    btn.setAttribute('ondblclick', 'fix(this)');
}

function fix(btn) {
    btn.setAttribute('type', 'button');
    btn.setAttribute('ondblclick', 'edit(this)');
}

function move(btn) {
    var fc = document.getElementById('calc');
    if (btn.parentNode.isSameNode(fc.firstElementChild)) {
        fc.lastElementChild.insertAdjacentElement('afterend', btn.parentNode);
    } else {
        fc.firstElementChild.insertAdjacentElement('beforebegin', btn.parentNode);
    }
}

function reverseNumber(n) {
    return n.split('').reverse().join('');
}

function isPalindrome(x) {
    return toLowerCase(x == reverseNumber(x));
}