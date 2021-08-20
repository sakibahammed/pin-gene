function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString .length == 4){
        return pin;
    }
    else{
       
        return getPin()
    }
}



function generatePin(){
  const pin = getPin();
  document.getElementById('displayPin').value = pin;
}



document.getElementById('key-pad').addEventListener('click',function(event){
 const number =  event.target.innerText;
 const calcInput = document.getElementById('typedNumbers');
    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value = '';
        }
       
    }
    else{
        
 const previousNumber = calcInput.value;
 const newNumber = previousNumber + number;
 calcInput.value = newNumber;
    }

 
})



function verifyPin(){


    const pin = document.getElementById('displayPin').value;
    const typedNumbers = document.getElementById('typedNumbers').value;

    const pass = document.getElementById('pin-pass');
    const fail = document.getElementById('pin-fail');



    if(pin == typedNumbers){
       pass.style.display = 'block';
       fail.style.display = 'none';
    }
    else {
        pass.style.display = 'none';
       fail.style.display = 'block';
    }



}





