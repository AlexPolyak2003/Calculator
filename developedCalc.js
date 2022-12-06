const calc = document.querySelector(".calc")
const result = document.getElementById("result")

calc.addEventListener('click', function(event){
    if(!event.target.classList.contains('calc__btn'))return


    let value = event.target.innerText

    switch(value) {
        case 'C':
          result.innerText = '';
          break;  


        case '=':
          result.innerText = eval(result.innerText).toFixed(2)
          break
    



    default:
        result.innerText += value

    }
})

