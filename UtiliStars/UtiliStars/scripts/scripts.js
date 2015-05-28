//scripts.js

var question = null;

function matrix(question) {

    var one = 0;
    var two = 0;
    var three = 0;
    var four = 0;

    this.question = question;
    this.choice1 = GetChoice(1);
    this.choice2 = GetChoice(2);
    this.choice3 = GetChoice(3);
    this.choice4 = GetChoice(4);

    function GetChoice(which) {
        var choice = null;
        while (choice == null) {
            var choiceNumber = Math.floor((Math.random() * 4) + 1);
            switch (choiceNumber) {
                case 1:
                    if (one == 0) {
                        choice = question.answer;
                        question.correct = which;
                        one = 1;
                    }
                    break;
                case 2:
                    if (two == 0) {
                        choice = question.other1;
                        two = 1;
                    }
                    break;
                case 3:
                    if (three == 0) {
                        choice = question.other2;
                        three = 1;
                    }
                    break;
                case 4:
                    if (four == 0) {
                        choice = question.other3;
                        four = 1;
                    }
                    break;
            }
        }
        return choice;
    }
}

function GetQuestion() {
    var newQuestion = null;
    var used = true;
    while (used) {
        var questionNumber = (Math.floor((Math.random() * questions.length) + 1)) - 1;
        if (questions[questionNumber].used == "") {
            questions[questionNumber].used = "true";
            newQuestion = questions[questionNumber];
            used = false;
        }
    }
    return newQuestion;
}

function SetMatrix() {
    var q = GetQuestion();
    question = new matrix(q);
    $("#DivQuestion").html("<br />" + question.question.question);
    $("#DivChoice1").html("<br />" + question.choice1);
    $("#DivChoice2").html("<br />" + question.choice2);
    $("#DivChoice3").html("<br />" + question.choice3);
    $("#DivChoice4").html("<br />" + question.choice4);
}

function DisplayMessage(whatMessage) {
    $("#DivNotification").show().html(whatMessage).fadeOut(3750, "swing", CheckStatus);
}

function CheckStatus() {
    if ($("#SpanQuestionNum").html() != "10") {
        var qNum = $("#SpanQuestionNum").html();
        qNum++;
        $("#SpanQuestionNum").html(qNum);
        SetMatrix();
    } else
        ShowResults();
}

$(".DivAnswer").click(function () {
    var choice = this.id.slice(-1);
    if (choice == question.question.correct) {
        var cNum = $("#SpanCorrectNum").html();
        cNum++;
        $("#SpanCorrectNum").html(cNum);
        DisplayMessage("Correct. Great Job.");
    }
    else {
        DisplayMessage("Sorry, that is incorrect.");
    }
});

function ShowResults() {
    $("#DivGame").hide();
    $("#DivResults").show();
    var num = $("#SpanCorrectNum").html();
    var result = "Game Over: You got " + $("#SpanCorrectNum").html() + " Correct.<br /><br />";
    if (num >= 8) {
        result += "That makes you an Utili-SuperStar";
        $("#DivSuperImage").show();
    }
    else if (num >= 3) {
        result += "That makes you an Utili-Star";
        $("#DivStarImage").show();
    }
    else {
        result += "You have some work to do.<br />That's Utili-Not-So-Good";
        $("#DivSadImage").show();

    }
    result += "<br /><br /><input type='button' value='play again' onclick='StartGame();' />";
    $("#DivFeedback").html(result);
}

function StartGame() {
    $("#DivFeedback").html("");
    $("#DivSadImage").hide();
    $("#DivStarImage").hide();
    $("#DivSuperImage").hide();
    $("#DivResults").hide();
    $("#DivGame").show();
    SetUpQuestions();
    SetMatrix();
    $("#SpanQuestionNum").html("1");
    $("#SpanCorrectNum").html("0");
}