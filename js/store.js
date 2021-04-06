/* -------------------------------------------------
----------- Estructura del objeto (item) -----------
----------------------------------------------------*/

class Product{
    constructor(nombre, id, stock, imagenPrincipal, itemImagen1, itemImagen2, itemImagen3, itemImagen4,
        descripcion, precio, cantidad){
        if(nombre === "" || precio <= 0 || stock < 0){
            throw new Error('No es posible la creación del producto.');
        }
        this.nombre = nombre;
        this.id = id;
        this.stock = stock;
        this.imagenPrincipal = imagenPrincipal;
        this.itemImagen1 = itemImagen1;
        this.itemImagen2 = itemImagen2;
        this.itemImagen3 = itemImagen3;
        this.itemImagen4 = itemImagen4;
        this.descripcion = descripcion;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

/* -------------------------------------------------
------ Obtener productos del LocalStorage ----------
----------------------------------------------------*/
    function getProductsLocalStorage(){
        let cartLocalStorage = localStorage.getItem('cart');
        if(cartLocalStorage){
            let objectLocalStorage = JSON.parse(cartLocalStorage);
            console.log(objectLocalStorage);
            cart = objectLocalStorage;
            cart.forEach(i =>{
            addProductCart(i);
        })
        }else{
            cart = [];
        } 
    }

/* -------------------------------------------------
--- Añadir productos al carrito + local Storage  ---
----------------------------------------------------*/
function setProductsToCart(i){
    cart.push(i);
    console.log(cart);
    localStorage.setItem('cart',JSON.stringify(cart));
}

/* -------------------------------------------------
----------- HTML de los productos ------------------
----------------------------------------------------*/
const d = document;
let cart = [];
let storeList =  d.getElementById('store-list');
let storeItem;
let boxPrice;

$(() => {
    
    $.getJSON("../data/data.json",(respuesta)=>{
    function getProductsList(){
        let datos = [];
        datos = respuesta;
        let productsObject = datos;
        productsObject.forEach((value)=>{
            return new Product(value.nombre, value.id, value.stock, value.imagenPrincipal, value.itemImagen1, value.itemImagen2, value.itemImagen3, value.itemImagen4,
            value.descripcion, value.precio, value.cantidad);
        });
        return productsObject;   
    }
    
    let products = getProductsList();
        products.forEach(i => {
        storeItem = d.createElement('li');
        storeItem.className = 'producto-card';

        let imgItem = d.createElement('img');
        imgItem.src = i.imagenPrincipal;
        
        let nameItem = d.createElement('p');
        nameItem.innerHTML = i.nombre;
        nameItem.className = 'card-name';

        let priceItem = d.createElement('p');
        priceItem.innerHTML = '$' + i.precio;
        
        let buttonVerMas = d.createElement('button');
        
        let linkButton = d.createElement('a');
        linkButton.id = 'link'+i.id;
        linkButton.innerHTML = 'Ver Más';
        linkButton.href = '#producto' + i.id;
        let containerModal = d.createElement('section');
        containerModal.className = 'container-modal';
        containerModal.id = 'producto' + i.id;
        let sectionModalProduct = d.createElement('div');
        sectionModalProduct.className = 'product-item';
            let closeSectionModal = d.createElement('a');
            closeSectionModal.href = '#';
            closeSectionModal.className = 'close-modal';
            closeSectionModal.innerHTML = 'X';

            let galeryProduct = d.createElement('div');
            galeryProduct.className = 'galery-product';
                let preView = d.createElement('ul');
                preView.className = 'pre-view';
                    let itemPreView1 = d.createElement('li');
                    let imgPreView1 = d.createElement('img');
                    imgPreView1.src = i.itemImagen1;
                    imgPreView1.addEventListener('mouseover', () =>{
                        imgFirstView.src = i.itemImagen1;
                    });
                    let itemPreView2 = d.createElement('li');
                    let imgPreView2 = d.createElement('img');
                    imgPreView2.src = i.itemImagen2;
                    imgPreView2.addEventListener('mouseover', () =>{
                        imgFirstView.src = i.itemImagen2;
                    });
                    let itemPreView3 = d.createElement('li');
                    let imgPreView3 = d.createElement('img');
                    imgPreView3.src = i.itemImagen3;
                    imgPreView3.addEventListener('mouseover', () =>{
                        imgFirstView.src = i.itemImagen3;
                    });
                    let itemPreView4 = d.createElement('li');
                    let imgPreView4 = d.createElement('img');
                    imgPreView4.src = i.itemImagen4;
                    imgPreView4.addEventListener('mouseover', () =>{
                        imgFirstView.src = i.itemImagen4;
                    });
                
                let firstView = d.createElement('ul');
                    let itemFirstView = d.createElement('li');
                    let imgFirstView = d.createElement('img');
                    imgFirstView.src = i.imagenPrincipal;
            let boxDetail = d.createElement('div');
            boxDetail.insertAdjacentElement('afterbegin', closeSectionModal);
            boxDetail.className = 'box-detalle';
            let boxNameProduct = d.createElement('h3');
                boxNameProduct.innerHTML = i.nombre;
                boxPrice = d.createElement('p');
                boxPrice.className = 'boxPrice';
                boxPrice.innerHTML = '$' + i.precio;
                
                let payBox = d.createElement('div');
                payBox.className = 'box-pagos';
                    let iconPay = d.createElement('i');
                    iconPay.classList.add('far', 'fa-credit-card');
                    let textPay = d.createElement('p');
                    textPay.innerHTML = 'Pagá en cuotas sin interés.';
                let boxShipping = d.createElement('div');
                boxShipping.className = 'box-envios';
                    let iconShipping = d.createElement('i');
                    iconShipping.classList.add('fas','fa-truck');
                    let boxTextShipping = d.createElement('div');
                    boxTextShipping.className = 'texto-envios';
                        let textItem1 = d.createElement('p');
                        textItem1.innerHTML = 'Envíos a todo el país.';
                let addCartButton = d.createElement('button');
                addCartButton.className = 'agregar-carrito';
                addCartButton.id = 'agregar-carrito' + i.id; 
                addCartButton.innerHTML = 'Agregar al carrito';
                addCartButton.addEventListener('click',()=>{
                        contador.innerHTML++;
                        setProductsToCart(i);
                        addProductCart(i);
                    });

            let boxDescription = d.createElement('div');
            boxDescription.className = 'box-descripcion';
            let titleDescription =  d.createElement('h4');
                titleDescription.innerHTML = 'Descripción';
            let contentDescriptcion =  d.createElement('p');
            contentDescriptcion.innerHTML = i.descripcion;
        
        
        storeItem.appendChild(imgItem);
        storeItem.appendChild(nameItem);
        storeItem.appendChild(priceItem);
        storeItem.appendChild(buttonVerMas);
        buttonVerMas.appendChild(linkButton);
        sectionModalProduct.appendChild(galeryProduct);
        galeryProduct.appendChild(preView);
        preView.appendChild(itemPreView1);
        itemPreView1.appendChild(imgPreView1);
        preView.appendChild(itemPreView2);
        itemPreView2.appendChild(imgPreView2);
        preView.appendChild(itemPreView3);
        itemPreView3.appendChild(imgPreView3);
        preView.appendChild(itemPreView4);
        itemPreView4.appendChild(imgPreView4);
        galeryProduct.appendChild(firstView);
        firstView.appendChild(itemFirstView);
        itemFirstView.appendChild(imgFirstView);
        sectionModalProduct.appendChild(boxDetail);
        boxDetail.appendChild(boxNameProduct);
        boxDetail.appendChild(boxPrice);
        boxDetail.appendChild(payBox);
        payBox.appendChild(iconPay);
        payBox.appendChild(textPay);
        boxDetail.appendChild(boxShipping);
        boxShipping.appendChild(iconShipping);
        boxShipping.appendChild(boxTextShipping);
        boxTextShipping.appendChild(textItem1);
        boxDetail.appendChild(addCartButton);
        containerModal.appendChild(sectionModalProduct);
        sectionModalProduct.appendChild(boxDescription);
        boxDescription.appendChild(titleDescription);
        boxDescription.appendChild(contentDescriptcion);
        storeItem.appendChild(containerModal);
        storeList.appendChild(storeItem);
    }); 
}); 
});

let iconCart = d.getElementById('iconCart');
let cardCart = d.getElementById('cardCart');
let cartList = d.getElementById('cartList');
let totalPrice = d.getElementById('totalPrice');
let removeCart = d.getElementById('removeCart');
let totalPriceBox = d.getElementById('totalPriceBox');
let contador = d.getElementById('contador');

// Se abre y se cierra el carrito de compras.
iconCart.addEventListener('click', ()=> {
    cardCart.classList.toggle('activar');
});


// Item que se agrega al hacer click en agregar producto:
let productQuantity;
let xQuantity;
let photoProduct;
function addProductCart(i){
        let productItem = d.createElement('li');
        productItem.classList.add('itemProductCart');
        productItem.id = 'product'+ i.id;
        let productName = d.createElement('h4');
        productName.innerHTML = i.nombre;
        productName.className = 'productName';
        productQuantity = d.createElement('input');
        xQuantity = d.createElement('p');
        xQuantity.innerHTML = 'x';
        priceProduct = d.createElement('p');
        priceProduct.id = 'priceProductItem' + i.id;
        priceProduct.className = 'priceProduct';
        priceAndQuantity(i);
        photoProduct = d.createElement('img');
        photoProduct.src = i.itemImagen1; 
        photoProduct.className = 'photoProduct';
        
        let removeProduct = d.createElement('i');
        removeProduct.id = i.id;
        removeProduct.className = 'removeProduct';
        removeProduct.classList.add('fas','fa-trash');
        removeProduct.innerHTML = '';
        removeProduct.addEventListener('click',(event) => {
            let clickButton = event.target;
            cart = cart.filter((i) => i.id != (event.target).getAttribute('id'));
            if (cart.length) {
                localStorage.setItem('cart', JSON.stringify(cart));
            } else {
                localStorage.removeItem('cart');
            }
            contador.innerHTML--;
            clickButton.closest('.itemProductCart').remove();
            subtractFunction(i);
        });
        
        updateTotal();
        productItem.appendChild(removeProduct);
        productItem.appendChild(productName);
        productItem.appendChild(photoProduct);
        productItem.appendChild(productQuantity);
        productItem.appendChild(xQuantity);
        productItem.appendChild(priceProduct);
        cartList.appendChild(productItem);  
}


//Remover todo el carrito
removeCart.addEventListener('click', function(){
    localStorage.clear(); 
    cartList.innerHTML = ``;
    totalPrice.innerHTML = 0;
    contador.innerHTML= 0;
});

let toPayCart = d.getElementById('loQuiero');
let items = ``;
toPayCart.addEventListener('click',function(i){
    let cartLocalStorage = localStorage.getItem('cart');
    let objectLocalStorage;
    if(cartLocalStorage){
        getLocalProducts(objectLocalStorage,cartLocalStorage);
        let divDataPurchase = d.createElement('div');
        divDataPurchase.className = "divDataPurchase";
        storeList.appendChild(divDataPurchase);
        let sectionBackLink = d.createElement('section');
        sectionBackLink.id = 'sectionBackLink';
        let backToShop = d.createElement('a');
        backToShop.href = '../secciones/store.html';
        backToShop.innerHTML = 'Volver al shop';
        backToShop.id = 'backToShop';
        sectionBackLink.appendChild(backToShop);
        storeList.insertAdjacentElement('beforebegin',sectionBackLink);
        sectionBackLink.appendChild(backToShop);
        let listPurchase = d.createElement('ul');
        listPurchase.className = 'listPurchase';
        divDataPurchase.appendChild(listPurchase);
        cart.forEach(i => {
                let itemProduct = d.createElement('li');
                itemProduct.className = 'itemProductPurchase';
                let productName = d.createElement('p');
                productName.className = 'productNamePurchase'
                productName.innerHTML = i.nombre;
                productQuantity = d.createElement('input');
                xQuantity= d.createElement('p');
                xQuantity.innerHTML ='x';
                priceProduct = d.createElement('p');
                priceProduct.className = 'priceProduct';
                priceProduct.innerHTML = '$' + i.precio;
                priceAndQuantity(i);
                listPurchase.appendChild(itemProduct);
                itemProduct.appendChild(productName);
                itemProduct.appendChild(productQuantity);
                itemProduct.appendChild(xQuantity);
                itemProduct.appendChild(priceProduct);
    });
    let totalCartBox = d.createElement('div');
    totalCartBox.id = 'TotalPriceBox';
    totalCartBox.innerHTML = 'Total $';
    totalCartBox.appendChild(totalPrice);
    divDataPurchase.appendChild(totalCartBox);

    let buttomPurchase = d.createElement('div');
    let quieroComprar = d.createElement('button');
    quieroComprar.className = 'buttomPurchase'
    
        let liknWhatsapp = d.createElement('a');
        liknWhatsapp.setAttribute('BLANK', '');
        liknWhatsapp.className = 'linkWsp';
        liknWhatsapp.innerHTML = 'Comprar';
        liknWhatsapp.addEventListener('click', function(){
        function wsp(i){
            getLocalProducts(objectLocalStorage,cartLocalStorage);
            cart.forEach(i=>{
                items += ` ${i.nombre},`;  
            })
            priceAndQuantity(i);
            let totalPriceParse = parseInt((totalPrice).innerHTML);
            liknWhatsapp.href =`https://api.whatsapp.com/send?phone=+5491123878307&text=%C2%A1Hola!%20Has%20comprado%20los%20siguientes%20productos%20en%20Milbanos:${items}Por%20un%20total%20de%20$${totalPriceParse}.%20%C2%A1Muchas%20gracias%20por%20elegirnos!`
        
        };
        liknWhatsapp.addEventListener('click',()=>{
            
            storeList.innerHTML = '';
            let spinnerLoading = d.createElement('img');
            spinnerLoading.src = '../img/spinner.svg';
            storeList.appendChild(spinnerLoading);
            setTimeout(() => {
                spinnerLoading.remove()
                storeList.innerHTML = "";
                let check = d.createElement('img');
                check.src = '../img/check.png';
                check.className = 'check';
                storeList.appendChild(check);
            }, 1000);
            setTimeout(()=>{
                wsp(i);
                window.location.href = liknWhatsapp.href;
            },3000);
        })
    });
    quieroComprar.appendChild(liknWhatsapp);
    divDataPurchase.appendChild(buttomPurchase);
    buttomPurchase.appendChild(quieroComprar);
    }else{
        getLocalProducts(objectLocalStorage,cartLocalStorage)

        let sectionBackLink = d.createElement('section');
        sectionBackLink.id = 'sectionBackLink';
        let backToShop = d.createElement('a');
        backToShop.href = '../secciones/store.html';
        backToShop.innerHTML = 'Volver al shop';
        backToShop.id = 'backToShop';
        storeList.appendChild(sectionBackLink);
        sectionBackLink.appendChild(backToShop);
        sectionBackLink.classList.add('positionLinkBackToCart');
        let textCart = d.createElement('p');
        textCart.innerHTML = 'El carrito está vacío.';
        storeList.appendChild(textCart) 
    } 
    
});

function getLocalProducts(objectLocalStorage,cartLocalStorage){
    objectLocalStorage = JSON.parse(cartLocalStorage);
    cart = objectLocalStorage;
    cardCart.remove();
    storeList.innerHTML = ``;
}

function updateTotal(){
    totalPrice.innerHTML = (Number(totalPrice.innerHTML) + (parseInt(productQuantity.value) * (parseInt(priceProduct.innerHTML))));
}

function priceAndQuantity(i){
    productQuantity.value = 1
    productQuantity.className = 'productQuantity';
    xQuantity.className = 'xQuantity';
    priceProduct.innerHTML = i.precio;
}

function subtractFunction(){
    totalPrice.innerHTML = (Number(totalPrice.innerHTML) - (parseInt(productQuantity.value)) * (parseInt(priceProduct.innerHTML)));  
}

getProductsLocalStorage();

$(() => {
    contador.innerHTML = cart.length;
})

function searchFilters(input, selector){
    d.addEventListener("keyup", (e) =>{
    if(e.target.matches(input)){
        d.querySelectorAll(selector).forEach((el) => el.textContent.toLowerCase().
        includes(e.target.value.toLowerCase())
        ?el.classList.remove("filter")
        :el.classList.add("filter")
        )
    }
})}
searchFilters(".card-filter",".producto-card");
