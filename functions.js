const purchaseBtn = document.querySelector(".purchase-btn");
const purchaseDiv = document.querySelector(".purchase-cars");
const closeBtn = document.querySelector(".purchase-close-btn");

purchaseBtn.addEventListener("click", function() {
    purchaseDiv.style.display = "inline"
})


closeBtn.addEventListener("click", function() {
    purchaseDiv.style.display = 'none'
})
