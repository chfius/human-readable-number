module.exports = function toReadable(value) {
    let fraction = Math.round(frac(value) * 100);
    return convert_number(value);
}

function frac(f) {
    return f % 1;
}

function convert_number(number) {
    if ((number < 0) || (number > 1000)) {
        return "NUMBER OUT OF RANGE!";
    }

    let Hn = Math.floor(number / 1000);
    number -= Hn * 1000;
    let Dn = Math.floor(number / 100);
    number = number % 100;
    let tn = Math.floor(number / 10);
    let one = Math.floor(number % 10);
    let res = "";


    if (Hn > 0) {
        res += (((res == "") ? "" : " ") +
            convert_number(Hn) + " thousand");
    }

    if (Dn) {
        res += (((res == "") ? "" : " ") +
            convert_number(Dn) + " hundred");
    }


    let ones = Array("", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen");
    let tens = Array("", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety");

    if (tn > 0 || one > 0) {
        if (!(res == "")) {
            res += " ";
        }
        if (tn < 2) {
            res += ones[tn * 10 + one];
        } else {

            res += tens[tn];
            if (one > 0) {
                res += (" " + ones[one]);
            }
        }
    }

    if (res == "") {
        res = "zero";
    }
    return res;
}