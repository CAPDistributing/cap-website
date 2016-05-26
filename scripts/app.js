
(function() {
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.audioTechnica = audioTechnica;
    this.riverRidge = riverRidge;
  });

  var audioTechnica = [
    {
      name: "AudioTechnica SonicFuel Over-Ear AX1iS (Black)",
  	  description: "These are black headphones",
  	  itemNum: "891-12614",
  	  upc: "4961310126285",
      price: "27.99",
  	  image: {
  		    src: "images/audio-technica/AX1iSBK2.jpg",
  		    alt: "Black Headphones"
  	  },
      bullets: [
        "Large 40 mm drivers deliver enhanced sound",
        "Durable construction for active, everyday use",
        "Earcups fold flat for easy storage"
      ],
  	  specs: {
    		height: "some inches",
    		width: "some inches",
    		depth: "some inches",
    		weight: "some ounces"
  	  },
      amazonLink: "http://www.amazon.com/AudioTechnica-ATH-AX1iS-SonicFuel-Over-Ear-Headphones/dp/B00JTBH7A2/ref=sr_1_5?m=A2THIGJ83VMAAL&s=merchant-items&ie=UTF8&qid=1450969239&sr=1-5",
      soldOut: false,
      onSale: true
    },
    {
      name: "AudioTechnica SonicFuel Over-Ear AX1iS (Red)",
  	  description: "These are red headphones",
  	  itemNum: "891-12631",
  	  upc: "4961310126315",
      price: "27.99",
  	  image: {
  		    src: "images/audio-technica/AX1iSRD2.jpg",
  		    alt: "Red Headphones"
  	  },
      bullets: [
        "Large 40 mm drivers deliver enhanced sound",
        "Durable construction for active, everyday use",
        "Earcups fold flat for easy storage"
      ],
  	  specs: {
    		height: "some inches",
    		width: "some inches",
    		depth: "some inches",
    		weight: "some ounces"
  	  },
      amazonLink: "http://www.amazon.com/AudioTechnica-ATH-AX1iS-SonicFuel-Over-Ear-Headphones/dp/B00JTBH7PC/ref=sr_1_20?m=A2THIGJ83VMAAL&s=merchant-items&ie=UTF8&qid=1450970746&sr=1-20",
      soldOut: false,
      onSale: true
    },




  ]; // end var audioTechnica

  var riverRidge = [
    {
      name: "River Ridge Genuine Lambskin Leather Trifold Wallet (Extra Flap, Black) 02080",
  	  description: "Trifold Wallet",
  	  itemNum: "PGI-02080",
  	  ean: "123456",
      price: "14.99",
  	  image: {
  		    src: "http://capdistributing.com/images/river-ridge/02080B.jpg",
  		    alt: "Trifold Wallet"
  	  },
      bullets: [
        'Size: Approx. 4" x 3"',
        'Inside Details: 8 Credit Card Inserts, 1 Window ID, 2 Bill Slots'
      ],
  	  specs: {
    		height: "some inches",
    		width: "some inches",
    		depth: "some inches",
    		weight: "some ounces"
  	  },
      amazonLink: "http://www.amazon.com/dp/B013IFATOK/ref=twister_B013Q5PIIO?_encoding=UTF8&psc=1",
      soldOut: false,
      onSale: true
    },




  ]; // end var riverRidge

})();
