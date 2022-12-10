if (typeof window !== 'undefined'){
    
  let form = document.getElementById("editBandForm"); 
  const originalGenres = form.bandGenres.value

  form.addEventListener('load', () => {
    let bandGenresArray = originalGenres.split(',');
    const genreOptions = document.getElementsByClassName('genre-option')
    for (const genre of genreOptions)
      if(bandGenresArray.includes(genre.value)){
        genre.selected = true;
      }

  })

  document.getElementById("add-member-btn-edit").addEventListener('click', (event)=> {
        let editMemberLabel = document.getElementById('add-member-label');
        let editMemberInput = document.createElement('input');
        let checkedListLabel = document.createElement('label');
        editMemberInput.type = "checkbox";
        editMemberInput.name = "originalMembers[]";
        editMemberInput.checked = true;
        checkedListLabel.setAttribute('for','originalMembers[]')
        let currentArtist = form.members.value; 
        let artistOptions = document.getElementsByClassName('artist-option');
        let addBreak = document.createElement('br')
      
        for(const option of artistOptions){
            const artistID = option.getAttribute('data-value');
            const artistValue = option.value;
                if(currentArtist === artistValue) {
                    editMemberInput.setAttribute('value',`${artistID}`);
                    let nameForLabel = document.createTextNode(`${form.members.value}`);
                    checkedListLabel.appendChild(nameForLabel);
                    editMemberLabel.appendChild(editMemberInput);
                    editMemberLabel.appendChild(checkedListLabel)
                    editMemberLabel.appendChild(addBreak)
                    let bandGenresArray = originalGenres.split(',');
                    form.members.value = ""
                    }   
        }
    })
  };