
var inp = document.getElementById("first");
var dd = document.getElementById("dropdown");

//    inp.addEventListener("focus", function(e){
//            console.log(e);
//})

//        inp.addEventListener("blur", function(e){
//            console.log(e);
//    })

//    inp.addEventListener("change", function(e){
//        console.log(e);
//    })

//    inp.addEventListener("input", function(e){
//        console.log(e);
//    })


var arr = ["Moscow","Jerusalem","New-York","Montreal","New-Jersey","Jericho","Petah-Tiqua","London"];

function  fillDropDown(dd,arr){
    dd.innerText ="";
    for(var i in arr){
        var p = document.createElement("p");
        p.innerText = arr[i];
        dd.appendChild(p);
    }
}

function clearDropDown(dd){
    dd.innerText = "";

}

function filter(arr, string){
    if(!string || string == "" ) return arr;
    var res = [];
    for(var i in arr){
        if(arr[i].toLowerCase().includes(string.toLowerCase())) res.push(arr[i]);


    }
    return res;
}

var city;
inp.addEventListener("focus", function(e){

    fillDropDown(dd, filter(arr,inp.value));
    city = "";
    console.log(e);
});

inp.addEventListener("blur", function(e){
    inp.value = city;
    clearDropDown(dd);

    console.log(e);
});
inp.addEventListener("input", function(e){
    fillDropDown(dd, filter(arr,inp.value));

});

//    dd.addEventListener("click", function(e){
//        var p = e.target;
//        inp.value = city;
//    })

dd.addEventListener("mouseover", function(e){
    var p = e.target;
    if(p.tagName =="P")
        city = p.innerText;

});

dd.addEventListener("mouseout", function(e){
    city ="";
});

