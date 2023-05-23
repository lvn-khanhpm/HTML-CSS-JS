// Doi tuong validator
function Validator ({formID, rules}) {
    console.log({formID, rules});
}

// Rule check required
Validator.isRequired = (selector) => {
    return selector;
}

// Rule check valid email
Validator.isEmail = (selector) => {
    return selector;
}