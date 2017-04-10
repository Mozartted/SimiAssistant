require('dotenv').load();
var cfg = {};

// HTTP Port to run our web application
cfg.port = process.env.PORT || 3000;

cfg.jusibeAccountKey = process.env.JUSIBE_ACCOUNT_KEY;
cfg.jusibeAccessToken = process.env.JUSIBE_ACCESS_TOKEN;

cfg.PhoneNumber = process.env.PHONE_NUMBER;

cfg.mongoUrl = process.env.MONGOLAB_URI || process.env.MONGO_URL

// Export configuration object
module.exports = cfg;