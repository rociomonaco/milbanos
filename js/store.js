
/* -------------------------------------------------
----------- Estructura del objeto (item) -----------
----------------------------------------------------*/

class Product{
    constructor(nombre, id, categoria, stock, imagenPrincipal, itemImagen1, itemImagen2, itemImagen3, itemImagen4,
         descripcion, precio, descuento, precioADescontar, colores, conDecuento, cantidad){
        if(nombre === "" || precio <= 0 || stock < 0){
            throw new Error('No es posible la creación del producto.');
        }
        this.nombre = nombre;
        this.id = id;
        this.categoria = categoria;
        this.stock = stock;
        this.imagenPrincipal = imagenPrincipal;
        this.itemImagen1 = itemImagen1;
        this.itemImagen2 = itemImagen2;
        this.itemImagen3 = itemImagen3;
        this.itemImagen4 = itemImagen4;
        this.descripcion = descripcion;
        this.precio = precio;
        this.descuento = descuento;
        this.precioADescontar = precioADescontar;
        this.colores = colores;
        this.conDecuento = conDecuento;
        this.cantidad = cantidad;
    }
    calcularDescuento(){
        return this.precio - (this.precio * this.descuento) / 100;
    }

}


/* -------------------------------------------------
----------- Se guardan los item en un --------------
----------- array con formato JSON -----------------
----------------------------------------------------*/
const datos = `
[
    {
        "nombre": "Almohadon LIMA ",
        "id":  1,
        "categoria": "Mantas y almohadones",
        "stock": 30,
        "imagenPrincipal": "../img/destacados-5.jpg",
        "itemImagen1":"../img/destacados-5.jpg",
        "itemImagen2":"../img/almohadon-1.jpg",
        "itemImagen3":"../img/almohadon-2.jpg",
        "itemImagen4":"../img/almohadon-3.jpg",
        "descripcion": "Almohadon confeccionado con telas de la India.",
        "precio": 5900,
        "descuento": 10,
        "precioADescontar": 35613,
        "colores": ["beige","verde","bordo"],
        "conDecuento" : true
    },
    {
        "nombre": "Almohadon PILAR ",
        "id":  2,
        "categoria": "Mantas y almohadones",
        "stock": 30,
        "imagenPrincipal": "../img/destacados-5.jpg",
        "itemImagen1":"../img/destacados-5.jpg",
        "itemImagen2":"../img/almohadon-1.jpg",
        "itemImagen3":"../img/almohadon-2.jpg",
        "itemImagen4":"../img/almohadon-3.jpg",
        "descripcion": "Almohadon confeccionado con telas de la India.",
        "precio": 5900,
        "descuento": 10,
        "precioADescontar": 35613,
        "colores": ["beige","terracota","gris oscuro"],
        "conDecuento" : true
    },
    {
        "nombre": "Almohadones CLEO PACKx2",
        "id":  3,
        "categoria": "Mantas y almohadones",
        "stock": 30,
        "imagenPrincipal": "../img/deco-opcion1.jpg", 
        "itemImagen1":"../img/destacados-5.jpg",
        "itemImagen2":"../img/almohadon-1.jpg",
        "itemImagen3":"../img/almohadon-2.jpg",
        "itemImagen4":"../img/almohadon-3.jpg",              
        "descripcion": "Almohadon confeccionado con telas de la India.",
        "precio": 5900,
        "descuento": 10,
        "precioADescontar": 35613,
        "colores": ["beige","rosa nude","azul marino"],
        "conDecuento" : "false"
    },
    {
        "nombre": "Almohadones KIA",
        "id":  4,
        "categoria": "Mantas y almohadones",
        "stock": 30,
        "imagenPrincipal": "../img/destacados-1.jpg",
        "itemImagen1":"../img/destacados-5.jpg",
        "itemImagen2":"../img/almohadon-1.jpg",
        "itemImagen3":"../img/almohadon-2.jpg",
        "itemImagen4":"../img/almohadon-3.jpg",          
        "descripcion": "Almohadon confeccionado con telas de la India.",
        "precio": 5900,
        "descuento": 10,
        "precioADescontar": 35613,
        "colores": ["durazno","turquesa","negro", "lila"],
        "conDecuento" : true
    },
    {
        "nombre": "Almohadones CLEO PACKx2",
        "id":  5,
        "categoria": "Mantas y almohadones",
        "stock": 30,
        "imagenPrincipal": "../img/deco-opcion1.jpg",
        "itemImagen1":"../img/destacados-5.jpg",
        "itemImagen2":"../img/almohadon-1.jpg",
        "itemImagen3":"../img/almohadon-2.jpg",
        "itemImagen4":"../img/almohadon-3.jpg",
        "descripcion": "Almohadon confeccionado con telas de la India.",
        "precio": 5900,
        "descuento": 10,
        "precioADescontar": 35613,
        "colores": ["celeste","verde","violeta"],
        "conDecuento" : true
    },
    {
        "nombre": "Almohadones KIA",
        "id":  6,
        "categoria": "Mantas y almohadones",
        "stock": 30,
        "imagenPrincipal": "../img/destacados-1.jpg",
        "itemImagen1":"../img/destacados-5.jpg",
        "itemImagen2":"../img/almohadon-1.jpg",
        "itemImagen3":"../img/almohadon-2.jpg",
        "itemImagen4":"../img/almohadon-3.jpg",
        "descripcion": "Almohadon confeccionado con telas de la India.",
        "precio": 5900,
        "descuento": 10,
        "precioADescontar": 35613,
        "colores": ["beige","verde","bordo"],
        "conDecuento" : false
    },
    {
        "nombre": "Silla Mila",
        "id":  7,
        "categoria": "Accesorios de living",
        "stock": 15,
        "imagenPrincipal": "../img/destacados-4.jpg",
        "itemImagen1":"../img/destacados-5.jpg",
        "itemImagen2":"../img/almohadon-1.jpg",
        "itemImagen3":"../img/almohadon-2.jpg",
        "itemImagen4":"../img/almohadon-3.jpg",
        "descripcion": "Banco de descanso de madera, con tira de cuero",
        "precio":10000,
        "descuento": 5,
        "precioADescontar": 9950,
        "colores": ["beige","coral","marron"],
        "conDecuento" : true
    },
    {
        "nombre": "Silla Mila",
        "id":  8,
        "categoria": "Accesorios de living",
        "stock": 15,
        "imagenPrincipal": "../img/deco-living-6.jpg",
        "itemImagen1":"../img/destacados-5.jpg",
        "itemImagen2":"../img/almohadon-1.jpg",
        "itemImagen3":"../img/almohadon-2.jpg",
        "itemImagen4":"../img/almohadon-3.jpg",
        "descripcion": "Banco de descanso de madera, con tira de cuero",
        "precio":10000,
        "descuento": 5,
        "precioADescontar": 9950,
        "colores": ["beige","verde","bordo"],
        "conDecuento" : false
    }
]`;




