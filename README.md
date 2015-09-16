````
                _                                 
               | |                                
  ___ __ _ _ __| |__   ___ ______ __ _  ___  ___  
 / __/ _` | '__| '_ \ / _ \______/ _` |/ _ \/ _ \
| (_| (_| | |  | |_) | (_) |    | (_| |  __/ (_) |
 \___\__,_|_|  |_.__/ \___/      \__, |\___|\___/
                                  __/ |           
                                 |___/            
````
Webcomponent feito com polymer, que retorna a gelocalização do device.


### DEV

para rodar:

````
npm install
bower install
gulp serve

````
para testar direto do navegador, baixe e instale o [ripple](https://chrome.google.com/webstore/detail/ripple-emulator-beta/geelfhphabnejjhdalkjhgipohgpdnoc) no chrome.

### USE


````

<carbo-geo></carbo-geo>

<script>
  var map = document.getElementById('google-map');
  var geo = document.getElementById('carbo-geo');

  geo.request().then(
    function(location){
      console.log(location);
    },
    function(error){
      console.log(location);
    }
  ); 
  geo.addEventListener('carbo-geo-response', function(e){
    map.latitude = e.detail.coords.latitude;
    map.longitude = e.detail.coords.longitude;
  });
  
</script>
 

````

## com bind dentro de outro component:


````

  <carbo-geo id="carbo-geo" high-accuracy auto latitude="{{latitude}}" longitude="{{longitude}}"> </carbo-geo>
  
  <google-map latitude="{{latitude}}" longitude="{{longitude}}" draggable="false" disable-zoom="true">
  </google-map>

````

Atributos:

  - latitude : Number - output da latitude.
  - longitude : Number - output da longitude.
  - coords : Object - output das coordenadas.
  - loaded : Boolean - status do carregamento.
  - watch : Boolean - seta carregamento continuo da localização.
  - auto : Boolean - status se o request() sera executado no carregamento.
  - highAccuracy : Boolean - status a auta precisão da localização.
  - timeout : Number - define o tempo que o componente deve esperar pelo callback da api.


Metodos:
  - request : retorna uma promise, em caso de sucesso retorna o object location. usado para requisitar a api de geolocation a               localização atual do device.
Events:
  - carbo-geo-response : disparado em um success da requisição de localização ou em um ciclo do watch. retorna o coords com o location.
  - carbo-geo-error : disparado em um erro na requisição de localização. 

  

  
