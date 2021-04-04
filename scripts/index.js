
// To limit the CPF input
function limitTotal (evt) {
    var input = evt.target;
    var value = input.value;

    if (value.length <= 11) {
        return;
    }

    input.value = input.value.substr(0, 11); 
}
document.getElementById('cpf').addEventListener('input', limitTotal)


const card = document.getElementById("sec-container2");

async function getContent(){
    try {
        const response = await fetch("https://frontend-intern-challenge-api.iurykrieger.now.sh/products")
        const data = await response.json();

        // console.log(response)
        show(data)
        
    } catch (error) {
        console.error(error);
    }
}

getContent()

function show({products}){

    let output = '';

    for (const product of products) {
        
        output +=`<div class="card">
        <img class="img" src=${product.image}>`
        output +=`<div class="card-txt">
        <p class="card-p1">${product.name}</p>
        <p class="card-p2">${product.description}</p>
        <p class="card-p2">De: R$${product.oldPrice}</p>
        <h3>Por: ${product.price}</h3>
        <p class="card-p2">ou ${product.installments.count}x de R$${product.installments.value}</p>
        </div>
        <button class="btns-card">Comprar</button>
        </div>`
    }

    card.innerHTML = output;
}
function reload(){
    sessionStorage.setItem("Recarregou", "true");
    window.location.reload();
}