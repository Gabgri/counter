function displayCounter() {
    // Create Box tag in main
    let divBox = document.createElement("div");
    divBox.className = "box";
    divBox.id = "box";
    introBox.after(divBox);

    // Adding all the buttons, inside divBox
    divBox.insertAdjacentHTML(`beforeend`,`<div data-output>0</div>`);
    divBox.insertAdjacentHTML(`beforeend`,`<button class="all-clear">AC</button>`);
    divBox.insertAdjacentHTML(`beforeend`,`<button class="plus">+</button>`);
    divBox.insertAdjacentHTML(`beforeend`,`<button class="minus">-</button>`);

    const plusButton = document.querySelector(".plus");
    const minusButton = document.querySelector(".minus");
    const allClearButton = document.querySelector(".all-clear");
    let output = document.querySelector("[data-output]");

    // Setting the style
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

    // Counter Button listeners
    plusButton.addEventListener("click", counterPlus);
    minusButton.addEventListener("click", counterMinus);
    allClearButton.addEventListener("click",nowInitialized);

    startButton.style.display = "none";
}

//startButton.onclick = () => displayCounter(); Old configuration

let i = 0; // flag startCounter = 1,  exitCounter = 0

class introButton { // event delegation on "Avvia il contatore" and "Esci dal contatore"
    constructor(elem) {
      this._elem = elem;
      elem.onclick = this.onClick.bind(this); 
    }
    startCounter(){
        displayCounter();
        i = 1;
    }

    exitCounter() {
        if (i == 1){
            box.remove();
            startButton.style.display = "block";
            i = 0;
        }
        else {
            alert("Il contatore non è stato avviato");
        }
    }
    onClick(event) {
      let action = event.target.dataset.action;
      if (action) {
        this[action]();
      }
    };
  }

function setButtonStyle(elem){
    elem.style.cssText = 'background-color: #e8e8e8; padding: 0.7em 1.7em; font-size: 18px; border-radius: 0.5em; border: 1px solid #e8e8e8; box-shadow: 6px 6px 12px #c5c5c5,-6px -6px 12px #ffffff; margin: 0.5em'
}

//intro button delegation
new introButton(container);
