class App {
	constructor() {
		this.clearButton = document.getElementById("clear-btn");
		this.loadButton = document.getElementById("load-btn");
		this.carContainerElement = document.querySelector(
			".cars-container .row"
		);
		this.getDriver = document.getElementById("driver");
		this.getDate = document.getElementById("datePickerId");
		this.getJam = document.getElementById("jam");
		this.getPenumpang = document.getElementById("penumpang");
		this.check = document.querySelector(".cars-container .row");
		this.notFoundText = document.getElementById("not-found");
		this.formElement = document.getElementById("form");
		this.click = false;
	}

	async init() {
		await this.load();

		// Register click listener
		this.clearButton.onclick = this.clear;
		this.loadButton.onclick = this.run;
	}

	run = () => {
		var inputArr = {
			tipeDriver: this.getDriver.value,
			date: this.getDate.value,
			jam: this.getJam.value,
			penumpang: this.getPenumpang.value,
		};
		if (!this.click) {
			if (inputArr.tipeDriver && inputArr.date && inputArr.jam) {
				this.exec(inputArr);
				// console.log();
				!this.check.firstElementChild
					? (this.notFoundText.style.display = "block")
					: (this.notFoundText.style.display = "none");
					
				this.click = true;
				this.clearButton.style.display = "flex";
			} else {
				return alert("Data tidak boleh kosong!");
			}
		} else {
			let child = this.carContainerElement.firstElementChild;

			while (child) {
				child.remove();
				child = this.carContainerElement.firstElementChild;
			}
			this.click = false;
			this.run();
		}
	};

	exec = (arr) => {
		Car.list.forEach((car) => {
			var inputDate = new Date(arr.date);
			var inputDateTime = new Date(inputDate.setHours(arr.jam, 0, 0));
			var carDate = new Date(car.availableAt);

			if (
				(car.capacity == false || car.capacity >= arr.penumpang) &&
				inputDateTime >= carDate &&
				car.available === true
			) {
				const node = document.createElement("div");
				node.className = "col-md-4 mb-3";
				node.innerHTML = car.render();
				this.carContainerElement.appendChild(node);
				/**
				 * check time
				 * console.info(
					`${car.manufacture}-${car.model}\ninputDate: ${inputDateTime}\ncarDate: ${carDate} \navailable: ${car.available}`);
				 */
			}
		});
	};

	async load() {
		const cars = await Binar.listCars();
		Car.init(cars);
	}

	clear = () => {
		let child = this.carContainerElement.firstElementChild;

		while (child) {
			child.remove();
			child = this.carContainerElement.firstElementChild;
		}
		this.click = false;
		this.clearButton.style.display = "none";
		this.notFoundText.style.display = "none";
		this.formElement.reset();
	};
}
