<!DOCTYPE html>
<html ng-app="store">
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>CAP Distributing - Angular.js</title>

	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
  <link rel="stylesheet" href="css/main.css" />
</head>
<body ng-controller="StoreController as store">
  <div class="container">
    <?php include_once("cap-logo.html"); ?>
    <?php include_once("nav.html"); ?>
    <h1>Audio Technica</h1>

    <div ng-repeat="product in store.audioTechnica">
      <h2>{{product.name}}</h2>
      <h3>{{product.price | currency}}</h3>
      <p>{{product.description}}</p>
      <ul>
        <li>{{product.bullets[0]}}</li>
        <li>{{product.bullets[1]}}</li>
      </ul>
      <img ng-src="{{product.image.src}}" />
      <a class="buy-button" ng-hide="product.soldOut" ng-href="{{product.amazonLink}}">Buy on Amazon &gt;&gt;</a>
    </div>

    <?php include_once("footer.html"); ?>
  </div><!-- End .container -->

</body>
</html>
