
   
 
const drawProductsHome = (img, name, precio,categoria, tipo) => {

     let templateProduct = `  <div class="col-md-3 product">
        <div class="owl-item active"  style="height: 300px;width: 188px; margin-right: 0px;">
        <div class="product-item" category=${tipo}>

        <div class="pi-img-wrapper">
        <img src=${img} class="img-responsive" style="height:auto; width: 100%;  alt=${name}>
       
        </div>
        </div>
        <h1><a href="#">${name}</a></h1>
         <p><a href="#">${categoria}</a></p>
        <div class="pi-price">${precio} MXN</div>
         <a class="btn btn-default view"  data-toggle="modal" data-target="#exampleModalCenter">Ver</a>
<a data-name=${name} data-image = ${img} data-price=${precio} data-category=${categoria} class="btn btn-default  btnAddRemove"><button class="add2cart">Comprar </button></a>

        </div>
        </div></div></div>
        `;

    return templateProduct


}

;

// DRAW CHECKOUT
// //Template de Checkout.
let conteinerCheck = document.querySelector('#conteiner-check');

const drawChekout = (products) => {
  //let conteinerCheck = document.querySelector('#conteiner-check');
  let urlImg = products.url;
  let name = products.name;
  let id = products.id;
  let priceUnit = products.price;
  let wholesalePrice = products.price;//Ver como multiplicar
  let templateCheck = `<div class="table-wrapper-responsive">
  <table summary="Shopping cart">
  <tbody><tr>
  <th class="goods-page-image">Imagen del producto</th>
  <th class="goods-page-description">Descripción</th>
  <th class="goods-page-ref-no">No Ref</th>
  <th class="goods-page-quantity hidden">Cantidad</th>
  <th class="goods-page-price">Precio unitario</th>
  <th class="goods-page-total" colspan="2">Total</th>
  </tr>
  <tr>
  <td class="goods-page-image">
  <a href="javascript:;"><img src=${urlImg} alt=${name}></a>
  </td>
  <td class="goods-page-description">
  <em><strong>${name}</strong></em>
  </td>
  <td class="goods-page-ref-no">${id}
  </td>
  <td class="goods-page-quantity hidden">
  <div class="product-quantity">
  <div class="input-group bootstrap-touchspin input-group-sm"><span class="input-group-btn"><button class="btn quantity-down bootstrap-touchspin-down" type="button"><i class="fa fa-angle-down"></i></button></span><span class="input-group-addon bootstrap-touchspin-prefix" style="display: none;"></span><input id="product-quantity" type="text" value="1" readonly="" class="form-control input-sm control" style="display: block;"><span class="input-group-addon bootstrap-touchspin-postfix" style="display: none;"></span><span class="input-group-btn"><button class="btn quantity-up bootstrap-touchspin-up" type="button"><i class="fa fa-angle-up"></i></button></span></div>
  </div>
  </td>
  <td class="goods-page-price">
  <strong><span>$</span>${priceUnit} MXN</strong>
  </td>
  <td class="goods-page-total">
  <strong><span>$</span>${wholesalePrice} MXN</strong>
  </td>
  <td class="del-goods-col hidden">
  <a class="del-goods" href="javascript:;">&nbsp;</a>
  </td>
  </tr>
  </tbody></table>
  </div>
  `;
//Aquien necesito sumar para sacar el precio final es a wholesalePrice.
//conteinerCheck.innerHTML = templateCheck;
//console.log(templateCheck);
return templateCheck
//  drawCheckComplet(templateCheck);
}//Fin de la función drawChekout().

const drawCheckComplet = (subtotal) => {
  //let subtotal = 47.00;
  let save = (subtotal*0.05).toFixed(2);
  let total = subtotal - save;
  let templateTotal = `<div class="shopping-total">
    <ul>
      <li>
        <em>Sub total</em>
        <strong class="price"><span>$</span>${subtotal} MXN</strong>
      </li>
      <li>
        <em>Usted ahorro</em>
        <strong class="price"><span>-$</span>${save} MXN</strong>
      </li>
      <li class="shopping-total-price">
        <em>Total a pagar</em>
        <strong class="price"><span>$</span>${total} MXN</strong>
      </li>
    </ul>
  </div>
`;
//console.log(templateTotal);
payPal(total);
//conteinerCheck.innerHTML = templateTotal;
return templateTotal

}













// CARRITO

const arrayProductAdd = [];//Arreglo que guardará los productos de manera local.

const btnCheckout = document.querySelector('#checkout');
// console.log(btnCheckout);
btnCheckout.addEventListener('click', saveLocalS);

function saveLocalS () {
  let stringArray = JSON.stringify(arrayProductAdd)
  console.log(stringArray);
  localStorage.setItem('product', stringArray);
};



  
const addToCart = (prodCheckout) => {
console.log(prodCheckout)
   arrayProductAdd.push(prodCheckout);


 increaseCounter();
    console.log(arrayProductAdd)
};
const infoProd = (event)=>{
     

  let img = event.target.parentNode.dataset.image;
  let name = event.target.parentNode.dataset.name;
  let precio = event.target.parentNode.dataset.price;
  let categoria = event.target.parentNode.dataset.category;
  saveObj(img, name, precio,categoria);
} 
const saveObj = (img, name, precio,categoria) =>{
    let prodCheckout = {
        img :img,
        name:name,
        precio :precio,
        categoria : categoria
    }
addToCart(prodCheckout)
}

const increaseCounter=()=> {
  let itemCounter = document.querySelector("#counter-items");
  let counter = parseInt(itemCounter.innerText);
  counter = counter + 1;
  itemCounter.innerText =  counter.toString(); 
}
function calculateTotal(arrayProductAdd) {
  let total= document.querySelector('#total');  
  let priceTotal = 0;
  for (let product of array) {
    priceTotal += parseInt(product.price);
    total.innerText = '$' + priceTotal; 
  }
  console.log(priceTotal);
  let strTotal = localStorage.setItem('total',priceTotal);
  return priceTotal;
}

$(document).on("click", ".add2cart", infoProd)