<!DOCTYPE html>
<html ng-app="store">
<head>
	
	<title>Home - CAP Distributing</title>
  <?php include_once("head.html"); ?>
	
</head>
<body ng-controller="StoreController as store">
  
  <?php include_once("cap-logo.html"); ?>
  <?php include_once("nav.html"); ?>
  <div class="container">
    
    <h2>Who We Are</h2>
    <p class="who-we-are-p">We are a small business that strives to provide the best products at the lowest price. We offer a wide variety of items from Headphones to Water Tanks. All of our items are available on <a href="http://www.amazon.com/shops/A2THIGJ83VMAAL">Amazon.com</a>.</p>
    
    <br><hr><br>
    
    <h2>Our New Items</h2>
    
    <div class="row">
      <div class="col-md-4 product-info" ng-repeat="product in store.featured">
        <img class="product-img" ng-src="{{product.image.src}}" />
        <h3 class="product-name">{{product.name}}</h3>
        <ul class="product-bullets-ul">
          <li class="product-bullets-li">{{product.bullets[0]}}</li>
          <li class="product-bullets-li">{{product.bullets[1]}}</li>
        </ul>
        <a class="btn btn-cap" ng-href="{{product.amazonLink}}">Buy on Amazon &gt;&gt;</a>
      </div>
    </div>
    
    <br><hr><br>
    
    <h2>Recent News</h2>
    
    <div class="row news-div">
      <a href ng-href="{{store.news[0].newsLink}}">
        <h3>{{store.news[0].title}}</h3>
      </a>  
      <div class="col-md-3">
          <a href ng-href="{{store.news[0].newsLink}}">
            <img class="news-img" ng-src="{{store.news[0].image.src}}" />
          </a>
      </div>
      <div class="col-md-9">
          <h4>{{store.news[0].date}}</h4>
          <p ng-repeat="paragraphs in store.news[0].article">{{paragraphs}}</p>
      </div>
    </div>
    
    <div class="row news-div">
      <a href ng-href="{{store.news[1].newsLink}}">
        <h3>{{store.news[1].title}}</h3>
      </a>  
      <div class="col-md-3">
          <a href ng-href="{{store.news[1].newsLink}}">
            <img class="news-img" ng-src="{{store.news[1].image.src}}" />
          </a>
      </div>
      <div class="col-md-9">
          <h4>{{store.news[1].date}}</h4>
          <p ng-repeat="paragraphs in store.news[1].article">{{paragraphs}}</p>
      </div>
    </div>
    
    
    
  </div><!-- End .container -->
  <?php include_once("footer.html"); ?>
</body>
</html>
