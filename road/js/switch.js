
function swithHiddenAndShow() {
    $("#money_input").click(function () {
        $("#forecast_moneyLine").show();
        $("#forecast_planLine").hide();

    })

    $("#plan").click(function () {
        $("#forecast_planLine").show();
        $("#forecast_moneyLine").hide();
    })
}
swithHiddenAndShow();