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

