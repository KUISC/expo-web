const challenges = ["challenge1", "challenge2", "challenge3"];

function startChallenge() {
    document.getElementById("header-text").style.fontSize = "2em";
    document.getElementById("start-div").style.display = "none";
    document.getElementById("challenge1").style.display = "";
}

function submitChallenge(chalNum) {
    const result = ({
        "challenge1":
            checkChal1(),
        "challenge2":
            checkChal2(),
        "challenge3":
            checkChal3()
    })[chalNum]

    if (result) {
        updatePage(chalNum);
    }
    else {
        tryAgain();
    }
}

function checkChal1() {
    let submittedVal = document.getElementById("challenge1-text").value;
    if (submittedVal.replace(/\s+/g, '').toLowerCase() == atob('cm9jaw==')) {
        return (true);
    }
    else {
        return (false);
    }
}

function checkChal2() {
    let submittedVal = document.getElementById("challenge2-text").value;
    if (submittedVal.replace(/\s+/g, '').toLowerCase() == atob('Y2hhbGs=')) {
        return (true);
    }
    else {
        return (false);
    }
}

function checkChal3() {
    let submittedVal = document.getElementById("challenge3-text").value;
    if (submittedVal.replace(/\s+/g, '').toLowerCase() == atob('amF5aGF3aw==')) {
        return (true);
    }
    else {
        return (false);
    }
}

function updatePage(currentChal) {
    challenges.forEach(function (challenge, index) {
        if (challenge == currentChal) {
            if (index == 2) {
                document.getElementById(challenge).style.display = "none";
                youWon();
            }
            else {
                console.log(challenges[index + 1])
                document.getElementById(challenge).style.display = "none";
                document.getElementById(challenges[index + 1]).style.display = "";
            }
        }
    })
}

function tryAgain() {
    alert("Try again!");
}

function youWon() {
    document.getElementById("winner").style.display = "";
}