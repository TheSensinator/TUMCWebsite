const mongoose = require("mongoose");

const AnnouncementsSchema = new mongoose.Schema({
  livestreamLink: { type: String, required: true },
  announcement1: { type: String, default: "" },
  announcement2: { type: String, default: "" },
  announcement3: { type: String, default: "" },
  announcement4: { type: String, default: "" },
  announcement5: { type: String, default: "" },
});

module.exports = mongoose.model("Announcement", AnnouncementsSchema);
