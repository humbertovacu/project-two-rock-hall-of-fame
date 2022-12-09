if (typeof window !== 'undefined'){
  let bandMembersID = [];
  let bandMembersName = [];
  document.getElementById("add-new-member-btn").addEventListener('click', (event)=> {
      let addedMembers = document.getElementById('added-members');
      
      let form = document.getElementById("newBandForm");
      let inputs = document.getElementsByClassName('new-band-members')
      let currentArtist = form.members.value; 
      let artistOptions = document.getElementsByClassName('artist-option');
    
      for(const option of artistOptions){
          const artistID = option.getAttribute('data-value');
          const artistValue = option.value;
              if(currentArtist === artistValue) {
                  bandMembersName.push(artistValue)
                  form.members.value = artistID
                  bandMembersID.push(form.members.value)}
                  addedMembers.innerText = bandMembersName
      }

      form.members.value = "";
      console.log(bandMembersID)
      console.log(bandMembersName)
      // event.preventDefault();

  })

  document.getElementById('newBandForm').addEventListener('submit', () => {
    let membersInput = document.getElementById('members-array');
    membersInput.value = bandMembersID
    console.log(`band members passed: ${bandMembersID}`)
    if(!bandMembersID){bandMembersID = null}
  })

};


 