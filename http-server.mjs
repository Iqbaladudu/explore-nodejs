import http from "http";

const server = http.createServer((request, response) => {
    console.info(request.method);
    console.info(request.url);
    console.table(request.headers)

    if (request.url === "/iqbal") {
        response.write("Halo Iqbal")
    } else {
        response.write("Halo aja")
    }

    response.end();
})

server.listen(3000)
