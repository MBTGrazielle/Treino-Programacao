// programa para organizar pedidos de um delivery

const filaDePedidos = ["pedido 12", "pedido 13", "pedido 14"]

//a)add um novo pedido(pedido 15) no FINAL da fila! push()
//b)retirar o pedido 12 da fila de pedidos INÍCIO! shift()

filaDePedidos.push('pedido 15')
filaDePedidos.shift()

console.log(filaDePedidos)