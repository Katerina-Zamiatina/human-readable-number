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

    if (number === 0) {
        return "zero"
    }

    if (number < 20) {
        readable = toTwenty[number];
        return readable.trim();
    }
    if (number >= 20 && number < 100) {
        let n = number.toString().split("");
        readable = tens[n[0]] + " " + toTwenty[n[1]];

        return readable.trim();
    }
    if (number >= 100) {
        let n = number.toString().split("");
        let firstTens = Number(n[1] + n[2]);
        if (n[1] === "1") {
            readable = toTwenty[n[0]] + " hundred " + toTwenty[firstTens];
            return readable.replace(/\s+/g, " ").trim();
        } else {
            readable =
                toTwenty[n[0]] +
                " hundred " +
                tens[n[1]] +
                " " +
                toTwenty[n[2]];
            console.log("readable ", readable);
            return readable.replace(/\s+/g, " ").trim();
        }
    }
    return readable.trim();
};
