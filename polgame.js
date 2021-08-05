//DOM Variables
const moneyHeading = document.querySelector("#money");
const moneybutton = document.querySelector("#moneybutton");
const autoHeading = document.querySelector("#autoclicker");
const autostonecollectorstat = document.querySelector("#autostonecollectorstat");
const pickaxepowerstat = document.querySelector("#pickaxepowerstat");
const autoclickerbutton = document.querySelector("#autobutton");
const infoText = document.querySelector("#info");
const clickpowerbutton = document.querySelector("#clickpowerbutton");
const clickpowervalue = document.querySelector("#clickpower");
const uppickaxe = document.querySelector("#uppickaxe");
const stoneHeading = document.querySelector("#stone");
const upclickpowermultiplier = document.querySelector("#upclickpowermultiplier");
const addclickpwr = document.querySelector("#addclickpwrstat");
const pickaxebutton = document.querySelector("#pickaxebutton");
const autostonecollector = document.querySelector("#autostone");
const pickaxepowerbutton = document.querySelector("#pickaxepowerbutton");
const upautochoppermultiplier = document.querySelector("#upautochoppermultiplier");
const savebutton = document.querySelector("#savebutton");
const resetbutton = document.querySelector("#resetbutton");
const savegameint = document.querySelector("#savegameint");
const upclickpowermultiplier1 = document.querySelector("#upclickpowermultiplier1");
const uppickaxepowermultiplier = document.querySelector("#uppickaxepowermultiplier");
const prestigebutton = document.querySelector("#prestigebutton");
const moneyifprestigetext = document.querySelector("#moneyifprestigetext");
const moneytext = document.querySelector("#moneytext");
const prestigeup1 = document.querySelector("#prestigeup1");
const prestigeup2 = document.querySelector("#prestigeup2");
const upautostonemultiplier = document.querySelector("#upautostonemultiplier");
const languagechange = document.querySelector("#languagechange");


//Game Variables
var wood = 0;
var auto = 0;
var autopower = 0;
var autocost = 10;
var additionalclickpower = 0;
var clickpowermultiplier = 1;
var clickpower = ((1+additionalclickpower)*clickpowermultiplier);
var clickpowercost = 30;
var stone = 0;
var autostone = 0;
var autostonemultiplier = 1;
var autostonepower = (autostone*autostonemultiplier)
var autostonecost = 45;
var pickaxepowercost = 100;
var additionalpickaxepower = 0;
var pickaxepowermultiplier = 1;
var pickaxepower = ((1+additionalpickaxepower)*pickaxepowermultiplier);
var totalresources = 0;
var automultiplier = 1;
var progressbardivide = 1;
var progressbarvalue = ((totalresources/1000)/progressbardivide);
var resourcepopupvalue = 100000;
var money = 0;
var moneyifprestige = totalresources/10000;
var isthegamesaved = 0;
var uppickaxebought = 0;
var upclickpowermultiplierbought = 0;
var upautochoppermultiplierbought = 0;
var upclickpowermultiplierbought1 = 0;
var uppickaxepowermultiplierbought = 0;
var upautostonemultiplierbought = 0;
var prestigeup1bought = 0;
var prestigeup2bought = 0;
var gamesavedago = 0;
var autointerval;
var autointervalvalue = 1000;

var select = document.getElementById('savegameintervalsetting');//Save game interval value from html
var value = select.options[select.selectedIndex].value;

//Was the game saved?
isthegamesaved = JSON.parse(localStorage.getItem('isthegamesaved'));

