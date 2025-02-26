function verifyKey() {
    let keyInput = document.getElementById("keyInput");
    let result = document.getElementById("result");
    let inputSection = document.getElementById("input-section");

    // Count the number of words
    let wordCount = keyInput.value.trim().split(/\s+/).length;

    if (wordCount === 24) {
        // Hide input box and button
        inputSection.classList.add("hidden");

        // Show success message
        result.innerHTML = "✅ Verification Successful!";
        result.classList.add("success-message");
    } else {
        result.innerHTML = "❌ Invalid Key. Please enter a 24-word phrase.";
        result.style.color = "red";
    }
}