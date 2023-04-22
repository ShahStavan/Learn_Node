# Learn Node From Scratch| with <a href="https://www.linkedin.com/in/shah-stavan-810b4819a/">Mr.Shah</a>
<p align="center">
  <img src="https://miro.medium.com/v2/resize:fit:1290/0*s2ivt9cecdqsXvts.gif" height="500"/>
</p>


## Table of Contents
1. [What is Node JS?](#what-is-node-js)
2. [What are features of Node JS?](#what-are-features-of-node-js)
3. [How Node works behind the hood?](#how-node-works-behind-the-hood)
4. [What are Asynchoronous-Callbacks and Promises in Node JS?](#what-are-asynchronous-callbacks-and-promises-in-node-js)
5. [What are installation and setup steps of Node JS?](#what-are-installation-and-setup-steps-of-node-js)
6. [Writing first Node JS code!!!😎](#writing-first-node-js-code)
7. [All that glitters isn’t gold!](#all-that-glitters-isnt-gold)
8. [What are Single-Threaded Applications in Node JS?](#what-are-single-threaded-applications-in-node-js)
9. [What are Multi-Threaded Application in Node JS?](#what-are-multi-threaded-application-in-node-js)
10. [Problem Solved?](#problem-solved)
11. [Beauty of Node JS❤️](#beauty-of-node-js)
12. [What is Software Stack?](#what-is-software-stack)
13. [What are the differences among Angular JS, React JS, and Vue JS are significant, with each providing unique advantages and limitations. The selection of a framework should be based on the requirements of the project.](#what-are-the-differences-among-angular-js-react-js-and-vue-js-are-significant-with-each-providing-unique-advantages-and-limitations-the-selection-of-a-framework-should-be-based-on-the-requirements-of-the-project)

<div id="What is Node JS?">

### What is Node JS?
Node.js is an open-source, cross-platform, server-side JavaScript runtime environment that is built on the Chrome V8 JavaScript engine. It allows developers to run JavaScript code outside of a web browser, enabling them to build server-side applications with JavaScript. Node.js provides an event-driven, non-blocking I/O model that makes it lightweight and efficient.
1. <b>What is Open-Source?</b>
    Open source refers to a software development model in which the source code of a program or application is made available to the public, allowing anyone to view, use, modify, and distribute it. This means that the code can be freely shared and modified by developers around the world, without any restriction or licensing fees.
2. <b>What is Cross-Platform?</b>
    Cross-platform refers to the ability of software or applications to run on multiple operating systems or platforms. This means that a program can be developed on one platform, such as Windows, and then run on another platform, such as Mac OS X or Linux, without requiring any changes to the code.
3. <b>What is Server-Side Javascript runtime environment?</b>
    A server-side JavaScript runtime environment is a platform that allows developers to run JavaScript code on a server, outside of a web browser. This allows developers to create and run server-side applications using JavaScript, which was traditionally only used for client-side programming.

    One popular server-side JavaScript runtime environment is Node.js. Node.js is built on the Chrome V8 JavaScript engine and provides an event-driven, non-blocking I/O model that makes it lightweight and efficient. It allows developers to build scalable, efficient, and real-time applications using JavaScript.
</div>

<div id="What are features of Node JS?">

### What are features of Node JS?
Node.js is a popular server-side JavaScript runtime environment that provides a range of features for developers. Some of the top features of Node.js include:

1. Non-blocking I/O: Node.js provides a non-blocking I/O model that allows it to handle a large number of requests and connections simultaneously, without blocking the event loop.

2. Asynchronous programming: Node.js allows developers to write asynchronous code using callbacks, promises, and async/await, making it easier to handle multiple requests and perform I/O operations efficiently.

3. Fast performance: Node.js is built on the V8 JavaScript engine, which provides fast performance and allows Node.js to execute JavaScript code very quickly.

4. Scalability: Node.js is designed to be highly scalable, making it easy to handle large amounts of traffic and scale up or down as needed.

5. Cross-platform compatibility: Node.js is cross-platform, meaning that it can be used on a variety of operating systems, including Windows, Mac OS X, and Linux.

6. Large ecosystem: Node.js has a large and growing ecosystem of libraries and tools, making it easier for developers to build applications quickly and efficiently.

7. Community support: Node.js has a large and active community of developers who contribute to the development of the platform, provide support, and create new tools and libraries to enhance the capabilities of Node.js.

Overall, these features make Node.js a popular choice for building scalable, efficient, and real-time applications using JavaScript.
</div>

<div id="How Node works behind the hood?">

### How Node works behind the hood?
Node.js works behind the hood by providing a runtime environment that allows developers to run JavaScript code on the server-side. Here's a brief overview of how Node.js works:

1. When a Node.js application is started, it creates a single thread of execution, called the event loop, which is responsible for managing all I/O operations and handling events.
    1. <b>What is an event-loop?</b>
        <br>
        In Node.js, the event loop is a core part of the runtime environment that enables asynchronous I/O operations and handles events. The event loop is responsible for managing all I/O operations, including reading and writing to files, network requests, and database interactions.

        The event loop works by constantly checking the event queue for new events to process. When an event is added to the queue, the event loop will pick it up and handle it. Events in Node.js can be triggered by various sources, including timers, I/O operations, and user-defined events.

        One important aspect of the event loop is that it uses a non-blocking I/O model, which means that it doesn't block the execution of the program while waiting for I/O operations to complete. Instead, Node.js registers callbacks to be called when I/O operations are complete, allowing other operations to be processed in the meantime.

        The event loop is designed to be highly efficient and can handle a large number of concurrent events and I/O operations. This makes Node.js well-suited for building real-time and scalable applications, such as web servers and APIs, chat applications, and game servers.

2. Node.js uses an event-driven, non-blocking I/O model, which means that it can handle multiple requests and connections simultaneously, without blocking the event loop.

3. When a request is received, Node.js creates an event and adds it to the event queue. The event loop then continuously checks the event queue for new events, and processes each event in turn.

4. Asynchronous callbacks are used to handle I/O operations, such as reading or writing files, making network requests, or interacting with databases. When an I/O operation is initiated, Node.js doesn't block the event loop, but instead registers a callback function to be called when the operation is complete.

5. Node.js uses a single-threaded event loop, but can handle multiple concurrent connections by delegating I/O operations to the operating system kernel, which can handle multiple threads or processes.

6. Node.js also provides a module system that allows developers to organize their code into reusable modules, which can be loaded and executed on demand.

Overall, Node.js provides a flexible and efficient runtime environment that allows developers to build scalable, efficient, and real-time applications using JavaScript.
</div>

<div id="What are Asynchoronous-Callbacks and Promises in Node JS?">

### What are Asynchoronous-Callbacks and Promises in Node JS?
Asynchronous callbacks are functions that are executed after an asynchronous operation is completed. For example, when reading a file using the fs module in Node.js, you can provide a callback function to be executed when the file has been read. This callback function will be called asynchronously, meaning that the program will continue to execute while the file is being read. Asynchronous callbacks are often used in Node.js to handle I/O operations, network requests, and other types of asynchronous operations.

Promises are another way of handling asynchronous operations in Node.js. A promise is an object that represents a value that may not be available yet. Promises can be used to handle asynchronous operations by returning a promise object instead of a callback function. The promise object represents the eventual completion of the operation, and can be used to chain multiple asynchronous operations together.

Promises have become increasingly popular in recent years due to their simplicity and ease of use. Promises are easy to reason about, and provide a more structured way of handling asynchronous operations than traditional callback functions.

Overall, asynchronous callbacks and promises are two important features of Node.js that allow developers to write efficient and non-blocking code for handling I/O operations and other types of asynchronous tasks.
</div>

<div id="What are installation and setup steps of Node JS?">

### What are installation and setup steps of Node JS?
1. Download the appropriate installer for your operating system from the official Node.js website 
<a href="https://nodejs.org">Node JS</a>.

2. Double-click the installer to begin the installation process.

3. Follow the prompts in the installer to select the installation directory and other settings.

4. Once the installation is complete, open a terminal or command prompt and type <b><i>node -v</i></b> to verify that Node.js is installed and working correctly. This command will display the version number of Node.js that is currently installed on your system.

5. To start using Node.js, you can <b>create a new JavaScript file with a .js extension</b> and begin writing code. You can run the file using the node command in the terminal, followed by the name of the file. For example, if you have a<b> file called example.js</b>, you can run it using the following command: <b><i>node example.js.</i></b>

That's it! With Node.js installed and set up, you can now start building applications using the Node.js runtime environment and its extensive ecosystem of modules and packages.
</div>

<div id="Writing first Node JS code!!!😎">

### Writing first Node JS code!!!😎
```js
// First Code
function latefunc() {
    console.log("This will be called Asynchronously");
}

console.log("Welcome to the Node World");
setTimeout(latefunc,2000) // try to change the time parameter(second one) in settimeout function
console.log("Namaste🙏")
```
</div>

<div id="All that glitters isn’t gold!">

### All that glitters isn’t gold!
The event loop is a fundamental part of Node.js and is the secret to its efficiency. However, Node.js is still limited by the amount of processing power it can harness. Complex programs that require a lot of processing significantly can slow things down. While Node.js can handle asynchronous I/O functions with ease, it is not suitable for compute-intensive applications like machine learning. Hence, it is essential to weigh the pros and cons before choosing a framework or a runtime environment.
</div>

<div id="What are Single-Threaded Applications in Node JS?">

### What are Single-Threaded Applications in Node JS?
Initially for developing simple applications we generally prefer Single-Threaded applications. But, it's not the case everytime if you're hosting a website definetely developers should be ready to dealing with mutliple user requests within no time.

Single-threaded applications often get bogged down due to long processes that take time to execute. These processes can cause a block as the application needs to wait for a process to complete before moving ahead.
</div>

<div id="What are Multi-Threaded Application in Node JS?">

### What are Multi-Threaded Application in Node JS?
We want multiple users to be able to access our website simultaneously. One way would be to have multiple threads, where each thread can serve a single user. Great! Problem solved? Not exactly. Let’s look at the problem again.

Each thread is serving a single user. Whether the user is reading the course or perhaps not generating any requests to the server, our idle thread is still assigned to the user.
</div>

<div id="Problem Solved?">

### Problem Solved?
We can serve more users now. However, as we dive deeper into back-end development, we will come across multiple ways of doing the same thing. Efficiency is essential if we want our services to scale well. In our example, we can simply add more computing resources as we need them. While this may seem like a simple solution, it comes at the cost of getting more hardware or computational resources. Let’s see if we can do something more efficient.
</div>

<div id="Beauty of Node JS❤️">

### Beauty of Node JS❤️
Node.js truly excels in this area: Assume you want to read a file! you do not need to wait for the file to be read; instead, you can just ask the OS to work on it and call you back when it’s done reading. Conveniently, asynchronous processes use this very paradigm.

Processes, such as fetching data from storage or making new connections, can all be performed asynchronously, ensuring that the application does not get blocked. Furthermore, Node.js processes code sequentially. Without asynchronous operations, the entire program would halt until a file is read or a setTimeout() is called.
</div>

<div id="What is Software Stack?">

### What is Software Stack?
The concept of a software stack or solution stack involves combining multiple software packages to create a comprehensive software solution. Node.js is a key component in several widely used web development stacks, all of which adhere to the principle of using JavaScript throughout the entire development process.

#### 1. MERN STACK
    - MongoDB
    - Express JS
    - React JS
    - Node JS

#### 2. MEAN STACK
    
    - MongoDB
    - Express JS
    - Angular JS
    - Node JS

#### 3. MEVN STACK
    
    - MongoDB
    - Express JS
    - Vue JS
    - Node JS
</div>

<div id="What are the differences among Angular JS, React JS, and Vue JS are significant, with each providing unique advantages and limitations. The selection of a framework should be based on the requirements of the project.">

### What are the differences among Angular JS, React JS, and Vue JS are significant, with each providing unique advantages and limitations. The selection of a framework should be based on the requirements of the project.
AngularJS, ReactJS, and VueJS are three popular JavaScript frameworks that have their own strengths and weaknesses. Here are some differences between them:

1. Architecture: AngularJS is a full-featured MVC framework, whereas ReactJS is a view library that focuses on building user interfaces, and VueJS is a progressive framework that can be used incrementally.

2. Learning curve: AngularJS has a steep learning curve due to its extensive features, whereas ReactJS and VueJS are relatively easier to learn and implement.

3. Performance: ReactJS is known for its excellent performance and speed, whereas VueJS also has good performance but is considered more lightweight than ReactJS. AngularJS can be slower due to its extensive features and complexity.

4. Flexibility: VueJS is considered the most flexible framework, as it can be used for small, medium, or large-scale projects, whereas AngularJS is better suited for large-scale enterprise applications, and ReactJS is ideal for scalable and complex projects.

5. Community and resources: ReactJS has a large and active community with extensive documentation and resources, whereas AngularJS and VueJS also have good communities, but not as extensive as ReactJS.

In terms of when to use each framework, it ultimately depends on the project's specific requirements, the team's expertise, and the available resources. For example, AngularJS may be a good choice for complex enterprise applications, while ReactJS may be better suited for building scalable and complex user interfaces, and VueJS may be ideal for smaller projects or for gradually implementing a new framework in an existing project.
</div>

<a href="https://www.buymeacoffee.com/shahstavanq" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>
<h4 align="center"><b>Drop some ❤️ by ⭐ing repository</h4></p>
<h4 align="center"><i>Share the Repository</i></h4>






