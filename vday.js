import $ from "jquery"
if (typeof window !== 'undefined') {
    jQuery(function(){
        $(".container").on("click",function(){
            $(".card").stop().animate({
                top:"90px"
            },"slow")
        })
    })
}
