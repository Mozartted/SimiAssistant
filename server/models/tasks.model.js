var mongoose          = require('mongoose'),
    cfg               = require('../config'),
    Jusibe            = require('jusibe');


    taskSchema       =  mongoose.Schema({
        name:               { type: String },
        details:           { type: String, required: true },
        deadline:         { type: Date, required: true },
    });


taskSchema.methods.requiresNotification = function (date) {
  return Math.round(moment.duration(moment(this.deadline).utc()
                          .diff(moment(date).utc())
                        ).asMinutes()) === this.notification;
};

taskSchema.statics.sendNotifications = function(callback) {

  // now
  var searchDate = new Date();
  var task =  mongoose.model('Task', taskSchema, 'tasks');
  task
    .find()
    .then(function (tasks) {
      tasks = tasks.filter(function(task) {
              return task.requiresNotification(searchDate);
      });
      if (tasks.length > 0) {
        sendNotifications(tasks);
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
                message: "Hey there, just so you know " + task.name + ". is Due soon or it should have already started  " + moment(task.deadline).calendar() +"."
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




module.exports = mongoose.model('Task', taskSchema, 'tasks');
