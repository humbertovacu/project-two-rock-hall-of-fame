document.getElementById('add-member-btn').addEventListener('click', () => {
    const memberLabel = document.getElementById("add-member-label");
    const newMemberInput = document.createElement('input');
    newMemberInput.setAttribute('type', 'text')
    newMemberInput.setAttribute('name', 'members')
    memberLabel.appendChild(newMemberInput)
  });


 