
(function() {
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.audioTechnica = audioTechnica;
    this.riverRidge = riverRidge;
    this.ebk = ebk;
    this.stormTanker = stormTanker;
    this.audiobooks = audiobooks;
    this.news = news;
    this.featured = featured;
    this.videoGames = videoGames;
    this.concertShirts = concertShirts;
    this.products = products;
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
  		    src: "/images/audio-technica/AX1iSBK2.jpg",
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
  		    src: "/images/audio-technica/AX1iSWH2.jpg",
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
  		    src: "/images/audio-technica/AX1iSGY2.jpg",
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
  		    src: "/images/audio-technica/AX1iSRD2.jpg",
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
  		    src: "/images/audio-technica/AX1iSBL2.jpg",
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
      onSale: false
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
      onSale: false
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
      onSale: false
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
      onSale: false
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
      onSale: false
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

  var audiobooks = [
    {
      name: "The Race by Clive Cussler & Justin Scott",
  	  description: "",
  	  itemNum: "",
  	  upc: "",
      price: "",
  	  image: {
  		    src: "/images/audiobooks/the-race.jpg",
  		    alt: ""
  	  },
      bullets: [
        "Detective Isaac Bell returns, in the remarkable new adventure from the #1 New York Times-bestselling author."
      ],
      amazonLink: "http://www.amazon.com/Race-Isaac-Bell-Adventures/dp/1611760178/ref=sr_1_46?m=A2THIGJ83VMAAL&s=merchant-items&ie=UTF8&qid=1451088938&sr=1-46",
      soldOut: false,
      onSale: false
    },
    {
      name: "The Little Drummer Girl by John Le Carre",
  	  description: "",
  	  itemNum: "",
  	  upc: "",
      price: "",
  	  image: {
  		    src: "/images/audiobooks/the-little-drummer-girl.jpg",
  		    alt: ""
  	  },
      bullets: [
        "Haunting and deeply atmospheric, John le Carre's The Little Drummer Girl is a virtuoso performance and a powerful examination of morality and justice."
      ],
      amazonLink: "http://www.amazon.com/Little-Drummer-Girl-Novel/dp/1611760917/ref=sr_1_86?m=A2THIGJ83VMAAL&s=merchant-items&ie=UTF8&qid=1451089092&sr=1-86",
      soldOut: false,
      onSale: false
    },
    {
      name: "Smiley's People by John Le Carre",
  	  description: "",
  	  itemNum: "",
  	  upc: "",
      price: "",
  	  image: {
  		    src: "/images/audiobooks/smileys-people.jpg",
  		    alt: ""
  	  },
      bullets: [
        "Although George Smiley is officially retired, he's summoned to identify the body now bearing Moscow Centre's bloody imprimatur. As he works to unearth his friend's fatal secrets, Smiley heads toward one final reckoning."
      ],
      amazonLink: "http://www.amazon.com/Smileys-People-George-Smiley-Novels/dp/1611760895/ref=sr_1_89?m=A2THIGJ83VMAAL&s=merchant-items&ie=UTF8&qid=1451089211&sr=1-89",
      soldOut: false,
      onSale: false
    },
    {
      name: "The Honourable Schoolboy by John Le Carre",
  	  description: "",
  	  itemNum: "",
  	  upc: "",
      price: "",
  	  image: {
  		    src: "/images/audiobooks/the-honourable-schoolboy.jpg",
  		    alt: ""
  	  },
      bullets: [
        "Smiley wants revenge. He chooses his weapon: Jerry Westerby, The Honourable Schoolboy, a passionate lover and a seasoned, reckless secret agent. Westerby is pointed east, to Hong Kong. So begins the terrifying game."
      ],
      amazonLink: "http://www.amazon.com/Honourable-Schoolboy-George-Smiley-Novels/dp/1611760887/ref=sr_1_90?m=A2THIGJ83VMAAL&s=merchant-items&ie=UTF8&qid=1451089211&sr=1-90",
      soldOut: false,
      onSale: false
    },
    {
      name: "The Spy Who Came In From The Cold by John Le Carre",
  	  description: "",
  	  itemNum: "",
  	  upc: "",
      price: "",
  	  image: {
  		    src: "/images/audiobooks/the-spy-who-came-in-from-the-cold.jpg",
  		    alt: ""
  	  },
      bullets: [
        "A thriller about an intelligence agent who has decided to put his life of espionage behind him, but first there is one more dangerous assignment to accomplish."
      ],
      amazonLink: "http://www.amazon.com/Spy-Who-Came-Cold-George/dp/1611760925/ref=sr_1_102?m=A2THIGJ83VMAAL&s=merchant-items&ie=UTF8&qid=1451089553&sr=1-102",
      soldOut: false,
      onSale: false
    },
    {
      name: "A Perfect Spy by John Le Carre",
  	  description: "",
  	  itemNum: "",
  	  upc: "",
      price: "",
  	  image: {
  		    src: "/images/audiobooks/a-perfect-spy.jpg",
  		    alt: ""
  	  },
      bullets: [
        "In A Perfect Spy, John le Carre has crafted one of his crowning masterpieces, interweaving a moving and unusual coming-of-age story with a morally tangled chronicle of modern espionage."
      ],
      amazonLink: "http://www.amazon.com/Perfect-Spy-Novel-John-Carre/dp/1611760909/ref=sr_1_103?m=A2THIGJ83VMAAL&s=merchant-items&ie=UTF8&qid=1451089634&sr=1-103",
      soldOut: false,
      onSale: false
    },

  ]; // end audiobooks

  var news = [
    {
      title: "Check out our Product Reviews",
      date: "February 8, 2017",
      image: {
        src: "/images/news/tutorial-geek-logo.png",
        alt: ""
      },
      newsLink: "http://www.tutorialgeek.net/2017/02/over-ear-audiotechnica-ath-ax3is.html",
      article: [
        'Check out who is loving our products! McKay wrote a blog post about our Audio Technica Headphones.'
      ]
    },
    {
      title: "We Support MathPlacementReview.com",
      date: "November 24, 2016",
      image: {
        src: "/images/news/favicon.ico",
        alt: ""
      },
      newsLink: "https://www.mathplacementreview.com",
      article: [
        "We, at CAP Distributing, believe that education is extremely important. Education can open many doors for all of us. That is one reason why we support MathPlacementReview. At MathPlacementReview, they strive to share free information with others, in hopes to be able to helps others learn and have a better life."
      ]
    },
    {
      title: "Audio Technica ATH-AX3iS SonicFuel Over-Ear Headphones",
      date: "March 23, 2016",
      image: {
        src: "/images/audio-technica/AX3iSBL.jpg",
        alt: ""
      },
      newsLink: "/products/audio-technica.php",
      article: [
        "The ATH-AX3iS over-ear headphones feature large 40 mm drivers for enhanced sound, generously cushioned ear pads and headband for comfort during extended wear, a fold-flat design that allows for easy storage and a flat cord designed to eliminate tangling. In-line mic, volume and track controls let you answer/end calls, play/pause/control music & videos and adjust volume on compatible smartphones and listening devices, all at the touch of a button. Available in black, navy blue, and red.",
        "They are currently on sale, so don't miss out!"
      ]
    },
    {
      title: "Storm Tanker Water Tanks",
      date: "February 6, 2016",
      image: {
        src: "/images/edp/250-gallon-granite.jpg",
        alt: ""
      },
      newsLink: "/products/water-tanks.php",
      article: [
        "When it comes to extreme situations, water is the most important element for survival. Your body loses on average 2.5 liters (or 2/3 of a gallon) of water everyday, but can handle only a loss of about 10-22% (which happens after about 3 days of no water) of its water weight before it becomes fatal. Secure your family's health by obtaining a fresh water supply now to prepare for emergencies like earthquakes, violent storms, or contaminated public water supplies with this high-capacity water tank.",
        "Check out our Storm Tanker Water Tanks today."
      ]
    },
    {
      title: "Concert T-shirts",
      date: "November 11, 2015",
      image: {
        src: "/images/fea/Picture14.png",
        alt: ""
      },
      newsLink: "/products/concert-shirts.php",
      article: [
        "Today we launched our Concert T-shirts on Amazon. We have big bands like Aerosmith, Boston, Van Halen, Lynyrd Skynyrd, and so much more."
      ]
    },
    {
      title: "Announcing the launch of our River Ridge Wallets",
      date: "August 6, 2015",
      image: {
        src: "/images/river-ridge/02080F.jpg",
        alt: ""
      },
      newsLink: "/products/river-ridge.php",
      article: [
        "Do you need a high quality wallet without paying an arms & a leg for it? Check out our Lambskin Wallets today. Our wallets are Genuine Lambskin Leather and come in bifold and trifold."
      ]
    },
    {
      title: "AudioTechnica ATH-AX1iS SonicFuel Over-Ear Headphones",
      date: "June 17, 2015",
      image: {
        src: "/images/audio-technica/AX1iSRD2.jpg",
        alt: ""
      },
      newsLink: "/products/audio-technica.php",
      article: [
        "We now offer Audio Technica Headphones. These headphones have 36 mm drivers for optimal sound, generously cushioned ear pads for comfort during extended wear, and a fold-flat design that allows for easy storage. They also include an in-line mic, volume and track controls, and a play/pause button. Available in black, red, white, blue, and gray."
      ]
    },
    {
      title: "Announcing the launch of our EBK Portable Tablet Stand",
      date: "March 20, 2015",
      image: {
        src: "/images/ebk/47180.JPG",
        alt: ""
      },
      newsLink: "/products/ebk.php",
      article: [
        "Today we launched our EBK Portable Tablet Stand on Amazon. This tablet stand is compatible with iPads, Tablets, Kindles, Backberries, iPhones, iTouches and more. It's ability to fold up makes it extremely travel friendly. We will be releasing more EBK products soon!"
      ]
    },
    {
      title: "Audiobooks",
      date: "March 3, 2015",
      image: {
        src: "/images/audiobooks/a-perfect-spy.jpg",
        alt: ""
      },
      newsLink: "/products/audiobooks.php",
      article: [
        "We now have Audiobooks on Amazon. Come and check out our assortment of John Le Carre audiobooks."
      ]
    },
    {
      title: "Video Games",
      date: "February 12, 2015",
      image: {
        src: "/images/video-games/el-tigre.jpg",
        alt: ""
      },
      newsLink: "/products/video-games.php",
      article: [
        "We now offer Video Games. We have a wide variety of games from Xbox 360 to PlayStation 2 to Nintendo DS."
      ]
    },
    {
      title: "CAP Distributing",
      date: "",
      image: {
        src: "/images/cap/cap-news.png",
        alt: ""
      },
      newsLink: "http://www.amazon.com/shops/A2THIGJ83VMAAL",
      article: [
        "Check out our Amazon Storefront. We offer a wide variety of products. Come back often for more deals."
      ]
    },

  ]; // end news

  var featured = [
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

  ]; // end featured

  var videoGames = [
    {
      name: "Duel Masters - PlayStation 2",
  	  description: "",
  	  itemNum: "",
  	  upc: "",
      price: "",
  	  image: {
  		    src: "/images/video-games/duel-masters2.jpg",
  		    alt: ""
  	  },
      bullets: [
        "Unleash 139 cards from the base set and three expansion sets",
        "Duel in turn-based mode or step up to extreme real-time dueling"
      ],
      amazonLink: "http://www.amazon.com/gp/product/B00026RFIC?keywords=duel%20masters&m=A2THIGJ83VMAAL&qid=1454352152&ref_=sr_1_1&s=merchant-items&sr=1-1",
      soldOut: false,
      onSale: false
    },
    {
      name: "UEFA Euro 2008 - Xbox 360",
  	  description: "",
  	  itemNum: "",
  	  upc: "",
      price: "",
  	  image: {
  		    src: "/images/video-games/uefa-euro-2008.jpg",
  		    alt: ""
  	  },
      bullets: [
        "Compete as one of 52 teams from qualification right through to a virtual reproduction of UEFA EURO 2008.",
        "Represent your country online against your rivals around the world to win global supremacy"
      ],
      amazonLink: "http://www.amazon.com/gp/product/B0010M6IU8?keywords=video%20games&m=A2THIGJ83VMAAL&qid=1454352878&ref_=sr_1_13&s=merchant-items&sr=1-13",
      soldOut: false,
      onSale: false
    },
    {
      name: "Broken Sword: The Sleeping Dragon - Xbox",
  	  description: "",
  	  itemNum: "",
  	  upc: "",
      price: "",
  	  image: {
  		    src: "/images/video-games/broken-sword.jpg",
  		    alt: ""
  	  },
      bullets: [
        "An epic narrative from Europes master interactive storytellers - Revolution Software.",
        "Wholly intuitive direct control interface fresh gameplay with fluid navigation for full control of the character."
      ],
      amazonLink: "http://www.amazon.com/gp/product/B0000X4M4C?keywords=video%20games&m=A2THIGJ83VMAAL&qid=1454352878&ref_=sr_1_17&s=merchant-items&sr=1-17",
      soldOut: false,
      onSale: false
    },
    {
      name: "Rise of Kasai - PlayStation 2",
  	  description: "",
  	  itemNum: "",
  	  upc: "",
      price: "",
  	  image: {
  		    src: "/images/video-games/rise-of-kasai.jpg",
  		    alt: ""
  	  },
      bullets: [
        "Single or multiplayer action as you cook up strategies that will cause the most carnage without getting you noticed",
        "10 captivating levels and numerous collaborative fighting stages"
      ],
      amazonLink: "http://www.amazon.com/gp/product/B00004TN1Z?keywords=video%20games&m=A2THIGJ83VMAAL&qid=1454443320&ref_=sr_1_23&s=merchant-items&sr=1-23",
      soldOut: false,
      onSale: false
    },
    {
      name: "Hunter The Reckoning: Wayward - PlayStation 2",
  	  description: "",
  	  itemNum: "",
  	  upc: "",
      price: "",
  	  image: {
  		    src: "/images/video-games/hunter.jpg",
  		    alt: ""
  	  },
      bullets: [
        "Choose from five playable characters: each with unique weapons, edges and supernatural powers.",
        "A little help from your friends: supports two-player cooperative games."
      ],
      amazonLink: "http://www.amazon.com/gp/product/B00008G7DU?keywords=video%20games&m=A2THIGJ83VMAAL&qid=1454443320&ref_=sr_1_9&s=merchant-items&sr=1-9",
      soldOut: false,
      onSale: false
    },
    {
      name: "Go Pets - Nintendo DS",
  	  description: "",
  	  itemNum: "",
  	  upc: "",
      price: "",
  	  image: {
  		    src: "/images/video-games/go-pets2.jpg",
  		    alt: ""
  	  },
      bullets: [
        "Create your own cat or dog, complete with its own personality and interests",
        "Go online via Nintendo Wi-Fi Connection to share your pets with others and enjoy fast-paced mini-games"
      ],
      amazonLink: "http://www.amazon.com/gp/product/B000L422JM?keywords=video%20games&m=A2THIGJ83VMAAL&qid=1454443320&ref_=sr_1_20&s=merchant-items&sr=1-20",
      soldOut: false,
      onSale: false
    },
    {
      name: "El Tigre - Nintendo DS",
  	  description: "",
  	  itemNum: "",
  	  upc: "",
      price: "",
  	  image: {
  		    src: "/images/video-games/el-tigre2.jpg",
  		    alt: ""
  	  },
      bullets: [
        "Use the stylus to enter exciting fighting combos to battle the undead minions and save the day!",
        "Go into Multi-player mode and be able to play Frida."
      ],
      amazonLink: "http://www.amazon.com/gp/product/B000SH3XDG?keywords=video%20games&m=A2THIGJ83VMAAL&qid=1454443320&ref_=sr_1_22&s=merchant-items&sr=1-22",
      soldOut: false,
      onSale: false
    },
    {
      name: "Street Hoops - PlayStation 2",
  	  description: "",
  	  itemNum: "",
  	  upc: "",
      price: "",
  	  image: {
  		    src: "/images/video-games/street-hoops2.jpg",
  		    alt: ""
  	  },
      bullets: [
        "Street Hoops brings the aggressive energy and stylish attitude of street basketball into your living room.",
        "Set up your own team, and then compete in nationwide street court tournaments."
      ],
      amazonLink: "http://www.amazon.com/gp/product/B00005YVTO?keywords=games&m=A2THIGJ83VMAAL&qid=1454454597&ref_=sr_1_12&s=merchant-items&sr=1-12",
      soldOut: false,
      onSale: false
    },
    {
      name: "Velvet Assassin - XBox 360",
  	  description: "",
  	  itemNum: "",
  	  upc: "",
      price: "",
  	  image: {
  		    src: "/images/video-games/velvet-assassin2.jpg",
  		    alt: ""
  	  },
      bullets: [
        "Access to a large variety of weapons and stealth gadgets true to 1940's WWII technology.",
        "Gameplay that is an incredible mix of assassination moves, satisfying firefights and hold-your-breath stealth action."
      ],
      amazonLink: "http://www.amazon.com/gp/product/B002ZNXVTW?keywords=games&m=A2THIGJ83VMAAL&qid=1454454812&ref_=sr_1_26&s=merchant-items&sr=1-26",
      soldOut: false,
      onSale: false
    },
    {
      name: "MLB 2005 - PlayStation 2",
  	  description: "",
  	  itemNum: "",
  	  upc: "",
      price: "",
  	  image: {
  		    src: "/images/video-games/mlb-20052.jpg",
  		    alt: ""
  	  },
      bullets: [
        "Total control of your players",
        "Pressure-sensitive throwing, outfielders hit their cut-offs, and infielders can get baserunners in run-downs",
        "Guide your career through the majors in Career Mode"
      ],
      amazonLink: "http://www.amazon.com/gp/product/B00012QLK0?keywords=games&m=A2THIGJ83VMAAL&qid=1454455130&ref_=sr_1_6&s=merchant-items&sr=1-6",
      soldOut: false,
      onSale: false
    },
    {
      name: "Tony Hawk 4 - Xbox",
  	  description: "",
  	  itemNum: "",
  	  upc: "",
      price: "",
  	  image: {
  		    src: "/images/video-games/tony-hawk-4.jpg",
  		    alt: ""
  	  },
      bullets: [
        "Non-linear career mode lets skaters choose the level and goals they want.",
        "Improved skater physics and animations now allow skating on moving objects like cars, trucks or cranes."
      ],
      amazonLink: "http://www.amazon.com/gp/product/B000FMDYI8?keywords=games&m=A2THIGJ83VMAAL&qid=1454455413&ref_=sr_1_19&s=merchant-items&sr=1-19",
      soldOut: false,
      onSale: false
    },

  ]; // end videoGames

  var concertShirts = [
    {
      name: "Boston Distressed Spaceship Mens Charcoal T-Shirt",
  	  description: "",
  	  itemNum: "",
  	  upc: "",
      price: "",
  	  image: {
  		    src: "/images/fea/Picture18.jpg",
  		    alt: ""
  	  },
      bullets: [
        ""
      ],
      amazonLink: "http://www.amazon.com/Distressed-Spaceship-Charcoal-T-Shirt-XX-Large/dp/B00PKTF2SQ/ref=sr_1_3?m=A2THIGJ83VMAAL&s=merchant-items&ie=UTF8&qid=1454385544&sr=1-3&keywords=clothing",
      soldOut: false,
      onSale: false
    },
    {
      name: "Van Halen - Winged Devil T-Shirt",
  	  description: "",
  	  itemNum: "",
  	  upc: "",
      price: "",
  	  image: {
  		    src: "/images/fea/Picture24.png",
  		    alt: ""
  	  },
      bullets: [
        ""
      ],
      amazonLink: "http://www.amazon.com/Van-Halen-Winged-T-shirt-X-large/dp/B005CQRHYO/ref=sr_1_1?m=A2THIGJ83VMAAL&s=merchant-items&ie=UTF8&qid=1454385544&sr=1-1&keywords=clothing",
      soldOut: false,
      onSale: false
    },
    {
      name: "Lynyrd Skynyrd Biker Patch T-shirt",
  	  description: "",
  	  itemNum: "",
  	  upc: "",
      price: "",
  	  image: {
  		    src: "/images/fea/Picture15.png",
  		    alt: ""
  	  },
      bullets: [
        ""
      ],
      amazonLink: "http://www.amazon.com/Lynyrd-Skynyrd-Biker-Skull-T-Shirt-large/dp/B00945NMA2/ref=sr_1_5?m=A2THIGJ83VMAAL&s=merchant-items&ie=UTF8&qid=1454385544&sr=1-5&keywords=clothing",
      soldOut: false,
      onSale: false
    },
    {
      name: "Def Leppard Pyromania Target Mens T-Shirt",
  	  description: "",
  	  itemNum: "",
  	  upc: "",
      price: "",
  	  image: {
  		    src: "/images/fea/Picture3.png",
  		    alt: ""
  	  },
      bullets: [
        ""
      ],
      amazonLink: "http://www.amazon.com/Def-Leppard-Mens-T-Shirt-Pyromania/dp/B00PMLWNM0/ref=sr_1_11?m=A2THIGJ83VMAAL&s=merchant-items&ie=UTF8&qid=1454385544&sr=1-11&keywords=clothing",
      soldOut: false,
      onSale: false
    },
    {
      name: "Van Halen Biker Pinup Beige Mens T-shirt",
  	  description: "",
  	  itemNum: "",
  	  upc: "",
      price: "",
  	  image: {
  		    src: "/images/fea/Picture25.png",
  		    alt: ""
  	  },
      bullets: [
        ""
      ],
      amazonLink: "http://www.amazon.com/FEA-Halen-Biker-Pinup-T-shirt/dp/B0088XZENY/ref=sr_1_4?m=A2THIGJ83VMAAL&s=merchant-items&ie=UTF8&qid=1454385544&sr=1-4&keywords=clothing",
      soldOut: false,
      onSale: false
    },
    {
      name: "Lynyrd Skynyrd Made In America T-shirt",
  	  description: "",
  	  itemNum: "",
  	  upc: "",
      price: "",
  	  image: {
  		    src: "/images/fea/Picture13.jpg",
  		    alt: ""
  	  },
      bullets: [
        ""
      ],
      amazonLink: "http://www.amazon.com/Lynyrd-Skynyrd-America-T-shirt-X-Large/dp/B00BT0HOJK/ref=sr_1_6?m=A2THIGJ83VMAAL&s=merchant-items&ie=UTF8&qid=1454385544&sr=1-6&keywords=clothing",
      soldOut: false,
      onSale: false
    },
    {
      name: "Lynyrd Skynyrd Men's License Plate 1996 T-shirt Black",
  	  description: "",
  	  itemNum: "",
  	  upc: "",
      price: "",
  	  image: {
  		    src: "/images/fea/Picture14.png",
  		    alt: ""
  	  },
      bullets: [
        ""
      ],
      amazonLink: "http://www.amazon.com/Lynyrd-Skynyrd-License-Plate-T-shirt-xxl/dp/B00KH8UH4E/ref=sr_1_10?m=A2THIGJ83VMAAL&s=merchant-items&ie=UTF8&qid=1454389056&sr=1-10&keywords=clothing",
      soldOut: false,
      onSale: false
    },
    {
      name: "Florida Georgia Line Etched Plate Wings T-Shirt",
  	  description: "",
  	  itemNum: "",
  	  upc: "",
      price: "",
  	  image: {
  		    src: "/images/fea/Picture11.png",
  		    alt: ""
  	  },
      bullets: [
        ""
      ],
      amazonLink: "http://www.amazon.com/FEA-Florida-Georgia-Etched-Plate/dp/B00BOJU78G/ref=sr_1_9?m=A2THIGJ83VMAAL&s=merchant-items&ie=UTF8&qid=1454423908&sr=1-9&keywords=clothing",
      soldOut: false,
      onSale: false
    },
    {
      name: "Journey Event T-Shirt",
  	  description: "",
  	  itemNum: "",
  	  upc: "",
      price: "",
  	  image: {
  		    src: "/images/fea/Picture22.jpg",
  		    alt: ""
  	  },
      bullets: [
        ""
      ],
      amazonLink: "http://www.amazon.com/Journey-Event-T-Shirt-Large-Black/dp/B007JLNEO2/ref=sr_1_12?m=A2THIGJ83VMAAL&s=merchant-items&ie=UTF8&qid=1454423908&sr=1-12&keywords=clothing",
      soldOut: true,
      onSale: false
    },
    {
      name: "Aerosmith Walk This Way T-shirt",
  	  description: "",
  	  itemNum: "",
  	  upc: "",
      price: "",
  	  image: {
  		    src: "/images/fea/Picture2.png",
  		    alt: ""
  	  },
      bullets: [
        ""
      ],
      amazonLink: "http://www.amazon.com/Aerosmith-Walk-This-T-shirt-XX-Large/dp/B00H89A6QO/ref=sr_1_14?m=A2THIGJ83VMAAL&s=merchant-items&ie=UTF8&qid=1454423908&sr=1-14&keywords=clothing",
      soldOut: false,
      onSale: false
    },
    {
      name: "Aerosmith Livin on the Edge T-Shirt Red",
  	  description: "",
  	  itemNum: "",
  	  upc: "",
      price: "",
  	  image: {
  		    src: "/images/fea/Picture26.png",
  		    alt: ""
  	  },
      bullets: [
        ""
      ],
      amazonLink: "http://www.amazon.com/Aerosmith-Mens-Livin-T-shirt-XX-Large/dp/B00BT0DZ66/ref=sr_1_15?m=A2THIGJ83VMAAL&s=merchant-items&ie=UTF8&qid=1454423908&sr=1-15&keywords=clothing",
      soldOut: false,
      onSale: false
    },
    {
      name: "Men's Allman Brothers Angel T-Shirt",
  	  description: "",
  	  itemNum: "",
  	  upc: "",
      price: "",
  	  image: {
  		    src: "/images/fea/Picture8.jpg",
  		    alt: ""
  	  },
      bullets: [
        ""
      ],
      amazonLink: "http://www.amazon.com/FEA-Brothers-T-Shirt-Cobblestone-2X-Large/dp/B00DSA0GPI/ref=sr_1_7?m=A2THIGJ83VMAAL&s=merchant-items&ie=UTF8&qid=1454423908&sr=1-7&keywords=clothing",
      soldOut: false,
      onSale: false
    },

  ]; //concertShirts

  var products = [
    {
      brand: "River Ridge Wallets",
      category: "",
      image: {
        src: "/images/river-ridge/02080F.jpg",
        alt: ""
      },
      capLink: "/products/river-ridge.php",
      amazonLink: ""
    },
    {
      brand: "Concert T-Shirts",
      category: "",
      image: {
        src: "/images/fea/Picture15.png",
        alt: ""
      },
      capLink: "/products/concert-shirts.php",
      amazonLink: ""
    },
    {
      brand: "Audio Technica Headphones",
      category: "",
      image: {
        src: "/images/audio-technica/AX1iS.jpg",
        alt: ""
      },
      capLink: "/products/audio-technica.php",
      amazonLink: ""
    },
    {
      brand: "EBK Electronics",
      category: "",
      image: {
        src: "/images/ebk/47180.JPG",
        alt: ""
      },
      capLink: "/products/ebk.php",
      amazonLink: ""
    },
    {
      brand: "Audiobooks",
      category: "",
      image: {
        src: "/images/audiobooks/the-little-drummer-girl.jpg",
        alt: ""
      },
      capLink: "/products/audiobooks.php",
      amazonLink: ""
    },
    {
      brand: "Video Games",
      category: "",
      image: {
        src: "/images/video-games/el-tigre.jpg",
        alt: ""
      },
      capLink: "/products/video-games.php",
      amazonLink: ""
    },
    {
      brand: "Storm Tanker Water Tanks",
      category: "",
      image: {
        src: "/images/edp/250-gallon-blue5.jpg",
        alt: ""
      },
      capLink: "/products/water-tanks.php",
      amazonLink: ""
    },

  ];// end products


})();
