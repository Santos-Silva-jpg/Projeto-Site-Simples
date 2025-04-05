'use strict'
const switcher = document.querySelector('.btn');
switcher.addEventListener ('click', function() {
    document.body.classList.toggle('darkth')
var className = document.body.classname;
if(className == "light") {
    this.textcontext = "Dark";
}
else{
    this.textcontext = "light"
}
console.log ('current class name: ' + className);

}
);