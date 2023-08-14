$(document).ready(() => {
    $("#btnThem").click(() => {
        let name = $("#colorId").val();
        $(".buttons").append(`
            <div><input type="button" style="background-color:${name}"></div>
        `)
    });

    $(".rdo input[type=radio]").click(function() {
        let d = $(this).attr("rel");
        $(".shape svg").hide();
        $(d).show();
    });

    $(".buttons").on("click", "input[type=button]", function() {
        let color = $(this).css("background-color");
        $(".shape svg :first-child").attr("fill", color);
    });

    const colors = ["orange", "yellow", "gold", "pink", "gray"];

    $("#colorId").keyup(function() {
        let t = $(this).val();

        let h = "";
        for (let c of colors)
            if (c.indexOf(t) >= 0)
                h += `
                    <li><a href="javascript:;">${c}</a></li>
                `;

        $("#suggest").html(h);
    });

    $("#suggest").on("click", "a", function() {
        $("#colorId").val($(this).text());
        $("#suggest").html("");
    })

    // $(".buttons input[type=button]").click(function() {
    //     let color = $(this).css("background-color");
    //     $(".shape svg :first-child").attr("fill", color);
    // });
});