let customerData = {};

async function loadCustomerData() {
    try {
        const response = await fetch("Customer/data.json");
        customerData = await response.json();
        
        console.log("Customer Data Loaded:", customerData);
        console.log(customerData.recipient.name);
console.log(customerData.sender.name);
console.log(customerData.birthday.title);
console.log(customerData.rakshabandhan.title);
    } catch (error) {
        console.error("Error loading customer data:", error);
    }
}
// ======================================
// PuzzleWish Premium Demo
// Global JavaScript
// ======================================

document.addEventListener("DOMContentLoaded", function () {

    document.body.classList.add("page-loaded");

    // Reveal Confetti
    if (document.body.classList.contains("reveal-page")) {

        confetti({
            particleCount: 180,
            spread: 90,
            origin: { y: .6 }
        });

    }

});

// ======================================
// Premium Navigation Transition
// ======================================

document.querySelectorAll("a.button").forEach(button => {

    button.addEventListener("click", function (e) {

        const href = this.getAttribute("href");

        if (!href || href == "#") return;

        e.preventDefault();

        document.body.classList.add("page-exit");

        setTimeout(() => {

            window.location.href = href;

        }, 500);

    });

});
document.addEventListener("DOMContentLoaded", async () => {
    await loadCustomerData();
    const welcomeHeading = document.getElementById("welcomeHeading");

if (welcomeHeading && customerData.recipient?.name) {
    welcomeHeading.innerHTML = `Welcome, ${customerData.recipient.name} ✨`;
}
console.log("Is Rakhi Page:", document.body.classList.contains("rakhi-page"));
console.log("Rakhi Puzzle URL:", customerData.rakshabandhan?.puzzleUrl);
 const puzzleFrame = document.getElementById("puzzleFrame");

if (puzzleFrame) {

    if (document.body.classList.contains("rakhi-page")) {
        puzzleFrame.src = customerData.rakshabandhan?.puzzleUrl || "";
    } else {
        puzzleFrame.src = customerData.birthday?.puzzleUrl || "";
    }

}
    
    const revealButton = document.getElementById("revealButton");

if (revealButton) {

    if (document.body.classList.contains("rakhi-page")) {
        revealButton.href = "message-rakhi.html";
    } else {
        revealButton.href = customerData.birthday.revealNextPage;
    }

}
const gallery1 = document.getElementById("galleryImage1");
const gallery2 = document.getElementById("galleryImage2");
const gallery3 = document.getElementById("galleryImage3");
const gallery4 = document.getElementById("galleryImage4");
const galleryNextButton = document.getElementById("galleryNextButton");

if (gallery1 && customerData.gallery) {
    gallery1.src = customerData.gallery.image1;
    gallery2.src = customerData.gallery.image2;
    gallery3.src = customerData.gallery.image3;
    gallery4.src = customerData.gallery.image4;
}

if (galleryNextButton && customerData.gallery?.nextPage) {
    galleryNextButton.href = customerData.gallery.nextPage;
    console.log("Gallery Button:", galleryNextButton);
console.log("Gallery Next Page:", customerData.gallery?.nextPage);
}
const voicePlayer = document.getElementById("voicePlayer");
const voiceSource = document.getElementById("voiceSource");
const voiceNextButton = document.getElementById("voiceNextButton");

if (voicePlayer && voiceSource && customerData.voice) {
    voiceSource.src = customerData.voice.audio;
    voicePlayer.load();
}

if (voiceNextButton && customerData.voice?.nextPage) {
    voiceNextButton.href = customerData.voice.nextPage;
}
const letterContent = document.getElementById("letterContent");
const messageNextButton = document.getElementById("messageNextButton");

if (letterContent) {

    const isRakhi = document.body.classList.contains("rakhi-page");

    const occasion = isRakhi
        ? customerData.rakshabandhan
        : customerData.birthday;

    const greeting = isRakhi
    ? `प्रिय दादा ${customerData.recipient.marathiName || customerData.recipient.name},`
    : `Dear ${customerData.recipient.name},`;
   const message = occasion.message.replace(/\n/g, "<br>");
    const signature = occasion.signature.replace(/\n/g, "<br>");

    letterContent.innerHTML = `
        <strong>${greeting}</strong>
        <br><br>
        ${message}
        <br><br>
        <strong>${signature}</strong>
    `;
}

if (messageNextButton) {

    if (document.body.classList.contains("rakhi-page")) {
        messageNextButton.href = "thankyou.html";
    } else {
        messageNextButton.href = "transition.html";
    }

}
});
// ==============================
// Progress Bar
// ==============================

const progress = document.querySelector(".progress");

if (progress) {

    const dots = document.querySelectorAll(".progress .dot");

    const stepClass = [...document.body.classList]
        .find(c => c.startsWith("step-"));

    if (stepClass) {

        const currentStep = parseInt(stepClass.replace("step-", ""));

        dots.forEach((dot, index) => {

            if (index <= currentStep) {
                dot.classList.add("active");
            }

        });

    }

}
