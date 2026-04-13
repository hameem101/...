document.getElementById()

//customer reg input
const emailaddressInput = document.getELementbyId("emailaddress");
const passwordInput = document.getELementbyId("password");
const fullNameInput = document.getELementbyId("full name");
const phonenumberInput = document.getELementbyid("phone number")
const homeAddressInput = document.getELementbyId("home address");

const signininput = document.getElementbyId("sign in");

const foodanddrinkinput = document.getElementbyId("food and drink");

//buttons

const registerbtn = document.getElementbyId("registerBtn");

const signinbtn = document.getElementbyId("sign inBtn");

const foodanddrinkbtn = document.getElementbyId("food and drinkBtn");

// filter inp
const categoryIdInput = document.getElementById("categoryIdInput");

//display container products
const productcontainer = document.getELementbyId("productContainer");


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
