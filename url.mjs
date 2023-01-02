import { URL } from "url";

const merkez = new URL("https://www.merkez.id");
console.info(merkez.toString());
console.info(merkez.protocol);
console.info(merkez.host);
console.info(merkez.pathname);
console.info(merkez.searchParams);

merkez.host = "www.digicart.id"
console.info(merkez.host)