let buttons = document.querySelector(".buttons");
let btn = document.querySelectorAll("span");
let value = document.getElementById("value");
let toggleBtn = document.querySelector(".toggleBtn");
let body = document.querySelector("body");

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
        if (this.innerHTML == "=") {
            value.innerHTML = eval(value.innerHTML);
        } else {
            if (this.innerHTML == "Clear") {
                value.innerHTML = "";
            }
            else {
                value.innerHTML += this.innerHTML;
            }
        }
    })
    var vlue = value.innerHTML;
    function char_count(vlue) {
        var letter_Count = 0;
        for (var position = 0; position < vlue.length; position++) {
                letter_Count += 1;
                }
        return letter_Count;
    }
     let count = char_count(vlue);

     if(count > 14){
        
     }

     

}

toggleBtn.onclick = function () {
    body.classList.toggle("dark");
}