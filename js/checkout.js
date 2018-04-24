
let json = getObjLocalStorage();
console.log(json);
let templateOneProduct = '';


function getObjLocalStorage () {
let strProduct = localStorage.getItem('product');
let arrayProducts = strProduct.split("},{");
arrayProducts[0] = arrayProducts[0].substring(2);
let iEnd = arrayProducts.length-1;
arrayProducts[iEnd]= arrayProducts[iEnd].slice(0,-2);
let jsonProduct = JSON.parse(strProduct);//Arreglo obtenido de localStorage.
let total = calculateTotal(jsonProduct);
paintCheckout(jsonProduct);//Pintar la cuenta de los productos seleccionados.
counterItems.innerText = jsonProduct.length;

return jsonProduct
}//fin de función getObjLocalStorage()

function paintTotal () {
  let strTotal = localStorage.getItem('total');
  
  strTotal=parseInt(strTotal);
  console.log(strTotal);
  return drawCheckComplet(strTotal);
}//Fin de la función paintTotal()

function paintCheckout (array) {

  let templateOneProduct ='';
    for (product of array) {
      templateOneProduct += drawChekout(product);
    }
  let conteinerCheck = document.querySelector('#conteiner-check');
  let templateBill = paintTotal();
  conteinerCheck.innerHTML = templateOneProduct+templateBill;
}//fin de función paintCheckout(array).


//Llamando a la función que detonara el evento que preguntará la cantidad que de un producto se ha elegido.
let control = document.getElementsByClassName('control');
giveEventControl(control);

 function quantityProducts (quantity) {
   console.log(quantity);
 }//Fin de la función quantityProducts


function cartProductPop (array) {
  let contentCart = document.querySelector('#cart');
  let templatePopComplet = '';
  for (product of array) {

    templatePopComplet +=   cartPop(product);//Función que pinta en el carrito local.
    //console.log(templatePopComplet);
  }

  let templateCartBtn = `<div class="text-right">
  <a id="vaciar" class="btn btn-primary">Vaciar carrito</a>
 </div>
`;
  contentCart.innerHTML = templatePopComplet+templateCartBtn;


}//Fin de la función cartPop(array).



function payPal(total) {
  console.log(total);
  paypal.Button.render({

    env: 'sandbox', // sandbox | production


        style: {
            label: 'paypal',
            size:  'medium',    // small | medium | large | responsive
            shape: 'rect',     // pill | rect
            color: 'black',     // gold | blue | silver | black
            tagline: false    
        },

    // PayPal Client IDs - replace with your own
    // Create a PayPal app: https://developer.paypal.com/developer/applications/create
    client: {
        sandbox:    'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R',
        production: 'AdHnjwFAeSTLUjemTdVWMfo0P0kcfj6NXUorLoZk5qUWwGEuNvTTxpp6yimhrSoJ4zZK49oxQQnNMUOX'
    },

    // Show the buyer a 'Pay Now' button in the checkout flow
    commit: true,

    // payment() is called when the button is clicked
    payment: function(data, actions) {

        // Make a call to the REST api to create the payment
        return actions.payment.create({
            payment: {
                transactions: [
                    {
                        amount: { total: total, currency: 'MXN' }
                    }
                ]
            }
        });
    },

    // onAuthorize() is called when the buyer approves the payment
    onAuthorize: function(data, actions) {

      // Make a call to the REST api to execute the payment
      return actions.payment.execute().then(/*function(data) {
          console.log(data);
          window.alert('Payment Complete!');
          
          return data;
      }*/ getData);
     
      //console.log(data);
      
  }

}, '#paypal-button-container');
}







