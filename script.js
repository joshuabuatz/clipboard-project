async function readFromClipboard() {
    try {
        const text = await navigator.clipboard.readText();
        return text;
    } catch (err) {
        console.error('Failed to read clipboard contents:', err);
        return '';
    }
}

async function writeToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        console.log('Text copied to clipboard');
    } catch (err) {
        console.error('Failed to write to clipboard:', err);
    }
}

async function updateClipboard() {
    const newAddress = document.getElementById('newAddress').value;
    if (newAddress) {
        await writeToClipboard(newAddress);
        alert('Clipboard updated with new wallet address');
    } else {
        alert('Please enter a new wallet address');
    }
}

async function showClipboard() {
    const clipboardContent = await readFromClipboard();
    document.getElementById('clipboardContent').innerText = clipboardContent;
}
