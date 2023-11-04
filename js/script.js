

function displayCounter() {
    // Create Box tag in main
    let divBox = document.createElement("div");
    divBox.className = "Box";
    container.append(divBox);

    // Adding all the buttons, inside divBox
    divBox.insertAdjacentHTML(`beforeend`,`<div data-output>0</div>`);
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

    setButtonStyle(plusButton);
    setButtonStyle(minusButton);
    setButtonStyle(allClearButton);

    // Counter functions
    let number = 0;
    let displayNumber = function(){
        output.innerHTML = number;
    }
    let nowInitialized = function(){
        number = 0;
        displayNumber();
    }
    let counterPlus = function(){
        number++;
        displayNumber();
    }
    let counterMinus = function(){
        number--;
        displayNumber();
    }

    plusButton.addEventListener("click", counterPlus);
    minusButton.addEventListener("click", counterMinus);
    allClearButton.addEventListener("click",nowInitialized);
}

function setButtonStyle(elem){
    elem.style.cssText = 'background-color: #e8e8e8; padding: 0.7em 1.7em; font-size: 18px; border-radius: 0.5em; border: 1px solid #e8e8e8; box-shadow: 6px 6px 12px #c5c5c5,-6px -6px 12px #ffffff; margin: 0.5em'
}



