var acc = document.getElementsByClassName("parent");
var panel = document.getElementsByClassName("answer");

for (var i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
        var setClasses = !this.classList.contains("active");
        setClass(acc, "active", "remove");
        setClass(panel, "show", "remove");

        if (setClasses) {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
        }
    };
}

function setClass(els, className, fnName) {
    for (var i = 0; i < els.length; i++) {
        els[i].classList[fnName](className);
    }
}

const one = document.getElementById(`one`);
console.log(one);
const two = document.getElementById(`two`);
const three = document.getElementById(`three`);

one.addEventListener("click", () => {
    document.documentElement.setAttribute("data-theme", "light-sky");
});
two.addEventListener("click", () => {
    document.documentElement.setAttribute("data-theme", "dark");
});
three.addEventListener("click", () => {
    document.documentElement.setAttribute("data-theme", "third");
});