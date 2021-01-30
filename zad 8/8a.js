

function convertToFahrenheit(){

    const input = document.querySelector('.input-fahrenheit');
    const p = document.querySelector('.result-fahrenheit');

    if(input.value!='' && !isNaN(input.value)){
        const result = Number(input.value) * 1.8 + 32;

        p.innerHTML=`${input.value} Celsius deegrees is ${result} Fahrenheit deegrees`;
    } else alert('Złe dane lub ich całkowity brak!')

    input.value='';

};

function convertToCelsius(){

    const input = document.querySelector('.input-celsius');
    const p = document.querySelector('.result-celsius');

    if(input.value!='' && !isNaN(input.value)){
        const result = (Number(input.value) - 32) / 1.8;

        p.innerHTML=`${input.value} Fahrenheit deegrees is ${result} Celsius deegrees`;
    }else alert('Złe dane lub ich całkowity brak!')

    input.value='';
  }
