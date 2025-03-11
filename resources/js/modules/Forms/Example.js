import AjaxClass from './Validation/ajaxClass';
import FormValidate from './Validation/formValidateClass';
import MessageHandler from './Validation/messageHandler';

export default function FooterForms() {
    $("#footer-form").on('submit', function (e) {
        e.preventDefault();
        const Loader = document.getElementById("loading-forms")

        let form = $(this);
        let fields = form.serializeArray();
        let validation = new FormValidate(fields, 1, form.attr('id'));

        validation.validateAll(fields);
        let error = validation.hasError();
        
        MessageHandler.removeAllFormFailMessages()

        if (error) {
            let errorMessageId = validation.getErrorId();
            console.log(errorMessageId)
            MessageHandler.showFailMessage(errorMessageId, false);
        }

        let terms = $("#" + form.attr('id')).find("input[type='checkbox']");
        let termsChecked = terms.prop('checked') == true;
        if (!error && !termsChecked){
            error = true
            const id = terms.attr('idError');
            MessageHandler.showFailMessage(id, true);
            return false;
        }

        if (error == false) {
            Loader.classList.add("open-modal");
            if ($(this).attr('disabled') == 'disabled') {
                return false;
            }
            $(this).attr('disabled', 'disabled');
            let type = 'POST';
            let url = $(this).attr('action');
            let dataType = 'json';
            const modalSuccess = document.getElementById('success-message-forms');
            const modalSuccessDescription = document.querySelector('#success-message-forms .description');
            const modalError = document.getElementById('error-message-forms');
            const modalDescription = document.querySelector('#error-message-forms .description');
            class Contact extends AjaxClass {
                successFunction(data, form) {
                    Loader.classList.remove("open-modal");
                    if (data.status == true) {
                        $('#footer-form').trigger("reset");
                        $("#footer-form").removeAttr('disabled');
                        modalSuccess.classList.add("open-modal");
                        modalSuccessDescription.innerHTML = 'Parabéns, você receberá todos os nossos lançamentos e novidades em primeira mão. Fique atento ao email!'
                    } else {
                        modalDescription.innerHTML = data.txt;
                        modalError.classList.add("open-modal");
                        $("#footer-form").removeAttr('disabled');
                    }
                };
                errorFunction(xhr, textStatus, errorThrown) {
                    Loader.classList.remove("open-modal");
                    modalDescription.innerHTML = "Ocorreu um erro. Tente novamente mais tarde.";
                    modalError.classList.add("open-modal");
                    $("#forms_contact").removeAttr('disabled');
                };
            }
            let ajax = new Contact(form, type, url, dataType, form.serialize());
            ajax.send();
        }

        return false;
    });
}