//Loading save from local storage
if (isthegamesaved == 1){
wood = JSON.parse(localStorage.getItem('wood'));
auto = JSON.parse(localStorage.getItem('auto'));
autointervalvalue = JSON.parse(localStorage.getItem('autointervalvalue'));
autopower = JSON.parse(localStorage.getItem('autopower'));
autocost = JSON.parse(localStorage.getItem('autocost'));
additionalclickpower = JSON.parse(localStorage.getItem('additionalclickpower'));
clickpowermultiplier = JSON.parse(localStorage.getItem('clickpowermultiplier'));
clickpower = JSON.parse(localStorage.getItem('clickpower'));
clickpowercost = JSON.parse(localStorage.getItem('clickpowercost'));
stone = JSON.parse(localStorage.getItem('stone'));
autostone = JSON.parse(localStorage.getItem('autostone'));
autostonemultiplier = JSON.parse(localStorage.getItem('autostonemultiplier'));
autostonecost = JSON.parse(localStorage.getItem('autostonecost'));
pickaxepowercost = JSON.parse(localStorage.getItem('pickaxepowercost'));
additionalpickaxepower = JSON.parse(localStorage.getItem('additionalpickaxepower'));
pickaxepowermultiplier = JSON.parse(localStorage.getItem('pickaxepowermultiplier'));
pickaxepower = JSON.parse(localStorage.getItem('pickaxepower'));
totalresources = JSON.parse(localStorage.getItem('totalresources'));
automultiplier = JSON.parse(localStorage.getItem('automultiplier'));
progressbardivide = JSON.parse(localStorage.getItem('progressbardivide'));
progressbarvalue = JSON.parse(localStorage.getItem('progressbarvalue'));
resourcepopupvalue = JSON.parse(localStorage.getItem('resourcepopupvalue'));
uppickaxebought = JSON.parse(localStorage.getItem('uppickaxebought'));
upclickpowermultiplierbought = JSON.parse(localStorage.getItem('upclickpowermultiplierbought'));
upautochoppermultiplierbought = JSON.parse(localStorage.getItem('upautochoppermultiplierbought'));
upclickpowermultiplierbought1 = JSON.parse(localStorage.getItem('upclickpowermultiplierbought1'));
value = JSON.parse(localStorage.getItem('value'));
uppickaxepowermultiplierbought = JSON.parse(localStorage.getItem('uppickaxepowermultiplierbought'));
money = JSON.parse(localStorage.getItem('money'));
prestigeup1bought = JSON.parse(localStorage.getItem('prestigeup1bought'));
prestigeup2bought = JSON.parse(localStorage.getItem('prestigeup2bought'));
upautostonemultiplierbought = JSON.parse(localStorage.getItem('upautostonemultiplierbought'));
};

//Loading upgrades state . bought or not
if (uppickaxebought == 1){uppickaxe.style.display = 'none';};
if (upclickpowermultiplierbought == 1){upclickpowermultiplier.style.display = 'none';};
if (upautochoppermultiplierbought == 1){upautochoppermultiplier.style.display = 'none';};
if (upclickpowermultiplierbought1 == 1){upclickpowermultiplier1.style.display = 'none';};
if (uppickaxepowermultiplierbought == 1){uppickaxepowermultiplier.style.display = 'none';};
if (prestigeup1bought == 1){prestigeup1.style.display = 'none';};
if (prestigeup2bought == 1){prestigeup2.style.display = 'none';};
if (upautostonemultiplierbought == 1){upautostonemultiplier.style.display = 'none';};

//Functions
const updateUI = () => {
    moneyHeading.innerHTML = `Drewno: ${wood}`;
    autoHeading.innerHTML = `Autorębacze: ${auto}`;
    stoneHeading.innerHTML = `Kamień: ${stone}`;
    clickpower = ((1+additionalclickpower)*clickpowermultiplier);
    pickaxepower = ((1+additionalpickaxepower)*pickaxepowermultiplier);
    progressbarvalue = ((totalresources/1000)/progressbardivide);
    clickpowervalue.innerHTML = `Moc siekiery: ${clickpower}`;
    autoclickerbutton.innerHTML = `Autorębacz || ${autocost} Drewna`;
    clickpowerbutton.innerHTML = `Zwiększ moc siekiery o 1 || ${clickpowercost} Drewna`;
    autostonecollector.innerHTML = `Automatyczny zbieracz kamienia || ${autostonecost} Kamienia`;
    autostonecollectorstat.innerHTML = `Automatyczne zbieracze kamienia: ${autostone}`;
    pickaxepowerbutton.innerHTML = `Zwiększ moc kilofa o 1 || ${pickaxepowercost} Kamienia`;
    pickaxepowerstat.innerHTML = `Moc kilofa: ${pickaxepower}`;
    autopower = (auto*automultiplier);
    autostonepower = (autostone*autostonemultiplier)
    moneyifprestige = totalresources/10000;
    moneyifprestigetext.innerHTML = `Zdobędziesz ${moneyifprestige} Pieniędzy `;
    moneytext.innerHTML = `Posiadasz ${money} Pieniędzy`
};
const mouseout = () => {
    infoText.innerHTML = `Najedź na coś aby uzyskać więcej informacji`;
};

