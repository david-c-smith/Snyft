var Particle = require('particle-api-js');
var particle = new Particle();
var token;
var device;

//Initialise the login
particle.login({username: 'wesweitzel@gmail.com', password: 'ohmygoodness'}).then(
  function(data){
    console.log('API call completed on promise resolve: ', data.body.access_token);
    token = data.body.access_token;
    device = data.body.id;
    console.log('token data: ', token);
    console.log('device data: ', device);

    // list all the devices that is accossiated with the token that we got from the login
    var devicesPr = particle.listDevices({ auth: token });

    devicesPr.then(
      function(devices){
        console.log('Devices: ', devices);
      },
      function(err) {
        console.log('List devices call failed: ', err);
      }
    );

    var fnPr = particle.callFunction({ deviceId: '58003e000b51353335323536', name: 'location', argument: '2', auth: token });

    fnPr.then(
      function(data) {
        console.log('Function called succesfully:', data);
      }, function(err) {
        console.log('An error occurred:', err);
      });

      //Get events from the device's, deviceID = mine is needed so we dont get events from all public events.
      particle.getEventStream({ deviceId: 'mine', auth: token }).then(function(stream) {
        stream.on('event', function(data) {
          console.log("Event: " + data.name);
        });
      });
    },
    // if login failes
    function(err) {
      console.log('API call completed on promise fail: ', err);
    }
);
