let members = [];  // グローバルにメンバーの配列を保持

const terminal = document.getElementById('terminal');
const output = document.getElementById('output');
const input = document.getElementById('input');

// JSONファイルからメンバーデータを読み込む
fetch('./API/members.json')
    .then(response => response.json())
    .then(data => {
        members = data;  // データをグローバル変数に格納
        console.log('Members data loaded:', members);  // デバッグ情報
    })
    .catch(error => {
        console.error('Failed to load members data:', error);
    });

input.addEventListener('keyup', function(event) {
    if (event.ctrlKey && event.key === 'l') {
        event.preventDefault();
        output.innerHTML = '';
        return;
    }
    
    if (event.key === 'Enter') {
        event.preventDefault();
        const cmd = input.value.trim();
        if (cmd !== '') {
            const commandOutput = `$ ${cmd}`;
            processCommand(cmd, commandOutput);
        }
        input.value = '';
    }
});

function processCommand(cmd, commandOutput) {
    let response = '';
    const args = cmd.split(' ');
    const command = args[0].toLowerCase();
    const name = args.slice(1).join(' ');

    if (command == 'git') {
      response = 'There is not your terminal ;)';
      output.innerHTML += `\n${commandOutput}\n${response}`;
      return;
  }

    switch (command) {
        case 'help':
            response = help.join('\n');
            break;
        case 'info':
            response = info;
            break;
        case 'qiita':
          response = qiita
          break
        case 'github':
            response = github
            break
        case 'members':
            response = members.map(m => m.name).join(', ');
            break;
        case 'member':
            if (name) {
                const member = members.find(m => m.name.toLowerCase() === name.toLowerCase());
                if (member) {
                    response = createMemberDetailHTML(member);
                    output.innerHTML += `\n${commandOutput}\n${response}`;
                    return;
                } else {
                    response = 'Member not found';
                }
            } else {
                response = 'Please specify a member name.';
            }
            break;
        case 'git':
            response = members.map(m => m.name).join(', ');
            break;
        default:
            response = `${cmd}: command not found. Please use help command`;
            break;
    }
    output.innerHTML += `\n${commandOutput}\n${response}`;
}

function createMemberDetailHTML(member) {
    return `Name: ${member.name}<br>Twitter: <a href="${member.twitterUrl}" target="_blank">${member.twitterUrl}</a><br>GitHub: <a href="${member.githubUrl}" target="_blank">${member.githubUrl}</a><br>Platforms: ${member.platforms}<br>Bio: ${member.bio}<br><img src="${member.icon}" alt="Icon" style="width: 100px; height: 100px;"><br>`;
}

window.onload = function() {
    output.innerHTML = welcomMessage;
    input.focus(); // Automatically focus the input field
};
