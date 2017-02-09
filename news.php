<!DOCTYPE html>
<html ng-app="store">
<head>
  
	<title>News - CAP Distributing</title>
	<meta name="description" content="We are constantly looking for more ways to quality items. Come and see what we are up to." />
	<meta name="keywords" content="cap distributing news, update, info, events" />
  <?php include_once("templates/head.html"); ?>
  
</head>
<body ng-controller="StoreController as store">
  
  <?php include_once("templates/cap-logo.html"); ?>
  <?php include_once("templates/nav.html"); ?>
  
  <div class="container">
    <h2>News</h2>

    <div class="row news-div" ng-repeat="news in store.news" >
      <a href ng-href="{{news.newsLink}}">
        <h3>{{news.title}}</h3>
      </a>  
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
  
  <?php include_once("templates/footer.html"); ?>
  
</body>
</html>
