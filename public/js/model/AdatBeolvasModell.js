class AdatBeolvasModell
{
    #adatokTomb=[];
    constructor(token)
    {
        console.log("adatbeolvas modell");
        this.token=token;
    }

    adatModosit(adat)
    {
        console.log("Modelben módosít",adat);
    }

    adatBe(vegpont, myCallBack) 
    {
        console.log(vegpont);
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
            .then((data) => 
            {
                this.#adatokTomb = data;
                console.log(this.#adatokTomb);
                myCallBack(this.#adatokTomb);
            })
            .catch((error) => 
            {
                console.error('Error:', error);
            });
    }

    adatUj(vegpont, adat)
    {
        fetch(vegpont,
        {
            method: "POST",
            headers:
            {
                "content-type": "application/json",
                "X-CSRF-TOKEN": this.token,
            },
            body: JSON.stringify(adat),
        })
        .then((response)=>response.json())
        .then((data)=>
        {
            console.log("Sikeres adatfelvitel" + data);
        })
        .catch((error)=>
        {
            console.error("Error", error);
        });
    }

    adatModosit(vegpont, adat)
    {
        console.log(adat);
        console.log("módosít", vegpont);
        vegpont+="/" + adat.id;
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
        .then((response)=>response.json())
        .then((data) => 
        {
            console.log("Sikeres módosítás" + data.updatedAt);
        })
        .catch((error) => 
        {
            console.error('Error:', error);
        });
    }

    adatTorol(vegpont, adat)
    {
        console.log("töröltem: ");
        console.log(adat);
        vegpont +="/"+adat.id;
        console.log(vegpont);
        fetch(vegpont,
        {
            method: "DELETE",
            headers:
            {
                "X-CSRF-TOKEN": this.token,
            },
        })
        .then((response)=>response.json())
        .then(() => 
        {
            console.log("Sikeres törlés");
        })
        .catch((error) => 
        {
            console.error('Error:', error);
        });
    }
}

export default AdatBeolvasModell;