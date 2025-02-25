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
  const { livestreamLink, announcement } = req.body;

  try {
    let announcements = await Announcement.findOne();
    if (!announcements) {
      // Create a new announcements document if none exists
      announcements = new Announcement({ livestreamLink, announcement });
    } else {
      // Update fields
      if (livestreamLink) announcements.livestreamLink = livestreamLink;
      if (announcements) announcements.announcement = announcements;
    }

    await announcements.save();
    res.status(200).json({ message: "Announcements updated successfully!", announcements });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
