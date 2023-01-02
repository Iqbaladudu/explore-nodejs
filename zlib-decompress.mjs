import zlib from "zlib";
import fs from "fs";

const source = fs.readFileSync("zlib-compressed.mjs.txt");
const result = zlib.unzipSync(source);
console.info(result.toString());