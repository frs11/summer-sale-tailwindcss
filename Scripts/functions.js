// card handling functions

function productPriceCalculation(prodsPrice, prodsName)
{
    let prodPrice = getInnerTextAmount(prodsPrice);
    let discountPrice = getInnerTextAmount('discount-price');
    let prodName = getInnerTextName(prodsName);
    let totalWithoutDiscount = getInnerTextAmount('withoutDiscountTotal');
    let totalWithDiscount = getInnerTextAmount('withDiscountTotal');

    totalWithoutDiscount += prodPrice;
     
    purchaseButtonStatus(totalWithoutDiscount, 'purchase-button');
    applyButtonStatus(totalWithoutDiscount);
    
    if(discountPrice >0)
    {
        discountPrice = totalWithoutDiscount * 0.2;
        totalWithDiscount = totalWithoutDiscount - discountPrice;
    }
    else
    {
        totalWithDiscount = totalWithoutDiscount;
    }
    
    addProductToTheList(prodName);
    setInnerTextAmount('withoutDiscountTotal', totalWithoutDiscount); 
    setInnerTextAmount('withDiscountTotal', totalWithDiscount);
    setInnerTextAmount('discount-price', discountPrice);
}

// Button enable-disable functions

// Purchase Button
function purchaseButtonStatus(totalPrice, buttonID)
{
    let button = document.getElementById(buttonID);
    if(totalPrice > 0)
    {
        button.classList.remove("btn-disabled");
        document.getElementById(buttonID).style.backgroundColor = "#E527B2";
    }
}

// Apply Button
function applyButtonStatus(totalPrice)
{
    let button = document.getElementById('apply-button');
    if(totalPrice >= 200)
    {
        button.classList.remove("btn-disabled");
        document.getElementById('apply-button').style.backgroundColor = "#E527B2";
    }
}

// Discount Calculations
function discountCalculation()
{

    let discountPrice = getInnerTextAmount('discount-price');
    let totalWithoutDiscount = getInnerTextAmount('withoutDiscountTotal');
    let totalWithDiscount = getInnerTextAmount('withDiscountTotal');
    let inputText = document.getElementById('coupon-field').value;

    if(inputText === 'SELL200')
    {
        discountPrice = totalWithoutDiscount * 0.2;
        totalWithDiscount = totalWithoutDiscount - discountPrice;

        setInnerTextAmount('withoutDiscountTotal', totalWithoutDiscount); 
        setInnerTextAmount('withDiscountTotal', totalWithDiscount);
        setInnerTextAmount('discount-price', discountPrice);
    }
    else
    {
        alert('Invalid Coupon');
        inputText = '';
    }
    
}

// Get price by id
function getInnerTextAmount(Amount)
{
    const decimalAmount = parseFloat(document.getElementById(Amount).innerText);
    let twoDigitAmount = decimalAmount.toFixed(2);
    twoDigitAmount = parseFloat(twoDigitAmount);
    return twoDigitAmount;
}
function getInnerTextName(prodID)
{
    const prodName = document.getElementById(prodID).innerText;
    return prodName;
}

// Set price by ID
function setInnerTextAmount(location, amount)
{
    amount = parseFloat(amount); 
    amount = amount.toFixed(2);
    document.getElementById(location).innerText = amount;
}
function setInnerTextName(location, prodName)
{
    document.getElementById(location).innerText = prodName;
}

// Create Product list
function addProductToTheList(prodName)
{
    const productList = document.getElementById('prodList');
    let itemsCount = productList.childElementCount;

    const item = document.createElement('p');
    item.classList.add('my-2');
    item.innerHTML = `${itemsCount + 1}. ${prodName}`
    productList.appendChild(item);
}

// Clear input field
function clearValue(idName)
{
    document.getElementById(idName).value ='';
}
