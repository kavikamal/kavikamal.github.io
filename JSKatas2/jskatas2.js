// Katas
// 1.Reverse a string
// 2.Reverse a sentence ("bob likes dogs" -> "dogs likes bob")
// 3.Find the minimum value in an array
// 4.Find the maximum value in an array
// 5.Calculate a remainder (given a numerator and denominator)
// 6.Return distinct values from a list including duplicates (i.e. "1 3 5 3 7 3 1 1 5" -> "1 3 5 7")
// 7.Return distinct values and their counts (i.e. the list above becomes "1(3) 3(3) 5(2) 7(1)")
// 8.Given a string of expressions (only variables, +, and -) and an object describing a set of variable/value pairs like {a: 1, b: 7, c: 3, d: 14}, return the result of the expression ("a + b+c -d" would be -3).

// 1.Reverse a string
function reverseStr_Kata1(input) {
    var output = "";
    for (let i = input.length - 1; i >= 0; i--) {
        output += input[i];
    }
    console.log("Reverse of ", input, " is ", output);
    return output;
}

// Test - 1.Reverse a string
function test_reverseStr_Kata1() {
    //Test1 
    result = reverseStr_Kata1("apple");
    console.assert(result === "elppa", {
        message: 'Reverse string failed',
        word: "apple",
        expected: "elppa",
        result: result,
    });

    //Test2 
    result = reverseStr_Kata1("orange");
    console.assert(result === "egnaro", {
        message: 'Reverse string failed',
        word: "orange",
        expected: "egnaro",
        result: result,
    });
}

