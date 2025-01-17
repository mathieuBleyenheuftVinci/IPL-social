
function isValidPassword(password) {
    if(password.length < 8){
        return false;
    }
    const specialCharacters = /[!@#$%^&*(),.?":{}|<>]/;
    if (!specialCharacters.test(password)) {
        return false;
    }
    return true;
}

export {isValidPassword} ;