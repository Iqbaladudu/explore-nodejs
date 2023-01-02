import https from "https";

const endpoint = ""
const request = https.request(endpoint, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    }
}, function (response) {
    response.addListener("data", (data) => {
        console.info(`Received data: ${data.toString()}`)
    })
});

const body = JSON.stringify({
    firstName: "Muhammad",
    lastName: "Iqbal",
});

request.write(body);
request.end()