const HTTP = require("http");
const FS = require("fs");
const PATH = require("path");

class Server {
	constructor(port, ip) {
		this.#createServer().listen(port, ip, () => {
			console.log(`server is running at port ${port}`);
		});
	}

	#createServer() {
		return HTTP.createServer((req, res) => this.#route(req, res));
	}

	#route(request, response) {
		console.log("request berjalan...");

		var filePath = "." + request.url;
        // console.log(filePath);
		switch (filePath) {
			case "./":
			case "./home":
				filePath = "./public/index.html";
				break;
			case "./cars":
				filePath = "./public/cari-mobil.html";
				break;
			default:
				filePath = `./public/${filePath}`;
				break;
		}

		var extname = PATH.extname(filePath);
		var contentType = "text/html";
		switch (extname) {
			case ".js":
				contentType = "text/javascript";
				break;
			case ".css":
				contentType = "text/css";
				break;
			case ".json":
				contentType = "application/json";
				break;
			case ".png":
				contentType = "image/png";
				break;
			case ".jpg":
				contentType = "image/jpg";
				break;
			case ".wav":
				contentType = "audio/wav";
				break;
		}

		FS.readFile(filePath, function (error, content) {
			if (error) {
				if (error.code == "ENOENT") {
					FS.readFile("./public/index.html", function (error, content) {
						response.writeHead(200, {
							"Content-Type": contentType,
						});
						response.end(content, "utf-8");
					});
				} else {
					response.writeHead(200);
					response.end("error: " + error.code + " ..\n");
					response.end();
				}
			} else {
				response.writeHead(200, { "Content-Type": contentType });
				response.end(content, "utf-8");
			}
		});
	}
}

module.exports = Server;
