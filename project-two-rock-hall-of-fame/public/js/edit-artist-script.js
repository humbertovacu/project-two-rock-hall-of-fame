if (typeof window !== 'undefined'){
  
    let form = document.getElementById("editArtistForm"); 
      
    window.addEventListener('load', () => {
      
    
    const originalGenres = form.bandGenres.value
    let bandGenresArray = originalGenres.split(',');
      
      const genreOptions = document.getElementsByClassName('genre-option')
      for (const genre of genreOptions)
        if(bandGenresArray.includes(genre.innerText)){
          genre.selected = true;
        }
    })
}