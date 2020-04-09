$(document).ready(function() {
    $('[href$="#sheldure"]').on("click", () => {
        showModal();
    });
    $('[href$="#tour"]').on("click", () => {
        showModal();
    });
    $(".main_btn").on("click", () => {
        showModal();
    });

    function showModal() {
        $(".overlay").fadeToggle("slow");
        $(".modal").animate(
            {
                opacity: "toggle",
                height: "toggle"
            },
            700
        );
    }
    $(".close").on("click", () => {
        $(".overlay").fadeToggle();
        $(".modal").animate(
            {
                opacity: "toggle",
                height: "toggle"
            },
            200
        );
    });
});
