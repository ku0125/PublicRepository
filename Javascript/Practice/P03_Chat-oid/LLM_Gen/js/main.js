const A_SAN = 'A_SAN';
const B_SAN = 'B_SAN';

// Prepare comment (input form content) and msg (display content)
let comment = document.getElementById('comment');
let msg = document.getElementById('msg');

function chat(mode) {
    // Get the current time using the Date function
    const now = new Date();
    // Convert now (time) to timestamp (Japanese format)
    const timestamp = now.toLocaleString('ja-JP');
    let dispName = '';

    if (comment.value === '') {
        // Do nothing if the input form is empty
        return;
    }

    // Use switch-case to branch
    switch (mode) {
        case A_SAN:
            dispName = 'Aさん';
            break;
        case B_SAN:
            dispName = 'Bさん';
            break;
        default:
            return;
    }

    // Embed the timestamp (acquired time) and color change class into a p tag using template literals
    // Append to msg (display content)
    msg.innerHTML += `
        <p class="${mode}">
            ${timestamp} : ${dispName}<br>
            ${comment.value}
        </p>
    `;

    // Clear the input form
    comment.value = '';
}

function resetFields() {
    msg.innerHTML = '';
    comment.value = '';
}