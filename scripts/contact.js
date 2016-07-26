
//variable
var $el = $('.container');
var $name = $el.find('#name');
var $email = $el.find('#email');
var $subject = $el.find('#subject');
var $message = $el.find('#message');
var $submit = $el.find('#submit');
var $formStatus = $el.find('.form-status');


//event listeners
$submit.on("click", sendMessage);


//functions
function sendMessage() {
  var messageInfo = {
    name: $name.val(),
    email: $email.val(),
    subject: $subject.val(),
    message: $message.val(),
    website: 'capdistributing.com'
  };

  $.ajax({
    type: "POST",
    url: 'http://rest.learncode.academy/api/aTjPn7InWo8BlqrR/mB2974BuosGlyUks',
    data: messageInfo,
    success: function(newMessage) {
      //console.log(newMessage);
      $formStatus.html('<div class="alert alert-success" role="alert">Your message has been sent!</div>');
    },
    error: function() {
      alert('An error occurred while sending your message!');
    }
  });

  $name.val('');
  $email.val('');
  $subject.val('');
  $message.val('');

}
