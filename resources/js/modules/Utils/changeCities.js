import AjaxClass from "../Forms/Validation/ajaxClass";

export default function changeCities() {
    class ChangeCities extends AjaxClass {
        successFunction(html) {
            $("#city").html(html);
        }

        beforeSendFunction() {
        };
    }

    $("#state").on('change', function () {
        let url = $("#citiesUrl").val();

        let changeLang = new ChangeCities(null, 'POST', url, 'html', 'state=' + $("#state").val());
        changeLang.sendNoRecaptcha();
    });
}