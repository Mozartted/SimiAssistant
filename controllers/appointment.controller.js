var Appointment = require('../models/appointments.model.js');



modules.exports = {
    getAll:function(req,res){
        // getting all appointments
    Appointment.find({}, function(err, appointments) {
        if(err) {
          return res.status(500).json({ message: err.message });
        }
        return res.status(200).json(appointments);
      });
    },

    createAppointment:function(req,res){
        var appointment = new Appointment({
            name:req.body.name,
            details:req.body.details,
            time:req.body.time
        });

        appointment.save(function(err, result){
            if(err){
                res.status(500).json({message:err.message})
            }

            return res.status(200).json({success:true})
        });
    },

    getAppointmentDetails:function(req,res){

    },

    updateAppointment:function(req,res){

    },

    deleteAppointment:function(req,res){

    }

};


// app.post('/api/create/task', Task.createTask);
//   app.post('/api/create/appointment',Appointment.createAppointment);


//   app.get('/api/task/:id', Task.getTaskDetails);
//   app.get('/api/appointment/:id', Appointment.getAppointmentDetails);


//   app.put('/api/task/:id',Task.updateTask);
//   app.put('/api/appointment/:id',Appointment.updateAppointment);

//   app.delete('/api/task/:id',Task.deleteTask);
//   app.delete('/api/appointment/:id',Appointment.deleteAppointment);