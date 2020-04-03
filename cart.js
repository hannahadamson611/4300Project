


function changePaymentDetails(){
    var listElems = document.getElementById("paymentList").children;
    clearPaymentDetails(listElems);
    if (document.getElementById("paymentMethod").value == "creditDebitCard"){
        var listElem = document.createElement("li");
        var cardLabel = document.createElement("label");
        var cardSelect = document.createElement("select");
        cardSelect.id = "cardSelect";
        cardLabel.setAttribute("for","cardSelect");
        cardLabel.innerHTML = "Card:"

        var placeHolderOption = document.createElement("option");
        var mastercardOption = document.createElement("option");
        var visaOption = document.createElement("option");

        //setting attributes so the placeholder cannot be selected
        placeHolderOption.selected = true;
        placeHolderOption.disabled = true;
        placeHolderOption.hidden = true;
        placeHolderOption.innerHTML = "Choose Card";

        //set mastercard attr
        mastercardOption.value = "mastercard";
        mastercardOption.innerHTML = "MasterCard";

        //set visa attr

        visaOption.value = "visa";
        visaOption.innerHTML = "Visa";

        //attach elements 
        cardSelect.appendChild(placeHolderOption);
        cardSelect.appendChild(mastercardOption);
        cardSelect.appendChild(visaOption);

        listElem.appendChild(cardLabel);
        listElem.appendChild(cardSelect);

        document.getElementById("paymentList").appendChild(listElem);


        //card number

        var listElem1 = document.createElement("li");
        var cardNumberLabel = document.createElement("label");
        var cardText = document.createElement("input");

        cardText.id = "cardNumber";
        cardNumberLabel.setAttribute("for","cardNumber");
        cardNumberLabel.innerHTML = "Card Number:";

        cardText.type = "text";
        cardText.size = "16";
        cardText.maxLength = "16";
        cardText.minLength = "16"
        cardText.pattern = "\d{16}"
        cardText.required = true;

        //attach
        listElem1.appendChild(cardNumberLabel);
        listElem1.appendChild(cardText);

        document.getElementById("paymentList").appendChild(listElem1);


        //cvv

        var listElem2 = document.createElement("li");
        var cvvLabel = document.createElement("label");
        var cvvText = document.createElement("input");

        cvvText.id = "cvvNumber";
        cvvLabel.setAttribute("for","cvvNumber");
        cvvLabel.innerHTML = "CVV:";

        cvvText.type = "password";
        cvvText.size = "3";
        cvvText.maxLength = "3";
        cvvText.minLength = "3";
        cvvText.pattern = "\d{3}";
        cvvText.required = true;

        //attach
        listElem2.appendChild(cvvLabel);
        listElem2.appendChild(cvvText);

        document.getElementById("paymentList").appendChild(listElem2);

        //Cardholder

        var listElem3 = document.createElement("li");
        var cardHolderLabel = document.createElement("label");
        var cardHolderText = document.createElement("input");

        cardHolderText.id = "cardHolder";
        cardHolderLabel.setAttribute("for","cardHolder");
        cardHolderLabel.innerHTML = "Card Holder:";

        cardHolderText.type = "text";
        cardHolderText.size = "24";
        
        cardHolderText.pattern = "[a-zA-z]+\s[a-zA-z]+";
        cardHolderText.required = true;

        //attach
        listElem3.appendChild(cardHolderLabel);
        listElem3.appendChild(cardHolderText);

        document.getElementById("paymentList").appendChild(listElem3);

        //Expiration Date

        var listElem4 = document.createElement("li");
        var ExprLabel = document.createElement("label");
        var ExprText = document.createElement("input");

        ExprText.id = "ExprDate";
        ExprLabel.setAttribute("for","ExprDate");
        ExprLabel.innerHTML = "Expiration Date:";

        ExprText.type = "text";
        ExprText.size = "7";
        ExprText.placeholder = "MM-YYYY"
        ExprText.pattern = "\d\d\/\d\d\d\d";
        ExprText.required = true;

        //attach
        listElem4.appendChild(ExprLabel);
        listElem4.appendChild(ExprText);

        document.getElementById("paymentList").appendChild(listElem4);
    }
}
function clearPaymentDetails(listForClearing){
    //i is set to one so we do not remove the payment method node
    for(let i = 1; i < listForClearing.length;i++){
        listForClearing[i].remove();
    }
}
function submitOrder(){
    if(confirm("Please make sure to review your order before clicking OK")){
        document.getElementById("paymentAndShipping").submit();
    }
}