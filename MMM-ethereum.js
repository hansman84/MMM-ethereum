'use strict';

Module.register("MMM-ethereum", {

  result: {},
  defaults: {
    updateInterval: 30000,
	exchange: 'kraken',
	currencyPair: 'ethusd',
	showHighLow: true,
    highLowColor: true
  },

  getStyles: function() {
    return ["MMM-ethereum.css"];
  },

  start: function() {
    this.getTickers();
    this.scheduleUpdate();
  },

  getDom: function() {
    var wrapper = document.createElement("ticker");
    wrapper.className = 'medium bright';
    wrapper.className = 'ticker';

    var data = this.result;
	
	console.log(data);
	
    var symbolElement =  document.createElement("span");
	var breakElement =  document.createElement("br");
    var symbol = "Eth";
	var lastPrice = data.result.price.last;
	var highPrice = data.result.price.high;
	var lowPrice = data.result.price.low;
	
    if (lastPrice) {
      symbolElement.innerHTML = symbol + ' $';
      wrapper.appendChild(symbolElement);
      var priceElement = document.createElement("span");
      priceElement.innerHTML = lastPrice;
      wrapper.appendChild(priceElement);
	  wrapper.appendChild(breakElement);
	  
	  if (this.config.showHighLow) {
		  var lowElement = document.createElement("span");
		  lowElement.className = 'small';
		  lowElement.innerHTML = '$' + lowPrice + '&nbsp&nbsp;&nbsp;';
		  
		  var highElement = document.createElement("span");
		  highElement.className = 'small';
		  highElement.innerHTML = '$' + highPrice;
          
          if (this.config.highLowColor) {
              lowElement.className = 'small down';
              highElement.className = 'small up';
          }
          
          wrapper.appendChild(lowElement);
		  wrapper.appendChild(highElement);
	  }
	  
	  var testElement = document.createElement("span");
		  testElement.className = 'small';
		  testElement.innerHTML = data.previousValue;
		  wrapper.appendChild(testElement);
    }
    return wrapper;
  },

  scheduleUpdate: function(delay) {
    var nextLoad = this.config.updateInterval;
    if (typeof delay !== "undefined" && delay >= 0) {
      nextLoad = delay;
    }

    var self = this;
    setInterval(function() {
      self.getTickers();
    }, nextLoad);
  },

  getTickers: function () {
    var url = 'https://api.cryptowat.ch/markets/' + this.config.exchange + '/' + this.config.currencyPair + '/summary';
	this.sendSocketNotification('GET_DATA', url);
  },

  socketNotificationReceived: function(notification, payload, payload2) {
    if (notification === "DATA_RESULT") {
      this.result = payload;
      this.updateDom(self.config.fadeSpeed);
    }
  },

});
