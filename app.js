// /[@].com/.test("SaYman Rabbi@.com")
// -----take value form input-----
const errorSuccess = (id, isTrue) => {
    console.log(id,isTrue)
    const idName = document.getElementById(id);
    if (isTrue) {
        idName.style.border = '3px solid #4DD637';
    }
    else {
        idName.style.border = '3px solid red'
        console.log('warKing')
    }
}

const TakeValue = (id) => {
    const input = document.getElementById(id);
    const inputText = input.value;
    input.value = '';
    return inputText;
}
const Submit = () => {
    const errorText = document.getElementById('email-error');
    const name = TakeValue('name');
    const email = TakeValue('Email').toLowerCase();
    const pass = TakeValue('Password');
    if (!name || !email) {
        return
    }
    else if (!pass) {
        return
    }
    if (/[@]gmail.com/.test(email)) {
        errorSuccess('Email',true)
        errorText.innerText = `SuccessFully Add Email`
        errorText.style.color = '#4DD637';
        errorText.style.fontSize='20px'
    }
    else {
        errorSuccess('Email',false)
        errorText.innerText = `Error! Invalid Email`
        errorText.style.color = 'red';
        errorText.style.fontSize='20px'
    }
}