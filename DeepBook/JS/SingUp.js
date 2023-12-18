let p1 = document.querySelector("#password1");
let p2 = document.querySelector("#password2");

p1.onchange = checkContentPassword;
function checkContentPassword() {
    if (p1.value.length < 8) {
        p1.focus();
        p1.style.backgroundColor = "#ff00004d";
    } else
    {
        p1.style.backgroundColor = "white";
        check();
    }
    }

function check() {
    var mes = document.querySelector(".mes");
    mes.textContent = "";
    mes.classList.remove("hid");
    if (p1.value.search(/[0-9]{1,}/) == -1) {
        mes.textContent = mes.textContent + " there is no number\n";
    }
    if (p1.value.search(/[A-Z]{1,}/) == -1) {
        mes.textContent = mes.textContent + " there is no capital litter\n";
    }
    if (p1.value.search(/[a-z]{1,}/) == -1) {
        mes.textContent = mes.textContent + " there is no small letter\n";
    }
    if (p1.value.search(/[@#!\$]{1,}/) == -1) {
        mes.textContent = mes.textContent + " there is no special character";
    }
    if (mes.value == "") {
        mes.classList.add("hid");
    }
}

p2.onchange = checkPassword;
function checkPassword() {
    if (p1.value !== p2.value) {
        p2.value = "";
        p2.focus();
        p2.style.backgroundColor = "red";
    } else {
        p2.style.backgroundColor = "white";
    }
}

// Check For Name 
let un = document.getElementById("userName");

un.onchange = check_userName;
function check_userName() {
    if (!(this.value.search(/^[A-Z]+/) > -1 && un.value.search(/[a-z]+/) > -1)) {
        this.value = "";
        this.focus();
        this.style.backgroundColor = "#ff00004d";
    } else {
        this.style.backgroundColor = "white";
    }
}

//Check for the PhoneNumber
let num = document.getElementById("numPhone");

num.onchange = check_numPhone;
function check_numPhone() {

    if (this.value.length != 10) {
        this.value = ""; this.focus();
        this.style.backgroundColor = "#ff00004d";
    } else
        if (this.value.search(/09\d{8}/) === -1) {
            this.value = ""; this.focus();
            this.style.backgroundColor = "#ff00004d";
        }
        else {
            this.style.backgroundColor = "White";
        }

}




