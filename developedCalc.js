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
            
            
       case "CapsLock":
        out.innerText = ''
        break



        case "Shift":
        out.innerText = ''
        break
    



    default:
        result.innerText += value

    }
})


 const out = document.querySelector('output')

 document.addEventListener('keydown',function(e){
  
   let smth = e.key
   switch(smth){
     case 'Backspace':
       out.innerText = ''
       break


      case 'Enter':
      out.innerText = eval(result.innerText).toFixed(2)
      break

      
   default:
    result.innerText += e.key

        
  }




 })
