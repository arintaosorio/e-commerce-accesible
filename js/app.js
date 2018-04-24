$('.carousel').carousel()



// filtro input


   $('#search').keyup(function () {
    var text = $(this).val().toLowerCase();
    if(text.trim().length > 0 ){ 


    	console.log(text==educacion.name)
     
    }
  
});


   // filtro2
// CARRITO
const arrayProductAdd = [];//Arreglo que guardará los productos de manera local.

const btnCheckout = document.querySelector('#checkout');
console.log(btnCheckout);
btnCheckout.addEventListener('click', saveLocalS);

function saveLocalS () {
  let stringArray = JSON.stringify(arrayProductAdd)
  console.log(stringArray);
  localStorage.setItem('product', stringArray);
}