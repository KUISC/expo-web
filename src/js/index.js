let challenges = ["c1", "c2", "c3"];

document.getElementById("challenge1-form").addEventListener("submit", submitChallge(challenges[0]));
document.getElementById("challenge2-form").addEventListener("submit", submitChallge(challenges[1]));
document.getElementById("challenge3-form").addEventListener("submit", submitChallge(challenges[2]));

function submitChallge(chalNum) {
    switch(chalNum) {
        case "c1":
            alert("c1");
            break;
        case "c2":
            alert("c2");
            break;
        case "c3":
            alert("c3");
            break;
        default:
    }
    

}

function checkChal1() {

}

function checkChal2() {

}

function checkChal3() {

}