/*Day 8: Dictionaries and Maps*/
/*https://www.hackerrank.com/challenges/30-dictionaries-and-maps/problem*/

function processData(input) {
    //Enter your code here
    input = input.split('\n')
    let N = parseInt(input[0])

    let phonebook = []
    for (let k = 0; k< N; k++){
        let line = input[k+1]
        line = line.split(' ')
        phonebook[line[0]] = line[1]
    }

    for (let k = N+1; k < input.length; k++ ){
        let num = (phonebook[input[k]])
        if (num !== undefined){
            console.log(input[k] + '='+num)
        } else {
            console.log('Not found')
        }
    }

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

