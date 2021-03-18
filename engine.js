module.exports.engine = function(input, callback) {
    var temp = 0;
    const { spawn } = require('child_process');
    try {
        const python = spawn('python', ['tool.py', input]);
        python.stdout.on('data', (data) => {
            console.log("result = " + data.toString());
            temp = data.toString();
        });
        python.on('close', (code) => {
            console.log(`child process close all stdio with code ${code}`);
            return callback(temp)
        });
    } catch (e) {
        console.log(e)
    }
}