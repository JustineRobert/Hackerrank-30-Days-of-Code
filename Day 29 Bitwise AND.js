/*Day 29: Bitwise AND
https://www.hackerrank.com/challenges/30-bitwise-and/problem*/

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
        var t = parseInt(readLine());
        
        for (var a0 = 0; a0 < t; a0++) {
                var n_temp = readLine().split(' ');
                var n = parseInt(n_temp[0]);
                var k = parseInt(n_temp[1]);
                var max_value = 0;
                
                for (var i = 1; i <= n; i++) {
                        for (var j = i + 1; j <= n; j++) {
                                var value = (i & j);
                                if ((value > max_value) && (value < k)) {
                                        max_value = (i & j);
                                        if (max_value == (k -1)) {
                                                i = n;
                                                break;
                                        }
                                }
                        }
                }
                
                console.log(max_value);
    }

}

