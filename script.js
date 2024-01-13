document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function displayMembers(members) {
    const membersContainer = document.getElementById('members');
    members.forEach(member => {
        const memberDiv = document.createElement('div');
        memberDiv.className = 'member';
        memberDiv.innerHTML = `
            <p><i class="fas fa-user"></i> ${member.name}</p>
            <p><i class="fab fa-twitter"></i> <a href="${member.twitterUrl}">Twitter</a></p>
            <p><i class="fab fa-github"></i> <a href="${member.githubUrl}">GitHub</a></p>
        `;
        membersContainer.appendChild(memberDiv);
    });
}

// Fetch members data and display on page load
window.onload = function() {
    fetch('members.json')
        .then(response => response.json())
        .then(data => displayMembers(data))
        .catch(error => console.error('Error loading member data:', error));
};
