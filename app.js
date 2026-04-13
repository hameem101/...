document.getElementById()

//customer reg input
const emailaddressInput = document.getELementById("emailaddress");
const passwordInput = document.getELementById("password");
const fullNameInput = document.getELementById("full name");
const phonenumberInput = document.getELementByid("phone number")
const homeAddressInput = document.getELementById("home address");

const signininput = document.getElementById("sign in");

const foodanddrinkinput = document.getElementById("food and drink");

//buttons

const registerbtn = document.getElementById("registerBtn");

const signinbtn = document.getElementById("sign inBtn");

const foodanddrinkbtn = document.getElementById("food and drinkBtn");

// filter inp
const categoryIdInput = document.getElementById("categoryIdInput");

//display container products
const productcontainer = document.getELementById("productContainer");


//add event listener for register button
registerBtn.addEventListener("click", function () {

    const customerData = {
        email: emailaddressInput.value,
        password: passwordInput.value,
        full_name: fullNameInput.value,
        phone_number: phonenumberInput.value,
        home_Address: homeAddressInput.value,

    };


    fetch("https://127.0.0.1:8000", {
    method: "POST",

    headers: {
        "content-Type": "application/json"
    },
    
    body: JSON.stringify(customerData)
    })

    .then(response => responce.json())

    .then(data => {
     alert("register successful");

     emailaddressInput. value ="";

     passwordInput. value ="";

     fullNameInput. value = "";

     phonenumberInput. value = "";

     homeAddressInput. value = "";

    })

    .catch(error => {

     console.error("error registering please try again:", error);


    });

});
