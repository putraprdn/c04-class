class Car {
	static list = [];

	static init(cars) {
		this.list = cars.map((i) => new this(i));
	}

	constructor({
		id,
		plate,
		manufacture,
		model,
		image,
		rentPerDay,
		capacity,
		description,
		transmission,
		available,
		type,
		year,
		options,
		specs,
		availableAt,
	}) {
		this.id = id;
		this.plate = plate;
		this.manufacture = manufacture;
		this.model = model;
		this.image = image;
		this.rentPerDay = rentPerDay;
		this.capacity = capacity;
		this.description = description;
		this.transmission = transmission;
		this.available = available;
		this.type = type;
		this.year = year;
		this.options = options;
		this.specs = specs;
		this.availableAt = availableAt;
	}

	render() {
    let nol;
    const newRentPerDay = this.rentPerDay >= 1000000 ? `${this.rentPerDay / 1000000}.000.000` : `${this.rentPerDay / 1000}.000`;
    return `
        <div class="card">
            <img src="${this.image}" class="card-img-top" alt="Car Image">
            <div class="card-body p-0">
                <h5 class="card-title mt-3 mb-1">${this.manufacture} - ${this.model}</h5>
                <p class="card-harga mb-1">Rp. ${newRentPerDay} / hari</p>
                <p class="card-desc font-weight-light mb-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                </p>
                <div class="card-info mt-3">
                    <div class="info">
                        <p class="orang d-flex">
                            <img src="./images/fi_users.png" alt="user icon">
                            <span class="ml-2">${this.capacity} orang</span>
                        </p>
                        <p class="gear d-flex mt-3">
                            <img src="./images/fi_settings.png" alt="setting icon">
                            <span class="ml-2">${this.transmission}</span>
                        </p>
                        <p class="tahun d-flex mt-3">
                            <img src="./images/fi_calendar.png" alt="calendar icon">
                            <span class="ml-2">Tahun ${this.year}</span>
                        </p>
                    </div>
                </div>
            </div>
            <a class="main__button font-weight-bold border-0 btn btn-success mt-4 w-100 d-flex align-items-center justify-content-center"
                href="#">Pilih Mobil</a>
        </div>
    `;
	}
}