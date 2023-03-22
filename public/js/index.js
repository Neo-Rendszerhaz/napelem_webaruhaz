import IndexController from "./controller/publikusController/IndexController.js";
import FooterKinezet from "./kinezet/FooterKinezet.js";

$(function()
{
    $("header").append(`
    <a id="bejelentkezes" href="/login">Bejelentkezes</a>
    <a id="regisztracio" href="/register">Regisztráció</a>
    `);

    new IndexController();
    new FooterKinezet();
});