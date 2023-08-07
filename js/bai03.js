$(document).ready(() => {
    $("#btnDoiTien").click(() => {
        if ($("#stId").val() === "") {
            $("#stId").toggleClass("error");
            return;
        }

        let st = parseFloat($("#stId").val());
        let dv = $("#dvId").val();

        let kq = "Kết quả đổi tiền";
        switch (dv) {
            // ...
        }

        $("#kq").html(`<h1>${kq}</h1>`);
    });

    $(".tab-content > div:not(:first-child)").hide();

    $(".tab a").click(function() {
        // Bật tab
        $(".tab li").removeClass("active");
        $(this).parent().addClass("active");

        // Bật nội dung tương ứng
        $(".tab-content > div").hide();
        $($(this).attr("href")).slideDown("slow");
    });

    let num = $(".slider-content > div").length;
    let h = "";
    for (let i = 0; i < num; i++) 
        h += `
            <button class="digit">${i + 1}</button>
        `;
    
    $(".buttons :first-child").after(h);

    $(".slider-content").height($(".slider-content img").height());

    let showSlider = (current) => {
        $(".slider-content > div").slideUp();
        $(".slider-content > div").eq(current).slideDown();

        $("button.digit").removeClass("active");
        $("button.digit").eq(current).addClass("active");
    }

    let current = -1;
    $("button.digit").click(function() {
       

        current = parseInt($(this).text()) - 1;

        showSlider(current);

        clearInterval(timer);
        runSlider();
    });

    $(".next").click(function() {
        current++;
        if (current === num)
            current = 0;

       showSlider(current);
    });

    $(".prev").click(function() {
        current--;
        if (current < 0)
            current = num - 1;

       showSlider(current);
    });

    let timer = null;
    let runSlider = () => {
        timer = setInterval(() => {
            $(".next").click();
        }, 1000);
    }
    runSlider();
});