const savegame = () => {
    if(value>0){
    localStorage.setItem('wood', JSON.stringify(wood));
    localStorage.setItem('auto', JSON.stringify(auto));
    localStorage.setItem('autointervalvalue', JSON.stringify(autointervalvalue));
    localStorage.setItem('autopower', JSON.stringify(autopower));
    localStorage.setItem('autocost', JSON.stringify(autocost));
    localStorage.setItem('additionalclickpower', JSON.stringify(additionalclickpower));
    localStorage.setItem('clickpowermultiplier', JSON.stringify(clickpowermultiplier));
    localStorage.setItem('clickpower', JSON.stringify(clickpower));
    localStorage.setItem('clickpowercost', JSON.stringify(clickpowercost));
    localStorage.setItem('stone', JSON.stringify(stone));
    localStorage.setItem('autostone', JSON.stringify(autostone));
    localStorage.setItem('autostonemultiplier', JSON.stringify(autostonemultiplier));
    localStorage.setItem('autostonecost', JSON.stringify(autostonecost));
    localStorage.setItem('pickaxepowercost', JSON.stringify(pickaxepowercost));
    localStorage.setItem('additionalpickaxepower', JSON.stringify(additionalpickaxepower));
    localStorage.setItem('pickaxepowermultiplier', JSON.stringify(pickaxepowermultiplier));
    localStorage.setItem('pickaxepower', JSON.stringify(pickaxepower));
    localStorage.setItem('totalresources', JSON.stringify(totalresources));
    localStorage.setItem('automultiplier', JSON.stringify(automultiplier));
    localStorage.setItem('progressbardivide', JSON.stringify(progressbardivide));
    localStorage.setItem('progressbarvalue', JSON.stringify(progressbarvalue));
    localStorage.setItem('resourcepopupvalue', JSON.stringify(resourcepopupvalue));
    localStorage.setItem('uppickaxebought', JSON.stringify(uppickaxebought));
    localStorage.setItem('upclickpowermultiplierbought', JSON.stringify(upclickpowermultiplierbought));
    localStorage.setItem('upautochoppermultiplierbought', JSON.stringify(upautochoppermultiplierbought));
    localStorage.setItem('upclickpowermultiplierbought1', JSON.stringify(upclickpowermultiplierbought1));
    localStorage.setItem('uppickaxepowermultiplierbought', JSON.stringify(uppickaxepowermultiplierbought));
    localStorage.setItem('prestigeup1bought', JSON.stringify(prestigeup1bought));
    localStorage.setItem('prestigeup2bought', JSON.stringify(prestigeup2bought));
    localStorage.setItem('upautostonemultiplierbought', JSON.stringify(upautostonemultiplierbought));
    localStorage.setItem('value', JSON.stringify(value));
    localStorage.setItem('money', JSON.stringify(money));
        isthegamesaved = 1;
    localStorage.setItem('isthegamesaved', JSON.stringify(isthegamesaved));
    gamesavedago = 0;
    window.setTimeout(savegame, value);
    }
    else{
        return;
    }
};

 savegame();


function restartautoloop() {
    clearInterval(autointerval);
    autointerval = setInterval(autoloop, autointervalvalue);
};

//Game Loops
window.setInterval(() => {
    if (totalresources >= resourcepopupvalue){
    window.alert("Zebrałeś całkowicie " + resourcepopupvalue + " zasobów! Gratulacje! Mnożniki mocy siekiery i kilofa zostały zwiększone o 5!");
    resourcepopupvalue = resourcepopupvalue*2;
    progressbardivide = progressbardivide*2;
    clickpowermultiplier += 5;
    pickaxepowermultiplier += 5;
    }
    gamesavedago += 1;
    savegameint.innerHTML = `Stan gry zapisany ${gamesavedago} sekund temu`
}, 1000);


const autoloop = () => {
    wood += autopower;
    stone += autostone;
    totalresources += autopower;
    totalresources += autostone;
};

autointerval = setInterval(autoloop, autointervalvalue);

//Save game

