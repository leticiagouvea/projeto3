let food;
let drink;
let candy;

let foodname;
let drinkname;
let candyname;
let foodprice;
let drinkprice;
let candyprice;

function bordaclick1(pratoSelecionado) {
    let click = document.querySelector('.borda');
    food = pratoSelecionado;
    foodname = food.querySelector('.food-name').innerText
    foodprice = food.querySelector('.food-price').innerHTML

    if (click !== null) {
        click.classList.remove('borda');
    }
    pratoSelecionado.classList.add('borda');

    pedidoSelecionado();
}

function checkAtivado(elemento) {
    let check = elemento.querySelector('.categoria1 .checkicon')
    let ativado = document.querySelector('.categoria1 .ativado')
    if (ativado !== null) {
        ativado.classList.remove('ativado')
    }
    check.classList.add('ativado')
}

function bordaclick2(bebidaSelecionada) {
    let click = document.querySelector('.categoria2 .borda');
    drink = bebidaSelecionada;
    drinkname = drink.querySelector('.drink-name').innerText
    drinkprice = drink.querySelector('.drink-price').innerHTML

    if (click !== null) {
        click.classList.remove('borda');
    }
    bebidaSelecionada.classList.add('borda');

    pedidoSelecionado();
} 

function checkAtivado2(elemento) {
    let check = elemento.querySelector('.categoria2 .checkicon')
    let ativado = document.querySelector('.categoria2 .ativado')
    if (ativado !== null) {
        ativado.classList.remove('ativado')
    }
    check.classList.add('ativado')
}

function bordaclick3(doceSelecionado) {
    let click = document.querySelector('.categoria3 .borda');
    candy = doceSelecionado;
    candyname = candy.querySelector('.candy-name').innerText
    candyprice = candy.querySelector('.candy-price').innerHTML

    if (click !== null) {
        click.classList.remove('borda');
    }
    doceSelecionado.classList.add('borda');

    pedidoSelecionado();
}

function checkAtivado3(elemento) {
    let check = elemento.querySelector('.categoria3 .checkicon')
    let ativado = document.querySelector('.categoria3 .ativado')
    if (ativado !== null) {
        ativado.classList.remove('ativado')
    }
    check.classList.add('ativado')
}

function pedidoSelecionado() {

    if (food && drink && candy) {

        let botao = document.querySelector('.botaoconcluir')
        let p = document.querySelector('.botaoconcluir p')
        botao.classList.add('botaoselecionado')

        let price1 = Number(foodprice.substr(3))
        let price2 = Number(drinkprice.substr(3))
        let price3 = Number(candyprice.substr(3))
        let valorTotal = price1 + price2 + price3

        let message = encodeURIComponent(`Olá, gostaria de fazer o pedido:
        - Prato: ${foodname}
        - Bebida: ${drinkname}
        - Sobremesa: ${candyname}
        Total: R$ ${valorTotal.toFixed(2)}`)

        p.innerHTML = `<a href="https://wa.me/5521984054853?text=${message}">Concluir pedido</a>`
    }
} 