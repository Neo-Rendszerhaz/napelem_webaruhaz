import IndexController from "./controller/publikusController/IndexController.js";

$(function()
{
    $("header").append(`
    <a id="bejelentkezes" href="/login">Bejelentkezes</a>
    <a id="regisztracio" href="/register">Regisztráció</a>
    `);

    new IndexController();
});