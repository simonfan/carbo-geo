(function () {
    var CarboGeo;
    Polymer({
        is: 'carbo-geo',
        properties: {
          latitude: {type: Number, reflectToAttribute: true },
          longitude: {type: Number, reflectToAttribute: true },
          display:{type:Boolean , reflectToAttribute:true, value:true},
        },

        ready: function () {
            document.addEventListener('deviceready',  this._whenCordovaReady(), false);
            CarboGeo = this;
        },

        /**
         * Execute when device is ready
         */
         _whenCordovaReady: function (){
             navigator.geolocation.getCurrentPosition(this.geolocationSuccess, this.geolocationError);
         },
         /**
          * start the watch for geolocation
          */

         geolocationSuccess: function (location) {
           CarboGeo.set('latitude',location.coords.latitude);
           CarboGeo.set('longitude' , location.coords.longitude);
           console.log(location);
         },
         /**
          * start the watch for geolocation
          */
         geolocationError: function () {

         },
    });
})();
