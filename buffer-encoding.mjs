const buffer = Buffer.from("Muhammad Iqbal", "utf8");

console.info(buffer.toString("base64"));
console.info(buffer.toString("hex"));

const buffer2 = Buffer.from("4d7568616d6d616420497162616c", "hex");
console.info(buffer2.toString("utf8"))