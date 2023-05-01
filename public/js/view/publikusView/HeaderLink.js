$(function()
{
    tagElem("#fejlec>div");
    tagElem("#fejlec>img");
});

function tagElem(tagElem)
{
    $(`${tagElem}`).on("click", ()=>
    {
        window.location.href="/";
    })
}