/*Day 0: Hello, World.
https://www.hackerrank.com/challenges/30-hello-world/problem*/

function processData(inputString) {
    // This line of code prints the first line of output
    let firstString = "Hello, World.";
    
    // Write the second line of output that prints the contents of 'inputString' here.
    process.stdout.write (firstString + '\n' + inputString);
}


process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
