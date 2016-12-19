
function makeDraggable(elem){
    elem.addEventListener("mousedown", function(e){

        event.preventDefault();//disable the default handler like Text selecting when the object in drag process

        //get cursor position onClick
        var x0 = e.pageX;
        var y0 = e.pageY;

        //get element left angle on the top position
        var top0 = elem.offsetTop;
        var left0 = elem.offsetLeft;

        var oldCursor = elem.style.cursor;
        elem.style.cursor ="pointer";

        //set max zIndex onDrop event and after will return old value
        var oldZIndex = elem.style.zIndex;
        elem.style.zIndex = takeMaxZIndex()+1;

        document.addEventListener("mousemove",mMove);
        document.addEventListener("mouseup",mUp);

        //function on move mouse with key down event
        function mMove(eMove){
            var x = eMove.pageX;
            var y = eMove.pageY;

            elem.style.top = (top0 +(y-y0))+"px";
            elem.style.left = (left0 +(x-x0))+"px";
        };

        //function on key up event
        function mUp(eUp){
            document.removeEventListener("mousemove",mMove);
            document.removeEventListener("mouseup",mUp);

            elem.style.cursor = oldCursor;
            elem.style.zIndex = oldZIndex;
        };
    })


}

//return Max zIndex in a document
function takeMaxZIndex() {
    var all = $("*");
    var res=0;
    for (var i=0 ; i<all.length ;i++) {
        if (all[i].style) {
            var elem = $(all[i]);
            var zI = elem.css("zIndex");
            if (zI && zI != "auto" && zI > res)
                res = parseInt(zI);
        }
    }
    return res;
}
