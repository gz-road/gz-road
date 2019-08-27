
function swithHiddenAndShow() {
    $("#money_input").click(function () {
        $("#forecast_moneyLine").show();
        $("#forecast_moneyLine").addClass('backGroundChange');
        $("#forecast_moneyLine").siblings().removeClass('backGroundChange');
        $("#forecast_planLine").hide();

    })
    $("#plan").click(function () {
        $("#forecast_planLine").show();
        $("#forecast_planLine").addClass('backGroundChange');
        $("#forecast_planLine").siblings().removeClass('backGroundChange');
        $("#forecast_moneyLine").hide();
    })
}
swithHiddenAndShow();