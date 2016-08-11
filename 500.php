
<!DOCTYPE html>
<html>
<head>

  <title>500 Server Error - CAP Distributing</title>
  <?php include_once("head.html"); ?>

</head>
<body>

  <?php include_once("cap-logo.html"); ?>
  <?php include_once("nav.html"); ?>

  <div class="container" style="min-height: 400px;">

    <h2>500 Server Error</h2>
    <p class="alert-message">A misconfiguration on the server caused a hiccup.
    Check the server logs, fix the problem, then try again.</p>

    <?
      echo "URL: http://".$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI']."<br>\n";
      $fixer = "checksuexec ".escapeshellarg($_SERVER['DOCUMENT_ROOT'].$_SERVER['REQUEST_URI']);
      echo `$fixer`;
    ?>

  </div>

  <?php include_once("footer.html"); ?>

</body>
</html>
