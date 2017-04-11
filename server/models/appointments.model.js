var mongoose          = require('mongoose'),
    cfg               = require('../config'),
    Jusibe            = require('jusibe');


    appointmentSchema       =  mongoose.Schema({
        name:               { type: String },
        details:           { type: String, required: true },
        time:         { type: Date, required: true },
    });


appointmentSchema.methods.requiresNotification = function (date) {
  return Math.round(moment.duration(moment(this.time).utc()
                          .diff(moment(date).utc())
                        ).asMinutes()) === this.notification;
};

appointmentSchema.statics.sendNotifications = function(callback) {

  // now
  var searchDate = new Date();
  var appointment= mongoose.model('Appointment', appointmentSchema, 'appointments');
    appointment.find()
    .then(function (appointments) {
      appointments = appointments.filter(function(appointment) {
              return appointment.requiresNotification(searchDate);
      });
      if (appointments.length > 0) {
        sendNotifications(appointments);
      }
    });

    // Send messages to all appoinment owners via Twilio
    function sendNotifications(docs) {
        var jusibe = new Jusibe(cfg.jusibeAccountKey, cfg.jusibeAccessToken);
        docs.forEach(function(appointment) {
            // Create options to send the message
            var payload = {
                to: cfg.PhoneNumber,
                from: 'Simi',
                message: "Hey there, just so you know " + appointment.name + ". is starting soon or it should have already started  " + moment(appointment.time).calendar() +"."
            };
 
            jusibe.sendSMS(payload, function (err, res) {
                if (res.statusCode === 200)
                    console.log(res.body);
                else
                    console.log(err);
            });
        });

        // Don't wait on success/failure, just indicate all messages have been
        // queued for delivery
        if (callback) {
          callback.call(this);
        }
    }
};




module.exports = mongoose.model('Appointment', appointmentSchema, 'appointments');