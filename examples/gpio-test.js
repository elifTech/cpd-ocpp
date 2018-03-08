var gpio = require("gpio");
var gpio22, intervalTimer;

// Flashing lights if LED connected to GPIO22
gpio22 = gpio.export(17, {
  ready: function() {
    intervalTimer = setInterval(function() {
      gpio22.set();
      setTimeout(function() { gpio22.reset(); }, 500);
    }, 1000);
  }
});
