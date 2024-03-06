let totalGeral
limpar()

function adicionar() {
    let produto = document.getElementById('produto').value
    let nomeProduto = produto.split('-')[0]
    let valorUnitario = produto.split('R$')[1]
    let quantidade = document.getElementById('quantidade').value
    if (quantidade < 1) {
        alert('Quantidade de produtos inválida')
        return 
    }
    let subtotal = quantidade * valorUnitario
    let carrinho = document.getElementById('lista-produtos')
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subtotal}</span>
  </section>`

    totalGeral = subtotal + totalGeral
    let campoTotal = document.getElementById('valor-total')
    campoTotal.textContent = `R$${totalGeral}`
}

function limpar() {
    totalGeral = 0
    document.getElementById('quantidade').value = 0
    document.getElementById('lista-produtos').innerHTML = ''
    document.getElementById('valor-total').textContent = 'R$ 0'
}