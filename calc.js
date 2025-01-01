
let btn = document.querySelectorAll("button");

let string = " ";

Array.from(btn).forEach((buttons) => {
    buttons.addEventListener("click", (e) => {

        if (e.target.innerHTML == "=") {
            string = eval(string);
            document.querySelector("input").value = string;
        } else if (e.target.innerHTML == "c") {
            string = "0";
            document.querySelector("input").value = string;
            if (e.target) {
                string = "";
                document.querySelector("input").value = string;
            }

        }

        else {
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector("input").value = string;
        }

    })
})

