
if (typeof window !== 'undefined'){
// document.getElementById('add-member-btn').addEventListener('click', () => {
//     const memberLabel = document.getElementById("add-member-label");
//     const newMemberInput = document.createElement('input');
//     newMemberInput.setAttribute('type', 'text')
//     newMemberInput.setAttribute('name', 'members')
//     memberLabel.appendChild(newMemberInput)
//   });

  document.getElementById('add-member-btn').addEventListener('click', () => {

    const memberLabel = document.getElementById('add-member-label');
    const newMemberInput = document.createElement('input');
    // const artistsDatalist = document.getElementById('artists-list')
    // const newMemberOption = document.createElement('option')
    // newMemberOption.setAttribute('value', '{{name}}')
    // newMemberOption.setAttribute('id', 'artists-list')
    newMemberInput.setAttribute('type', 'text')
    newMemberInput.setAttribute('name', 'members')
    newMemberInput.setAttribute('list','artists-list')
    newMemberInput.setAttribute('id', 'new-band-members')
    memberLabel.appendChild(newMemberInput)
    // newMemberInput.appendChild(artistsDatalist)
    // artistsDatalist.appendChild(newMemberOption)

    // for(let i=0; i < allArtists.lenght; i++){
    //   let newMemberOption = document.createElement('option');
    //   newMemberOption.setAttribute('value', `${allArtists[i].name}`)
    //   artistsDatalist.appendChild(newMemberOption)
    // }

  });
};


 