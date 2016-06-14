<!DOCTYPE html>
<html ng-app="store">
<head>
  
	<title>Audiobooks - CAP Distributing</title>
  <?php include_once("head.html"); ?>
  
</head>
<body ng-controller="StoreController as store">
  
  <?php include_once("cap-logo.html"); ?>
  <?php include_once("nav.html"); ?>
  
  <div class="container">
    <h2>Audiobooks</h2>

    <div class="col-md-4 product-info" ng-repeat="product in store.audiobooks" ng-hide="product.soldOut">
      <img class="product-img" ng-src="{{product.image.src}}" />
      <h3 class="product-name">{{product.name}}</h3>
      <ul class="product-bullets-ul">
        <li class="product-bullets-li">{{product.bullets[0]}}</li>
      </ul>
      <a class="btn btn-cap" ng-href="{{product.amazonLink}}">Buy on Amazon &gt;&gt;</a>
    </div>

  </div><?php #End .container ?>
  
  <?php include_once("footer.html"); ?>
  
</body>
</html>