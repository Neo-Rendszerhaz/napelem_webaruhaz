class AdatFeldolgozModel {
    #adatokTomb = [];
    constructor(token) {
        this.token = token;
    }

    egyAdat(vegpont, myCallBack) {
        fetch(vegpont,
            {
                method: 'GET',
                headers:
                {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': this.token,
                }
            })
            .then((response) => response.json())
            .then((data) => {
                myCallBack(data)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    adatBe(vegpont, myCallBack) {
        fetch(vegpont,
            {
                method: 'GET',
                headers:
                {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': this.token,
                }
            })
            .then((response) => response.json())
            .then((data) => {
                this.#adatokTomb = data;
                myCallBack(this.#adatokTomb);
            })
            .catch((error) => {
                myCallBack(undefined)
            });
    }

    adatUj(vegpont, adat) {
        fetch(vegpont,
            {
                method: "POST",
                body: JSON.stringify(adat),
                headers:
                {
                    "content-type": "application/json",
                    "X-CSRF-TOKEN": this.token,
                },
            })
            .then((response) => response.json())
            .then((data) => {
                console.log("Sikeres adatfelvitel" + data);
            })
            .catch((error) => {
                console.error("Error", error);
            });
    }

    adatModosit(vegpont, adat, id) {
        vegpont += "/" + id;
        fetch(vegpont,
            {
                method: "PUT",
                headers:
                {
                    "content-type": "application/json",
                    "X-CSRF-TOKEN": this.token,
                },
                body: JSON.stringify(adat),
            })
            .then((response) => response.json())
            .then((data) => {
                console.log("Sikeres módosítás" + data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    felhasznaloCimModosit(vegpont, adat) {
        fetch(vegpont,
            {
                method: "PUT",
                headers:
                {
                    "content-type": "application/json",
                    "X-CSRF-TOKEN": this.token,
                },
                body: JSON.stringify(adat),
            })
            .then((response) => response.json())
            .then((data) => {
                console.log("Sikeres módosítás" + data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    adatTorol(vegpont, adat) {
        fetch(vegpont,
            {
                method: "DELETE",
                headers:
                {
                    "X-CSRF-TOKEN": this.token,
                },
            })
            .then((response) => response.json())
            .then(() => {
                console.log("Sikeres törlés");
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}

export default AdatFeldolgozModel;