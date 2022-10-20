const countersEl = document.querySelectorAll(".counter");

countersEl.forEach(counterEl => {
    counterEl.innerHTML = "0";

    incrementCounter();
    function incrementCounter(){
        let currentNum = +counterEl.innerHTML;
        const dataCeil = counterEl.getAttribute("data-ceil");
        const increment = dataCeil / 15;
        currentNum = Math.ceil(currentNum + increment);
        

        if(currentNum < dataCeil){
            counterEl.innerHTML = currentNum;
            setTimeout(incrementCounter, 50);
        }else{
            counterEl.innerHTML = dataCeil;
        }
    }
});