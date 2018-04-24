window.onload = function() {
            let templateCompleto ='';
            for (product of data) {

                let img = product.img;
                let name = product.name;
                let precio = product.precio;
                let categoria = product.categoria;
                let tipo= product.tipo;
                let templateOneProduct = drawProductsHome(img,name,precio,categoria, tipo);
                //console.log(name);
                templateCompleto += templateOneProduct;
                //console.log(templateOneProduct);
            }
        // console.log(templateCompleto);
        let contentProducts = document.getElementById('container-products');//Elemento al que se le pintará la cuenta los productos agregados.
        contentProducts.innerHTML = templateCompleto;
        };
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
         <a      class="btn btn-default view"  data-toggle="modal" data-target="#exampleModalCenter">Ver</a>
<a data-name=${name} data-image = ${img} data-price=${precio} class="btn btn-default add2cart btnAddRemove">Comprar</a>

        </div>
        </div></div></div>
        `;
    return templateProduct
};
  



