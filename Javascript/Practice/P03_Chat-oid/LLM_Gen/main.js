let comment = document.getElementById('comment');
let msg = document.getElementById('msg');
let lastMode = null;

function chat(mode) {
    const now = new Date();
    const timestamp = now.toLocaleString('ja-JP');

    if (comment.value === '') {
        return;
    }

    let userClass = mode === 'A' ? 'coma' : 'comb';
    let userName = mode === 'A' ? 'Aさん' : 'Bさん';

    msg.innerHTML += `<p class="${userClass}">${timestamp} : ${userName}<br>${comment.value}</p>`;
    comment.value = '';
    lastMode = mode; // Store the last mode used

    // Scroll to the bottom of the msg div
    msg.scrollTop = msg.scrollHeight;
}

function resetFields() {
    comment.value = '';
    msg.innerHTML = '';
    lastMode = null; // Reset the last mode
}

// Add event listener for Enter key press
comment.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        if (lastMode) {
            chat(lastMode);
        }
    }
});