const indexFile = "index.html";

async function loadAnnouncements() {
    try {
        const response = await fetch(indexFile);
        if (!response.ok) throw new Error(`Failed to fetch ${indexFile}`);
        const html = await response.text();

        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");

        const announcements = doc.querySelector("#announcements");
        if (!announcements) throw new Error("Announcements section not found");

        // Extract the header and paragraphs
        const headerElement = announcements.querySelector("h2");
        const header = headerElement ? headerElement.textContent : "No header found";
        const paragraphs = Array.from(announcements.querySelectorAll("p")).map((p) => p.textContent);

        // Render the content in the admin panel
        const container = document.getElementById("announcements-container");
        container.innerHTML = `
            <label>Header:</label><br>
            <input type="text" id="edit-header" class="editable" value="${header}"><br><br>
            ${paragraphs
                .map(
                    (text, index) =>
                        `<label>Paragraph ${index + 1}:</label><br>
                         <textarea id="edit-paragraph-${index}" class="editable">${text}</textarea><br>`
                )
                .join("")}
        `;
    } catch (error) {
        console.error("Error loading announcements:", error);
        document.getElementById("announcements-container").innerHTML = `
            <p style="color: red;">Failed to load announcements: ${error.message}</p>
        `;
    }
}