//Update UI
window.setInterval(() => {
    updateUI();
    changeProgress();
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

//Make wood button
moneybutton.addEventListener("click", () => {
    wood += clickpower;
    totalresources += clickpower;
    updateUI();
});
moneybutton.addEventListener("mouseover", () => {
    infoText.innerHTML = `Kliknij ten przycisk aby rąbać drewno`;
});
moneybutton.addEventListener("mouseout", () => {
    mouseout();
});

//Autoclicker purchase button
autoclickerbutton.addEventListener("click", () => {
    if(wood >= autocost) {
        wood -= autocost;
        auto += 1;
        autocost = autocost*2;
        autoclickerbutton.innerHTML = `Autorębacz || ${autocost} Drewna`;
    }
    else{window.alert("Nie masz wystarczająco zasobów!");}
});
autoclickerbutton.addEventListener("mouseover", () => {
    infoText.innerHTML = `Autorębacz rąbie drewno za ciebine | 1 autorębacz rąbie 1 drewno co sekundę`;
});
autoclickerbutton.addEventListener("mouseout", () => {
    mouseout();
});

//Click power button
clickpowerbutton.addEventListener("click", () => {
    if(wood >= clickpowercost) {
        wood -= clickpowercost;
        additionalclickpower += 1;
        clickpowercost = clickpowercost*2;
        clickpowerbutton.innerHTML = `Zwiększ moc siekiery o 1 || ${clickpowercost} Drewno`;
    }
    else{window.alert("Nie masz wystarczająco zasobów!");}
});
clickpowerbutton.addEventListener("mouseover", () => {
    infoText.innerHTML = `Zwiększa moc siekiery o 1`;
});
clickpowerbutton.addEventListener("mouseout", () => {
    mouseout();
});

//Stone things visible or nah
if (uppickaxebought == 0){
var appBanners = document.getElementsByClassName('stoneclass'); //Hiding all stoneclass things
for (var i = 0; i < appBanners.length; i ++) {
    appBanners[i].style.display = 'none';
}};

//Gather stone button
pickaxebutton.addEventListener("click", () => {
    stone += pickaxepower;
    updateUI();
});
pickaxebutton.addEventListener("mouseover", () => {
    infoText.innerHTML = `Kliknij ten przycisk aby zbierać kamień`;
});
pickaxebutton.addEventListener("mouseout", () => {
    mouseout();
});

//Automatic stone collector
autostonecollector.addEventListener("click", () => {
    if(stone >= autostonecost) {
        stone -= autostonecost;
        autostone += 1;
        autostonecost = autostonecost*2;
        autostonecollector.innerHTML = `Automatyczny zbieracz kamienia || ${autostonecost} Kamienia`;
        autostonecollectorstat.innerHTML = `Automatyczne zbieracze kamienia: ${autostone}`;
    }
    else{window.alert("Nie masz wystarczająco zasobów!");}
});
autostonecollector.addEventListener("mouseover", () => {
    infoText.innerHTML = `Automatyczny zbieracz kamienia | 1 AZK zbiera 1 kamień co sekundę`;
});
autostonecollector.addEventListener("mouseout", () => {
    mouseout();
});

//Pickaxe power increase
pickaxepowerbutton.addEventListener("click", () => {
    if(stone >= pickaxepowercost) {
        stone -= pickaxepowercost;
        additionalpickaxepower += 1;
        pickaxepowercost = pickaxepowercost*2;
        pickaxepowerbutton.innerHTML = `Zwiększ moc kilofa o 1 || ${pickaxepowercost} Kamienia`;
        pickaxepowerstat.innerHTML = `Moc kilofa: ${pickaxepower}`;
    }
    else{window.alert("Nie masz wystarczająco zasobów!");}
});
pickaxepowerbutton.addEventListener("mouseover", () => {
    infoText.innerHTML = `Zwiększa moc kilofa o 1`;
});
pickaxepowerbutton.addEventListener("mouseout", () => {
    mouseout();
});

//Upgrades
//Pickaxe
uppickaxe.addEventListener("click", () => {
    if(wood>=1000) {
        wood -= 1000;
        uppickaxebought = 1;
        uppickaxe.style.display = 'none';
        var appBanners = document.getElementsByClassName('stoneclass'); //Hiding all stoneclass things
for (var i = 0; i < appBanners.length; i ++) {
    appBanners[i].style.display = 'block';
}
    }
    else{window.alert("Nie masz wystarczająco zasobów!");}
});

//Click power multiplier
upclickpowermultiplier.addEventListener("click", () => {
    if(wood>=666) {
        wood -= 666;
        upclickpowermultiplierbought = 1;
        clickpowermultiplier += 1;
        upclickpowermultiplier.style.display = 'none';
    }
    else{window.alert("Nie masz wystarczająco zasobów!");}
});

//Autochopper multiplier
upautochoppermultiplier.addEventListener("click", () => {
    if(wood>=1234 && stone>= 321) {
        wood -= 1234;
        stone -= 321;
        automultiplier += 1;
        upautochoppermultiplierbought = 1;
        upautochoppermultiplier.style.display = 'none';
    }
    else{window.alert("Nie masz wystarczająco zasobów!");}
})

//Axe power multiplier 1
upclickpowermultiplier1.addEventListener("click", () => {
    if(wood>=5000 && stone>=2000) {
        wood -= 5000;
        stone -= 2000;
        upclickpowermultiplierbought1 = 1;
        clickpowermultiplier += 1;
        upclickpowermultiplier1.style.display = 'none';
    }
    else{window.alert("Nie masz wystarczająco zasobów!");}
});

//Pickaxe power multiplier
uppickaxepowermultiplier.addEventListener("click", () => {
    if(stone>=1000) {
        stone -= 1000;
        uppickaxepowermultiplierbought = 1;
        pickaxepowermultiplier += 1;
        uppickaxepowermultiplier.style.display = 'none';
    }
    else{window.alert("Nie masz wystarczająco zasobów!");}
});

//Autostone production multiplier
upautostonemultiplier.addEventListener("click", () => {
    if(wood>=15000 && stone>=8000) {
        wood -= 15000;
        stone -= 8000;
        upautostonemultiplierbought = 1;
        autostonemultiplier += 1;
        upautostonemultiplier.style.display = 'none';
    }
    else{window.alert("Nie masz wystarczająco zasobów!");}
});

//Prestige Upgrades
//1
prestigeup1.addEventListener("click", () => {
    if(money>=1){
        money-=1;
        clickpowermultiplier+=3;
        pickaxepowermultiplier+=3;
        prestigeup1bought=1;
        prestigeup1.style.display = 'none';
    }
    else{window.alert("Nie masz wystarczająco zasobów!");}
});

//2
prestigeup2.addEventListener("click", () => {
    if(money>=10){
        money-=10;
        autointervalvalue = autointervalvalue/2;
        prestigeup2bought=1;
        restartautoloop();
        prestigeup2.style.display = 'none';
    }
    else{window.alert("Nie masz wystarczająco zasobów!");}
});

//Prestige
prestigebutton.addEventListener("click", () => {
    if (confirm("Cały postęp oprócz Prestiżowych Ulepszeń zostanie zresetowany. Jesteś pewien?")){
    money += moneyifprestige;
    wood = 0;
    auto = 0;
    autopower = 0;
    autocost = 10;
    additionalclickpower = 0;
    clickpowermultiplier = 1;
    clickpower = ((1+additionalclickpower)*clickpowermultiplier);
    clickpowercost = 30;
    stone = 0;
    autostone = 0;
    autostonecost = 45;
    pickaxepowercost = 100;
    additionalpickaxepower = 0;
    pickaxepowermultiplier = 1;
    pickaxepower = ((1+additionalpickaxepower)*pickaxepowermultiplier);
    totalresources = 0;
    automultiplier = 1;
    progressbardivide = 1;
    progressbarvalue = ((totalresources/1000)/progressbardivide);
    resourcepopupvalue = 100000;
    moneyifprestige = totalresources/10000;
    isthegamesaved = 0;
    uppickaxebought = 0;
    upclickpowermultiplierbought = 0;
    upautochoppermultiplierbought = 0;
    upclickpowermultiplierbought1 = 0;
    uppickaxepowermultiplierbought = 0;
    gamesavedago = 0;
    autointerval;
    savegame();
    window.location.reload(true);
    }
})

//Settings
//Save button
savebutton.addEventListener("click", () => {
    savegame();
})
//Reset button
resetbutton.addEventListener("click", () => {
    if (confirm("Cały postęp zostanie zresetowany. Jesteś pewien?"))
    {localStorage.clear();
    window.location.reload(true);}
})

//Save game interval change
function saveintervalchange(){
    select = document.getElementById('savegameintervalsetting');//Save game interval value from html
    value = select.options[select.selectedIndex].value;
    if (value>0){
    savegame();
    }
    else{return;}
};
select.addEventListener('change', () => {
    value = 0;
   setTimeout(saveintervalchange, 30000);
});

//Change language button
languagechange.addEventListener("click", () => {
    if (confirm("Jesteś pewien, że chcesz zmienić język?")){
        islangsaved = 0;
        localStorage.setItem('islangsaved', JSON.stringify(islangsaved));
        window.open("index.html","_self")
    }
})


    //Progress bar
const progressbar = document.querySelector(".progress");

const changeProgress = (progress) => {
  progressbar.style.width = `${progressbarvalue}%`;
};

//Vritta