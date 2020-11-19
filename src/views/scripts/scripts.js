$(function() {
 
  
    // Like Button Request
    $('#btn-cart').click(function (e) {
      e.preventDefault();
      let $this = $(this);
     // const response = confirm('Are you sure you want to delete this image?');
      //if (response) {
        let imgId = $(this).data('id');
        console.log(imgId)
        $.ajax({
          url: '/addtocardofertauno/' + imgId,
          type: 'GET'
        })
          .done(function(result) {
            $this.removeClass('btn-danger').addClass('btn-success');
           // $this.find('i').removeClass('fa-times').addClass('fa-check');
           // $this.append('<span>Deleted!</span>');
          });
      //}
    });
  });
  
  
  
  
  