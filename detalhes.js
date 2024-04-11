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
        <div class="video">
            <img src="${produtos[inProduto].img[0]}" id="img-frame" height="280" width="auto" style="border: 2px solid #000; border-radius:10px" >
        <iframe width="501" height="284" src="${produtos[inProduto].video}" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
        </iframe>
        </div>
        <div class="mini-img" id="mini-img"> </div>


    `

    document.getElementById("detalhes").innerHTML +=`
        <div class="hello">
            <div class="principal01">
                <div class="product-image">
                    <img src="https://www.honda.com.br/motos/honda-store/sites/honda_store/files/styles/preview_product/public/2023-01/AMARELO_1.jpg.webp?itok=jE-10jBe" alt="Capacete Honda Twister Special Edition" height="350px">
                </div>
                <div class="oii">
                        <p class="product-title">Capacete Honda Twister Special Edition</p>
                    <div class="valor">
                        <p class="product-price">R$ 780,00</p>
                    </div>
                </div> 
            </div>

            <div class="principal01">
                <div class="product-image">
                    <img src="https://www.honda.com.br/motos/honda-store/sites/honda_store/files/styles/preview_product/public/2023-01/honda-store-vestuario-cal%C3%A7a-prote%C3%A7%C3%A3o-estonada-1.webp?itok=KWF-MSG7" alt="Calça de Proteção Honda" height="350px">
                </div>
                    <div class="oii">
                        <p class="product-title">Calça de Proteção Honda</p>
                    <div class="valor">
                        <p class="product-price">R$ 511,50</p>
                    </div>
                </div>
            </div>

            <div class="principal01">
                <div class="product-image">
                    <img src="https://www.honda.com.br/motos/honda-store/sites/honda_store/files/styles/preview_product/public/2023-01/honda-store-%20jaqueta-honda-summer-evolution-preto-vermelha-1_0.png.webp?itok=1sKhNA2Y" alt="Jaqueta Honda Summer Evolution" height="350px">
                </div>
                <div class="oii">
                        <p class="product-title">Jaqueta Honda Summer Evolution</p>
                    <div class="valor">
                        <p class="product-price">R$ 828,58</p>
                    </div>
                </div>
            </div>

            <div class="principal01">
                <div class="product-image">
                <img src="https://www.honda.com.br/motos/honda-store/sites/honda_store/files/styles/preview_product/public/2022-04/Honda14432.jpg.webp?itok=Iuek6GnR" alt="Jaqueta Honda Inverno Impermeável" height="350px">
                </div>
                <div class="oii">
                        <p class="product-title">Jaqueta Honda Inverno Impermeável</p>
                    <div class="valor">
                        <p class="product-price">R$ 1.127,87</p>
                    </div>
                </div>
            </div>

            <div class="principal01">
                <div class="product-image">
                    <img src="https://www.honda.com.br/motos/honda-store/sites/honda_store/files/styles/preview_product/public/2022-09/CAPACETE%20HONDA%20DLX%20HFS%20PTOF-GRA_1.jpg.webp?itok=-quqRK_z" alt="Capacete Honda DLX HFS" height="350px">
                    <div class="oii">
                        <p class="product-title">Capacete Honda DLX HFS</p>
                        <p class="valor">R$ 242,80</p>
                        </div>
                </div>
            </div>
            
            <div class="principal01">
                <div class="product-image">
                    <img src="https://www.honda.com.br/motos/honda-store/sites/honda_store/files/styles/preview_product/public/2022-04/Honda14645.jpg.webp?itok=gzzwJVim" alt="Conjunto de Chuva Honda Nylon" height="350px">
                    <div class="oii">
                        <p class="product-title">Conjunto de Chuva Honda Nylon</p>

                        <p class="valor">R$ 347,18</p>
                    </div>
                </div> 
            </div>

            <div class="principal01">
                <div class="product-image">
                    <img src="https://www.honda.com.br/motos/honda-store/sites/honda_store/files/styles/preview_product/public/2022-10/2_0.jpg.webp?itok=b1VRyLl4" alt="Capacete linha Especial CG HF3" height="350px">
                    <div class="oii">
                        <p class="product-title">Capacete linha Especial CG HF3</p>
                        <p class="valor">R$ 583,51</p>
                    </div>
                </div>
            </div>
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