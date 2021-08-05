//DOM Variables
const englishbutton = document.querySelector("#englishbutton");
const polishbutton = document.querySelector("#polishbutton");

var islangsaved = 0;
var language = 0;

//Is language saved?
islangsaved = JSON.parse(localStorage.getItem('islangsaved'));
language = JSON.parse(localStorage.getItem('language'));

if (islangsaved == 1){
    if (language == 0){
        window.open("eng.html","_self")
    }
    else{
        window.open("pol.html","_self")
    }
};


englishbutton.addEventListener("click", () => {
    language = 0;
    localStorage.setItem('language', JSON.stringify(language));
    islangsaved = 1;
    localStorage.setItem('islangsaved', JSON.stringify(islangsaved));
    window.open("eng.html","_self")
});

polishbutton.addEventListener("click", () => {
    language = 1;
    localStorage.setItem('language', JSON.stringify(language));
    islangsaved = 1;
    localStorage.setItem('islangsaved', JSON.stringify(islangsaved));
    window.open("pol.html","_self")
});