const mongoose = require("mongoose");

const AnnouncementsSchema = new mongoose.Schema({
  livestreamLink: { type: String, required: false },
  announcement1: { type: String, default: "", required: false },
  announcement2: { type: String, default: "", required: false },
  announcement3: { type: String, default: "", required: false },
  announcement4: { type: String, default: "", required: false },
  announcement5: { type: String, default: "", required: false },
});

module.exports = mongoose.model("Announcement", AnnouncementsSchema);
