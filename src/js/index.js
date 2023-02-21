let challenges = ["c1", "c2", "c3"];

function submitChallenge(chalNum) {
    switch(chalNum) {
        case "c1":
            checkChal1();
            break;
        case "c2":
            checkChal2();
            break;
        case "c3":
            checkChal3();
            break;
        default:
    }
    

}

function checkChal1() {
    let submittedVal = document.getElementById("challenge1-text").value; 
    if(submittedVal.replace(/\s+/g, '').toLowerCase() == atob('cm9jaw==')) {
        return(true);
    }
    else { 
        return(false); 
    }
}

function checkChal2() {
    let submittedVal = document.getElementById("challenge2-text").value; 
    if(submittedVal.replace(/\s+/g, '').toLowerCase() == atob('Y2hhbGs=')) {
        return(true);
    }
    else { 
        return(false); 
    }
}

function checkChal3() {
    let submittedVal = document.getElementById("challenge3-text").value; 
    if(submittedVal.replace(/\s+/g, '').toLowerCase() == atob('amF5aGF3aw==')) {
        return(true);
    }
    else { 
        return(false); 
    }
}