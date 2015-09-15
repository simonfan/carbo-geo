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



## DEV

para rodar:

````
npm install
bower install
gulp serve

````
para testar direto do navegador, baixe e instale o [ripple](https://chrome.google.com/webstore/detail/ripple-emulator-beta/geelfhphabnejjhdalkjhgipohgpdnoc) no chrome.

## USE

````
<carbo-geo
    display="{{display}}"
    latitude="{{latitude}}"
    longitude="{{longitude}}"  
    lang="{{lang}}"
    position="{{position}}">
</carbo-geo>

````

Atributos:
  - display : String - pode ser show ou hide, mostra ou não um output na tela, Default:'hide'.
  - latitude : Number - output da latitude.
  - longitude : Number - output da longitude.
  - lang: String - recebe linguagem das mensagens, por hora só 'pt-br'.
  - position: String - recebe onde o dialogo com as mensagens são mostradas, por hora só 'top'.
