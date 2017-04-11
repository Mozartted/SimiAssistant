var Task = require('../models/tasks.model.js');



module.exports = {
    getAll:function(req,res){
        Task.find({}, function(err, tasks) {
        if(err) {
          return res.status(404).json({ message: err.message });
        }
        return res.status(200).json({tasks:tasks});
      });
    },

    createTask:function(req,res){
        var task = new Task({
            name:req.body.name,
            details:req.body.details,
            deadline:req.body.deadline
        });

        task.save(function(err, result){
            if(err){
               return res.status(404).json({status:'error',message:err.message})
            }

            return res.status(200).json({status:'success',message:'Appointment Createds Successfully'})
        });
    },

    getTaskDetails:function(req,res){
        // get details
        Task.findOne({id:req.params.id},function(err,task){
            if(err){
                return res.status(404).json({
                    status:'error',
                    message:'tasks details could not be retrived'
                })
            }

            return res.status(200).json({
                status:'success',
                message:'task retrieved',
                task:task
            })

        })
    },

    updateTask:function(req,res){
        // updating an appointment.
        var public_id = req.params.id;
        var tasksDetails = req.body;
        Task.update({id:public_id}, tasksDetails, function(err){
            // updated successfully?
            if(err){
               return res.status(404).json({
                    status:'error',
                    message:'task not found, could not update',
                })
            }

            return res.status(200).json({
                    status:'success',
                    message:'task updated successfully',
                    task:tasksDetails
            })
        })
    },

    deleteTask:function(req,res){

    }

}