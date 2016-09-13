<?php
# Include the Autoloader (see "Libraries" for install instructions)
require 'vendor/autoload.php';
use Mailgun\Mailgun;

# Instantiate the client.
$mgClient = new Mailgun('key-841dd937c45ce511459d567a8b6e70ca');
$domain = "sandbox2c4deebb987b400a829e4b5e6723b413.mailgun.org";

# Next, instantiate a Message Builder object from the SDK.
$messageBldr = $mgClient->MessageBuilder();

# Define the from address.
$messageBldr->setFromAddress("postmaster@sandbox2c4deebb987b400a829e4b5e6723b413.mailgun.org", array("first"=>"www.helloitcluj.ro", "last" => "(no reply)"));
# Define a to recipient.
$messageBldr->addToRecipient("aron.sinoai@gmail.com");
# Define the subject.
$messageBldr->setSubject("Automatic registration Java Junior Web Training");
# Define the body of the message.
$messageBldr->setTextBody('Name : ' . $_POST['name'] . '; email : ' . $_POST['email'] . '; phone-number : ' . $_POST['phone']);

$messageBldr->addAttachment($_FILES["cv"]['tmp_name'], $_FILES["cv"]["name"]);

# Finally, send the message.
$mgClient->post("{$domain}/messages", $messageBldr->getMessage(), $messageBldr->getFiles());



?>