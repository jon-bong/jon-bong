
document.addEventListener("DOMContentLoaded", function() {
    
    // === 1. SECURE EMAIL OBFUSCATION & FADE-IN ===
    // 1. Break your email into separate variables
    const user = "jonbong";
    const domain = "gmail";
    const extension = "com";
    
    // 2. Combine them into a full email string
    const fullEmail = user + "@" + domain + "." + extension;
    
    // 3. Find your HTML placeholder
    const emailContainer = document.getElementById("contact-email");
    
    if (emailContainer) {
        const emailLink = document.createElement("a");
        emailLink.href = "mailto:" + fullEmail;
        emailLink.textContent = fullEmail;
        
        emailContainer.appendChild(emailLink);
        
        // A tiny timeout ensures the browser registers the 
        // initial opacity before triggering a smooth fade-in
        setTimeout(() => {
            emailLink.classList.add("visible");
        }, 50);
    }

    //// This prevents scrapers from finding a raw file link in your source code
    // === 2. SECURE PDF DOWNLOAD (NO RAW LINK IN HTML) ===
    const downloadCVBtn = document.getElementById("download-cv-btn");
    
    if (downloadCVBtn) {
        downloadCVBtn.addEventListener("click", function() {
            // Points securely to the assets sibling folder
            const folder = "././assets/docs/";
            const fileName = "Jonathan_Bong_CV.pdf";
            
            // Opens the PDF safely in a new tab upon a real human click
            window.open(folder + fileName, '_blank');
        });
    }

    const downloadResumeBtn = document.getElementById("download-resume-btn");
    
    if (downloadResumeBtn) {
        downloadResumeBtn.addEventListener("click", function() {
            // Points securely to the assets sibling folder
            const folder = "././assets/docs/";
            const fileName = "Jonathan_Bong_Resume.pdf";
            
            // Opens the PDF safely in a new tab upon a real human click
            window.open(folder + fileName, '_blank');
        });
    }
});
