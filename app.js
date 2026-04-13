document.getElementById()

//customer reg input
const emailaddressInput = document.getElementById("emailaddress");
const passwordInput = document.getElementById("password");
const fullNameInput = document.getElementById("fullName");
const phonenumberInput = document.getElementById("phoneNumber");
const homeAddressInput = document.getElementById("homeAddress");

const signininput = document.getElementById("sign in");

const foodanddrinkinput = document.getElementById("food and drink");

//buttons

const registerBtn = document.getElementById("registerBtn");

const signinBtn = document.getElementById("signinBtn");

const loadProductsBtn = document.getElementById("loadProductsBtn");

const filterBtn = document.getElementById("filterBtn");


// filter inp
const categoryIdInput = document.getElementById("categoryIdInput");

//display container products
const productContainer = document.getElementById("productContainer");


//add event listener for register button
registerBtn.addEventListener("click", function () {
    const names = fullNameInput.value.split(" ");

    const customerData = {
        email: emailaddressInput.value,
        password: passwordInput.value,
        full_name: fullNameInput.value,
        phone_number: phonenumberInput.value,
        home_Address: homeAddressInput.value,

    };


    fetch("http://127.0.0.1:8000/customers", {
    method: "POST",

    headers: {
        "content-Type": "application/json"
    },
    
    body: JSON.stringify(customerData)
    })

    .then(response => responce.json())

    .then(data => {
     alert("register successful");

     emailaddressInput. value = "";

     passwordInput. value = "";

     fullNameInput. value = "";

     phonenumberInput. value = "";

     homeAddressInput. value = "";

    })

    .catch(error => {

     console.error("error registering please try again:", error);


    });

});





const emailaddressInput = document.getElementById("emailaddress");
const passwordInput = document.getElementById("password");
const fullNameInput = document.getElementById("fullName");
const phonenumberInput = document.getElementById("phoneNumber");
const homeAddressInput = document.getElementById("homeAddress");

const registerBtn = document.getElementById("registerBtn");

registerBtn.addEventListener("click", function () {

    const names = fullNameInput.value.split(" ");

    const customerData = {
        email: emailaddressInput.value,
        first_name: names[0],
        last_name: names[1] || ""
    };

    fetch("http://127.0.0.1:8000/customers", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(customerData)
    })

    .then(response => response.json())
    .then(data => {
        alert("register successful");

        emailaddressInput.value = "";
        passwordInput.value = "";
        fullNameInput.value = "";
        phonenumberInput.value = "";
        homeAddressInput.value = "";
    })

    .catch(error => {
        console.error(error);
    });

});
