let total = 0;
function adicionar() {
    // recuperar o valor: nome do produto, quanitade e valor
    let produto = document.getElementById('produto').value;
    let nome = produto.split('-')[0];
    let valor = produto.split('R$')[1];
    let quanitade = document.getElementById('quantidade').value;
    // calcular o preço com base na quantidade
    if (quanitade == '') {
        quanitade = 1;
    }

    let subtotal = valor * quanitade;

    // adicionar o produto no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quanitade}x</span> ${nome} <span class="texto-azul">R$${subtotal}</span>
    </section>`
    // adicionar o total do carrinho
    total = total + subtotal
    let totalGeral = document.getElementById('valor-total')
    totalGeral.innerHTML = `<span class="texto-azul" id="valor-total">R$${total}</span>`
    // Limpa a quantidade
    quanitade = document.getElementById('quantidade').value = '';
    
}
function limpar(){
    total = 0;
    totalGeral = document.getElementById('valor-total').innerHTML = 'R$0,00';
    carrinho = document.getElementById('lista-produtos').innerHTML = '';
    quanitade = document.getElementById('quantidade').value = '';

}