async function busca(){
    let procura = await fetch("exemplo-02.json")
    let produtos = await procura.json()

    let listaDiv = document.getElementById("lista-card")

    for(let produto of produtos){
        listaDiv.innerHTML += `
            <div class="card" data-id="${produto.id}">
                <div class="grupo-img">
                    <img src="${produto.img[0]}" width="250" height="auto">
                </div>
                    <div class="textos">
                        <h4> ${produto.nome} </h4>
                    </div>
                        <p> Cilindrada: ${produto.Cilindrada}.</p>
                        <p>  Potência Máxima: ${produto.PotenciaMaxima}.</p>
                        <p> Torque Máximo: ${produto.TorqueMaximo}.</p>
                        <p> Combustível: ${produto.Combustivel} .</p>
                    <span class="semDesconto">R$ ${(produto.valorsemDesconto).toFixed(2).replace("." , ",")} </span> 
            </div>   
        `
    }
    let carrosCard = document.querySelectorAll(".card")

    for(let card of carrosCard){
        card.addEventListener("click",CliqueiCard)
    } 
}
busca()

function CliqueiCard(){
    let BMW = this.getAttribute("data-id")
    window.location.href="detalhes.html?id=" + BMW
}

const  fundoID =document.getElementById("moto");
fundoID.style.backgroundImage="url('https://i.pinimg.com/736x/11/95/63/11956381796b638c599e78813dc98f1d.jpg')"
