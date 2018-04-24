$('.carousel').carousel()



// filtro input


   $('#search').keyup(function () {
    var text = $(this).val().toLowerCase();
    if(text.trim().length > 0 ){ 


    	console.log(text==educacion.name)
     
    }
  
});