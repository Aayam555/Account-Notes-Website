const displayImage = (chapter, pages) => {
  let imageHTMLTemplate;
  for (let pageNumber = 1; pageNumber <= pages; pageNumber++){
    imageHTMLTemplate += `
        <a target="_blank" href="../Account Notes/Chapter ${chapter}/page ${pageNumber}.png">
          <img src="../Account Notes/Chapter ${chapter}/page ${pageNumber}.png">
        </a> <br>
      `;
  }
  document.getElementById("images").innerHTML = imageHTMLTemplate.replace("undefined", "");
}
