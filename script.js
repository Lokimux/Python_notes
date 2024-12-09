// Copy Code to Clipboard
function copyCode(button) {
    const codeBlock = button.previousElementSibling; // Find the previous <code> element
    const textToCopy = codeBlock.innerText;

    navigator.clipboard.writeText(textToCopy).then(() => {
        button.innerText = "Copied!";
        setTimeout(() => (button.innerText = "Copy"), 2000);
    }).catch(() => {
        button.innerText = "Failed to Copy";
        setTimeout(() => (button.innerText = "Copy"), 2000);
    });
}
