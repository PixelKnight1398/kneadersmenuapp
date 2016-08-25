<?php

	$emailerAddress = $_POST['emailer'];
	$dah_bug = $_POST['bugBeingSent'];
	
	$to = "toymakers13@gmail.com";
	$subject = "Bug on Kneaders App";
	$message = wordwrap($dah_bug, 70);
	$headers = "From: " . $emailerAddress;
	
	mail($to, $subject, $message, $headers);
	header("Location: http://toymakersdev.com/kneaders");

?>