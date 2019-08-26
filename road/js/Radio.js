function selectOne() {
    /*$('#all').attr('checked', 'true')*/
    $("#all").click(function () {
        $("#M_all").click(function () {
            $("#bothLine_money").show();
            $("#M_all").addClass('backGroundChange');
            $("#bothLine_plan").hide();
            $("#tunnelLine_money").hide();
            $("#tunnelLine_plan").hide();
            $("#bridgeLine_money").hide();
            $("#bridgeLine_plan").hide();

        })
    })

    $("#all").click(function () {
        $("#P_all").click(function () {
            $("#bothLine_plan").show();

            $("#bothLine_money").hide();
            $("#bridgeLine_money").hide();
            $("#bridgeLine_plan").hide();
            $("#tunnelLine_money").hide();
            $("#tunnelLine_plan").hide();
        })
    })

    $("#bridge").click(function () {
        $("#M_all").click(function () {
            $("#bridgeLine_money").show();
            $("#bridgeLine_plan").hide();
            $("#tunnelLine_money").hide();
            $("#tunnelLine_plan").hide();
            $("#bothLine_money").hide();
            $("#bothLine_plan").hide();
        })
    });

    $("#bridge").click(function () {
        $("#P_all").click(function () {
            $("#bridgeLine_plan").show();
            $("#bridgeLine_money").hide();
            $("#tunnelLine_money").hide();
            $("#tunnelLine_plan").hide();
            $("#bothLine_money").hide();
            $("#bothLine_plan").hide();
        })
    })

    $("#tunnel").click(function () {
        $("#M_all").click(function () {
            $("#tunnelLine_money").show();
            $("#bridgeLine_money").hide();
            $("#tunnelLine_plan").hide();
            $("#bridgeLine_money").hide();
            $("#bothLine_money").hide();
            $("#bothLine_plan").hide();
        })
    })

    $("#tunnel").click(function () {
        $("#P_all").click(function () {
            $("#tunnelLine_plan").show();
            $("#tunnelLine_money").hide();
            $("#bridgeLine_money").hide();
            $("#bridgeLine_plan").hide();
            $("#bothLine_money").hide();
            $("#bothLine_plan").hide();
        })
    })
}

selectOne();