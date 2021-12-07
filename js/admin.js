/*===== FIRST ADMIN / LOGIN ===== */

function validateAdmin(e) {
    e.preventDefault();
    var username = document.querySelector('#username').value;
    var password = document.querySelector('#password').value;

    if(username == "admin" && password == "admin"){
        window.location.href = "./newadmin.html";
    } else {
        alert("Login unsuccessful, please try again.")
    }
}

document.querySelector(".login-btn").addEventListener("click", validateAdmin);

/*===== SECOND ADMIN / PRODUCT CONTROL ===== */
