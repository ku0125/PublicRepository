window.onload = function() {
    const member = JSON.parse(localStorage.getItem('selectedMember'));

    if (member) {
        document.getElementById('detail-name').textContent = member.name;
        document.getElementById('detail-age').textContent = `Age: ${member.age}`;
        document.getElementById('detail-img').src = `../img/${member.img}`;
        document.getElementById('detail-img').alt = member.name;
        document.getElementById('detail-description').textContent = member.detail;
    } else {
        document.getElementById('item-detail').innerHTML = '<p>No details available.</p>';
    }

    // Add event listener to the back button
    document.getElementById('back-button').addEventListener('click', () => {
        window.location.href = 'index.html';
    });
};
