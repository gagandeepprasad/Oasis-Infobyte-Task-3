function convertToFar() {
    var celsiusInput = document.getElementById('celsius');
    var fahrenheitInput = document.getElementById('fahrenheit');
    
    if (celsiusInput.value !== '') {
      var celsius = parseFloat(celsiusInput.value);
      var fahrenheit = (celsius * 9/5) + 32;
      fahrenheitInput.value = fahrenheit.toFixed(2);
    } else {
      fahrenheitInput.value = '';
    }
  }
  
  function convertToCel() {
    var celsiusInput = document.getElementById('celsius');
    var fahrenheitInput = document.getElementById('fahrenheit');
    
    if (fahrenheitInput.value !== '') {
      var fahrenheit = parseFloat(fahrenheitInput.value);
      var celsius = (fahrenheit - 32) * 5/9;
      celsiusInput.value = celsius.toFixed(2);
    } else {
      celsiusInput.value = '';
    }
  }
  
  function convertToKelvin() {
    var celsiusInput = document.getElementById('celsius');
    var fahrenheitInput = document.getElementById('fahrenheit');
    var kelvinInput = document.getElementById('kelvin');
    
    if (celsiusInput.value !== '') {
      var celsius = parseFloat(celsiusInput.value);
      var kelvin = celsius + 273.15;
      kelvinInput.value = kelvin.toFixed(2);
    } else if (fahrenheitInput.value !== '') {
      var fahrenheit = parseFloat(fahrenheitInput.value);
      var celsius = (fahrenheit - 32) * 5/9;
      var kelvin = celsius + 273.15;
      kelvinInput.value = kelvin.toFixed(2);
    } else {
      kelvinInput.value = '';
    }
  }
  