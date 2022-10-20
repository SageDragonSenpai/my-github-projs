const countersEl = document.querySelectorAll(".counter");

countersEl.forEach(counterEl => {
    counterEl.innerHTML = "0";

    incrementCounter();
    function incrementCounter(){
        let currentNum = +counterEl.innerHTML;
        const dataCeil = counterEl.getAttribute("data-ceil");
        const increment = dataCeil / 15;
        currentNum = Math.floor(currentNum + increment);
        counterEl.innerHTML = currentNum;

        if(currentNum < dataCeil){
            setTimeout(incrementCounter, 50);
        }
    }
});