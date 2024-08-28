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

// 6. Displaying OS name and OS release version to the console
const os = require('os');
console.log("Operating system name:", os.type());
console.log("OS release : ", os.release());

// 7. Utilizing the 'HTTP' module to create an HTTP server, set the port, appropriate content type, and send the message as a response to the client's request, allowing it to display on the browser
const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("I am happy to learn Full Stack Web Development from PW Skills");
  } else {
    res.end();
  }
});
server.listen (8000, "127.0.0.1", () =>{
  console.log("Listening to port number 8000")
});

// 8. Simulating a subsription feature similar to YouTube
const eventEmitter = require("events");
const event = new eventEmitter();

event.on("subscribe", () => {
  console.log("Thanks for Subscribing to College Wallah");
});
event.emit("subscribe", "College Wallah");

// 9. Creating an event handler and later on removing it to observe what happens after that
const eventEmitter = require("events");
const event1 = new eventEmitter();

const subscribeMessage = (channelName) => {
  console.log(`Thanks For Subscribing to ${channelName}`);
};

console.log("Calling event listener before removing the event");
event1.addListener("subscribe", subscribeMessage);
event1.emit("subscribe", "College Wallah");

console.log("Calling event listener after removing the event");
event1.removeListener("subscribe", subscribeMessage);
event1.emit("subscribe", "College Wallah");

// 10. Maximum no. of listeners allowed for event handlers
const eventEmitter = require("events");
const event2 = new eventEmitter();

const subscribeMessages = (channelName) => {
  console.log(`Thanks For Subscribing to ${channelName}`);
};

event2.addListener("subscribe", subscribeMessages);
event2.emit("subscribe", "College Wallah");

console.log(`The default maximum number of event listeners are: ${event2.getMaxListeners()}`);
event2.setMaxListeners(5);
console.log(`The updated maximum number of event listeners are: ${event2.getMaxListeners()}`);
