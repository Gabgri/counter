

function displayCounter() {
    // Create Box tag in main
    let divBox = document.createElement("div");
    divBox.className = "Box";
    main.append(divBox);

    // Adding all the buttons, inside divBox
    divBox.insertAdjacentHTML(`beforeend`,`<div data-output "class="output">0</div>`);
    divBox.insertAdjacentHTML(`beforeend`,`<button class="all-clear">AC</button>`);
    divBox.insertAdjacentHTML(`beforeend`,`<button class="plus">+</button>`);
    divBox.insertAdjacentHTML(`beforeend`,`<button class="minus">-</button>`);

    // removes startButton from html
    startButton.remove();

    thenDoThis();
};

startButton.onclick = ()=> displayCounter();


function thenDoThis(){
    const plusButton = document.querySelector(".plus");
    const minusButton = document.querySelector(".minus");
    const allClearButton = document.querySelector(".all-clear");
    let output = document.querySelector("[data-output]");

    // Counter
    let number = 0;
    let nowInitialized = function(){
        number = 0;
        output.innerHTML = number;
    }
    let counterPlus = function(){
        number++;
        output.innerHTML = number;
    }
    let counterMinus = function(){
        number--;
        output.innerHTML = number;
    }

    plusButton.addEventListener("click", counterPlus);
    minusButton.addEventListener("click", counterMinus);
    allClearButton.addEventListener("click",nowInitialized);
}




