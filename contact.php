<!DOCTYPE html>
<html>
<head>
  
	<title>Contact Us - CAP Distributing</title>
    <?php include_once("head.html"); ?>

</head>
<body >
  
  <?php include_once("cap-logo.html"); ?>
  <?php include_once("nav.html"); ?>
  
  <div class="container">
    <h2>Contact Us</h2>
  	<p class="contact-instructions">We appreciate your opinion! Please contact us with any comments or concerns. We will get back to you as soon as we can.</p>
    
    <div class="row">
    	<div class="col-md-3"></div>
    	<div class="col-md-6 contact-form">
    		<div class="form-group">
		      <label>Name</label>
		      <input id="name" class="form-control" placeholder="Name">
		    </div>
		    <div class="form-group">
		      <label>Email address</label>
		      <input id="email" class="form-control" placeholder="Email">
		    </div>
		    <div class="form-group">
		      <label>Subject</label>
		      <input id="subject" class="form-control" placeholder="Subject">
		    </div>
		    <div class="form-group">
		      <label>Message</label>
		      <textarea id="message" class="form-control" rows="6"></textarea>
		    </div>
		    <button type="submit" id="submit" class="btn btn-primary">Submit</button>
		    <span class="form-status"></span>
    	</div>
    </div>
   
  </div><?php #End .container ?>
  
  <?php include_once("footer.html"); ?>
  <script type="text/javascript" src="/scripts/contact.js"></script>
  
</body>
</html>
