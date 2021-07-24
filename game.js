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
var uppickaxebought = 0;

//Functions
const updateUI = () => {
    moneyHeading.innerHTML = `Wood: ${money}`
    autoHeading.innerHTML = `Autochoppers: ${auto}`
};
const mouseout = () => {
    infoText.innerHTML = `Hover over something for more info`
}

//Game Loops
window.setInterval(() => {
    money += auto;
}, 1000);

window.setInterval(() => {
    updateUI();
}, 20);

//Navbar,  Tabs
function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
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
if (uppickaxebought<1){
var appBanners = document.getElementsByClassName('stoneclass'); //Hiding all stoneclass things
for (var i = 0; i < appBanners.length; i ++) {
    appBanners[i].style.display = 'none';
}};

//Ugrades
uppickaxe.addEventListener("click", () => {
    if(money>=1000) {
        money -= 1000;
        uppickaxebought = 1;
        uppickaxe.style.display = 'none';
    }
})