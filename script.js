document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fetch members data and display on page load
window.onload = function() {
  fetch('./API/members.json')
    .then(response => response.json())
    .then(data => displayMembers(data))
    .catch(error => console.error('Error loading member data:', error));

  fetch('./API/content.json')
    .then(response => response.json())
    .then(data => displayContent(data))
    .catch(error => console.error('Error loading content.json data: ', error));
};

function displayMembers(members) {
    const membersContainer = document.getElementById('members');
    members.forEach(member => {
        const memberDiv = document.createElement('div');
        memberDiv.className = 'member';
        memberDiv.innerHTML = `
            <p><i class="fas fa-user"></i> <a href="profile/member.html?name=${encodeURIComponent(member.name)}">${member.name}</a></p>

            <p><i class="fab fa-twitter"></i> <a href="${member.twitterUrl}">Twitter</a></p>
            <p><i class="fab fa-github"></i> <a href="${member.githubUrl}">GitHub</a></p>
        `;
        membersContainer.appendChild(memberDiv);
    });
}

function displayContent(content) {
    document.getElementById('welcome-content').innerText = content.welcome.content;
    document.getElementById('overview-content').innerText = content.overview.content;
}
