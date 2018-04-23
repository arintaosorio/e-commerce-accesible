window.onload = function() {
            let templateCompleto ='';
            for (product of education) {
                let img = product.img;
                let name = product.name;
                let precio = product.precio;
                let templateOneProduct = drawProductsHome(img,name,precio);
                //console.log(name);
                templateCompleto += templateOneProduct;
                //console.log(templateOneProduct);
            }
        // console.log(templateCompleto);
        let contentProducts = document.getElementById('container-products');//Elemento al que se le pintará la cuenta los productos agregados.
        contentProducts.innerHTML = templateCompleto;
        };
const drawProductsHome = (img, name, precio) => {

     let templateProduct = `  <div class="col-md-3 sale-product">
        <div class="owl-item active"  style="height: 280px;width: 188px; margin-right: 0px;"><div>
        <div class="product-item">
        <div class="pi-img-wrapper">
        <img src=${img} class="img-responsive" style="height:150px;width: 100px;  alt=${name}>
        <div>
        <a href=${img} class="btn btn-default fancybox-button">Zoom</a>
        <a href="#product-pop-up" class="btn btn-default fancybox-fast-view">Ver</a>
        </div>
        </div>
        <h3><a href="#">${name}</a></h3>
        <div class="pi-price">${precio} MXN</div>
<a data-name=${name} data-image = ${img} data-price=${precio} class="btn btn-default add2cart btnAddRemove">Add to cart</a>
        <div class="sticker sticker-sale"></div>
        </div>
        </div></div></div>
        `;
    return templateProduct
}