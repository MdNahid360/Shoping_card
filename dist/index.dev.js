"use strict";

// document.getElementById('add').addEventListener('click', function (){
//     hadletCounting(true);
// })
// document.getElementById('remove').addEventListener('click', function (){
//     hadletCounting(false);
// })
// phone:::::::::
// document.getElementById('phoneAdd').addEventListener('click', function(){
//     const phoneInput = document.getElementById('phone-count');
//     let phoneUpdate = parseInt(phoneInput.value);
//      let totalPrice = phoneUpdate + 1;
//      phoneInput.value = totalPrice;
//     let totalPhonePrice = totalPrice * 1219;
//     document.getElementById('phoneTotal').innerText= '$' + totalPhonePrice;
// });
// document.getElementById('phoneRemove').addEventListener('click', function(){
//     const phoneRemove = document.getElementById('phone-count');
//     let removeUpdate = parseInt(phoneRemove.value);
//     let total = removeUpdate - 1;
//     phoneRemove.value = total;
//     let totalRemovePrice = total * 1219;
//     document.getElementById('phoneTotal').innerText = '$' + totalRemovePrice;
// })
// document.getElementById('phoneAdd').addEventListener('click', function(){
//     handlePhone(true);
// })
// document.getElementById('phoneRemove').addEventListener('click', function(){
//     handlePhone(false);
// })
function handleproduct(product, productPass) {
  var phoneInput = document.getElementById(product + '-count');
  var productUpdate = parseInt(phoneInput.value); //  let totalPrice = phoneUpdate + 1;

  var newProductUpdate = productUpdate;

  if (productPass == true) {
    newProductUpdate = productUpdate + 1;
  }

  if (productPass == false && productUpdate > 0) {
    newProductUpdate = productUpdate - 1;
  }

  phoneInput.value = newProductUpdate; // let totalProductPrice = newProductUpdate * 1219;

  var totalProductPrice = 0;

  if (product == 'phone') {
    totalProductPrice = newProductUpdate * 1219;
  }

  if (product == 'case') {
    totalProductPrice = newProductUpdate * 60;
  }

  document.getElementById(product + '-total').innerText = '$' + totalProductPrice;
  totalPrice();
}

function totalPrice() {
  // const phoneInput = document.getElementById('phone-count');
  // const phoneCount = parseInt(phoneInput.value);
  var phoneCount = getInputValue('phone');
  var caseCount = getInputValue('case');
  var totalallPrice = phoneCount * 1219 + caseCount * 60;
  document.getElementById('total-price').innerText = '$' + totalallPrice;
  var tax = Math.round(totalallPrice / 100 * 10);
  document.getElementById('tax-amount').innerText = '$' + tax;
  var grandTotal = totalallPrice + tax;
  document.getElementById('grand-total').innerText = '$' + grandTotal;
}

function getInputValue(productValue) {
  var productInput = document.getElementById(productValue + '-count');
  var productCount = parseInt(productInput.value);
  return productCount;
}

document.getElementById('phoneClose').addEventListener('click', function () {
  document.getElementById('phoneBox').style.display = 'none';
});
document.getElementById('hadPhonelose').addEventListener('click', function () {
  document.getElementById('headphoneBox').style.display = 'none';
});
document.getElementById('checkOut').addEventListener('click', function () {
  document.getElementById('card').style.display = 'none';
});
document.getElementById('checkOut').addEventListener('click', function () {
  document.getElementById('blockCart').style.display = 'block';
});
document.getElementById('back').addEventListener('click', function () {
  document.getElementById('blockCart').style.display = 'none';
});
document.getElementById('back').addEventListener('click', function () {
  document.getElementById('card').style.display = 'block';
}); // function handlePhone(phone){
//     const phoneInput = document.getElementById('phone-count');
//     let phoneUpdate = parseInt(phoneInput.value);
//     //  let totalPrice = phoneUpdate + 1;
//     let newPhoneUpdate = phoneUpdate;
//     if(phone == true){
//           newPhoneUpdate = phoneUpdate + 1;
//     }
//     if(phone == false && phoneUpdate > 0){
//         newPhoneUpdate = phoneUpdate  - 1;
//     }
//      phoneInput.value = newPhoneUpdate;
//     let totalPhonePrice = newPhoneUpdate * 1219;
//     document.getElementById('phoneTotal').innerText= '$' + totalPhonePrice;
// }
// // headPhone ::::::::
// function hadletCounting (isIncres){
//     let productInput = document.getElementById('product-count');
//     let productPars = parseInt(productInput.value);
//       let newCounting = productPars; 
//        if(isIncres == true){
//         newCounting =  productPars + 1;
//        }
//        if(isIncres == false && productPars > 0){
//         newCounting = productPars - 1;
//        }
//     productInput.value = newCounting;
//     let totalPrice = newCounting * 60;
//     document.getElementById('case-total').innerText= '$' + totalPrice;
// }