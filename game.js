//DOM Variables
const moneyHeading = document.querySelector("#money");
const moneybutton = document.querySelector("#moneybutton");
const autoHeading = document.querySelector("#autoclicker");
const autoclickerbutton = document.querySelector("#autobutton");
const infoText = document.querySelector("#info");
const clickpowerbutton = document.querySelector("#clickpowerbutton")
const clickpowervalue = document.querySelector("#clickpower")

//Game Variables
let money = 0;
let auto = 0;
var autocost = 10;
var clickpower = 1;
var clickpowercost = 30;

//Function
const updateUI = () => {
    moneyHeading.innerHTML = `Money: ${money}`
    autoHeading.innerHTML = `Autoclickers: ${auto}`
};
const mouseout = () => {
    infoText.innerHTML = `Hover over something for more info`
}

//Make money button
moneybutton.addEventListener("click", () => {
    money += clickpower;
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
    if(money >= autocost) {
        money -= autocost;
        auto += 1;
        autocost = autocost*2
        autoclickerbutton.innerHTML = `Autoclicker || ${autocost} money`
    }
});
autoclickerbutton.addEventListener("mouseover", () => {
    infoText.innerHTML = `Autoclicker makes money for you | 1 autoclicker makes 1 money every 1000ms`
});
autoclickerbutton.addEventListener("mouseout", () => {
    mouseout();
});

//Click power button
clickpowerbutton.addEventListener("click", () => {
    if(money >= autocost) {
        money -= clickpowercost;
        clickpower += 1;
        clickpowercost = clickpowercost*2
        clickpowerbutton.innerHTML = `Increase click power by 1 || ${clickpowercost} money`
        clickpowervalue.innerHTML = `Click power: ${clickpower}`
    }
});
autoclickerbutton.addEventListener("mouseover", () => {
    infoText.innerHTML = `Autoclicker makes money for you | 1 autoclicker makes 1 money every 1000ms`
});
autoclickerbutton.addEventListener("mouseout", () => {
    mouseout();
});

//Game Loops
window.setInterval(() => {
    money += auto;
}, 1000);

window.setInterval(() => {
    updateUI();
}, 20);