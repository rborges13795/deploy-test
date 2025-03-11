import AjaxClass from './Validation/ajaxClass';
import FormValidate from './Validation/formValidateClass';
import MessageHandler from './Validation/messageHandler';

export default function forms() {
    $('[form]').on('submit', function (e) {
        e.preventDefault();
        const Loader = document.getElementById("loading-forms")

        let form = $(this);
        let fields = form.serializeArray();
        let validation = new FormValidate(fields, 1, form.attr('id'));

        let selects = $(`#${form.attr('id')} select`).get();
        selects.forEach((element) => {
            if (!$(element).attr('disabled')) {
                let select = {
                    name: $(element).attr('name'),
                    value: $(element).val() ? $(element).val() : '',
                };
                fields.splice(fields.length - 1, 0, select);
            }
        })

        console.log(fields);

        validation.validateAll(fields);
        let error = validation.hasError();
        
        MessageHandler.removeAllFormFailMessages()

        if (error) {
            let errorMessageId = validation.getErrorId();
            MessageHandler.showFailMessage(errorMessageId, false);
        }

        let terms = $("#" + form.attr('id')).find("input[type='checkbox']");
        let termsChecked = terms.prop('checked') == true;
        if (!error && !termsChecked){
            error = true
            const id = terms.attr('idError');
            MessageHandler.showFailMessage(id, false);
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
                        $(form).trigger("reset");
                        $(form).removeAttr('disabled');
                        modalSuccess.classList.add("open-modal");
                        modalSuccessDescription.innerHTML = data.txt
                    } else {
                        modalDescription.innerHTML = data.txt;
                        modalError.classList.add("open-modal");
                        $(form).removeAttr('disabled');
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

    $('[phone]').on('keypress', function (event) {
    // Get the character code of the key pressed
    const charCode = (event.which) ? event.which : event.keyCode;

    // Allow: backspace, delete, tab, escape, enter, home, end, left, right, and period
    if (charCode === 8 || charCode === 46 || charCode === 9 || charCode === 27 ||
        charCode === 13 || charCode === 35 || charCode === 36 || charCode === 37 ||
        charCode === 39 || (charCode === 190 && !this.value.includes('.'))) {
        return;
    }

    // Ensure that it is a number and stop the keypress
    if (charCode < 48 || charCode > 57) {
        event.preventDefault();
    }
    });

    $('[phone]').on('blur', function (e) {
        mascaraDeTelefone(this);
    });

    $('[phone]').on('focus', function (e) {
        tiraHifen(this);
    });

    function mascaraDeTelefone(telefone){
        const textoAtual = telefone.value.replace(/[^0-9]/g, '');
        const isCelular = textoAtual.length >= 11;
        let textoAjustado;
        if(isCelular) {
            const parte1 = textoAtual.slice(0,2);
            const parte2 = textoAtual.slice(2,4);
            const parte3 = textoAtual.slice(4,9);
            const parte4 = textoAtual.slice(9,13);
            if (parte1)  textoAjustado = `+${parte1}`
            if (parte1 && parte2) textoAjustado = `+${parte1} (${parte2})`
            if (parte1 && parte2 && parte3) textoAjustado = `+${parte1} (${parte2}) ${parte3}`
            if (parte1 && parte2 && parte3 && parte4) textoAjustado = `+${parte1} (${parte2}) ${parte3}.${parte4}`
        } else {
            const parte1 = textoAtual.slice(0,2);
            const parte2 = textoAtual.slice(2,4);
            const parte3 = textoAtual.slice(4,8);
            const parte4 = textoAtual.slice(8,12);
            if (parte1)  textoAjustado = `+${parte1}`
            if (parte1 && parte2) textoAjustado = `+${parte1} (${parte2})`
            if (parte1 && parte2 && parte3) textoAjustado = `+${parte1} (${parte2}) ${parte3}`
            if (parte1 && parte2 && parte3 && parte4) textoAjustado = `+${parte1} (${parte2}) ${parte3}.${parte4}`
        }

        if (!textoAjustado) {
            telefone.value = null;
        } else {
            telefone.value = textoAjustado;
        }
    }
    function tiraHifen(telefone) {
        const textoAtual = telefone.value;
        const textoAjustado = textoAtual.replace(/\./g, '');
    
        telefone.value = textoAjustado;
    }
}