
// Button enable-disable function
function buttonStatus()
{
    
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
