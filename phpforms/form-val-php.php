//<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">

<?php
// define variables and set to empty values
$name = $email = $gender = $comment = $website = "";

// check how form has been submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = test_input($_POST["name"]);
  $email = test_input($_POST["email"]);
  $website = test_input($_POST["website"]);
  $comment = test_input($_POST["comment"]);
  $gender = test_input($_POST["gender"]);
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

//////NAME ////////////////////////////////////////////////////////
$name = test_input($_POST["name"]);

if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
$nameErr="Invalid name. Names can contain letters and spaces only.";
require ('error.php');
}

if (isset($_POST['name'])) {
/////NAME - CHECK IF NOT EMPTY
$name=($_POST['name']);

$error="";
if (!$name){
  $error="Please enter your name.";
  require ('error.php');
}

//// NAME - CHECK IF SPACE BETWEEN NAME
if (!preg_match("/\\s/", $name)) {
 $error="Please enter a single space between your first and last name";
 require ('error.php');
}

////// EMAIL ////////////////////////////////////////////////////////

// Email Check
$email = test_input($_POST["email"]);
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  $emailErr = "Please enter a valid email address.";
}

////// PHONE ////////////////////////////////////////////////////////

// Email Check
$phone = test_input($_POST["phone"]);
if(!preg_match("/^[0-9]",$phone))
{
   $phoneErr="Your phone number can only contain numbers";
}

///// COMMENT ////////////////////////////////////////////////////////
/// Optional ////
if (empty($_POST["comment"])) {
    $comment = "";
  } else {
    $comment = test_input($_POST["comment"]);
 }

/// IP ADDRESS ///////////////////////////////////////////////////////
$ip=$_SERVER['REMOTE_ADDR'];
if(!filter_var($ip, FILTER_VALIDATE_IP))
  {
$error="$ip is not a valid IP Address";
require ('error.php');
  }

/// REF CODE //////////////////////////////////////////////////////////
if (isset($_REQUEST['ref'])) {
$ref=($_REQUEST['ref']);

if(!preg_match("/^[a-zA-Z0-9]/s",$ref))
{
$error="Invaild Coupon, Coupons can be letters, and numbers spaces only.";
require ('error.php');
exit;
}
else {
	setcookie('ref',$ref,time() + (86400 * 766));
	}
}

///DATE ///////////////////////////
$datejoined=date("Y/m/d");

/// EMAIL CUSTOMER ///////////////////////////////////////////////////////
$message = "Message Form has just been submitted with the following data:

Date: $datejoined
Name: $name
Email: $email
Additional Information: $comment

IP Address: $ip
URL Submitted From: $url";

mail('Mike.Davis.CSCS@gmail.com',"Contact Form Submission from $email", $message);
  $error="Thank you for contacting us. You will recieve a reply as soon as possible.";
  $error3="Thanks again for choosing ProFitnessPlans.com!";
  $error4="Form Successfully Submitted";
  require ('error.php');
  exit;
  die;
}


//// MAIL ME ////////////////////////////////////////////////////////////////
$message = "A Sign-Up Form has just been submitted with the following data:

Date: $datejoined
Name: $name
Email: $email
Phone: $phone
Additional Information: $comment

Referral Code: $ref
IP Address: $ip
Current Page: $url";

mail('Mike.Davis.CSCS@gmail.com',"Sign-Up Form Submission by: $email", $message);

?>