async function verDetalhe(){
    let procura = await fetch("exemplo-02.json")
    let produtos = await procura.json()

    let piramideURL = new URLSearchParams(window.location.search)
    let idProduto = piramideURL.get("id")

    let inProduto = null
    for (let x in produtos){
        if (produtos[x].id == idProduto){
            inProduto = x
        }
    }
    
    document.title=produtos[inProduto].nome

    document.getElementById("detalhes").innerHTML += `
        <h3>${produtos[inProduto].nome}</h3>
        <img src="${produtos[inProduto].img[0]}" id="img-frame" height="280" width="auto" style="border: 2px solid #000; border-radius:10px" >
        <div class="mini-img" id="mini-img">

        </div>
      
    `

    for(let x of produtos[inProduto].img){
        document.getElementById("mini-img").innerHTML+=`
        <img src="${x}" class="miniatura" height="80" width="auto" style= "border: 2px solid #000; border-radius:5px" >
    `
    }

    let listaMiniaturas= document.getElementsByClassName("miniatura")
    for(let card of listaMiniaturas){
        card.addEventListener("mouseover",alteraImg)
    }
}

function alteraImg(){
    document.getElementById("img-frame").src = this.getAttribute("src")
}

verDetalhe()

/*const  fundoID =document.getElementById("moto");
fundoID.style.backgroundImage="url('https://i.pinimg.com/736x/11/95/63/11956381796b638c599e78813dc98f1d.jpg')"
  <p> ${produtos[inProduto].PotenciaMaxima}</p>
        <p> ${produtos[inProduto].TorqueMaximo}</p>
        <div class="grupoValores">
            <span>R$ ${(produtos[inProduto].valorsemDesconto).toFixed(2).replace("." , ",")}</span>        
        </div>*/