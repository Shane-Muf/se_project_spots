const profileEditBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileSaveBtn = editProfileModal.querySelector(".modal__submit-btn");

const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");
const newPostSaveBtn = newPostModal.querySelector(".modal__submit-btn");

const profileFormElement = editProfileModal.querySelector(".modal__form");
const profileNameInput = profileFormElement.querySelector(
  "#profile-name-input"
);
const profileJobInput = profileFormElement.querySelector(
  "#profile-description-input"
);

const profileNameElement = document.querySelector(".profile__name");
const profileJobElement = document.querySelector(".profile__description");

const addCardFormElement = newPostModal.querySelector(".modal__form");
const cardNameInput = addCardFormElement.querySelector("#image-caption-input");
const cardLinkInput = addCardFormElement.querySelector("#image-link-input");

profileEditBtn.addEventListener("click", function () {
  profileNameInput.value = profileNameElement.textContent;
  profileJobInput.value = profileJobElement.textContent;
  editProfileModal.classList.add("modal_is-opened");
});

editProfileCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

editProfileSaveBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

newPostCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});

newPostSaveBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileNameElement.textContent = profileNameInput.value;
  profileJobElement.textContent = profileJobInput.value;
}

profileFormElement.addEventListener("submit", handleProfileFormSubmit);

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  console.log(cardNameInput.value);
  console.log(cardLinkInput.value);
}

addCardFormElement.addEventListener("submit", handleAddCardSubmit);
