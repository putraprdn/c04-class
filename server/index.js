// const httpServer = require("http");
const { PORT = 8000 } = process.env;

const serverClass = require("./server");
new serverClass(PORT, "0.0.0.0");

// const PORT = process.env.PORT || 8080;
// const FS = require("fs");
// const PATH = require("path");
// const PUBLIC_DIRECTORY = PATH.join(__dirname, "../public/");

// const getHTML = (htmlFileName) => {
// 	const htmlFile = PATH.join(PUBLIC_DIRECTORY, htmlFileName);
// 	return FS.readFileSync(htmlFile, "utf-8");
// };

// const SERVER = httpServer.createServer((req, res) => {
// 	switch (req.url) {
// 		case "/":
// 		// case "/home":
// 			res.setHeader("Content-Type", "text-html");
// 			res.writeHead(200);
// 			res.end(getHTML("index.html"));
// 			break;

// 		// case "/about":
// 		// 	res.setHeader("Content-Type", "text-html");
// 		// 	res.writeHead(200);
// 		// 	res.end(getHTML("about.html"));
// 		// 	break;

// 		// case "/service":
// 		// 	res.setHeader("Content-Type", "text-html");
// 		// 	res.writeHead(200);
// 		// 	res.end(getHTML("service.html"));
// 		// 	break;

// 		default:
// 			res.setHeader("Content-Type", "application-html");
// 			res.writeHead(200);
// 			res.end(getHTML("index.example.html"));
// 			break;
// 	}
// 	// res.setHeader("Content-Type", "text-html");
// 	// res.writeHead(200);
// 	// res.end(getHTML("index.html"));
// });

// SERVER.listen(PORT, "0.0.0.0", () => {
// 	console.log(`Server is runnin on port ${PORT}`);
// });

// var http = require("http");
// var fs = require("fs");
// var path = require("path");
// const SERVER = http.createServer((request, response) => {
// 	console.log("request berjalan...");

// 	var filePath = "." + request.url;
// 	switch (filePath) {
// 		case "./":
// 		case "./home":
// 			filePath = "./public/index.html";
// 			break;
// 		case "./cars":
// 			filePath = "./public/cari-mobil.html";
// 			break;
// 		default:
// 			filePath = `./public/${filePath}`;
// 			break;
// 	}

// 	// if (filePath == "./") {
// 	// 	filePath = "./public/index.html";
// 	// } else {
// 	// 	filePath = `./public/${filePath}`;
// 	// }
// 	// console.log(filePath);

// 	var extname = path.extname(filePath);
// 	var contentType = "text/html";
// 	switch (extname) {
// 		case ".js":
// 			contentType = "text/javascript";
// 			break;
// 		case ".css":
// 			contentType = "text/css";
// 			break;
// 		case ".json":
// 			contentType = "application/json";
// 			break;
// 		case ".png":
// 			contentType = "image/png";
// 			break;
// 		case ".jpg":
// 			contentType = "image/jpg";
// 			break;
// 		case ".wav":
// 			contentType = "audio/wav";
// 			break;
// 	}

// 	fs.readFile(filePath, function (error, content) {
// 		if (error) {
// 			if (error.code == "ENOENT") {
// 				fs.readFile("./index.html", function (error, content) {
// 					response.writeHead(200, { "Content-Type": contentType });
// 					response.end(content, "utf-8");
// 				});
// 			} else {
// 				response.writeHead(200);
// 				response.end("error: " + error.code + " ..\n");
// 				response.end();
// 			}
// 		} else {
// 			response.writeHead(200, { "Content-Type": contentType });
// 			response.end(content, "utf-8");
// 		}
// 	});
// });

// console.log(PUBLIC_DIRECTORY + "index.html");
// SERVER.listen(PORT, "0.0.0.0", () => {
// 	console.log(`Server is runnin on port ${PORT}`);
// });
