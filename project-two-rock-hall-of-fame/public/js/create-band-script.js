
if (typeof window !== 'undefined'){

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
    newMemberInput.setAttribute('class', 'new-band-members')
    memberLabel.appendChild(newMemberInput)
    // newMemberInput.appendChild(artistsDatalist)
    // artistsDatalist.appendChild(newMemberOption)

    // for(let i=0; i < allArtists.lenght; i++){
    //   let newMemberOption = document.createElement('option');
    //   newMemberOption.setAttribute('value', `${allArtists[i].name}`)
    //   artistsDatalist.appendChild(newMemberOption)
    // }
  }); 

    // document.getElementById('add-band-btn').addEventListener('click', () => {

    //   let allOptions = document.querySelectorAll('#artists-list option')
    //   let memberInput = document.getElementsByClassName('new-band-members')

    //   allOptions.forEach(option => {
    //     let artistListNames = option.getAttributeNode('value').value
    //     let artistListID = option.getAttributeNode('data-value').value
    //     artistListNames = artistListID
    //     console.log(artistListNames)
    //   })
    

      function toID(){
        let allOptions = document.querySelectorAll('#artists-list option')
        let memberInput = document.getElementsByClassName('new-band-members')
  
        allOptions.forEach(option => {
          let artistListNames = option.getAttributeNode('value').value
          let artistListID = option.getAttributeNode('data-value').value
          artistListNames = artistListID
          memberInput.value=artistListID
        })
      }

  
};


 