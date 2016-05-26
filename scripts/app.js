
(function() {
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.audioTechnica = audioTechnica;
    this.riverRidge = riverRidge;
  });

  var audioTechnica = [
    {
      name: "AudioTechnica Active Noise-cancelling Headphones",
  	  description: "",
  	  itemNum: "",
  	  upc: "",
      price: "",
  	  image: {
  		    src: "/images/audio-technica/anc70.jpg",
  		    alt: "Black Headphones"
  	  },
      bullets: [
        "Frequency response: 10-25,000 Hz",
        "Quietpoint Active Noise Reduction: up to 20 dB",
      ],
      amazonLink: "http://www.amazon.com/gp/product/B00FJ1HFGC?m=A2THIGJ83VMAAL&qid=1458084379&ref_=sr_1_32&s=merchant-items&sr=1-32",
      soldOut: true,
      onSale: false
    },
    {
      name: "AudioTechnica SonicFuel Over-Ear AX3iS (Black)",
  	  description: "",
  	  itemNum: "",
  	  upc: "",
      price: "",
  	  image: {
  		    src: "/images/audio-technica/AX3iSBK.jpg",
  		    alt: ""
  	  },
      bullets: [
        "Large 40 mm drivers deliver enhanced sound",
        "Durable construction for active, everyday use",
        "Earcups fold flat for easy storage",
      ],
      amazonLink: "http://www.amazon.com/AudioTechnica-ATH-AX3IS-SonicFuel-Over-Ear-Headphones/dp/B00JTBHCR0?ie=UTF8&m=A2THIGJ83VMAAL&qid=1459574341&ref_=sr_1_73&s=merchant-items&sr=1-73",
      soldOut: false,
      onSale: true
    },
    {
      name: "AudioTechnica SonicFuel Over-Ear AX3iS (Red)",
  	  description: "",
  	  itemNum: "",
  	  upc: "",
      price: "",
  	  image: {
  		    src: "/images/audio-technica/AX3iSRD.jpg",
  		    alt: ""
  	  },
      bullets: [
        "Large 40 mm drivers deliver enhanced sound",
        "Durable construction for active, everyday use",
        "Earcups fold flat for easy storage",
      ],
      amazonLink: "http://www.amazon.com/AudioTechnica-ATH-AX3IS-SonicFuel-Over-Ear-Headphones/dp/B00JTBHCZM?ie=UTF8&m=A2THIGJ83VMAAL&qid=1459574341&ref_=sr_1_87&s=merchant-items&sr=1-87",
      soldOut: false,
      onSale: true
    },
    {
      name: "AudioTechnica SonicFuel Over-Ear AX3iS (Navy)",
  	  description: "",
  	  itemNum: "",
  	  upc: "",
      price: "",
  	  image: {
  		    src: "/images/audio-technica/AX3iSBL.jpg",
  		    alt: ""
  	  },
      bullets: [
        "Large 40 mm drivers deliver enhanced sound",
        "Durable construction for active, everyday use",
        "Earcups fold flat for easy storage",
      ],
      amazonLink: "http://www.amazon.com/AudioTechnica-ATH-AX3IS-SonicFuel-Over-Ear-Headphones/dp/B00IF6WSLK?ie=UTF8&m=A2THIGJ83VMAAL&qid=1459574341&ref_=sr_1_85&s=merchant-items&sr=1-85",
      soldOut: false,
      onSale: true
    },
    {
      name: "AudioTechnica Core 150 In-Ear Headphones (Pink)",
  	  description: "",
  	  itemNum: "",
  	  upc: "",
      price: "",
  	  image: {
  		    src: "/images/audio-technica/COR150PK.jpg",
  		    alt: ""
  	  },
      bullets: [
        "Full, textured bass with immersive sound and excellent detail resolution",
        "Easy-traveling audio performance with cord-wrap included",
        "In-ear (canal-style) headphones"
      ],
      amazonLink: "http://www.amazon.com/Audio-Technica-ATHCOR150PK--Ear-Headphones/dp/B00BIDHA6U/ref=sr_1_1?m=A2THIGJ83VMAAL&s=merchant-items&ie=UTF8&qid=1462024387&sr=1-1&keywords=pink",
      soldOut: false,
      onSale: true
    },
    {
      name: "AudioTechnica Clear 100 In-Ear Headphones (Lime Green)",
  	  description: "",
  	  itemNum: "",
  	  upc: "",
      price: "",
  	  image: {
  		    src: "/images/audio-technica/CLR100LG.jpg",
  		    alt: ""
  	  },
      bullets: [
        "Crystal-clear sound and excellent detail resolution",
        "Easy-traveling audio performance with cord-wrap included",
        "In-ear (canal-style) headphones"
      ],
      amazonLink: "http://www.amazon.com/Audio-Technica-ATHCLR100LG-Headphones-Green/dp/B00BBDL3QK/ref=sr_1_3?m=A2THIGJ83VMAAL&s=merchant-items&ie=UTF8&qid=1462023767&sr=1-3&refinements=p_4%3AAudio-Technica",
      soldOut: false,
      onSale: true
    },
    {
      name: "AudioTechnica Clear 100 In-Ear Headphones (Orange)",
  	  description: "",
  	  itemNum: "",
  	  upc: "",
      price: "",
  	  image: {
  		    src: "/images/audio-technica/CLR100OR.jpg",
  		    alt: ""
  	  },
      bullets: [
        "Crystal-clear sound and excellent detail resolution",
        "Easy-traveling audio performance with cord-wrap included",
        "In-ear (canal-style) headphones"
      ],
      amazonLink: "http://www.amazon.com/Audio-Technica-ATHCLR100OR-Headphones-Orange/dp/B00BBDKTS8/ref=sr_1_2?m=A2THIGJ83VMAAL&s=merchant-items&ie=UTF8&qid=1462023585&sr=1-2&keywords=orange",
      soldOut: false,
      onSale: true
    },
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
      amazonLink: "http://www.amazon.com/AudioTechnica-ATH-AX1iS-SonicFuel-Over-Ear-Headphones/dp/B00JTBH7A2/ref=sr_1_5?m=A2THIGJ83VMAAL&s=merchant-items&ie=UTF8&qid=1450969239&sr=1-5",
      soldOut: false,
      onSale: false
    },
    {
      name: "AudioTechnica SonicFuel Over-Ear Headphones (White)",
  	  description: "",
  	  itemNum: "",
  	  upc: "",
      price: "",
  	  image: {
  		    src: "images/audio-technica/AX1iSWH2.jpg",
  		    alt: ""
  	  },
      bullets: [
        "Large 40 mm drivers deliver enhanced sound",
        "Durable construction for active, everyday use",
        "Earcups fold flat for easy storage"
      ],
      amazonLink: "http://www.amazon.com/AudioTechnica-ATH-AX1iS-SonicFuel-Over-Ear-Headphones/dp/B00JTBH7M0/ref=sr_1_8?m=A2THIGJ83VMAAL&s=merchant-items&ie=UTF8&qid=1452304657&sr=1-8",
      soldOut: false,
      onSale: false
    },
    {
      name: "AudioTechnica SonicFuel Over-Ear Headphones (Grey)",
  	  description: "",
  	  itemNum: "",
  	  upc: "",
      price: "",
  	  image: {
  		    src: "images/audio-technica/AX1iSGY2.jpg",
  		    alt: ""
  	  },
      bullets: [
        "Large 40 mm drivers deliver enhanced sound",
        "Durable construction for active, everyday use",
        "Earcups fold flat for easy storage"
      ],
      amazonLink: "http://www.amazon.com/AudioTechnica-ATH-AX1iS-SonicFuel-Over-Ear-Headphones/dp/B00JTBH7IY/ref=sr_1_7?m=A2THIGJ83VMAAL&s=merchant-items&ie=UTF8&qid=1450970746&sr=1-7",
      soldOut: false,
      onSale: false
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
      amazonLink: "http://www.amazon.com/AudioTechnica-ATH-AX1iS-SonicFuel-Over-Ear-Headphones/dp/B00JTBH7PC/ref=sr_1_20?m=A2THIGJ83VMAAL&s=merchant-items&ie=UTF8&qid=1450970746&sr=1-20",
      soldOut: false,
      onSale: false
    },
    {
      name: "AudioTechnica SonicFuel Over-Ear Headphones (Blue)",
  	  description: "",
  	  itemNum: "",
  	  upc: "",
      price: "",
  	  image: {
  		    src: "images/audio-technica/AX1iSBL2.jpg",
  		    alt: ""
  	  },
      bullets: [
        "Large 40 mm drivers deliver enhanced sound",
        "Durable construction for active, everyday use",
        "Earcups fold flat for easy storage"
      ],
      amazonLink: "http://www.amazon.com/AudioTechnica-ATH-AX1iS-SonicFuel-Over-Ear-Headphones/dp/B00JTBH7MU/ref=sr_1_16?m=A2THIGJ83VMAAL&s=merchant-items&ie=UTF8&qid=1450970746&sr=1-16",
      soldOut: false,
      onSale: false
    },




  ]; // end audioTechnica

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
      amazonLink: "http://www.amazon.com/dp/B013IFATOK/ref=twister_B013Q5PIIO?_encoding=UTF8&psc=1",
      soldOut: false,
      onSale: true
    },




  ]; // end riverRidge

})();


/*
  {
    name: "",
	  description: "",
	  itemNum: "",
	  upc: "",
    price: "",
	  image: {
		    src: "",
		    alt: ""
	  },
    bullets: [
      ""
    ],
    amazonLink: "",
    soldOut: false,
    onSale: false
  },
*/