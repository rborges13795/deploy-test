export default class FormValidate {

    fields;
    lang;
    error;
    errorMessageId;
    element;
    form;

    //fields = form.serializeArray()
    constructor(fields, lang = 1, formId) {
        this.fields = fields;
        this.lang = lang;
        this.error = false;
        this.errorMessageId = '';
        this.element
        this.formId = formId;
    }

    validateAll() {
        this.fields.forEach(field => {
            if (this.hasError()) {
                return;
            }
            this.validateField(field);
        });
    }

    validateField(field) {
        let element = $(`#${this.formId}`).find('[name="' + field['name'] + '"]');
        this.element = element;
        let value = field['value'];

        if (this.fieldIsNotRequired(element) || field['name'] == '_token') {
            return;
        }

        let fieldName = element.attr('fieldName');
        let fieldType = element.attr('fieldType');
        let fiedlIdError = element.attr("idError")
        if (!fiedlIdError) {
            fiedlIdError = element.attr("name");
        }

        switch (fieldType) {
            case 'email': {
                this.error = FormValidate.validateEmail(value);
                this.errorMessageId = fiedlIdError;
                return;
            }
            case 'checkbox': {
                let checked = FormValidate.validateCheckboxIsChecked(element);
                if (!checked) {
                    this.error = true;
                }
                this.errorMessageId = fiedlIdError;
                return;
            }
            case 'phone': {
                this.error = FormValidate.validatePhone(value);
                this.errorMessageId = fiedlIdError;
                
                return;
            }
            case 'notNull': {
                this.error = FormValidate.validateNotNull(value);
                this.errorMessageId = fiedlIdError;
                
                return;
            }
            case 'name': {
                this.error = FormValidate.validateName(value);
                this.errorMessageId = fiedlIdError;
                return;
            }
        }

        return;
    }

    hasError() {
        return this.error;
    }

    getErrorId() {
        let id = this.errorMessageId;
        if (!id) {
            return false;
        }

        return id;
    }

    getElement() {
        return this.element;
    }

    fieldIsNotRequired(element) {
        return element.attr('isRequired') == null;
    }

    static validateEmail(email) {
        var pattern = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i);
        return pattern.test(email) == false;
    }

    static validateCheckboxIsChecked(element) {
        return element.prop('checked') == true;
    }

    static validateName(name) {
        const regex = /[0-9]/;
        if (regex.test(name) || name.length < 3) {
            return true;
        }
        return false;
    }

    static validateNotNull(value) {
        const verify = value == '' ? true : false
        return verify;
    }

    static validatePhone(value) {
        const verify = value == '' || value.length < 14 ? true : false
        return verify;
    }


}