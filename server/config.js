require('dotenv').load();
var mongoose = require('mongoose');
var cfg = {};

cfg.mongoUrl = process.env.MONGOLAB_URI || process.env.MONGO_URL;

cfg.db = mongoose.connection;
mongoose.Promise = global.Promise;
mongoose.connect(cfg.mongoUrl);

// HTTP Port to run our web application
cfg.port = process.env.PORT || 3000;

cfg.jusibeAccountKey = process.env.JUSIBE_ACCOUNT_KEY;
cfg.jusibeAccessToken = process.env.JUSIBE_ACCESS_TOKEN;

cfg.PhoneNumber = process.env.PHONE_NUMBER;


// Export configuration object
module.exports = {
    cfg:cfg,
    dbConnect:function(){
        cfg.db.on('error', console.error.bind( console, 'MongoDB Connection Error. Please make sure that MongoDB is running.'));
        cfg.db.once('open', function callback(){
            console.log('Simi assistant at your service');
        });
    }
};