const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db.js");
const User = require("./models/Users.js");
const Subject = require("./models/Subject.js");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

// const user = new User(
//   {
//     name: "Umair Malik",
//     email: "umairmalik0@proton.me",
//   },
// );

// user.save()
//   .then((result) => console.log("Saved:", result))
//   .catch((error) => console.error("Error:", error));

// const os = new Subject({
//   subjectCode: "CSE3003",
//   mainTitle: "Operating System",
//   sections: [
//     {
//       heading: "Operating System",
//       content: `An Operating System (OS) is software that manages and handles the hardware and software resources of a computer system. It provides interaction between users of computers and computer hardware. An operating system is responsible for managing and controlling all the activities and sharing of computer resources. An operating system is a low-level Software that includes all the basic functions like processor management, memory management, Error detection, etc.

//       This Operating System tutorial will cover all the basic to advance operating system concepts like System Structure, CPU Scheduling, Deadlock, file and disk management, and many more.`,
//       listItems: [],
//     },
//     {
//       heading: "Operating System Functions",
//       content: "",
//       listItems: [
//         "Memory and Processor Management",
//         "Network Management",
//         "Security Management",
//         "File Management",
//         "Error Detection",
//         "Job Accounting",
//       ],
//     },
//     {
//       heading: "Types of Operating System",
//       content: "",
//       listItems: [
//         "Batch OS (e.g. Transactions Process, Payroll System, etc.)",
//         "Multi-programmed OS (e.g. Windows, UNIX, macOS, etc.)",
//         "Timesharing OS (e.g. Multics, Linux, etc.)",
//         "Real-Time OS (e.g. PSOS, VRTX, etc.)",
//         "Distributed OS (e.g. LOCUS, Solaris, etc.)",
//       ],
//     },
//     {
//       heading: "Batch Operating System",
//       content: `This type of operating system does not interact with the computer directly. There is an operator which takes similar jobs having the same requirements and groups them into batches. It is the responsibility of the operator to sort jobs with similar needs. Batch Operating System is designed to manage and execute a large number of jobs efficiently by processing them in groups.`,
//       listItems: [],
//     },
//     {
//       heading: "Multi-Programming Operating System",
//       content: `Multiprogramming Operating Systems can be simply illustrated as more than one program is present in the main memory and any one of them can be kept in execution. This is basically used for better utilization of resources.`,
//       listItems: [],
//     },
//     {
//       heading: "Multi-Processing Operating System",
//       content: `Multi-Processing Operating System is a type of Operating System in which more than one CPU is used for the execution of resources. It betters the throughput of the System.`,
//       listItems: [],
//     },
//     {
//       heading: "Multi-Tasking Operating System",
//       content: `Multitasking Operating System is simply a multiprogramming Operating System with having facility of a Round-Robin Scheduling Algorithm. It can run multiple programs simultaneously.`,
//       listItems: [],
//     },
//     {
//       heading: "Time-Sharing Operating Systems",
//       content: `Each task is given some time to execute so that all the tasks work smoothly. Each user gets the time of the CPU as they use a single system. These systems are also known as Multitasking Systems. The task can be from a single user or different users also. The time that each task gets to execute is called quantum. After this time interval is over OS switches over to the next task.`,
//       listItems: [],
//     },
//     {
//       heading: "Distributed Operating System",
//       content: `These types of operating system is a recent advancement in the world of computer technology and are being widely accepted all over the world and, that too, at a great pace. Various autonomous interconnected computers communicate with each other using a shared communication network. Independent systems possess their own memory unit and CPU. These are referred to as loosely coupled systems or distributed systems. These systems’ processors differ in size and function. The major benefit of working with these types of the operating system is that it is always possible that one user can access the files or software which are not actually present on his system but some other system connected within this network i.e., remote access is enabled within the devices connected in that network.`,
//       listItems: [],
//     },
//     {
//       heading: "Network Operating System",
//       content: `These systems run on a server and provide the capability to manage data, users, groups, security, applications, and other networking functions. These types of operating systems allow shared access to files, printers, security, applications, and other networking functions over a small private network. One more important aspect of Network Operating Systems is that all the users are well aware of the underlying configuration, of all other users within the network, their individual connections, etc., and that’s why these computers are popularly known as tightly coupled systems.`,
//       listItems: [],
//     },
//     {
//       heading: "Real-Time Operating System",
//       content: `These types of OSs serve real-time systems. The time interval required to process and respond to inputs is very small. This time interval is called response time. Real-time systems are used when there are time requirements that are very strict like missile systems, air traffic control systems, robots, etc.`,
//       listItems: [],
//     },
//   ],
// });


// os.save()
//   .then((result) => console.log("Saved:", result))
//   .catch((error) => console.error("Error:", error));

app.get("/", (req, res) => {
  res.json({
    message: "Hello, from backend / route",
  });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
