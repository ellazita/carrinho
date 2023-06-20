let modalqt = 1
const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

//listagem dos modelos
modeloJson.map((item, index)=>{
    let modeloItem = c('.models .modelo-item').cloneNode(true);

    modeloItem.setAttribute('data-key', index);


    modeloItem.querySelector('.modelo-item-img img').src = item.img;
    modeloItem.querySelector('.modelo-item-name').innerHTML = item.name;
    modeloItem.querySelector('.modelo-item-desc').innerHTML = item.description;
    modeloItem.querySelector('.modelo-item-price').innerHTML = `R$ ${item.price.toFixed(2)}`;

    modeloItem.querySelector('a').addEventListener('click', (e) =>{
        e.preventDefault();

        let key = e.target.closest(".modelo-item").getAttribute('data-key');
        modalqt = 1;

        c(".modeloBig img").src = modeloJson[key].img
        c(".modeloInfo h1").innerHTML = modeloJson[key].name
        c(".modeloInfo .modeloInfo-desc").innerHTML = modeloJson[key].description
        c(".modeloInfo .modeloInfo-pricearea .modeloInfo-actualPrice").innerHTML = `R$ ${modeloJson[key].price.toFixed(2)}`;
        c('.modeloInfo-size.selected').classList.remove('selected');

        cs(".modeloInfo-size").forEach((size, sizeindex) =>{
            if (sizeindex == 0){
                size.classList.add('selected');
            }

            size.querySelector('span').innerHTML = modeloJson[key].sizes[sizeindex];
        })


        c('.modeloInfo-qt').innerHTML = modalqt
        c(".modeloWindowArea").style.opacity = 0;
        c('.modeloWindowArea').style.display = 'flex';
        setTimeout(() =>{
            c('.modeloWindowArea').style.opacity = 1;
        }, 100)
    });

    

    c('.modelo-area').append(modeloItem);
})

function closeModal(){
    c('.modeloWindowArea').style.opacity = 0;
    setTimeout(()=>{
        c('.modeloWindowArea').style.display = 'none';
    }, 100);
}

cs(".modeloInfo-cancelButton, .modeloInfo-cancelMobileButton").forEach((item)=>{
    item.addEventListener("click", closeModal)
})

c('.modeloInfo-qtmenos').addEventListener('click', ()=>{
   
    c(".modeloInfor-qt").innerHTML= modalqt;
})
c('.modeloInfo-qtmais').addEventListener("click", ()=>{
    modalqt++;

    c(".modeloInfo-qt").innerHTML= modalqt;
})

cs('.modeloInfo-size').forEach((size, sizeIndex)=>{
    size.addEventListener('click', () =>{
        c('.modeloInfo-size.selected').classList.remove('selected');
        size.classList.add('selected');
    });
});