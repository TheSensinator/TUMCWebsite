const Announcement = require("../models/Announcements");

// Get announcements
exports.getAnnouncements = async (req, res) => {
  try {
    const announcements = await Announcement.findOne();
    if (!announcements) {
      return res.status(404).json({ message: "Announcements not found" });
    }
    res.status(200).json(announcements);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Update announcements
exports.updateAnnouncements = async (req, res) => {
  const { livestreamLink, announcement1, announcement2, announcement3, announcement4, announcement5 } = req.body;

  try {
    let announcements = await Announcement.findOne();
    if (!announcements) {
      // Create a new announcements document if none exists
      announcements = new Announcement({ livestreamLink, announcement1, announcement2, announcement3, announcement4, announcement5 });
    } else {
      // Update fields
      if (livestreamLink) announcements.livestreamLink = livestreamLink;
      if (announcement1) announcements.announcement1 = announcement1;
      if (announcement2) announcements.announcement2 = announcement2;
      if (announcement3) announcements.announcement3 = announcement3;
      if (announcement4) announcements.announcement4 = announcement4;
      if (announcement5) announcements.announcement5 = announcement5;
    }

    await announcements.save();
    res.status(200).json({ message: "Announcements updated successfully!", announcements });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