/* -------------------------------------------------
----------- Se parsean los items del json----------- 
----------- para obtener los objetos,---------------
----------- que se almacenan en otro array ---------
----------- a traves del metodo map ----------------
----------------------------------------------------*/

function getProductsList(){
    let productsParse = JSON.parse(datos);
    let productsObject = productsParse.map((value)=>{
        return new Product(value.nombre, value.id, value.categoria, value.stock, value.imagenPrincipal, value.itemImagen1, value.itemImagen2, value.itemImagen3, value.itemImagen4,
            value.descripcion, value.precio, value.descuento, value.precioADescontar, value.colores, value.conDecuento, value.cantidad);
    })
    return productsObject;
}

/* -------------------------------------------------
------ Obtener productos del LocalStorage ----------
----------------------------------------------------*/
function getProductsLocalStorage(){
    let cartLocalStorage = localStorage.getItem('cart');
    console.log(cartLocalStorage);
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
let products = getProductsList();
let storeList =  d.getElementById('store-list');
let storeItem;
let boxPriceSale;
let spanSale;
let boxPrice;
let optionsForm;
let priceProduct;
let colorOption1;
let colorOption2;
let colorOption3;
let colores;


let getHTMLProducts = products.forEach(i => {
    storeItem = d.createElement('li');
    storeItem.className = 'producto-card';

    let imgItem = d.createElement('img');
    imgItem.src = i.imagenPrincipal;
    
    let nameItem = d.createElement('p');
    nameItem.textContent = i.nombre;
    nameItem.className = 'card-name';

    let priceItem = d.createElement('p');
    priceItem.textContent = '$' + i.precio;
    let priceADescontarItem = d.createElement('span');
    priceADescontarItem.textContent =  '  $' + i.precioADescontar;
    let priceDescuentoBox = d.createElement('p');
    priceDescuentoBox.textContent = i.descuento + '% OFF';
    
    let buttonVerMas = d.createElement('button');
    
    let linkButton = d.createElement('a');
    linkButton.id = i.id;
   
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
            boxPriceSale = d.createElement('span');
            boxPriceSale.innerHTML = '$' + i.precio;
            boxPriceSale.className = 'spanPrecio';
            spanSale = d.createElement('span');
            spanSale.innerHTML = i.descuento + '% OFF';
            spanSale.className = 'spanDescuento';
            boxPrice = d.createElement('p');
            boxPrice.innerHTML = '$' + i.calcularDescuento();
            
            
            let payBox = d.createElement('div');
            payBox.className = 'box-pagos';
                let iconPay = d.createElement('i');
                iconPay.classList.add('far', 'fa-credit-card');
                let textPay = d.createElement('p');
                textPay.innerHTML = 'Pagá en cuotas sin interés.';
                let linkPay = d.createElement('a');
                linkPay.href = '#';
                linkPay.innerHTML  = 'Ver más.';
                textPay.insertAdjacentElement('beforeend',linkPay);
            let boxShipping = d.createElement('div');
            boxShipping.className = 'box-envios';
                let iconShipping = d.createElement('i');
                iconShipping.classList.add('fas','fa-truck');
                let boxTextShipping = d.createElement('div');
                boxTextShipping.className = 'texto-envios';
                    let textItem1 = d.createElement('p');
                    textItem1.innerHTML = 'Envíos a todo el país';
                    let textItem2 = d.createElement('p');
                    let linkShipping = d.createElement('a');
                    linkShipping.href = '#';
                    linkShipping.innerHTML =  'Conocé los tiempos y las formas de envío.';
                    
            boxShipping.className = 'box-envios';
            optionsForm = d.createElement('form');
            let colorSelect = d.createElement('select');
            let colorOptionDefault = d.createElement('option');
            colorOptionDefault.innerText = 'Elegí el color';
            colorOptionDefault.setAttribute('selected', "selected");
            colorOptionDefault.setAttribute('disabled', "");
            colores =  i.colores;
            for(b = 0; b < colores.length; b++){
                colorOption1 = d.createElement('option');
                    colorOption2 = d.createElement('option');
                    colorOption3 = d.createElement('option');
                    colorOption4 = d.createElement('option');
                    colorOption1.innerHTML = i.colores[0];
                    colorOption2.innerHTML = i.colores[1];
                    colorOption3.innerHTML = i.colores[2];
            }
        
            let labelQuantity = d.createElement('label');
            labelQuantity.for = 'cantidad';
            labelQuantity.innerHTML = 'Cantidad';
            let inputQuantity = d.createElement('input');
            inputQuantity.id = 'cantidad';
            inputQuantity.type = 'number';
            let addCartButton = d.createElement('button');
            addCartButton.className = 'agregar-carrito';
            addCartButton.id = "agregarCarrito";
            addCartButton.innerHTML = 'Agregar al carrito';
            // addCartButton.addEventListener('click',()=>{
            //     setProductsToCart(i);
            //     addProductCart(i);
            // }); 
            $(addCartButton).click((i)=>{
                setProductsToCart(i);
                addProductCart(i);

                $(addCartButton).animate({left: '250px'}, 1000)
                                .animate({rigth: '-250px'}, 1500);
            });

        let boxDescription = d.createElement('div');
        boxDescription.className = 'box-descripcion';
           let titleDescription =  d.createElement('h4');
            titleDescription.innerHTML = 'Descripción';
           let contentDescriptcion =  d.createElement('p');
           contentDescriptcion.innerHTML = i.descripcion;

    storeItem.appendChild(imgItem);
    storeItem.appendChild(nameItem);
    if(i.conDecuento === true){
        storeItem.appendChild(priceItem);
        storeItem.appendChild(priceDescuentoBox);
        priceDescuentoBox.appendChild(priceADescontarItem);
    }else{
        storeItem.appendChild(priceItem);
    }

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
    if(i.conDecuento === true){
        boxDetail.appendChild(boxPriceSale);
        boxDetail.appendChild(spanSale);
        boxDetail.appendChild(boxPrice);
    }else{
        boxDetail.appendChild(boxPrice);
    }
    
    boxDetail.appendChild(payBox);
    payBox.appendChild(iconPay);
    payBox.appendChild(textPay);
    boxDetail.appendChild(boxShipping);
    boxShipping.appendChild(iconShipping);
    boxShipping.appendChild(boxTextShipping);
    boxTextShipping.appendChild(textItem1);
    boxTextShipping.appendChild(textItem2);
    textItem2.appendChild(linkShipping);
    boxDetail.appendChild(optionsForm);
    optionsForm.appendChild(colorSelect);
    colorSelect.appendChild(colorOptionDefault);
    colorSelect.appendChild(colorOption1);
    colorSelect.appendChild(colorOption2);
    colorSelect.appendChild(colorOption3);
    optionsForm.appendChild(inputQuantity);
    optionsForm.appendChild(labelQuantity);
    // boxDetail.appendChild(addCartButton);
    (boxDetail).append(addCartButton);
    containerModal.appendChild(sectionModalProduct);
    sectionModalProduct.appendChild(boxDescription);
    boxDescription.appendChild(titleDescription);
    boxDescription.appendChild(contentDescriptcion);
    storeItem.appendChild(containerModal);
    storeList.appendChild(storeItem);
  
});

let iconCart = d.getElementById('iconCart');
let cardCart = d.getElementById('cardCart');
let cartList = d.getElementById('cartList');
let productQuantity; 
productQuantity = d.createElement('input');
productQuantity.value = 1;
let totalPrice = d.getElementById('totalPrice');
let removeCart = d.getElementById('removeCart');

// Se abre y se cierra el carrito de compras.
iconCart.addEventListener('click', ()=> {
    cardCart.classList.toggle('activar');
});
// Item que se agrega al hacer click en agregar producto:

function addProductCart(i){
    
    let productItem = d.createElement('li');
    productItem.classList.add('itemProductCart');
    productItem.id = 'product'+ i.id;
    
    
    let productName = d.createElement('h4');
    productName.innerHTML = i.nombre;
    // Como indico el color que se eligio ? 
    let productColor = d.createElement('p');
    // productColor.innerHTML = document.optionsForm.option
    
    
    productQuantity.type = 'number';
    productQuantity.id = 'cantidad' + i.id;
    productQuantity.addEventListener('change',function(){changeQuantity(event)}); 
    
    let addQuantity = d.createElement('button');
    addQuantity.id = 'agregar' + i.id; 
    addQuantity.innerHTML = '+';
    addQuantity.addEventListener('click',function(i){
        productQuantity.value++;
        console.log(productQuantity);
        setProductsToCart(i);
        changeQuantity(event);
        updateTotal(i);
    });

    // se van restando los productos pero no se eliminan del local storage. Hay errores como que se modifica el precio a NaN
    // y ademas si tengo mas de un elemento en el carrito, al tocar en otro elemento el signo (-) o (+) se modifica el primer input.
    let subtractProduct = d.createElement('button');
    subtractProduct.innerHTML = '-';
    subtractProduct.addEventListener('click', function(){
        if(productQuantity.value > 1){
            productQuantity.value--; 
        console.log(productQuantity);

        }
        subtractFunction(i);
        changeQuantity(event);
        removeProductToLocal();
    });
    
    priceProduct = d.createElement('p');
    priceProduct.id = 'priceProductItem' + i.id;
    priceProduct.innerHTML = '$' + i.precio;
    
    let removeProduct = d.createElement('button');
    removeProduct.id = i.id;
    removeProduct.innerHTML = 'X';
    removeProduct.addEventListener('click', function(event){
        let clickButton = event.target;
        cart = cart.filter((i)=> i.id != (event.target).getAttribute('id'));
        removeProductToLocal();
        
        clickButton.closest('.itemProductCart').remove();
        subtractFunction(i);
    });
    
    updateTotal(i);

    productItem.appendChild(removeProduct);
    productItem.appendChild(productName);
    productItem.appendChild(productQuantity);
    productItem.appendChild(subtractProduct);
    productItem.appendChild(addQuantity);
    productItem.appendChild(productColor);
    productItem.appendChild(priceProduct);
    cartList.appendChild(productItem);
    
    
   
    
}
// problemas con estos valores al actualizarlos y en el local storage..
function updateTotal(i){
    totalPrice.innerHTML = (Number(totalPrice.innerHTML) + (productQuantity.value * i.precio));
    return i.precio;
}
// problemas con estos valores al actualizarlos y en el local storage..
function subtractFunction(i){
    totalPrice.innerHTML =  (Number(totalPrice.innerHTML) - (productQuantity.value * i.precio));
    return i.precio;
}

// problemas con estos valores al actualizarlos y en el local storage..
function changeQuantity(event){
    let changeInput = event.target;
    if(changeInput.value <= 0){
        changeInput.value = 1;
    }
}

function removeProductToLocal(){
    if(cart.length){
        localStorage.setItem('cart', JSON.stringify(cart));
    }else{
        localStorage.removeItem('cart');
    }
}
removeCart.addEventListener('click', function(){
    localStorage.clear(); 
    cartList.innerHTML = ``;
    totalPrice.innerHTML = 0;

});

getProductsLocalStorage();
            
/* -------------------------------------------------
---------------- PROBLEMAS!!!!!!!!!!----------------
----------------------------------------------------*/
let filterLess = document.getElementById('menorPrecio');
filterLess.addEventListener('click', function(){
    let filter = products.filter(producto => producto.precio > 0);
    
    //¿Como mostrarlo en dom? (desde la variable getHTMLProducts)
});
const ordenarMayorMenor =  products.sort(((a, b) => b.precio - a.precio));
console.log(ordenarMayorMenor);



//COMPRAR PROBLEMAS con poner todo en el mismo script- porque a partir de que no encuentra el appendChild de la ul que aparece en STORE.html, no muestra mas nada. 

// let payCart = d.getElementById('comprar');
// let toPayCart = d.getElementById('loQuiero');

// toPayCart.addEventListener('click',function(){
//     location.href =  './comprar.html';
//     cart.forEach(i => {

//         let nameProductCart = d.createElement('p');
//         nameProductCart.innerHTML = i.nombre;


//         payCart.appendChild(nameProductCart);
//     });

// });