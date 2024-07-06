const form = document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')
    if(height === '' || height < 0 || isNaN(height)){
        alert('Please enter a valid height')
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        alert('Please enter a valid weight')
    }else{
        const bmi = (weight/((height*height)/1000)).toFixed(2)
        result.innerHTML = `${bmi}`;
        if(bmi < 18.5){
            alert('Underweight')
        }else if(bmi >= 18.5 && bmi < 25){
            alert('Normal')
        }else if(bmi >= 25 && bmi < 30){
            alert('Overweight')
        }else if(bmi >= 30){
            alert('Obese')
        }
    }
});