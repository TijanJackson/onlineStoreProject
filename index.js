// a total to see the number of items in the cart
let total = 0;
// a variable used to track total amount from purchasing on the catalogue page
let amount = 0;
// a total to see the number of items in the cart on an individual items page
let newTotal = 0;
// a variable used to track total amount from purchasing on an individual items page
let newAmount = 0;
// An array to store the items added to cart added from the catalogue page
let cartItem = [];
// grabs the items div by its id and assigns it to the variable "items"
let items = document.getElementById('items');
// Grabbing the totalAmount div by its ID
let totalAmount = document.getElementById('totalAmount');
// A variable that generates 3 random numbers
let refNo = `${Math.floor(Math.random() * 3)}${Math.floor(Math.random() * 5)}${Math.floor(Math.random() * 7)}`;


// increments total and amount, and alerts the user to the total and what is also in their cart and their prices
$(document).ready(function() {
    $('#konosubaBtn').click(function() {
        total += 1;
        $('#cart').html(total);
        amount += 200;
        // Stores amount in the sessionStorage object
        sessionStorage.setItem("amount", `${amount}`);
        alert(`Total R${amount}`);
        cartItem.push(' Konosuba T-shirt R200');
        // Stores the array items in the sessionStorage object
        sessionStorage.setItem("cartItem", `${cartItem}`);
        // Alert that displays all items in the cartItem array
        alert(cartItem);
    });
});

$(document).ready(function() {
    $('#mobBtn').click(function() {
        total += 1;
        $('#cart').html(total);
        amount += 220;
        sessionStorage.setItem("amount", `${amount}`);
        alert(`Total R${amount}`);
        cartItem.push(' Mob T-shirt R220');
        sessionStorage.setItem("cartItem", `${cartItem}`);
        alert(cartItem);
    });
});

$(document).ready(function() {
    $('#rezeroBtn').click(function() {
        total += 1;
        $('#cart').html(total);
        amount += 350;
        sessionStorage.setItem("amount", `${amount}`);
        alert(`Total R${amount}`);
        cartItem.push(' Rezero T-shirt R350');
        sessionStorage.setItem("cartItem", `${cartItem}`);
        alert(cartItem);
    });
});

$(document).ready(function() {
    $('#soraBtn').click(function() {
        total += 1;
        $('#cart').html(total);
        amount += 180;
        sessionStorage.setItem("amount", `${amount}`);
        alert(`Total R${amount}`);
        cartItem.push(' Sora T-shirt R180');
        sessionStorage.setItem("cartItem", `${cartItem}`);
        alert(cartItem);
    });
});

$(document).ready(function() {
    $('#opmBtn').click(function() {
        total += 1;
        $('#cart').html(total);
        amount += 150;
        sessionStorage.setItem("amount", `${amount}`);
        alert(`Total R${amount}`);
        cartItem.push(' OPM T-shirt R150');
        sessionStorage.setItem("cartItem", `${cartItem}`);
        alert(cartItem);
    });
});




// Displays the items in the cartItem array to the items div
function showCart() {
    items.append(sessionStorage.getItem("cartItem"));
};

// Displays the total amount on the totalAmount div
function showTotal() {
    totalAmount.append(`R${sessionStorage.getItem("amount")} (VAT incl.)`);
};




// Hides a dropdown menu on shipping.html

$(document).ready(function() {
    $("#location").hide();
});

// Displays dropdown menu on shipping.html
$(document).ready(function() {
    $("#btnLocation").click(function() {
        $("#location").slideToggle();
    });
});



// confirm button alert with a generated reference number
function confirm() {
    alert(`Order successful. Your reference no. is: ${refNo}`);
};

// onload, the mascot is hidden
$(document).ready(function() {
    $("#ty").hide();
});

// onload, the thank message is hidden
$(document).ready(function() {
    $("#thanks").hide();
});

$(document).ready(function() {
    // When the user clicks on the confirm order button, a function is set off
    $("#con").click(function() {
        // Chaining the show method with the animate method for the mascot image
        $("#ty").show().animate({ right: '510px' });
        // Displays the thank you message
        $("#thanks").show();
    });
});





// Individual pages
$(document).ready(function() {
    $('#addKonosuba').click(function() {
        newAmount += 200;
        alert(`R${newAmount}`);
        newTotal += 1;
        $('#cartKonosuba').html(newTotal);
    });
});

$(document).ready(function() {
    $('#addMob').click(function() {
        newAmount += 220;
        alert(`R${newAmount}`);
        newTotal += 1;
        $('#cartMob').html(newTotal);
    });
});

$(document).ready(function() {
    $('#addRezero').click(function() {
        newAmount += 350;
        alert(`R${newAmount}`);
        newTotal += 1;
        $('#cartRezero').html(newTotal);
    });
});

$(document).ready(function() {
    $('#addSora').click(function() {
        newAmount += 180;
        alert(`R${newAmount}`);
        newTotal += 1;
        $('#cartSora').html(newTotal);
    });
});

$(document).ready(function() {
    $('#addOpm').click(function() {
        newAmount += 150;
        alert(`R${newAmount}`);
        newTotal += 1;
        $('#cartOpm').html(newTotal);
    });
});

// Hides the delivery method form onload
$(document).ready(function() {
    $("#deliveryForm").hide();
});

// Displays the delivery method form when the deliver option has been selected from the radio buttons 
$(document).ready(function() {
    $('#deliver').change(function() {
        $('#deliveryForm').show();
    });
});

// The amount is incremeted by 100 if the standard radio button is selected
$(document).ready(function() {
    $('#standard').change(function() {
        newAmount += 100;
        alert(`R${newAmount}`);
    });
});


// The amount is incremented by 150 if the priority radio button is selected
$(document).ready(function() {
    $('#priority').change(function() {
        newAmount += 150;
        alert(`R${newAmount}`);
    });
});

// grabs the useCode by the ID
let useCode = document.getElementById('useCode');
// grabs the input field by the ID
let code = document.getElementById('code');
// The discount word
let discount = 'code';



useCode.addEventListener('click', function() {
    // If the user's input isn't the discount, an alert will go off asking for a valid code
    if (code.value !== discount) {
        alert('Not a valid code');
    } else {
        // if the code is valid, the amount will be reduced by 100
        newAmount -= 100;
        // then an alert goes off with the newly calculated amount
        alert(newAmount);

    }
});

// A confirm order button for the individual pages, with a generated reference number
function buy() {
    alert(`Order successful. Your reference no. is: ${refNo}`);
};