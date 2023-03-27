$(function(){
    var cegRB = $("#jellegC");
    var magRB = $("#jellegM");
    cegRB.on("change",()=>{
        if(cegRB.is(":checked")){
            $("#cegnev").parent().parent().show()
            $("#adoszam").parent().parent().show()
        }
    })
    magRB.on("change",()=>{
        if(magRB.is(":checked")){
            $("#cegnev").parent().parent().hide()
            $("#adoszam").parent().parent().hide()
        }
    })

})