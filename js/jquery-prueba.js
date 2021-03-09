
    $("body").prepend(`<form>
    <input type="text" value="100" id="input">
    <button id="comprar">Comprar</button>
    </form>`);
    let input = $("input").val();
console.log(input);
$(document).ready(function(){
    $("#comprar").click(function(e){

        e.preventDefault();
        $("form").prepend(`<p>El valor es: ${input}</p>`);
    });
})
