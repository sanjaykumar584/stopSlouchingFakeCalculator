var theme = 0;

$("#calculator").css("max-width", $("#calculator").width());

$(".btn").on("click", function() {
    if ($(this).hasClass("white-key")) {
        if (!(document.querySelector("#calculation").innerHTML.length >= 12)) {
            if (document.querySelector("#calculation").innerHTML == "0") {
                document.querySelector("#calculation").innerHTML = "";
            }
            document.querySelector("#calculation").innerHTML += this.innerHTML;
        }
    } else if ($(this).hasClass("del")) {
        $("#calculation").html((document.querySelector("#calculation").innerHTML).slice(0, -1));
        if (document.querySelector("#calculation").innerHTML.length == 0) {
            $("#calculation").html("0");
        }
    } else if ($(this).hasClass("red-key")) {
        if (document.querySelector("#calculation").innerHTML.length != 0) {
            var prob = $("#calculation").html();
            $("#calculation").html(eval(prob));
        }
    } else if ($(this).hasClass("reset")) {
        $("#calculation").html("0");
    }
});

$("#toggle").on("click", function() {
    if (theme == 0) {
        theme += 1;
    } else if (theme == 1) {
        theme += 1;
    } else {
        theme = 0;
    }
    switch (theme) {
        case 0:
            $("#toggle").css("text-align", "left");
            break;
        case 1:
            $("#toggle").css("text-align", "center");
            break;
        case 2:
            $("#toggle").css("text-align", "right");
            break;
    
        default:
            break;
    }
});

