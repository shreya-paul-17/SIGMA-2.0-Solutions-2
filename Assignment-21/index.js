// 1. For creating package.json file we need to write "npm init" command in the terminal

// 2. Create a file with the help of fs module
const fs = require("fs");

// 3. Adding information to 'nodejs_architecture.txt' file
fs.writeFileSync(
  "nodejs_architecture.txt",
  "Node.js is a platform that utilizes JavaScript and is primarily employed for developing web applications that are highly focused on input/output operations, including but not limited to chat applications and multimedia streaming websites. The platform is constructed using Google Chrome's V8 JavaScript engine. A web apllication is a type of software that executes on a server and is displayed by a client's beowser that obtains all the application's resources over the internet."
);

// 4. Appending information to the existing 'nodejs_architecture.txt' file
fs.appendFileSync(
  "nodejs_architecture.txt",
  "Compared to other server side languages, Node js has distinct advantages. Its asynchronous model and non-blocking I/O operations improve the scalability and performance of web application built on other frameworks. Node js can easily handle multiple client requests without requiring multiple threads, consuming less memory and resources. Additionally, it is highly scalable and provides high performance. Node js is also flexible with multiple frameworks and makes the development process easier."
);

// 5(1). Displaying the information in the console
const data = fs.readFileSync("nodejs_architecture.txt", "utf8");
console.log(data);

// 5(2). Deleting the file and displaying a message after successful deletion
fs.unlinkSync("nodejs_architecture.txt", (err) => {
  if (err) {
    console.log("Error in deleting the file");
    return;
  } else {
    console.log("File Deleted SuccessFully");
  }
});
