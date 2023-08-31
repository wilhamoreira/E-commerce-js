import { adicionarAoCarrinho } from "./menuCarrinho"
import { catalago } from "./utilidades"
export function renderizarCatalago(){

    for (const produtoCatalago of catalago ){
    
        const cartaoProduto = `<div class="border-solid shadow-xl shadow-slate-400 rounded-lg w-48 m-2 flex flex-col justify-between p-2 group" id="card-produto-${produtoCatalago.id}">
        <img
            src="./assets/img/${produtoCatalago.imagem}"
            class="group-hover:scale-110 duration-300 my-3 rounded-lg"
            alt="Produto" 
        />
        <p class='text-sm'>${produtoCatalago.marca}</p>
        <p class='text-sm'>${produtoCatalago.nome}</p>
        <p class='text-sm'>$${produtoCatalago.preco}</p>
        <button id='adicionar-${produtoCatalago.id}' class="bg-slate-950 text-slate-200 flex justify-center p-1 hover:bg-slate-700"><i class="fa-solid fa-cart-plus"></i></button>
        </div>`
        
        document.getElementById("container-produto").innerHTML += cartaoProduto
        
    }

    for(const produtoCatalago of catalago){
        document.getElementById(`adicionar-${produtoCatalago.id}`).addEventListener("click", () => adicionarAoCarrinho(produtoCatalago.id))
    }
}