// console.log("hello world");

// const message = (name) => {
//   console.log(`my name is ${name}!`);
// };

// message("Shahid");

// global.setTimeout(() => {
//   console.log("setTimeout with global");
// });

// setTimeout(() => {
//   console.log("setTimeout without global");
// },3000);

// console.log(global);

// console.log(__dirname);
// console.log(__filename);

const fs = require("fs");

// fs.readFile("./note.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data.toString());
//   }
// });

// fs.writeFile("./note.txt", "Overwrite", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Overwrite the file");
//   }
// });

// fs.appendFile("./note.txt", "Append\r\n", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Append the file");
//   }
// });

// fs.mkdir("newFolder", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("folder created");
//   }
// });

// if (!fs.existsSync("newFolder")) {
//   fs.mkdir("newFolder", (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("folder created");
//     }
//   });
// } else {
//   console.log("folder name already exists!!");
// }

// if (fs.existsSync("newFolder")) {
//   fs.rmdir("newFolder", (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("folder deleted");
//     }
//   });
// } else {
//   console.log("folder does not exists !!");
// }

// if (fs.existsSync("users.js")) {
//   fs.unlink("./users.js", (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("file deleted");
//     }
//   });
// } else {
//   console.log("file does not exists !!");
// }

// const readStream = fs.createReadStream("./largeText.txt");
// readStream.on("data", (chunk) => {
//   console.log("##### new chunk #####");
//   console.log(chunk.toString());
// });

// const readStream = fs.createReadStream("./largeText.txt", {
//   encoding: "utf-8",
// });
// // readStream.on("data", (chunk) => {
// //   console.log("##### new chunk #####");
// //   console.log(chunk);
// // });

// const writeStream = fs.createWriteStream("./writeStream.txt");
// // readStream.on("data", (chunk) => {
// //   console.log("##### new chunk #####");
// //   console.log(chunk);
// //   writeStream.write("\n ##### new chunk #####\n");
// //   writeStream.write(chunk);
// // });

// readStream.pipe(writeStream);
