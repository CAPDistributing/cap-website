<!DOCTYPE html>
<html ng-app="store">
<head>
  
    <title>EBK - CAP Distributing</title>
    <meta name="description" content="EBK has all the mobile accessories you'll need to keep you going while traveling." />
	  <meta name="keywords" content="tablet stand, mobile accessories, ebk, iPad stand, portable" />
    <?php include_once("../templates/head.html"); ?>
  
</head>
<body ng-controller="StoreController as store">
  
  <?php include_once("../templates/cap-logo.html"); ?>
  <?php include_once("../templates/nav.html"); ?>
  
  <div class="container">
    <h2>EBK Electronics</h2>

    <div class="row">
      <div class="col-md-4 product-info" ng-repeat="product in store.ebk" ng-hide="product.soldOut">
        <img class="product-img" ng-src="{{product.image.src}}" />
        <h3 class="product-name">{{product.name}}</h3>
        <ul class="product-bullets-ul">
          <li class="product-bullets-li">{{product.bullets[0]}}</li>
          <li class="product-bullets-li">{{product.bullets[1]}}</li>
        </ul>
        <a class="btn btn-cap" ng-href="{{product.amazonLink}}">Buy on Amazon &gt;&gt;</a>
      </div>
    </div>

  </div><?php #End .container ?>
  
  <?php include_once("../templates/footer.html"); ?>
  
</body>
</html>
