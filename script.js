function rolldice() {
    let roll1 = getRandomInt(6) + 1;
    let roll2 = getRandomInt(6) + 1; 

    let result1 = document.getElementById("result1");
    result1.textContent = "Your first dice landed on: " + roll1;

    let result2 = document.getElementById("result2");
    result2.textContent = "Your second dice landed on: " + roll2;

    let total = document.getElementById("total");
    let totalnum = roll1 + roll2;
    total.textContent = "The total of your dice is " + totalnum;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const button = document.querySelector("button");
button.addEventListener("click", rolldice);
