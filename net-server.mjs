import net from "net";

const server = net.createServer(function (client) {
    console.info("client connected");
    client.addListener("data", (data) => {
        console.info(`Receive data ${data.toString()}`);
        client.write(`Hello ${data.toString()}\r\n`);
    });
});

server.listen(3000, "localhost");