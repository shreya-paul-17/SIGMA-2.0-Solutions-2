// A form validation system

let Name = "Mithun";
let email = "mithun.s@pw.live";
let age = "21";

if (typeof Name !== "string") {
    console.log("Name should be a string");
}

if (typeof email !== "string") {
    console.log("Email should be a a string");
}

if (typeof age !== "number") {
    console.log("Age should be a number");
}

if ((typeof Name === "string") && (typeof email === "string") && typeof age === "number") {
    console.log("All fields are correct");
}
