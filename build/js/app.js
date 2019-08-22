//-----------------FUCNTION LOAD More-----------------///
function loadMoreBtn(){
    const btnLoadMore = document.querySelector(".loadMore").addEventListener('click',loadMore);
    function loadMore () {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4) {
                const arrItems= JSON.parse(xhr.responseText);
            for (let i = 0; i<arrItems.length; i++){
                document.querySelector(".outPut").innerHTML += 
                `<div class="popular_items_card col-xl-3 col-md-6 col-sm-12">
                <!-- Card -->
                    <div class="card align-items-center">
                        <!-- Card image -->
                        <div class="img-container">
                         <img src=${arrItems[i].Image}>
                        </div>
                            <!-- Card image -->
                            <!-- Card content -->
                            <div class="card-body text-center">
                            <!-- Category & Title -->
                            <h6>${arrItems[i].items_name} </h6>
                                <span>${arrItems[i].prise}</span>
                            </div>
                        <!-- Card content -->
                    </div>
                    <!-- Card -->
                </div>
                <!-- Grid column -->`;
            }
            }
    };
            xhr.open('GET', 'data/data.json');
            xhr.send();
    }
}
loadMoreBtn();
   //-----------------FUCNTION LOAD More-----------------///


$(document).ready(function() {
    $('.btn_counter').click(function() {
      $('.counter').html(+$('.counter').html()+1);
    });
  });
//---- FUNCTION MODAL WINDOW---///
function Modal(){
    const modalWindow = document.querySelector('#loginUser').addEventListener('click',modalWindowHtmlContent);
    function modalWindowHtmlContent(){
        document.querySelector("#modaWindow").innerHTML += `
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h2 class="modal-title" id="exampleModalLongTitle">Sign in</h2>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                
                <form>
                    <div class="form-row">
                        <div class="col-lg-12 mb-3">
                            <label for="validationDefault01">Email</label>
                            <input type="email" class="form-control" placeholder="....@example.com" value="" minlength="8" maxlength="64" required>
                        </div>
                        <div class="col-lg-12 mb-3">
                            <label for="password">Password</label>
                            <input id="userPassword" type="password" class="form-control" inputmode="numeric" minlength="4"
                            maxlength="8" size="8" required>
                        </div>
                    </div>
                    <div class="submit col-lg-12 mb-3">
                        <button class="btn" type="submit">Login</button><br>
                        <a id="UserDontHaveAccount" href="#">I don't have an account</a>
                    </div>
                </form>
    
    
    
                </div>
                </div>
            </div>
        </div>
        `;
    }
};
Modal();
//---- FUNCTION MODAL WINDOW---///
   //-----------------FUCNTION Product Slider-----------------///
function currentDiv(n) {
    showDivs(slideIndex = n);
  }
  
  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
    }
    x[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " w3-opacity-off";
  }
    //-----------------FUCNTION Product Slider-----------------///
///----------------quantityButts.js---------------//////
// function quantityButts(){
    $('.minus-btn').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('div').find('input');
        var value = parseInt($input.val());
    
        if (value > 1) {
            value = value - 1;
        } else {
            value = 0;
        }
    
    $input.val(value);
    
    });
    
    $('.plus-btn').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('div').find('input');
        var value = parseInt($input.val());
    
        if (value < 100) {
          value = value + 1;
        } else {
            value =100;
        }
    
        $input.val(value);
    });
// }
// quantityButts();
///----------------quantityButts.js---------------//////