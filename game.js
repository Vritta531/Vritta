//DOM Variables
const moneyHeading = document.querySelector("#money");
const moneybutton = document.querySelector("#moneybutton");
const autoHeading = document.querySelector("#autoclicker");
const autoclickerbutton = document.querySelector("#autobutton");
const infoText = document.querySelector("#info");

//Game Variables
let money = 0;
let auto = 0;

//Function
const updateUI = () => {
    moneyHeading.innerHTML = `Money: ${money}`
    autoHeading.innerHTML = `Autoclickers: ${auto}`
};
const mouseout = () => {
    infoText.innerHTML = `Hover over something for more info`
}

//Event Listeners
moneybutton.addEventListener("click", () => {
    money += 1;
    updateUI();
});
moneybutton.addEventListener("mouseover", () => {
    infoText.innerHTML = `Click this button to make money`
});
moneybutton.addEventListener("mouseout", () => {
    mouseout();
});

//Autoclicker purchase button
autoclickerbutton.addEventListener("click", () => {
    if(money >= 10) {
        money -= 10;
        auto += 1;
    }
});
autoclickerbutton.addEventListener("mouseover", () => {
    infoText.innerHTML = `Autoclicker makes money for you | 1 autoclicker makes 1 money every 1000ms`
});
autoclickerbutton.addEventListener("mouseout", () => {
    mouseout();
});

//Hover over info


//Game Loop
window.setInterval(() => {
    money += auto;
}, 1000);

window.setInterval(() => {
    updateUI();
}, 20);