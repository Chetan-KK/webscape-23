var i = 0;
let previousSelectedElement = null;
var id = null;
const questions = [
    {
        Qs: {
            Q: "What is the name of the lander of Chandrayaan 3?",
            Option: {
                one: "1. Pragyaan",
                two: "2. Vikram",
                three: "3. Ritu",
                four: "4. Dhruv",
            },
            ans: "3. Ritu",
        },
    },
    {
        Qs: {
            Q: "Which space agency in the world has launched Chandrayaan 3",
            Option: {
                one: "1. NASA",
                two: "2. Roskosmos",
                three: "3. ISRO",
                four: "4. JAXA",
            },
            ans: "3. ISRO",
        },
    },
    {
        Qs: {
            Q: "Who is the project director of India’s Moon Mission, Chandrayaan 3",
            Option: {
                one: "1. Vikram Sarabhai",
                two: "2. S. Somnath",
                three: "3. Ritu Srivastava",
                four: "4. P Veeramuthuvel",
            },
            ans: "4. P Veeramuthuvel",
        },
    },
];
// console.log(questions[i]);
document.getElementById("question").innerHTML = questions[i].Qs.Q;
document.getElementById("opt-1").innerHTML = questions[i].Qs.Option.one;
document.getElementById("opt-2").innerHTML = questions[i].Qs.Option.two;
document.getElementById("opt-3").innerHTML = questions[i].Qs.Option.three;
document.getElementById("opt-4").innerHTML = questions[i].Qs.Option.four;

function nextQuestion() {
    if (i < questions.length) {
        ++i;
    }
    document.getElementById("question").innerHTML = questions[i].Qs.Q;
    document.getElementById("opt-1").innerHTML = questions[i].Qs.Option.one;
    document.getElementById("opt-2").innerHTML = questions[i].Qs.Option.two;
    document.getElementById("opt-3").innerHTML =
        questions[i].Qs.Option.three;
    document.getElementById("opt-4").innerHTML =
        questions[i].Qs.Option.four;
    console.log(questions[i]);
    if (previousSelectedElement) {
        previousSelectedElement.style.backgroundColor = "transparent";
        previousSelectedElement.style.color = "#cdd9ff";
    }
    previousSelectedElement = null;
}
function prevQuestion() {
    if (i > 0) {
        --i;
    }
    document.getElementById("question").innerHTML = questions[i].Qs.Q;
    document.getElementById("opt-1").innerHTML = questions[i].Qs.Option.one;
    document.getElementById("opt-2").innerHTML = questions[i].Qs.Option.two;
    document.getElementById("opt-3").innerHTML =
        questions[i].Qs.Option.three;
    document.getElementById("opt-4").innerHTML =
        questions[i].Qs.Option.four;
    if (previousSelectedElement) {
        previousSelectedElement.style.backgroundColor = "transparent";
        previousSelectedElement.style.color = "#cdd9ff";
    }
    previousSelectedElement = null;
}

function selectAnswer(event, element) {
    if (previousSelectedElement) {
        previousSelectedElement.style.backgroundColor = "transparent";
        previousSelectedElement.style.color = "#cdd9ff";
        console.log(element);
    }
    // console.log(event.target.id);
    document.getElementById(event.target.id).style.color = "black";
    document.getElementById(event.target.id).style.backgroundColor =
        "#cdd9ff";
    document.getElementById(event.target.id).style.transition = "100ms";
    previousSelectedElement = element;
    id = event.target.id;
    // console.log("prev: ", previousSelectedElement);
}
function checkAns(event) {
    console.log();
    if (previousSelectedElement === null) {
        alert("Please select an answer!!");
    } else {
        // console.log("gvalue", document.getElementById(id).value);
        // console.log("2value", questions[i].Qs.ans);
        // if (document.getElementById(id).value == questions[i].Qs.ans) {
        alert("Right answer");
        // } else {
        // alert("Your answer is wrong!!");
    }
}