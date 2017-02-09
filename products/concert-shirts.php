<!DOCTYPE html>
<html ng-app="store">
<head>
  
	<title>Concert Shirts - CAP Distributing</title>
	<meta name="description" content="" />
	<meta name="keywords" content="" />
  <?php include_once("../templates/head.html"); ?>
  
</head>
<body ng-controller="StoreController as store">
  
  <?php include_once("../templates/cap-logo.html"); ?>
  <?php include_once("../templates/nav.html"); ?>
  
  <div class="container">
    <h2>Concert Shirts</h2>

    <div class="row">
      <div class="col-md-4 product-info" ng-repeat="product in store.concertShirts" ng-hide="product.soldOut">
        <img class="product-img product-img-concert-shirts" ng-src="{{product.image.src}}" />
        <h3 class="product-name">{{product.name}}</h3>
        <ul class="product-bullets-ul">
          <li class="product-bullets-li">Availiable in multiple sizes</li>
        </ul>
        <a class="btn btn-cap" ng-href="{{product.amazonLink}}">Buy on Amazon &gt;&gt;</a>
      </div>
    </div>

  </div><?php #End .container ?>
  
  <?php include_once("../templates/footer.html"); ?>
  
</body>
</html>