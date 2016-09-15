<?php
# Include the Autoloader (see "Libraries" for install instructions)
require 'vendor/autoload.php';
use Mailgun\Mailgun;

# Instantiate the client.
$mgClient = new Mailgun('key-841dd937c45ce511459d567a8b6e70ca');
$domain = "helloitcluj.ro";

# Next, instantiate a Message Builder object from the SDK.
$messageBldr = $mgClient->MessageBuilder();

# Define the from address.
$messageBldr->setFromAddress("no-reply@helloitcluj.ro", array("first"=>"www.helloitcluj.ro", "last" => "(no reply)"));
# Define a to recipient.
$messageBldr->addToRecipient("helloitcluj@gmail.com");
# Define the subject.
$messageBldr->setSubject("Automatic registration Java Junior Web Training");
# Define the body of the message.
$messageBldr->setTextBody('Name : ' . $_POST['name'] . '; email : ' . $_POST['email'] . '; phone-number : ' . $_POST['phone']);

$messageBldr->addAttachment($_FILES["cv"]['tmp_name'], $_FILES["cv"]["name"]);

# Finally, send the message.
$mgClient->post("{$domain}/messages", $messageBldr->getMessage(), $messageBldr->getFiles());



?>