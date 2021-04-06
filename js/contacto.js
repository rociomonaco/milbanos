// validaciones formulario
const d = document;
let sendForm = d.getElementById('sendForm');
conctactFormValidation();


function conctactFormValidation(){
    const inputs = d.querySelectorAll(".contact-form [required]");
    inputs.forEach(input =>{
        const span = d.createElement('span');
        span.id = input.name;
        span.innerHTML = input.title;
        span.classList.add('contact-form-error','none');
        input.insertAdjacentElement('afterend',span);
    });

    d.addEventListener('keyup', e =>{
        // La delegacion de eventos ocurre cuando e.target coincida con el elemento que 
        // se encuentre en contact-form y sea requerido
        if(e.target.matches('.contact-form [required]')){
            let input = e.target,
            pattern = input.pattern;
            if(pattern && input.value !== ''){
                let regex = new RegExp(pattern);
                return !regex.exec(input.value)
                ?d.getElementById(input.name).classList.add('is-active')
                :d.getElementById(input.name).classList.remove('is-active');  
            }
            sendForm.addEventListener('click', ((e)=>{
                e.preventDefault();
                window.location.href ="./agradecimiento-contacto.html";
            }));
        }
    });
}



