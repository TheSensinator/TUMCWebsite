const mongoose = require("mongoose");

const AnnouncementsSchema = new mongoose.Schema({
  livestreamLink: { type: String, required: false },
  announcement: { type: String, default: "", required: false },
});

module.exports = mongoose.model("Announcement", AnnouncementsSchema);
