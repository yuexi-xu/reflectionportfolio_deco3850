function showideal(){
    $("#ideal_container").css("display","inherit");
    $("#ideal_container").addClass("animated slideInLeft");
    setTimeout(function(){
        $("#ideal_container").removeClass("animated slideInLeft");
    },800);
}
function closeideal(){
    $("#ideal_container").addClass("animated slideOutLeft");
    setTimeout(function(){
        $("#ideal_container").removeClass("animated slideOutLeft");
        $("#ideal_container").css("display","none");
    },800);
}
function showactual(){
    $("#actual_container").css("display","inherit");
    $("#actual_container").addClass("animated slideInRight");
    setTimeout(function(){
        $("#actual_container").removeClass("animated slideInRight");
    },800);
}
function closeactual(){
    $("#actual_container").addClass("animated slideOutRight");
    setTimeout(function(){
        $("#actual_container").removeClass("animated slideOutRight");
        $("#actual_container").css("display","none");
    },800);
}
function showreflection(){
    $("#reflection_container").css("display","inherit");
    $("#reflection_container").addClass("animated slideInUp");
    setTimeout(function(){
        $("#reflection_container").removeClass("animated slideInUp");
    },800);
}
function closereflection(){
    $("#reflection_container").addClass("animated slideOutDown");
    setTimeout(function(){
        $("#reflection_container").removeClass("animated slideOutDown");
        $("#reflection_container").css("display","none");
    },800);
}
setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
      $("#box").css("display","none");
      $("#ideal").removeClass("animated fadeIn");
      $("#reflection").removeClass("animated fadeIn");
      $("#actual").removeClass("animated fadeIn");
    },1000);
},1500);
