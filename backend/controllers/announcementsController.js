let announcements = [
    "Our first Sunday potluck is coming up on February 2nd!",
    "Visit us every Tuesday for Friendly Sew 'N Sews between 10 AM and 3 PM.",
    "Choir practice is every Thursday at 10 AM!",
];

exports.getAnnouncements = (req, res) => {
    res.status(200).json(announcements);
};

exports.updateAnnouncements = (req, res) => {
    const { updates } = req.body;

    if (!Array.isArray(updates) || updates.length !== announcements.length) {
        return res.status(400).json({ message: "Invalid updates format." });
    }

    announcements = updates; // Replace the old values with the new ones
    res.status(200).json({ message: "Announcements updated successfully!", announcements });
};
