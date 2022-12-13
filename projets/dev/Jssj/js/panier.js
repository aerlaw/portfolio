function test() {
    const test = document.getElementById('prix-panier')
    const test2 = document.querySelector('#prix-tva')
    const test3 = document.querySelector('#prix-total')

    let panier = 0
    listeProduits = document.querySelectorAll(".list-group-item")

    listeProduits.forEach(produit => {
        let prod = produit.querySelector('.article-quantity').innerHTML
        let qte = produit.querySelector('.article-price').innerHTML
        const btn = produit.querySelector('.suppri')
        panier = panier + (prod * qte)
        test.innerHTML = Math.round(panier)
        test2.innerHTML = Math.round((parseInt(test.innerHTML) * 0.15) * 100) / 100
        test3.innerHTML = Math.round((parseInt(test.innerHTML) * 1.15) * 100) / 100
        btn.onclick = (event => {
            supprimer(produit)
        })
    })
}

const supprimer = (article) => {
    let quantite = parseInt(article.querySelector('.article-quantity').innerText)
    quantite--
    article.querySelector('.article-quantity').innerText = quantite
    test()

    if (quantite == 0) {
        article.remove()
    }

}

test()