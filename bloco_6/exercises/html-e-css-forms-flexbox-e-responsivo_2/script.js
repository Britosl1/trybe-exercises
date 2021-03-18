window.onload = function(){

    function states () {
        let getStates = document.getElementById('enter-state');
        let states = ['ac', 'al' , 'ap', 'am', 'ba', 'ce', 'df', 'es', 'go', 'ma','mt', 'ms', 'mg', 'pa', 'pb', 'pr', 'pe', 'pi', 'rj', 'rn', 'rs', 'ro', 'rr', 'sc', 'sp', 'se', 'to'];
        for (let i = 0; i < states.length; i += 1){
            let value = 1;
            let stateOption = document.createElement('option');
            stateOption.innerHTML = states[i];
            stateOption.value = states[i];
            getStates.appendChild(stateOption);        
    }
}
    states ()






}