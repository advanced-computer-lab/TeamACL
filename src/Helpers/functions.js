<script src=
    "https://smtpjs.com/v3/smtp.js">
  </script>

function sendEmail(email,amount) {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "Airlineprojectsystem@gmail.com",
	Password : "<airportproject",
	To : email,
	From : "<Airlineprojectsystem@gmail.com>",
	Subject : "Reservation has been canceled",
	Body : "your Reservation has been canceled and you will be refunded with the ammount of "+amount
    ,
	}).then(
		message => alert("mail sent successfully")
	);
}