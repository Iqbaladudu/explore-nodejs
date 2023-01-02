function samplePromise() {
    return Promise.resolve("Iqbal")
}

// Secara dfault javascript modules memiliki global async
const name = await samplePromise();
console.info(name)