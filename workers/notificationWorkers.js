var Appointment = require('../server/models/appointments.model');

var notificationWorkerFactory =  function(){
  return {
    run: function(){
      Appointment.sendNotifications();
    }
  };
};

module.exports = notificationWorkerFactory();