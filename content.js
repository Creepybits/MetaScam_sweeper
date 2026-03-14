let hasWarned = false;

function scanChatForScam() {
    if (hasWarned) return;

    // Grab the actual DOM element of the link, not just checking if it exists
    const warningLink = document.querySelector('a[href*="how_people_find_and_contact_you"]');
    const hasPDF = document.body.innerText.toLowerCase().includes(".pdf");

    // THE VERDICT
    if (warningLink && hasPDF) {
        console.log("🚨 SCAM CONFIRMED. DEPLOYING LOCALIZED BANNER. 🚨");
        injectLocalWarning(warningLink); // Pass the link element to the next function
        hasWarned = true;
    }
}

function injectLocalWarning(anchorElement) {
    const banner = document.createElement("div");
    // Styling it to look a bit more like a modern UI element instead of a virus
    banner.style.backgroundColor = "#dc3545";
    banner.style.color = "white";
    banner.style.padding = "12px";
    banner.style.margin = "8px";
    banner.style.fontWeight = "bold";
    banner.style.fontSize = "13px";
    banner.style.textAlign = "center";
    banner.style.borderRadius = "8px";
    banner.innerText = "🚨 WARNING: This message has been flagged as a scam. Do not accept the request or download any content.";

    // DOM Traversal: We go up two levels from the link to find the container div
    // that holds the warning text and the buttons.
    let injectionPoint = anchorElement.parentElement.parentElement;

    // Inject the banner as the first thing inside that container
    if (injectionPoint) {
        injectionPoint.insertBefore(banner, injectionPoint.firstChild);
    }
}

const observer = new MutationObserver((mutations) => {
    scanChatForScam();
});

observer.observe(document.body, { childList: true, subtree: true });
console.log("MetaScam Sweeper 1.1 is online...");