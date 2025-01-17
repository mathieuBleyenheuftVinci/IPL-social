
function isValidPassword(password) {
    if(password.length < 8){
        return false;
    }
    const specialCharacters = /[!@#$%^&*(),.?":{}|<>]/;
    if (!specialCharacters.test(password)) {
        return false;
    }
    const numbers = /[0-9]/;
    if (!numbers.test(password)) {
        return false;
    }
    const ipl = /ipl/i;
    if (ipl.test(password)) {
        return false;
    }
    return true;
}

export {isValidPassword} ;