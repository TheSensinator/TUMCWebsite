let announcements = {
    announcement1: "Our first Sunday potluck is coming up on February 2nd!",
    announcement2: "Visit us every Tuesday for Friendly Sew 'N Sews between 10 AM and 3 PM.",
    announcement3: "Choir practice is every Thursday at 10 AM!",
    announcement4: "",
    announcement5: "",
    livestreamLink: "https://fb.watch/xk2m0tXgpZ/"
};

exports.getAnnouncements = (req, res) => {
    res.status(200).json(announcements);
};

exports.updateAnnouncements = (req, res) => {
    const { livestreamLink, announcement1, announcement2, announcement3, announcement4, announcement5 } = req.body;

    if (!livestreamLink && !announcement1 && !announcement2 && !announcement3 && !announcement4 && !announcement5) {
        return res.status(400).json({ message: "No fields provided for update." });
    }

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
