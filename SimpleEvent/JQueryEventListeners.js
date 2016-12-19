/**
 * Created by User on 015 15.12.16.
 */
// //variant 1
//$("#target").click(function(){
//    $("#first").css("backgroundColor","red");  });

//$("#target").click(function(){
//    $("#second").css("backgroundColor","red"); });

// //variant 2
//$("#target").on("click",function(){
//    $("#second").css("backgroundColor","red");
//    $("#first").css("backgroundColor","red");
//});


//variant 3
$("#target").on({
    click: function () {
        $("#first").css("backgroundColor", "red");
        $("#second").css("backgroundColor", "red")
    },

    mouseover: function () {
        $("#target").css("backgroundColor", "green")
    },
    mouseout: function () {
        $("#target").css("backgroundColor", "white")
    }
});