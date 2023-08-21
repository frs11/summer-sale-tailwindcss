document.getElementById("catOneProdOne").addEventListener("click", function()
{
    let prodPrice = getInnerTextAmount('catOneProdOnePrice');
    let prodName = getInnerTextName('catOneProdOneName');
    let totalWithoutDiscount = getInnerTextAmount('withoutDiscountTotal');
    let totalWithDiscount = getInnerTextAmount('withDiscountTotal');

    totalWithoutDiscount += prodPrice;
    totalWithDiscount += prodPrice;

    addProductToTheList(prodName);
    setInnerTextAmount('withoutDiscountTotal', totalWithoutDiscount); 
    setInnerTextAmount('withDiscountTotal', totalWithDiscount); 
    
    buttonStatus(totalWithoutDiscount);

    console.log("Selected Item is: " + prodName + " Price is: " + prodPrice + " Total With  discount is: " + totalWithDiscount + " total without discount is: " + totalWithoutDiscount);
})





// Refresh Screen
document.getElementById('goHomeButton').addEventListener('click', function()
{
    window.location.href = "index.html";
})