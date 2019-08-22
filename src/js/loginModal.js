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