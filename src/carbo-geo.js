(function () {
    var CarboGeo;

    Polymer({
        is: 'carbo-geo',
        properties: {
          lang: {type: String, reflectToAttribute: true, value:'pt-br' },
          position:{type: String, reflectToAttribute: true, value:'top' },
          mensage:String,
          latitude: {type: Number, reflectToAttribute: true },
          longitude: {type: Number, reflectToAttribute: true },
          display:{type:String , reflectToAttribute:true, value:'hide'},
        },

        status:{
          'pt-br':{
            loading:'Carregando Geolocalização ... ',
            success:'Geolocalização: ',
            error:'Ops! algo deu errado. '
          }
        },

        ready: function () {
            document.addEventListener('deviceready',  this._whenCordovaReady(), false);
            this.set('mensage', this.status[this.lang].loading );
            this.classList.add(this.position);
            this.classList.add(this.display);
            CarboGeo = this;
        },


         _whenCordovaReady: function (){
             navigator.geolocation.getCurrentPosition(this.geolocationSuccess, this.geolocationError);
         },

         geolocationSuccess: function (location) {
           CarboGeo.set('latitude',location.coords.latitude);
           CarboGeo.set('longitude' , location.coords.longitude);
           CarboGeo.set('mensage', CarboGeo.status[CarboGeo.lang].success + ' ' + location.coords.latitude + '|' + location.coords.longitude);
           CarboGeo.classList.add('success');
           console.log('geolocation loaded: ' , location);
         },

         geolocationError: function () {
            CarboGeo.set('class','danger');
            CarboGeo.classList.add('error');
         },
    });
})();
