// requiring all controllers
var Appointment   = require('../controllers/appointment.controller'),
    Task      = require('../controllers/task.controller');

module.exports = function(app) {

  app.get('/api/task',Task.getAll);
  app.get('/api/appointment',Appointment.getAll);

  app.post('/api/create/task', Task.createTask);
  app.post('/api/create/appointment',Appointment.createAppointment);


  app.get('/api/task/:id', Task.getTaskDetails);
  app.get('/api/appointment/:id', Appointment.getAppointmentDetails);


  app.put('/api/task/:id',Task.updateTask);
  app.put('/api/appointment/:id',Appointment.updateAppointment);

  app.delete('/api/task/:id',Task.deleteTask);
  app.delete('/api/appointment/:id',Appointment.deleteAppointment);
};