export function deleteTag(event) {
  console.log("de");
  const liElem = event.target.closest("li");
  //getting the ul elem
  liElem.remove();
  inputElem.focus();
}
document.addEventListener("DOMContentLoaded", () => {
  let tags = [];

  function addTag(event) {
    if (event.key === "Enter") {
      //process the input .
      tags.push(inputElem.value);
      let htmlStr = `<li>${inputElem.value}<button class="deleteBtn" type="button">X</button></li>`;
      inputElem.value = "";

      inputElem.parentElement.insertAdjacentHTML("beforebegin", htmlStr);
      inputElem.parentElement.previousSibling.addEventListener(
        "click",
        deleteTag
      );
    }
  }
  function deleteTag(event) {
    console.log("de");
    event.target.parentElement.remove();
    inputElem.focus();
  }

  const inputElem = document.getElementsByClassName("ti-wrapper--input")[0];

  const storedTags = localStorage.getItem("tags");

  if (storedTags) {
    tags = JSON.parse(storedTags);
  }

  inputElem.addEventListener("keyup", addTag);
  inputElem.focus();
});
