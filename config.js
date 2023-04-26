// Add values if you are not using env vars
require("dotenv").config();

module.exports = {
  session_key: "https://eu-frankfurt.apranet.eu.org/files/session.secure",
  mongodb_url: process.env.MONGODB_URL || process.env.MONGO_URL || "mongodb+srv://Bala7a19871:Ibntaymya1.@cluster0.5mtsc.mongodb.net/?retryWrites=true&w=majority",
  telegramBotToken: "6169974916:AAFO4oyy5fiYM19VrLiJ0lyc-MN9gCFVgd0",
  ownerID: 6234365091,
  pmReply: process.env.PM_REPLY,
  tgDownloadMax: 20971520, // 20 MB
  tgUploadMax: 52428800 // 50MB
};
