export function isEmpty(string) {
    if (!string)
        return true;
}


export function checkEmail(string) {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return !reg.test(string);
}

export function lenthCheck(string, len) {
    return string.length < len;
}


