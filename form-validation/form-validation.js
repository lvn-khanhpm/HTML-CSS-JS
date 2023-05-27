// Doi tuong validator
function Validator({ formID, errorMessageSelector, rules }) {
    let formElement = document.querySelector(formID);
    var formGroupElement;
    var formMessageElement;

    // Ham thuc hien validate
    let validate = (inputElement, rule) => {
        formGroupElement = inputElement.parentElement;
        formMessageElement = formGroupElement.querySelector(errorMessageSelector);
        let errorMessage = rule.test(inputElement.value, formElement);

        if (!!errorMessage) {
            formMessageElement.innerHTML = errorMessage;
            formGroupElement.classList.add('invalid');
        } else {
            formMessageElement.innerHTML = '';
            formGroupElement.classList.remove('invalid');
        }
    }

    rules.forEach(rule => {
        let inputElement = formElement.querySelector(rule.selector);

        // Xu li khi nguoi dung blur input
        inputElement.onblur = () => {
            validate(inputElement, rule);
        }

        // Xu li khi nguoi dung nhap input
        inputElement.oninput = () => {
            formGroupElement = inputElement.parentElement;
            formMessageElement = formGroupElement.querySelector(errorMessageSelector);

            formMessageElement.innerHTML = '';
            formGroupElement.classList.remove('invalid');
        }
    });
}

// Rule check required
Validator.isRequired = (selector, message) => {
    return {
        selector,
        test: function (value) {
            return value ? undefined : message || 'Vui lòng nhập trường này!';
        }
    };
}

// Rule check valid email
Validator.isEmail = (selector, message) => {
    return {
        selector,
        test: function (value) {
            return value.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/g)
                ? undefined
                : message || 'Vui lòng nhập đúng định dạng email!';
        }
    };
}

// Rule min length
Validator.isMinLength = (selector, minLength, message) => {
    return {
        selector,
        test: function (value) {
            return value.length >= minLength ? undefined : message || `Vui lòng nhập ít nhất ${minLength} kí tự!`;
        }
    };
}

// Rule confirmed
Validator.isConfirmed = (selectorObject, selectorCurrent, message) => {
    return {
        selector: selectorCurrent,
        test: function (value, formElement) {
            let objectElement = formElement.querySelector(selectorObject);

            return objectElement.value == value ? undefined : message || `Giá trị nhập vào không chính xác!`;
        }
    };
}
