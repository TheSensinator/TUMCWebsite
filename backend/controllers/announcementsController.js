let announcements = [
    "Our first Sunday potluck is coming up on February 2nd!",
    "Visit us every Tuesday for Friendly Sew 'N Sews between 10 AM and 3 PM.",
    "Choir practice is every Thursday at 10 AM!",
    ""
];

// This function handles the GET request to retrieve announcements
exports.getAnnouncements = (req, res) => {
    res.status(200).json(announcements);
};

// This function handles the PUT request to update announcements
exports.updateAnnouncements = (req, res) => {
    const { livestreamLink, announcement1, announcement2, announcement3, announcement4, announcement5 } = req.body;

    // Validate that at least one field is being updated
    if (!livestreamLink && !announcement1 && !announcement2 && !announcement3 && !announcement4 && !announcement5) {
        return res.status(400).json({ message: "No fields provided for update." });
    }

    // Update the fields that were provided
    if (livestreamLink) announcements.livestreamLink = livestreamLink;
    if (announcement1) announcements.announcement1 = announcement1;
    if (announcement2) announcements.announcement2 = announcement2;
    if (announcement3) announcements.announcement3 = announcement3;
    if (announcement4) announcements.announcement4 = announcement4;
    if (announcement5) announcements.announcement5 = announcement5;

    res.status(200).json({
        message: "Announcements updated successfully!",
        announcements
    });
};
