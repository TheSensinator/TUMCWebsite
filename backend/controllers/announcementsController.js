exports.updateAnnouncements = (req, res) => {
    const {
        livestreamLink,
        announcement1,
        announcement2,
        announcement3,
        announcement4,
        announcement5,
    } = req.body;

    // Validate that at least one field is being updated
    if (
        !livestreamLink &&
        !announcement1 &&
        !announcement2 &&
        !announcement3 &&
        !announcement4 &&
        !announcement5
    ) {
        return res.status(400).json({ message: "No fields provided for update." });
    }

    // Update the fields that were provided
    if (livestreamLink !== undefined) {
        announcements.livestreamLink = livestreamLink || announcements.livestreamLink;
    }
    if (announcement1 !== undefined) {
        announcements.announcement1 = announcement1 || announcements.announcement1;
    }
    if (announcement2 !== undefined) {
        announcements.announcement2 = announcement2 || announcements.announcement2;
    }
    if (announcement3 !== undefined) {
        announcements.announcement3 = announcement3 || announcements.announcement3;
    }
    if (announcement4 !== undefined) {
        announcements.announcement4 = announcement4 || announcements.announcement4;
    }
    if (announcement5 !== undefined) {
        announcements.announcement5 = announcement5 || announcements.announcement5;
    }

    res.status(200).json({
        message: "Announcements updated successfully!",
        announcements,
    });
};
