// memory update //

const memorybtn8 = document.getElementById("memorybtn8");
const memorybtn16 = document.getElementById("memorybtn16");
const extramemorycost = document.getElementById("extramemorycost");
memorybtn8.addEventListener("click", function () {
    extramemorycost.innerText = "0";
    updatetotalprice()
})

memorybtn16.addEventListener("click", function () {
    extramemorycost.innerText = "180";
    updatetotalprice()
})


// storage cost update //

const storagebtn256 = document.getElementById("storagebtn256");
const storagebtn512 = document.getElementById("storagebtn512");
const storagebtn1tb = document.getElementById("storagebtn1tb");
storagebtn256.addEventListener("click", function () {
    extrastoragecost.innerText = "0";
    updatetotalprice()
})

storagebtn512.addEventListener("click", function () {
    extrastoragecost.innerText = "100";
    updatetotalprice()
})
storagebtn1tb.addEventListener("click", function () {
    extrastoragecost.innerText = "180";
    updatetotalprice()
})


// delivery charge update //

const freedelivery = document.getElementById("freedelivery")
const delivery20 = document.getElementById("delivery20")
freedelivery.addEventListener("click", function () {
    deliverycharge.innerText = "0";
    updatetotalprice()
})
delivery20.addEventListener("click", function () {
    deliverycharge.innerText = "20";
    updatetotalprice()
})

// total price & footer price update  //

const bestprice = document.getElementById("bestprice");
const totalprice = document.getElementById("totalprice");
const footerprice = document.getElementById("footerprice")

function updatetotalprice() {
    const bestpriceupdate = Number(bestprice.innerText);
    const memorycost = Number(extramemorycost.innerText);
    const storagecost = Number(extrastoragecost.innerText);
    const deliverycost = Number(deliverycharge.innerText);
    const totalpriceupdate = bestpriceupdate + memorycost + storagecost + deliverycost;
    totalprice.innerText = totalpriceupdate;
    footerprice.innerText = totalpriceupdate;
}