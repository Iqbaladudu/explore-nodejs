import process from "process";
import readline from "readline"

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Siapa nama kamu? : ", function (nama) {
    console.info(`Hello ${nama}`);
    input.close();
})