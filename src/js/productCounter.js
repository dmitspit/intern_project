$(document).ready(function() {
    $('.btn_counter').click(function() {
      $('.counter').html(+$('.counter').html()+1);
    });
  });