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

    document.getElementById("detalhes").innerHTML +=`
        
           
    `
    x=`
    <div class="wrapper">
    <div data-component="title">
      <h2 class="main-title" id="especificacoes"><span class="mask" style="color:blue">Especificações/Ficha Técnica</span></h2>
    </div>
    <div class="activesection" data-component="activesection">
        <div class="hello">
            <dt>
                <h3>Motor</h3>
            </dt>
            <dt>
                <h3>Sistema elétrico</h3>
            </dt>
            <dt>
                <h3>Capacidade</h3>
            </dt>
            <dt >
                <h3>Dimensões</h3>
            </dt>
            <dt>
                <h3>Chassi</h3>
            </dt>
        </div>
            <dl class="tabs">
                                    
                <dd class="caracteristicas">
                    <p class="item">
                        <strong>Tipo:</strong> 
                        <span id="valTipo">OHC, Monocilíndrico, 4 tempos, arrefecido a ar</span>
                    </p>
                    <p class="item">
                        <strong>Cilindrada:</strong> 
                        <span id="valCilindrada">162,7 cc</span>
                    </p>
                    <p class="item">
                        <strong>Potência Máxima:</strong> 
                        <span id="valPotência Máxima">14,9 cv a 8.000 rpm</span>
                    </p>
                    <p class="item">
                        <strong>Torque Máximo:</strong> 
                        <span id="valTorque Máximo">1,40 kgf.m a 7.000 rpm</span>
                    </p>
                    <p class="item">
                        <strong>Transmissão:</strong> 
                        <span id="valTransmissão">5 velocidades</span>
                    </p>
                    <p class="item">
                        <strong>Sistema de Partida:</strong> 
                        <span id="valSistema de Partida">Elétrico</span>
                    </p>
                    <p class="item">
                        <strong>Diâmetro x Curso:</strong> 
                        <span id="valDiâmetro x Curso">57,3 x 63,0 mm</span>
                    </p>
                    <p class="item">
                        <strong>Relação de Compressão:</strong> 
                        <span id="valRelação de Compressão">9,5 : 1</span>
                    </p>
                    <p class="item">
                        <strong>Sistema Alimentação:</strong> 
                        <span id="valSistema Alimentação">Injeção Eletrônica PGM FI</span>
                    </p>
                    <p class="item">
                        <strong>Combustível:</strong> 
                        <span id="valCombustível">Gasolina</span>
                    </p>
                </dd>
                                                    
                <dd class="caracteristicas">
                    <p class="item">
                        <strong>Ignição:</strong> 
                        <span id="valIgnição">Eletrônica</span>
                    </p>
                    <p class="item">
                        <strong>Bateria:</strong> 
                        <span id="valBateria">12V - 4 Ah</span>
                    </p>
                    <p class="item">
                        <strong>Farol:</strong> 
                        <span id="valFarol">35/ 35W</span>
                    </p>
                </dd>
                                                    
                <dd class="caracteristicas">
                    <p class="item">
                        <strong>Tanque de Combustível:</strong> 
                        <span id="valTanque de Combustível">14,6 litros</span>
                    </p>
                    <p class="item">
                        <strong>Óleo do Motor:</strong> 
                        <span id="valÓleo do Motor">1,2 litro</span>
                    </p>
                </dd>
                                                    
                <dd class="caracteristicas">
                    <p class="item">
                        <strong>Comprimento x Largura x Altura:</strong> 
                        <span id="valComprimento x Largura x Altura">1996 x 739 x 1087 mm</span>
                    </p>
                    <p class="item">
                        <strong>Distância entre eixos:</strong> 
                        <span id="valDistância entre eixos">1315 mm</span>
                    </p>
                    <p class="item">
                        <strong>Distância mínima do solo:</strong> 
                        <span id="valDistância mínima do solo">170 mm</span>
                    </p>
                    <p class="item">
                        <strong>Altura do assento:</strong> 
                        <span id="valAltura do assento">790 mm</span>
                    </p>
                    <p class="item">
                        <strong>Peso Seco:</strong> 
                        <span id="valPeso Seco">115 kg</span>
                    </p>
                </dd>
                                                    
                <dd class="caracteristicas">
                    <p class="item">
                        <strong>Tipo:</strong> 
                        <span id="valTipo">Diamond Frame</span>
                    </p>
                    <p class="item">
                        <strong>Suspensão Dianteira/Curso:</strong> 
                        <span id="valSuspensão Dianteira/Curso">Garfo telescópico / 135 mm</span>
                    </p>
                    <p class="item">
                        <strong>Suspensão Traseira/Curso:</strong> 
                        <span id="valSuspensão Traseira/Curso">Dois amortecedores / 106 mm</span>
                    </p>
                    <p class="item">
                        <strong>Freio Dianteiro/Diâmetro:</strong> 
                        <span id="valFreio Dianteiro/Diâmetro">A tambor / 130 mm</span>
                    </p>
                    <p class="item">
                        <strong>Freio Traseiro/Diâmetro:</strong> 
                        <span id="valFreio Traseiro/Diâmetro">A tambor / 130 mm</span>
                    </p>
                    <p class="item">
                        <strong>Pneu Dianteiro:</strong> 
                        <span id="valPneu Dianteiro">80/100 -18</span>
                    </p>
                    <p class="item">
                        <strong>Pneu Traseiro:</strong> 
                        <span id="valPneu Traseiro">90/90 -18</span>
                    </p>
                </dd>
            </dl>                                      
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