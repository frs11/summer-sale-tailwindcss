document.getElementById("catOneProdOne").addEventListener("click", function()
{
    productPriceCalculation('catOneProdOnePrice', 'catOneProdOneName')

})
document.getElementById("catOneProdTwo").addEventListener("click", function()
{
    productPriceCalculation('catOneProdTwoPrice', 'catOneProdTwoName')

})
document.getElementById("catOneProdThree").addEventListener("click", function()
{
    productPriceCalculation('catOneProdThreePrice', 'catOneProdThreeName')

})
document.getElementById("catTwoProdOne").addEventListener("click", function()
{
    productPriceCalculation('catTwoProdOnePrice', 'catTwoProdOneName')

})
document.getElementById("catTwoProdTwo").addEventListener("click", function()
{
    productPriceCalculation('catTwoProdTwoPrice', 'catTwoProdTwoName')

})
document.getElementById("catTwoProdThree").addEventListener("click", function()
{
    productPriceCalculation('catTwoProdThreePrice', 'catTwoProdThreeName')

})










// Refresh Screen
document.getElementById('goHomeButton').addEventListener('click', function()
{
    // window.location.href = "index.html";
    window.location.reload();
})