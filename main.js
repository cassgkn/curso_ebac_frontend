const form = document.getElementById('form-validacao');
let numeroA = document.getElementById('numero-a');
let numeroB = document.getElementById('numero-b');
let formEValido = false;

function validaNumero(numeroA, numeroB) {
    
    numeroA = parseInt(numeroA);    
    numeroB = parseInt(numeroB);

    if(numeroA < numeroB){
        return true
    } else {
        return false
    }

}

form.addEventListener('submit', function(e) {
    e.preventDefault()
    
    const messageSucesso = `Valor Válido! O valor do Campo B: <b>${numeroB.value}</b>
    é maior que o Campo A: <b>${numeroA.value}</b>`;
    
    
    formEValido = validaNumero
    if(numeroB.value > numeroA.value) {
        const containerMensagemSucesso = document.querySelector('.sucess-message');
        containerMensagemSucesso.innerHTML = messageSucesso;
        containerMensagemSucesso.style.display = 'block';

        numeroA.value = '';
        numeroB.value = '';

    } else {
        numeroA.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';

    }
});


numeroA.addEventListener('submit', function(e) {
    console.log(e.target.value);
    formEValido = validaNumero(e.target.value);

    if (!formEValido) {
            numeroA.classList.add('.error');
            document.querySelector('.error-message').style.display = 'block';
            
        } else {
            numeroA.classList.remove('error');
            document.querySelector('.error-message').style.display = 'none';
        }

    });
