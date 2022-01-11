// โปรแกรมคำนวณเกรดเฉลี่ย 

let score = 84;

if ((score >= 80) && (score <= 100)) {
    console.log("You grade is A");
}
else if ((score >= 75) && (score <= 79)) {
    console.log("You grade is B+");
}
else if ((score >= 70) && (score <= 74)) {
    console.log("You grade is B");
}
else if ((score >= 65) && (score <= 69)) {
    console.log("You grade is C+");
}
else if ((score >= 60) && (score <= 64)) {
    console.log("You grade is C");
}
else if ((score >= 55) && (score <= 59)) {
    console.log("You grade is D+");
}
else if ((score >= 50) && (score <= 54)) {
    console.log("You grade is D");
}
else {
    console.log("You grade is E");
}

// Result: You grade is A