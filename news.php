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

    <div class="row news-div" ng-repeat="news in store.news" >
      <h3>{{news.title}}</h3>
      <div class="col-md-3">
          <a href ng-href="{{news.newsLink}}">
            <img class="news-img" ng-src="{{news.image.src}}" />
          </a>
      </div>
      <div class="col-md-9">
          <h4>{{news.date}}</h4>
          <p ng-repeat="paragraphs in news.article">{{paragraphs}}</p>
      </div>
    </div>

  </div><?php #End .container ?>
  
  <?php include_once("footer.html"); ?>
  
</body>
</html>
