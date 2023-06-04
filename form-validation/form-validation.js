// Doi tuong validator
function Validator({ formID, errorMessageSelector, rules, onSubmit }) {
    let formElement = document.querySelector(formID);
    var formGroupElement;
    var formMessageElement;

    // Xu li khi submit
    formElement.onsubmit = (e) => {
        let preventedSubmit = false;
        let inputForms = formElement.querySelectorAll('input');

        for (const selectorKey in testsBySelectorList) {
            let inputElement = formElement.querySelector(selectorKey);

            if (!validate(inputElement, testsBySelectorList[selectorKey]) && !preventedSubmit) {
                e.preventDefault();
                preventedSubmit = true;
            }
        }
        // Data input form
        inputForms = Array.from(inputForms).reduce((data, input) => {
            return {...data, [input.name]: input.value};
        }, {});

        onSubmit(inputForms);

        formElement.action = 'https://www.w3schools.com/';
    }

    // Xu li tao ra list rule
    let testsBySelectorList = {};

    rules.forEach(rule => {
        if (testsBySelectorList[rule.selector] == undefined)
            testsBySelectorList[rule.selector] = [rule.test];
        else
            testsBySelectorList[rule.selector] = [...testsBySelectorList[rule.selector], rule.test];
    });

    // Ham thuc hien validate
    var validate = (inputElement, tests) => {
        let result = true;

        formGroupElement = inputElement.parentElement;
        formMessageElement = formGroupElement.querySelector(errorMessageSelector);
        let errorMessage;

        let testNum = tests.length;
        for (let index = 0; index < testNum; index++) {
            if (!!errorMessage) break;
            errorMessage = tests[index](inputElement.value, formElement);
        }

        if (!!errorMessage) {
            formMessageElement.innerHTML = errorMessage;
            formGroupElement.classList.add('invalid');
            result = false;
        } else {
            formMessageElement.innerHTML = '';
            formGroupElement.classList.remove('invalid');
            result = true;
        }

        return result;
    }

    for (const selectorKey in testsBySelectorList) {
        let inputElement = formElement.querySelector(selectorKey);

        // Xu li khi nguoi dung blur input
        inputElement.onblur = () => {
            validate(inputElement, testsBySelectorList[selectorKey]);
        }

        // Xu li khi nguoi dung nhap input
        inputElement.oninput = () => {
            formGroupElement = inputElement.parentElement;
            formMessageElement = formGroupElement.querySelector(errorMessageSelector);

            formMessageElement.innerHTML = '';
            formGroupElement.classList.remove('invalid');
        }
    }
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
