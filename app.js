const button = document.querySelector('.noteBtn');

const noteText = document.querySelector('.noteText');

const container = document.querySelector('.container');

// const trashIcon = document.querySelector('.fa-trash-can');

button.addEventListener("click", () => {
  let noteCon = document.createElement("div");
  noteCon.classList.add("note");

  let noteText = document.createElement("div");
  noteText.classList.add("noteText");
  noteText.contentEditable = "true";

  let removeIcon = document.createElement("div");
  removeIcon.classList.add('removeIcon');

  const icon = document.createElement('i');
  icon.classList.add('fa-solid', 'fa-trash-can');

  container.appendChild(noteCon);
  noteCon.appendChild(noteText);
  noteCon.appendChild(removeIcon);
  removeIcon.appendChild(icon);

  icon.addEventListener("click", () => {
    container.removeChild(noteCon);
  });
});
