//DOM Variables
const moneyHeading = document.querySelector("#money");
const moneybutton = document.querySelector("#moneybutton");
const autoHeading = document.querySelector("#autoclicker");
const autoclickerbutton = document.querySelector("#autobutton");
const infoText = document.querySelector("#info");
const clickpowerbutton = document.querySelector("#clickpowerbutton")
const clickpowervalue = document.querySelector("#clickpower")
const uppickaxe = document.querySelector("#uppickaxe")

//Game Variables
let money = 0;
let auto = 0;
var autocost = 10;
var clickpower = 1;
var clickpowercost = 30;
var stone = 0;

//Functions
const updateUI = () => {
    moneyHeading.innerHTML = `Wood: ${money}`
    autoHeading.innerHTML = `Autochoppers: ${auto}`
};
const mouseout = () => {
    infoText.innerHTML = `Hover over something for more info`
}

//Navbar
function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  document.getElementById("defaultOpen").click();

//Make money button
moneybutton.addEventListener("click", () => {
    money += clickpower;
    updateUI();
});
moneybutton.addEventListener("mouseover", () => {
    infoText.innerHTML = `Click this button to chop wood`
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
        autoclickerbutton.innerHTML = `Autochopper || ${autocost} wood`
    }
});
autoclickerbutton.addEventListener("mouseover", () => {
    infoText.innerHTML = `Autochopper chops wood for you | 1 autochopper chops 1 wood every 1000ms`
});
autoclickerbutton.addEventListener("mouseout", () => {
    mouseout();
});

//Click power button
clickpowerbutton.addEventListener("click", () => {
    if(money >= clickpowercost) {
        money -= clickpowercost;
        clickpower += 1;
        clickpowercost = clickpowercost*2
        clickpowerbutton.innerHTML = `Increase axe power by 1 || ${clickpowercost} wood`
        clickpowervalue.innerHTML = `Axe power: ${clickpower}`
    }
});
clickpowerbutton.addEventListener("mouseover", () => {
    infoText.innerHTML = `Increases axe power by 1`
});
clickpowerbutton.addEventListener("mouseout", () => {
    mouseout();
});

//Stone things
var appBanners = document.getElementsByClassName('stoneclass'); //Hiding all stoneclass things
for (var i = 0; i < appBanners.length; i ++) {
    appBanners[i].style.display = 'none';
}

//Game Loops
window.setInterval(() => {
    money += auto;
}, 1000);

window.setInterval(() => {
    updateUI();
}, 20);