<!DOCTYPE html>
<html ng-app="store">
<head>
  
	<title>News - CAP Distributing</title>
  <?php include_once("head.html"); ?>
  
</head>
<body ng-controller="StoreController as store">
  
  <?php include_once("cap-logo.html"); ?>
  <?php include_once("nav.html"); ?>
  
  <div class="container">
    <h2>News</h2>

    <div class="row" ng-repeat="news in store.news" >
      <div class="col-md-3">
          <img class="news-img" ng-src="{{news.image.src}}" />
      </div>
      <div class="col-md-9">
          <h3>{{news.title}}</h3>
          <h4>{{news.date}}</h4>
          <p>{{news.article}}</p>
      </div>
    </div>

  </div><?php #End .container ?>
  
  <?php include_once("footer.html"); ?>
  
</body>
</html>
