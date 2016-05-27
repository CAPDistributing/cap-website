
(function() {
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.audioTechnica = audioTechnica;
    this.riverRidge = riverRidge;
    this.ebk = ebk;
    this.stormTanker = stormTanker;
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
  	  itemNum: "",
  	  ean: "",
      price: "",
  	  image: {
  		    src: "/images/river-ridge/02080B.jpg",
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
    {
      name: "River Ridge Genuine Lambskin Leather Bifold Wallet (Side Flap, Black) 02079",
  	  description: "Bifold Wallet",
  	  itemNum: "",
  	  ean: "",
      price: "",
  	  image: {
  		    src: "/images/river-ridge/02079B.jpg",
  		    alt: "Bifold Wallet"
  	  },
      bullets: [
        'Size: Approx. 4.5" x 3.5"',
        'Inside Details: 9 Credit Card Inserts, 1 Window ID, 2 Bill Slots'
      ],
      amazonLink: "http://www.amazon.com/Genuine-Lambskin-Leather-Bifold-02079/dp/B013PV4OPM",
      soldOut: false,
      onSale: true
    },
    {
      name: "River Ridge Genuine Lambskin Leather Bifold Wallet (Standard, Black) 02084",
  	  description: "Bifold Wallet",
  	  itemNum: "",
  	  ean: "",
      price: "",
  	  image: {
  		    src: "/images/river-ridge/02084B.jpg",
  		    alt: "Bifold Wallet"
  	  },
      bullets: [
        'Size: Approx. 4.5" x 3.5"',
        'Inside Details: 8 Credit Card Inserts, 2 Bill Slots'
      ],
      amazonLink: "http://www.amazon.com/Genuine-Lambskin-Leather-Standard-02084/dp/B013PV4OP2",
      soldOut: false,
      onSale: true
    },
    {
      name: "River Ridge Genuine Lambskin Leather Trifold Wallet (Standard, Black) 02082",
  	  description: "Trifold Wallet",
  	  itemNum: "",
  	  ean: "",
      price: "",
  	  image: {
  		    src: "/images/river-ridge/RR02082.jpg",
  		    alt: "Trifold Wallet"
  	  },
      bullets: [
        'Size: Approx. 4" x 3"',
        'Inside Details: 4 Credit Card Inserts, 1 Window ID, 2 Bill Slots'
      ],
      amazonLink: "http://www.amazon.com/Genuine-Lambskin-Leather-Standard-02082/dp/B013IFATQ8",
      soldOut: false,
      onSale: true
    },
    {
      name: "River Ridge Genuine Lambskin Leather Bifold Wallet (Center Flap, Black) 02081",
  	  description: "Bifold Wallet",
  	  itemNum: "",
  	  ean: "",
      price: "",
  	  image: {
  		    src: "/images/river-ridge/02081E.jpg",
  		    alt: "Bifold Wallet"
  	  },
      bullets: [
        'Size: Approx. 4.5" x 3.5"',
        'Inside Details: 12 Credit Card Inserts, 1 Window ID, 2 Bill Slots'
      ],
      amazonLink: "http://www.amazon.com/Genuine-Lambskin-Leather-Bifold-02081/dp/B013PV4OPW",
      soldOut: false,
      onSale: true
    },

  ]; // end riverRidge
  
  var ebk = [
    {
      name: "EBK Portable Tablet Stand 47180 (Black)",
  	  description: "",
  	  itemNum: "",
  	  upc: "",
      price: "",
  	  image: {
  		    src: "/images/ebk/47180.JPG",
  		    alt: ""
  	  },
      bullets: [
        "Height adjustable to accommodate many electronic devices",
        "Quick setup and convenient storage",
        "Enhances airflow around your electronic device to help keep it cool"
      ],
      amazonLink: "http://www.amazon.com/EBK-Portable-Tablet-Stand-47180/dp/B00UZ9C5B8/ref=sr_1_1?m=A2THIGJ83VMAAL&s=merchant-items&ie=UTF8&qid=1450986490&sr=1-1&keywords=ebk",
      soldOut: false,
      onSale: false
    },
    
  ]; // end ebk
  
  var stormTanker = [
    {
      name: "Storm Tanker 250 Gallon Water Tank (Blue)",
  	  description: "",
  	  itemNum: "",
  	  upc: "",
      price: "",
  	  image: {
  		    src: "/images/edp/250-gallon-blue5.jpg",
  		    alt: ""
  	  },
      bullets: [
        'BPA Free Food Grade Plastic Over 1/4" Thick',
        "The water tank's footprint takes up the same space a 55 gallon drum does while almost holding 5 times the amount of water."
      ],
      amazonLink: "http://www.amazon.com/gp/product/B01BJ2XP8G?keywords=storm%20tanker&m=A2THIGJ83VMAAL&qid=1454808556&ref_=sr_1_1&s=merchant-items&sr=1-1",
      soldOut: false,
      onSale: false
    },
    {
      name: "Storm Tanker 250 Gallon Water Tank (Granite)",
  	  description: "",
  	  itemNum: "",
  	  upc: "",
      price: "",
  	  image: {
  		    src: "/images/edp/250-gallon-granite.jpg",
  		    alt: ""
  	  },
      bullets: [
        'BPA Free Food Grade Plastic Over 1/4" Thick',
        "The water tank's footprint takes up the same space a 55 gallon drum does while almost holding 5 times the amount of water."
      ],
      amazonLink: "http://www.amazon.com/gp/product/B01BJ2XP5E?keywords=storm%20tanker%20granite&m=A2THIGJ83VMAAL&qid=1454808591&ref_=sr_1_1&s=merchant-items&sr=1-1",
      soldOut: false,
      onSale: false
    },
    
  ]; // end stormTanker

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