// 2.Reverse a sentence ("bob likes dogs" -> "dogs likes bob")
function reverseSentence_Kata2(input) {
    var output = "";
    var words = input.split(" ");

    for (let i = words.length - 1; i >= 0; i--) {
        output += words[i]
        if (i > 0) {
            output += " ";
        }
    }
    console.log("Reverse of the sentence '", input, "' is '", output, "'");
    return output;
}
//Test - 2.Reverse a sentence ("bob likes dogs" -> "dogs likes bob")
function test_reverseSentence_Kata2() {
    //Test1 
    result = reverseSentence_Kata2("bob likes dogs");
    console.assert(result === "dogs likes bob", {
        message: 'Reverse Sentence failed',
        word: "bob likes dogs",
        expected: "dogs likes bob",
        result: result,
    });

    //Test2 
    result = reverseSentence_Kata2("kid is happy");
    console.assert(result === "happy is kid", {
        message: 'Reverse Sentence failed',
        word: "kid is happy",
        expected: "happy is kid",
        result: result,
    });
}
// 3.Find the minimum value in an array
function minValInArr_Kata3(input) {
    var output;
    if (input.length > 0) {
        output = input[0];
        for (let i = 1; i < input.length; i++) {
            if (input[i] < output) {
                output = input[i];
            }
        }
    }
    console.log("Minimum value in the array '", input, "' is '", output, "'");
    return output;
}
//Test - 3.Find the minimum value in an array
function test_minValInArr_Kata3() {
    result = minValInArr_Kata3([6, 3, 45, 1, -9, -40, 200]);
    console.assert(result === -40, {
        message: 'Finding minimum value in an array failed',
        input: [6, 3, 45, 1, -9, -40, 200],
        expected: -40,
        result: result,
    });

    result = minValInArr_Kata3([6, 3, 45, 1, -9, 200, -11.200]);
    console.assert(result === -11.2, {
        message: 'Finding minimum value in an array failed',
        input: [6, 3, 45, 1, -9, 200, -200],
        expected: -11.2,
        result: result,
    });

}
// 4.Find the maximum value in an array
function maxValInArr_Kata4(input) {
    var output;
    if (input.length > 0) {
        output = input[0];
        for (let i = 1; i < input.length; i++) {
            if (input[i] > output) {
                output = input[i];
            }
        }
    }
    console.log("Maximum value in the array '", input, "' is '", output, "'");
    return output;
}
//Test - 4.Find the maximum value in an array
function test_maxValInArr_Kata4() {
    result = maxValInArr_Kata4([6, 3, 45, 1, -9, 420, 200]);
    console.assert(result === 420, {
        message: 'Finding maximum value in an array failed',
        input: [6, 3, 45, 1, -9, 420, 200],
        expected: 420,
        result: result,
    });

    result = maxValInArr_Kata4([6, 3, 45, 1, -9, 200, +900]);
    console.assert(result === 900, {
        message: 'Finding maximum value in an array failed',
        input: [6, 3, 45, 1, -9, 200, +900],
        expected: 900,
        result: result,
    });

}
// 5.Calculate a remainder (given a numerator and denominator)
function findRemainder_Kata5(numerator, denominator) {
    var output = numerator % denominator;
    console.log("Remainder of ", numerator, "/" + denominator + " is ", output);
    return output;
}
//Test - 5.Calculate a remainder (given a numerator and denominator)
function test_findRemainder_Kata5() {
    result = findRemainder_Kata5(43, 2);
    console.assert(result === 1, {
        message: 'Calculating a remainder failed',
        input: "43,2",
        expected: 1,
        result: result,
    });
    result = findRemainder_Kata5(0, 2);
    console.assert(result === 0, {
        message: 'Calculating a remainder failed',
        input: "0,2",
        expected: 0,
        result: result,
    });
}
// 6.Return distinct values from a list including duplicates (i.e. "1 3 5 3 7 3 1 1 5" -> "1 3 5 7")
function showDistinctValList_Kata6(input) {
    var output = "";
    var inputArr = input.split(" ");
    inputArr = inputArr.map(Number);
    inputArr.sort(function (a, b) { return a - b });
    for (let i = 0; i < inputArr.length; i++) {
        if (inputArr.indexOf(inputArr[i]) == i) {
            output += inputArr[i] + " ";
        }
    }
    output = output.slice(0, -1);
    console.log("Return distinct values from a list including duplicates. Input : ", input, " Output : ", output);
    return output;
}
//Test - 6.Return distinct values from a list including duplicates (i.e. "1 3 5 3 7 3 1 1 5" -> "1 3 5 7")
function test_showDistinctValList_Kata6() {
    result = showDistinctValList_Kata6("1 3 5 8 7 3 1 1 5 1 3 5 9 7 3 1 9 5");
    console.assert(result === "1 3 5 7 8 9", {
        message: 'Return distinct values from a list including duplicates failed',
        input: "1 3 5 8 7 3 1 1 5 1 3 5 9 7 3 1 9 5",
        expected: "1 3 5 7 8 9",
        result: result,
    });
    result = showDistinctValList_Kata6("1 3 5 18 7 3 1 1 5 8 23 15 9 7 3 1 9 5");
    console.assert(result === "1 3 5 7 8 9 15 18 23", {
        message: 'Return distinct values from a list including duplicates failed',
        input: "1 3 5 18 7 3 1 1 5 8 23 15 9 7 3 1 9 5",
        expected: "1 3 5 7 8 9 15 18 23",
        result: result,
    });
}
// 7.Return distinct values and their counts (i.e. the list above becomes "1(3) 3(3) 5(2) 7(1)")
function showDistinctValAndCount_Kata7(input) {
    var count = {};
    var output = "";
    var inputArr = input.split(" ");
    for (let i = 0; i < inputArr.length; i++) {
        if (count[inputArr[i]] != null) {
            count[inputArr[i]] += 1;
        }
        else {
            count[inputArr[i]] = 1;
        }
    }
    for (key in count) {
        output += key + "(" + count[key] + ") ";
    }
    output = output.slice(0, -1);
    console.log("Return distinct values and their counts. Input : ", input, " Output : ", output);
    return output;
}
//Test - 7.Return distinct values and their counts (i.e. the list above becomes "1(3) 3(3) 5(2) 7(1)")
function test_showDistinctValAndCount_Kata7() {
    result = showDistinctValAndCount_Kata7("1 3 5 8 7 3 1 1 5 1 3 5 9 7 3 1 9 5");
    console.assert(result === "1(5) 3(4) 5(4) 7(2) 8(1) 9(2)", {
        message: 'Return distinct values from a list including duplicates failed',
        input: "1 3 5 8 7 3 1 1 5 1 3 5 9 7 3 1 9 5",
        expected: "1(5) 3(4) 5(4) 7(2) 8(1) 9(2)",
        result: result,
    });
    result = showDistinctValAndCount_Kata7("1 3 5 18 7 3 1 1 5 8 23 15 9 7 3 1 9 5");
    console.assert(result === "1(4) 3(3) 5(3) 7(2) 8(1) 9(2) 15(1) 18(1) 23(1)", {
        message: 'Return distinct values from a list including duplicates failed',
        input: "1 3 5 18 7 3 1 1 5 8 23 15 9 7 3 1 9 5",
        expected: "1(4) 3(3) 5(3) 7(2) 8(1) 9(2) 15(1) 18(1) 23(1)",
        result: result,
    });
    result = showDistinctValAndCount_Kata7("1 3 s 18 7 3 1 1 5 8 23 15 9 7 3 1 9 5");
    console.assert(result === "1(4) 3(3) 5(3) 7(2) 8(1) 9(2) 15(1) 18(1) 23(1)", {
        message: 'Return distinct values from a list including duplicates failed',
        input: "1 3 5 18 7 3 1 1 5 8 23 15 9 7 3 1 9 5",
        expected: "1(4) 3(3) 5(3) 7(2) 8(1) 9(2) 15(1) 18(1) 23(1)",
        result: result,
    });
}
// 8.Given a string of expressions (only variables, +, and -) and an object describing a set of variable/value pairs like {a: 1, b: 7, c: 3, d: 14}, 
//return the result of the expression ("a + b+c -d" would be -3).
function findStrExpResult_Kata8(input, expression) {
    var msg = "Result of the expression(" + expression + ") where ";
    for (key in input) {
        msg += key + " = " + input[key] + " ";
        expression = expression.replace(new RegExp(key, 'g'), input[key]);
    }
    output = eval(expression);
    msg += " is " + output;
    console.log(msg);
    return output;
}
//Test - 8.Given a string of expressions (only variables, +, and -) and an object describing a set of variable/value pairs like {a: 1, b: 7, c: 3, d: 14}, 
//return the result of the expression ("a + b+c -d" would be -3).
function test_findStrExpResult_Kata8() {
    result = findStrExpResult_Kata8({ a: 12, b: 4, c: 5 }, "a + b + c - a + c ");
    console.assert(result === 14, {
        message: 'Expression Result is wrong ',
        expression: "a + b +c / a + c",
        input: "{a: 12, b: 4,c: 5}",
        expected: 14,
        result: result,
    });
}

var input1 = "string";
var input2 = "hello how are you";
var input3 = [6, 3, 45, 1, -9, 40, 200];
var input4 = [6, 3, 45, 1, -9, 40, 200];
var input51 = 45, input52 = 8;
var input6 = "1 3 5 3 7 3 1 1 5";
var input7 = "1 3 5 3 7 3 1 1 5";
var input81 = { a: 1, b: 7, c: 3, d: 14 }, input82 = "a + b+c -d";

reverseStr_Kata1(input1);
test_reverseStr_Kata1();
reverseSentence_Kata2(input2);
test_reverseSentence_Kata2();
minValInArr_Kata3(input3);
test_minValInArr_Kata3();
maxValInArr_Kata4(input4);
test_maxValInArr_Kata4();
findRemainder_Kata5(input51, input52);
test_findRemainder_Kata5();
showDistinctValList_Kata6(input6);
test_showDistinctValList_Kata6();
showDistinctValAndCount_Kata7(input7);
test_showDistinctValAndCount_Kata7();
findStrExpResult_Kata8(input81, input82);
test_findStrExpResult_Kata8();

