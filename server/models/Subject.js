const mongoose = require("mongoose");

const topicSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  listItems: {
    type: [String],
    default: [],
  },
});

const moduleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  topics: {
    type: [topicSchema],
    default: [],
  },
});

const subjectSchema = new mongoose.Schema({
  mainTitle: {
    type: String,
    required: true,
  },
  subjectCode: {
    type: String,
    required: true,
    unique: true,
  },
  modules: {
    type: [moduleSchema],
    validate: [arrayLimit, "Exactly 5 modules are required."],
  },
});

function arrayLimit(val) {
  return val.length === 5;
}

const Subject = mongoose.model("Subject", subjectSchema);

// Correct way to create a new Subject document
// const newSubject = new Subject({
//   mainTitle: "Data Structures and Algorithms",
//   subjectCode: "CSE2011",
//   modules: [
//     {
//       name: "Module 1: Introduction to Data Structures",
//       topics: [
//         {
//           heading: "Introduction to Data Structures",
//           content:
//             "Data structures are fundamental building blocks for organizing and manipulating data efficiently.",
//           listItems: [
//             "Definition and importance",
//             "Classification of data structures",
//             "Applications in real-world scenarios",
//           ],
//         },
//         {
//           heading: "Complexity Analysis",
//           content:
//             "Analyzing the performance of algorithms using time and space complexity.",
//           listItems: [
//             "Big-O notation",
//             "Best, average, and worst-case analysis",
//             "Trade-offs between time and space",
//           ],
//         },
//       ],
//     },
//     {
//       name: "Module 2: Arrays and Linked Lists",
//       topics: [
//         {
//           heading: "Arrays and Linked Lists",
//           content: "Learn about static and dynamic ways to store data.",
//           listItems: [
//             "Introduction to arrays",
//             "Singly and doubly linked lists",
//             "Circular linked lists",
//           ],
//         },
//       ],
//     },
//     {
//       name: "Module 3: Stacks and Queues",
//       topics: [
//         {
//           heading: "Stacks and Queues",
//           content: "Explore linear data structures and their applications.",
//           listItems: [
//             "Stack operations (push, pop, peek)",
//             "Queue operations (enqueue, dequeue)",
//             "Applications in recursion and task scheduling",
//           ],
//         },
//       ],
//     },
//     {
//       name: "Module 4: Trees and Graphs",
//       topics: [
//         {
//           heading: "Trees and Graphs",
//           content:
//             "Non-linear data structures for hierarchical and networked data.",
//           listItems: [
//             "Binary trees and traversal techniques",
//             "Binary Search Trees (BST)",
//             "Graph representation (adjacency list and matrix)",
//           ],
//         },
//       ],
//     },
//     {
//       name: "Module 5: Searching and Sorting Algorithms",
//       topics: [
//         {
//           heading: "Searching and Sorting Algorithms",
//           content:
//             "Learn about key algorithms for processing data efficiently.",
//           listItems: [
//             "Linear and binary search",
//             "Bubble, merge, and quick sort",
//             "Heap and counting sort",
//           ],
//         },
//       ],
//     },
//   ],
// });

// Save the new subject to the database
// newSubject.save()
//   .then((result) => {
//     console.log("New subject added:", result);
//   })
//   .catch((error) => {
//     console.log("Error adding subject:", error);
//   });

module.exports = Subject;
