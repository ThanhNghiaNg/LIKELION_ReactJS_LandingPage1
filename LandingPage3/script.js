for (let i = 1; i <= 3; i++) {
  document.getElementById(`btn-comment-${i}`).addEventListener("click", () => {
    document.getElementById(`comments-content-${i}`).classList.toggle("hidden");
  });
}
document.querySelectorAll(".like").forEach((likeButton) => {
  likeButton.addEventListener("click", () => {
    likeButton.innerHTML = `<i class="fa-solid fa-check"></i><span>Liked</span>`;
  });
});