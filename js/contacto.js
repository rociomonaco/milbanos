const d = document;
conctactFormValidation();
function conctactFormValidation(){
    const form = d.querySelector(".contact-form");
    const inputs = d.querySelectorAll(".contact-form [required]");
    inputs.forEach(input =>{
        const span = d.createElement('span');
        span.id = input.name;
        console.log(span.id);
        span.textContent = input.title;
        span.classList.add('contact-form-error','none');
        input.insertAdjacentElement('afterend',span);
    });
    d.addEventListener('keyup', e =>{
        
        if(e.target.matches('.contact-form [required]')){
            let input = e.target,
            pattern = input.pattern || input.dataset.pattern;
            if(pattern && input.value !== ''){
                console.log(input.name)
                console.log("input tiene patron");
                let regex = new RegExp(pattern);
                return !regex.exec(input.value)
                ?d.getElementById(input.name).classList.add('is-active')
                :d.getElementById(input.name).classList.remove('is-active');
            }
        }
    });
    
}

let sendForm = d.getElementById('sendForm');
sendForm.addEventListener('click', ((e)=>{
    e.preventDefault();
    window.location.href ="./agradecimiento-contacto.html";

}))


