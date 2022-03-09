// /[@].com/.test("SaYman Rabbi@.com")
// -----take value form input-----
const errorSuccess = (id, isTrue) => {
    console.log(id,isTrue)
    const idName = document.getElementById(id);
    if (isTrue) {
        idName.style.borderBottom = '3px solid #4DD637';
    }
    else {
        idName.style.borderBottom = '3px solid red'
        console.log('warKing')
    }
}
const errorText = (id, isFalseOrTrue,name) => {
    const errorText = document.getElementById(id);
    if (isFalseOrTrue) {
        errorText.style.display='block'
        errorText.innerText = `SuccessFully Add ${name}`
        errorText.style.color = '#4DD637';
        errorText.style.fontSize='20px'
    }
    else {
        errorText.style.display='block'
        errorText.innerText = `Error! Invalid ${name}`
        errorText.style.color = 'red';
        errorText.style.fontSize='20px'
    }
}

const TakeValue = (id) => {
    const input = document.getElementById(id);
    const inputText = input.value;
    input.value = '';
    return inputText;
}
const Submit = () => { 
    const name = TakeValue('name');
    const email = TakeValue('Email').toLowerCase();
    const pass = TakeValue('Password');
    if (((name&&(/[a-z]/.test(name))) && (email&&((/[@]gmail.com/.test(email))))) && pass) {
        document.getElementById('toast').style.display = 'block';
        setTimeout(() => {
            document.getElementById('container').style.display=('none')
        },500)
    }
    else if (((!name ||!/[a-z]/.test(name))||(!email ||(!(/[@]gmail.com/.test(email)))))||!pass) {
        if (!name||!/[a-z]/.test(name)) {
            errorSuccess('name', false);
            errorText('name-error', false,'Name')
        }
        if (!email||!(/[@]gmail.com/.test(email))) {
            errorSuccess('Email', false);
            errorText('email-error', false,'Email')
        }
        if (!pass) {
            errorSuccess('Password', false);
        }
    }

}