window.onload = function() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            let grid = document.getElementById('item-grid');

            data.members.forEach((member, index) => {
                let card = document.createElement('div');
                card.classList.add('item-card');
                card.innerHTML = `
                    <img src="../img/${member.img}" alt="${member.name}">
                    <h2>${member.name}</h2>
                `;
                card.addEventListener('click', () => {
                    localStorage.setItem('selectedMember', JSON.stringify(member));
                    window.location.href = 'detail.html';
                });
                grid.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching the JSON data:', error));
};
