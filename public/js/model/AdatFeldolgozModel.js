class AdatFeldolgozModel
{
    #adatokTomb=[];
    constructor(token)
    {
        this.token=token;
    }

    egyAdat(vegpont, myCallBack)
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
            myCallBack(data)
        })
        .catch((error) => 
        {
            console.error('Error:', error);
        });
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
        console.log(adat);
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

    adatModosit(vegpont, adat, id)
    {
        console.log(adat);
        console.log("módosít", vegpont);
        vegpont+="/" + id;
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
            console.log("Sikeres módosítás" + data);
        })
        .catch((error) => 
        {
            console.error('Error:', error);
        });
    }

    adatTorol(vegpont, adat, id)
    {
        console.log("töröltem: ");
        console.log(adat);
        vegpont +="/"+id;
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

export default AdatFeldolgozModel;