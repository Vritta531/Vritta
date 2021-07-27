//DOM Variables
const moneyHeading = document.querySelector("#money");
const moneybutton = document.querySelector("#moneybutton");
const autoHeading = document.querySelector("#autoclicker");
const autostonecollectorstat = document.querySelector("#autostonecollectorstat")
const pickaxepowerstat = document.querySelector("#pickaxepowerstat")
const autoclickerbutton = document.querySelector("#autobutton");
const infoText = document.querySelector("#info");
const clickpowerbutton = document.querySelector("#clickpowerbutton")
const clickpowervalue = document.querySelector("#clickpower")
const uppickaxe = document.querySelector("#uppickaxe")
const stoneHeading = document.querySelector("#stone")
const upclickpowermultiplier = document.querySelector("#upclickpowermultiplier")
const addclickpwr = document.querySelector("#addclickpwrstat")
const pickaxebutton = document.querySelector("#pickaxebutton")
const autostonecollector = document.querySelector("#autostone")
const pickaxepowerbutton = document.querySelector("#pickaxepowerbutton")

//Game Variables
var money = 0;
var auto = 0;
var autocost = 10;
var additionalclickpower = 0;
var clickpowermultiplier = 1;
var clickpower = ((1+additionalclickpower)*clickpowermultiplier);
var clickpowercost = 30;
var stone = 0;
var autostone = 0;
var autostonecost = 50;
var pickaxepowercost = 100;
var additionalpickaxepower = 0;
var pickaxepower = 1+additionalpickaxepower;

//Functions
const updateUI = () => {
    moneyHeading.innerHTML = `Wood: ${money}`;
    autoHeading.innerHTML = `Autochoppers: ${auto}`;
    stoneHeading.innerHTML = `Stone: ${stone}`;
    clickpower = ((1+additionalclickpower)*clickpowermultiplier);
    clickpowervalue.innerHTML = `Axe power: ${clickpower}`;
};
const mouseout = () => {
    infoText.innerHTML = `Hover over something for more info`;
};

//Game Loops
window.setInterval(() => {
    money += auto;
    stone += autostone;
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
    infoText.innerHTML = `Click this button to chop wood`;
});
moneybutton.addEventListener("mouseout", () => {
    mouseout();
});

//Autoclicker purchase button
autoclickerbutton.addEventListener("click", () => {
    if(money >= autocost) {
        money -= autocost;
        auto += 1;
        autocost = autocost*2;
        autoclickerbutton.innerHTML = `Autochopper || ${autocost} wood`;
    }
});
autoclickerbutton.addEventListener("mouseover", () => {
    infoText.innerHTML = `Autochopper chops wood for you | 1 autochopper chops 1 wood every 1000ms`;
});
autoclickerbutton.addEventListener("mouseout", () => {
    mouseout();
});

//Click power button
clickpowerbutton.addEventListener("click", () => {
    if(money >= clickpowercost) {
        money -= clickpowercost;
        additionalclickpower += 1;
        clickpowercost = clickpowercost*2;
        clickpowerbutton.innerHTML = `Increase axe power by 1 || ${clickpowercost} wood`;
    }
});
clickpowerbutton.addEventListener("mouseover", () => {
    infoText.innerHTML = `Increases axe power by 1`;
});
clickpowerbutton.addEventListener("mouseout", () => {
    mouseout();
});

//Stone things visible or nah
var appBanners = document.getElementsByClassName('stoneclass'); //Hiding all stoneclass things
for (var i = 0; i < appBanners.length; i ++) {
    appBanners[i].style.display = 'none';
}

//Gather stone button
pickaxebutton.addEventListener("click", () => {
    stone += pickaxepower;
    updateUI();
});
pickaxebutton.addEventListener("mouseover", () => {
    infoText.innerHTML = `Click this button to gather stone`;
});
pickaxebutton.addEventListener("mouseout", () => {
    mouseout();
});

//Automatic stone collector
autostonecollector.addEventListener("click", () => {
    if(stone >= autostonecost) {
        stone -= autostonecost;
        autostone += 1;
        autostonecost = autostonecost*2
        autostonecollector.innerHTML = `Automatic stone collector || ${autocost} wood`
        autostonecollectorstat.innerHTML = `Automatic stone collectors: ${autostone}`
    }
});
autostonecollector.addEventListener("mouseover", () => {
    infoText.innerHTML = `Automatic stone collector | 1 ASC gathers 1 stone every 1000ms`;
});
autostonecollector.addEventListener("mouseout", () => {
    mouseout();
});

//Pickaxe power increase
pickaxepowerbutton.addEventListener("click", () => {
    if(stone >= pickaxepowercost) {
        stone -= pickaxepowercost;
        pickaxepower += 1;
        pickaxepowercost = pickaxepowercost*2;
        pickaxepowerbutton.innerHTML = `Increase pickaxeaxe power by 1 || ${pickaxepowercost} stone`;
        pickaxepowerstat.innerHTML = `Pickaxe power: ${pickaxepower}`;
    }
});
pickaxepowerbutton.addEventListener("mouseover", () => {
    infoText.innerHTML = `Increases pickaxe power by 1`;
});
pickaxepowerbutton.addEventListener("mouseout", () => {
    mouseout();
});

//Upgrades
uppickaxe.addEventListener("click", () => {
    if(money>=1000) {
        money -= 1000;
        uppickaxe.style.display = 'none';
        var appBanners = document.getElementsByClassName('stoneclass'); //Hiding all stoneclass things
for (var i = 0; i < appBanners.length; i ++) {
    appBanners[i].style.display = 'block';
}
    }
});

//Click power multiplier
upclickpowermultiplier.addEventListener("click", () => {
    if(money>=666) {
        money -= 666;
        clickpowermultiplier += 1;
        upclickpowermultiplier.style.display = 'none';
    }});