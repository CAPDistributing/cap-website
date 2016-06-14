<!DOCTYPE html>
<html ng-app="store">
<head>
  
	<title>Products - CAP Distributing</title>
  <?php include_once("head.html"); ?>
  
</head>
<body ng-controller="StoreController as store">
  
  <?php include_once("cap-logo.html"); ?>
  <?php include_once("nav.html"); ?>
  
  <div class="container">
    <h2>Products</h2>

    <div class="col-md-6" ng-repeat="product in store.products">
      <a href ng-href="{{product.capLink}}">
        <h3 class="main-product-header">{{product.brand}}</h3>
        <div class="main-product-img-div">
          <img class="main-product-img" ng-src="{{product.image.src}}" />
        </div>
      </a>
    </div>  

  </div><?php #End .container ?>
  
  <?php include_once("footer.html"); ?>
  
</body>
</html>