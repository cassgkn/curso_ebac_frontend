const form = document.getElementById('form-validacao');
const numeroA = parseInt(document.getElementById('numero-a').value);
const numeroB = parseInt(document.getElementById('numero-b').value);    
    let formEValido = true;
    
    function validaNumero(numeroA, numeroB) {
    
    const validaNumero = false;
    
    if (validaNumero === numeroB > numeroA) {
    
    return false;
    
    } else {
    
        return true;
    
    }};
    
    form.addEventListener('submit', function(e) {
    
        e.preventDefault();
    
        const campoB = document.getElementById(' ');
    
        const campoA = document.getElementById('numero-a ');
    
        const mensagemDeSucesso = `OS valores foram enviados com sucesso!`;
    
        formEValido = validarCampo(campoB > campoA.value);
    
        
    
    if (!formEValido) {
    
        const containerMensagemDeSucesso = document.querySelector('.success-message');
    
            containerMensagemDeSucesso.innerHTML = mensagemDeSucesso;
    
            containerMensagemDeSucesso.style.display = 'block';
    
        
    
    campoB.value = '';
    
    campoA.value = '';
    
    } else {
    
        campoB.style.border = '1px solid red'
    
        document.querySelector('.error-message').style.display = 'block';
    
    }
    
    });
    
    campoB.addEventListener('keyup', function(e){
    
        console.log(e.target.value);
    
        formEValido = validarCampo(e.target.value);
    
        if (!formEValido) {
    
            campoB.classList.add('error');
    
            document.querySelector('.error-message').style.display = 'block';
    
            }
    
            else {
    
                campoB.classList.remove('error');
    
                document.querySelector('.error-message').style.display = 'none';
    
            }
    
        });