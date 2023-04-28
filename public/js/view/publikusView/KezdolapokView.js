import KezdolapView from "./KezdolapView.js";

class KezdoLapokView {
    constructor(tomb, szuloElem) {
        this.checkedTomb

        $("#kereso").html(`

        <form class="nosubmit">
        <input class="nosubmit" type="text" id="keresoMezo" placeholder="termék keresése" title="Írja be a termék nevét"required>
        </form>
        </div>
        `);

        $(`#szuro`).html(`
        <div id="rendezes">
            <label for="szures">Rendezés:</label>
            <select name="szures" id="szures">
                <option value="abcNovekvo">ABC szerint növekvő</option>
                <option value="abcCsokkeno">ABC szerint csökkenő</option>
                <option value="arNovekvo">Ár szerint növekvő</option>
                <option value="arCsokkeno">Ár szerint csökkenő</option>
            </select>
        </div>
        <div class="overlay">
            <div class="popup">
                <div class="tartalom">
                <h3>A termék sikeresen bekerült a kosárba.</h3>
                </div>
            </div>
        </div>
        `);

        $(`.overlay`).on("click", () => {
            $(".overlay").hide();
        });
        let tempArr = []
        this.tombtomb = tomb
        this.tombtomb.forEach(termek => {
            tempArr.push(termek.marka)
        });
        tempArr = [...new Set(tempArr)]

        this.tombMegjelenit(tomb, szuloElem)

        $('#szures').on('change', function () {
            var ertek = $("#szures option:selected").val();
            if (ertek === "abcNovekvo") {
                tomb.sort(function (a, b) {
                    if (a.megnevezes > b.megnevezes) {
                        return 1;
                    }
                    else {
                        return -1
                    }
                });
            }
            else if (ertek === "abcCsokkeno") {
                tomb.sort(function (a, b) {
                    if (a.megnevezes < b.megnevezes) {
                        return 1;
                    }
                    else {
                        return -1
                    }
                });
            }
            else if (ertek === "arNovekvo") {
                tomb.sort(function (a, b) {
                    return a.ar - b.ar
                });
            }
            else if (ertek === "arCsokkeno") {
                tomb.sort(function (a, b) {
                    return b.ar - a.ar
                });
            }

            $(szuloElem).html("");
            tomb.forEach(termek => {
                new KezdolapView(termek, szuloElem)
            })
        });

        this.kereso = $("#keresoMezo").keyup(this.kereses)
        $(`#csokkenoABC`).on("click", () => {
        });
        this.markaInputMegj(tempArr);
    }

    markaInputMegj(markaTomb) {
        $("#szuro").append("<div id='markaSzuro'></div>")
        markaTomb.forEach(marka => {
            $("#markaSzuro").append(` 
            <input type="checkbox" id="${marka.replace(/\s/g, '')}" name="${marka}" value="${marka}">
            <label for="${marka.replace(/\s/g, '')}">${marka}</label><br>`)
            $(`#${marka.replace(/\s/g, '')}`).on("click", () => {
                this.markaSzuroVizsgalas()
            })
        });
    }
    markaSzuroVizsgalas() {
        this.checkedTomb = []
        const inputMarkaTomb = $("#markaSzuro>input");
        for (let index = 0; index < inputMarkaTomb.length; index++) {
            if (inputMarkaTomb[index].checked) {
                this.checkedTomb.push(inputMarkaTomb[index].value.replace(/\s/g, ''))
            }
        }
        this.szurtTermekJelenit()
    }

    szurtTermekJelenit() {
        if (this.checkedTomb.length > 0) {
            let megjelenitendoElem = [];
            this.tombtomb.forEach(termek => {
                for (let index = 0; index < this.checkedTomb.length; index++) {
                    if (termek.marka.replace(/\s/g, '') === this.checkedTomb[index]) {
                        megjelenitendoElem.push($(`#${termek.id}`).parent());
                    }
                }
                $(`#${termek.id}`).parent().hide()
            });
            megjelenitendoElem.forEach(elem => {
                elem.show();
            });
        }
        else {
            this.tombtomb.forEach(termek => {
                $(`#${termek.id}`).parent().show()
            });
        }


    }

    tombMegjelenit(tomb, szuloElem) {
        $(szuloElem).html("");

        tomb.sort(function (a, b) {
            if (a.megnevezes > b.megnevezes) {
                return 1;
            }
            else {
                return -1
            }
        });

        tomb.forEach(termek => {
            new KezdolapView(termek, szuloElem)
        })
    }



    kereses() {
        var input, filter, cim, i, txtValue, TDiv, KDiv;
        input = $("#keresoMezo");
        filter = input.val().toUpperCase();
        TDiv = $(".termek");
        KDiv = $(".kattintasiFelulet")
        for (i = 0; i < KDiv.length; i++) {
            cim = KDiv[i].getElementsByTagName("h6")[0];
            txtValue = cim.textContent || cim.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                TDiv[i].style.display = "";
            } else {
                TDiv[i].style.display = "none";
            }
        }
    }

    novekvoRendezesABC(tomb, ertek) {
        let i = tomb.length;
        if (i >= 1) {
            let csere = -1;
            for (let j = 0; j < i - 1; j++) {
                if (ertek[j] > ertek[j + 1]) {
                    ertek[j] = ertek[j + 1];
                    csere = j;
                }
            }
            csere = i;
        }
    }
}

export default KezdoLapokView;