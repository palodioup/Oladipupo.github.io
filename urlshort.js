const btnUrl = document.getElementById("btn-ur");
const urlInp = document.getElementById("url-inp");
const dt = document.getElementById("urlVal");

btnUrl.addEventListener("click", () => {
  const urlInpVal = `${urlInp.value}`;
  const apiUrl = `https://tinyurl.com/api-create.php?url=${urlInpVal}`;

  fetch(apiUrl)
    .then((response) => response.text())
    .then((data) => (dt.innerHTML = `<p>${data}</p>`))
    .catch((error) => alert(error));
});
