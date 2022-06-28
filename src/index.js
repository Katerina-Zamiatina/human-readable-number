module.exports = function toReadable(number) {
    const toTwenty = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let readable;
    if (number < 20) {
        readable = toTwenty[number];
        return readable;
    }
    if (number > 20) {
        let n = number.toString().split("");
        console.log("n: ", n);
        readable = tens[n[0]] + " " + toTwenty[n[1]];

        return readable;
    }
    return readable;
};
