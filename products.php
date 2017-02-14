<!DOCTYPE html>
<html ng-app="store" lang="en">
<head>
  
	<title>Products - CAP Distributing</title>
	<meta name="description" content="We have many products availiable like wallets, headphones, mobile accessories and so much more. Come and check us out today." />
	<meta name="keywords" content="audio technica, river ridge, audiobooks, ebk, headphones, wallets, mobile accessories" />
  <?php include_once("templates/head.html"); ?>
  
</head>
<body ng-controller="StoreController as store">
  
  <?php include_once("templates/cap-logo.html"); ?>
  <?php include_once("templates/nav.html"); ?>
  
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
  
  <?php include_once("templates/footer.html"); ?>
  
</body>
</html>