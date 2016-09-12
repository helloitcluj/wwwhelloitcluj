<?php
# Include the Autoloader (see "Libraries" for install instructions)
require 'vendor/autoload.php';
use Mailgun\Mailgun;

# Instantiate the client.
$mgClient = new Mailgun('key-841dd937c45ce511459d567a8b6e70ca');
$domain = "sandbox2c4deebb987b400a829e4b5e6723b413.mailgun.org";

# Make the call to the client.
$result = $mgClient->sendMessage($domain,
    array('from'    => 'Mailgun Sandbox <postmaster@sandbox2c4deebb987b400a829e4b5e6723b413.mailgun.org>',
        'to'      => 'Aron Sinoai <aron.sinoai@gmail.com>',
        'subject' => 'Hello Aron Sinoai',
        'text'    => 'Congratulations Aron Sinoai, you just sent an email with Mailgun!  You are truly awesome!  You can see a record of this email in your logs: https://mailgun.com/cp/log .  You can send up to 300 emails/day from this sandbox server.  Next, you should add your own domain so you can send 10,000 emails/month for free.'));


?>