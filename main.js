let score = 0;

function submit() {
    if(document.getElementById("answer6").value == "0.5" || document.getElementById("answer6").value == "1/2") {
        score += 10;
    }
    if(document.getElementById("answer7").value == "45") {
        score += 10;
    }
    if(document.getElementById("answer8").value == "1") {
        score += 10;
    }
    if(document.getElementById("answer4").value == "cosine" || document.getElementById("answer4").value == "cos") {
        score += 10;
    }
    if(document.getElementById("answer5").value == 0.99990 || document.getElementById("answer5").value == 0.9999 || document.getElementById("answer5").value == 0.999 || document.getElementById("answer5").value == 0.99 || document.getElementById("answer5").value == 0.9 || document.getElementById("answer5").value == 1) {
        score += 10;
    }
    if(document.getElementById("answer1").value == "10.8") {
        score += 10;
    }
    if(document.getElementById("answer2").value == "12") {
        score += 10;
    }
    if(document.getElementById("answer3").value == "16.2"){
        score += 10;
    }
    if(document.getElementById("answer9").value == "1" ) {
        score += 10;
    }
    if(document.getElementById("answer10").value == "33.4") {
        score += 10;
    }

    //result
    document.getElementById("result").innerHTML = "Your score is: " + score + "%";
    amountWrong = score / 10;
    amountWrong = 10 - amountWrong;
    document.getElementById("amountWrong").innerHTML = "You got " + amountWrong + " questions wrong.";

    // Patterson approval
    if (score >= 90) {
        document.getElementById("feedback").innerHTML = "Mrs.Patterson is proud of you.";
    } else {
        document.getElementById("feedback").innerHTML = "Mrs.Patterson expects better of you.";
    }
}