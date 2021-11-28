
var jwt = require('jsonwebtoken');
var config = require("../config.json");


function CancellationEmail(Email,Ammount) {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "airportprojectwebsite@gmail.com",
	Password : "thisisaproject",
	To : 'Email',
	From : "airportprojectwebsite@gmail.com",
	Subject : "Cancelation of reservation",
	Body : "Dear costumer, your reservation has been cancelled, you will be refunded with "+Ammount,
	}).then(
		message => alert("mail sent successfully")
	);
}

module.exports.sign = function (object, type) { 

    let data = {};
    data.userType = type;
    return jwt.sign(data, config.tokenSecret, {
        expiresIn:  config.tokenExpire
    })
};



module.exports.verifyJWT = (token) => {
    try {
        return jwt.verify(token,
            config.tokenSecret);
    } catch (err) {
        return false;
    }
}



