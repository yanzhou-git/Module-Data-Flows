async function getLatestComic() {
  const errorElement = document.getElementById("error");
  const imageElement = document.getElementById("comicImage");

  errorElement.textContent = "";
  imageElement.src = "";

  try {
    const response = await fetch("https://xkcd.now.sh/?comic=latest");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
    imageElement.src = data.img;
    imageElement.alt = data.title;
  } catch (error) {
    console.error("Error fetching comic:", error);
    errorElement.textContent = "Failed to load comic. Please try again.";
  }
}

document.getElementById("loadComic").addEventListener("click", getLatestComic);
