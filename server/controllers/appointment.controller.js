var Appointment = require('../models/appointments.model.js');



modules.exports = {
    getAll:function(req,res){
        // getting all appointments
    Appointment.find({}, function(err, appointments) {
        if(err) {
          return res.status(500).json({ message: err.message });
        }
        return res.status(200).json({appointments:appointments});
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
               return res.status(500).json({status:'error',message:err.message})
            }

            return res.status(200).json({status:'success',message:'Appointment Createds Successfully'})
        });
    },

    getAppointmentDetails:function(req,res){
        // get details of a single appointment
        Appointment.findOne({id:req.params.id},function(err,apointment){
            if(err){
                // 
                return res.status(200).json({status:'error',message:'something went wrong sorry about that'});
            }

            return res.status(200).json({status:'success',message:'Appointment retrieved',appointment:appointment});

        })
    },

    updateAppointment:function(req,res){
        // updating an appointment.
        var public_id = req.params.id;
        var appointmentDetails = req.body;
        Appointment.update({id:public_id},appointmentDetails, function(err){
            // updated successfully?
            if(err){
               return res.status(404).json({
                    status:'error',
                    message:'appointment not found, could not update',
                })
            }

            return res.status(200).json({
                    status:'success',
                    message:'appointment updated successfully',
                    appointment:appointmentDetails
            })
        })
    },

    deleteAppointment:function(req,res){
        var publicId = req.params.id;
        Appointment.remove({id: publicId}, function (err, appointment) {
            if(err) {
                return res.status(404).json({success:'error', message: err.message });
            }

        return res.json({success:'success', message: 'Appointment Deleted Successfully'});
        });
    }



};
