var CronJob = require('cron').CronJob;
var notificationsWorker = require('./workers/notificationWorkers');
var moment = require('moment');

var schedulerFactory =  function(){
  return {
    start: function(){
      new CronJob('00 * * * * *', function() {
        console.log('Running Send Notifications Worker for ' +  moment().format());
        notificationsWorker.run();
      }, null, true, '');
    }
  };
};

module.exports = schedulerFactory();