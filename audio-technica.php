<!DOCTYPE html>
<html ng-app="store">
<head>
  
	<title>Audio Technica - CAP Distributing</title>
  <?php include_once("head.html"); ?>
  
</head>
<body ng-controller="StoreController as store">
  
  <?php include_once("cap-logo.html"); ?>
  <?php include_once("nav.html"); ?>
  
  <div class="container">
    <h2>Audio Technica Headphones</h2>

    <div class="col-md-4 product-info" ng-repeat="product in store.audioTechnica" ng-hide="product.soldOut">
      <img class="product-img" ng-src="{{product.image.src}}" />
      <h3 class="product-name">{{product.name}}</h3>
      <ul class="product-bullets-ul">
        <li class="product-bullets-li">{{product.bullets[0]}}</li>
        <li class="product-bullets-li">{{product.bullets[1]}}</li>
      </ul>
      <a class="buy-button" ng-href="{{product.amazonLink}}">Buy on Amazon &gt;&gt;</a>
    </div>

  </div><?php #End .container ?>
  
  <?php include_once("footer.html"); ?>
  
</body>
</html>
