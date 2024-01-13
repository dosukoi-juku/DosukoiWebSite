// URLからメンバー名を取得
const params = new URLSearchParams(window.location.search);
const memberName = params.get('name');

// members.jsonからデータを取得
fetch('../API/members.json')
    .then(response => response.json())
    .then(members => {
        const member = members.find(m => m.name === memberName);
        if (member) {
            displayMemberProfile(member);
        } else {
            console.error('Member not found');
        }
    })
    .catch(error => console.error('Error loading members:', error));

function displayMemberProfile(member) {
    const profileSection = document.getElementById('member-profile');
    const platformsIcons = member.platforms.map(getPlatformIcon).join(' ');

    profileSection.innerHTML = `
        <h2>${member.name}</h2>
        <img src="${member.icon}" alt="${member.name}" />
        <p>${member.bio}</p>
        <p>Twitter: <a href="${member.twitterUrl}">${member.twitterUrl}</a></p>
        <p>GitHub: <a href="${member.githubUrl}">${member.githubUrl}</a></p>
        <p>Platforms: ${platformsIcons}</p>
    `;
}

function getPlatformIcon(platform) {
  const icon = platform.toLowerCase()
  return `<i class="fab fa-${icon}"></i>`
}
