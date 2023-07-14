document.getElementById('submit').addEventListener('click', function() {
    var temperatureInput = document.getElementById('temperature');
    var temperature = parseFloat(temperatureInput.value);
  
    if (isNaN(temperature)) {
      showPopup('Erro', 'Por favor, insira uma temperatura válida.');
    } else {
      var clothes = '';
  
      if (temperature <= 10) {
        clothes = 'Roupa de inverno';
      } else if (temperature <= 20) {
        clothes = 'Roupa de meia estação';
      } else {
        clothes = 'Roupa de verão';
      }
  
      var link = '';
      var linkText = '';
  
      if (temperature <= 10) {
        link = 'https://www.nike.com.br/nav/categorias/jaquetasmoletons/genero/masculino/idade/adulto/tipodeproduto/roupas';
        linkText = 'Compre roupas de inverno aqui';
      } else {
        link = 'https://www.nike.com.br/nav/categorias/shorts/genero/masculino/idade/adulto/tipodeproduto/roupas';
        linkText = 'Compre shorts aqui';
      }
  
      var message = 'Para ' + temperature + ' graus Celsius, use: ' + clothes + '<br><a href="' + link + '" target="_blank">' + linkText + '</a>';
      showPopup('Recomendação', message);
    }
  });
  
  function showPopup(title, message) {
    var overlay = document.createElement('div');
    overlay.classList.add('overlay');
  
    var popup = document.createElement('div');
    popup.classList.add('popup');
  
    var heading = document.createElement('h2');
    heading.textContent = title;
  
    var content = document.createElement('p');
    content.innerHTML = message;
  
    var closeButton = document.createElement('button');
    closeButton.textContent = 'Fechar';
    closeButton.addEventListener('click', function() {
      document.body.removeChild(overlay);
    });
  
    popup.appendChild(heading);
    popup.appendChild(content);
    popup.appendChild(closeButton);
  
    overlay.appendChild(popup);
  
    document.body.appendChild(overlay);
  
    setTimeout(function() {
      overlay.style.opacity = 1;
      overlay.style.pointerEvents = 'auto';
    }, 100);
  }
  