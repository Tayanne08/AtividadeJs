window.onload = function(){
const button = document.querySelectorAll('button');

button.forEach(function(button) {
    button.addEventListener('click', function() {
        const dia = this.getAttribute('data-dia');

        switch (dia) {
            case 'segunda':
                alert('Dia de começar a semana com energia')
                break
             case 'terça':
                alert('Dia de começar a semana com energia')
                break     
            case 'quarta':
                alert('Dia de começar a semana com energia')
                break
            case 'quinta':
                alert('Dia de começar a semana com energia')
                break
            case 'sexta':
                alert('Dia de começar a semana com energia')
                break
            default:
                alert('Final de semana, Divirta-se')              
           

        }
    }

}






}