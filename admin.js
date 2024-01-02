// document.getElementById("navbarToggle").addEventListener("click", function () {
//     var navbarMenu = document.getElementById("navbarMenu");
//     if (navbarMenu.style.display === "flex") {
//       navbarMenu.style.display = "none";
//     } else {
//       navbarMenu.style.display = "flex";
//     }
//   });

const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

burger.addEventListener("click", () => {
  menu.classList.toggle("show");
});

const text =
  "I am a junior developer passionate about creating amazing websites.";
const typingText = document.getElementById("typing-text");
let index = 0;

function type() {
  typingText.innerHTML += text.charAt(index);
  index++;
  if (index < text.length) {
    setTimeout(type, 50); // Kecepatan animasi dapat diatur dengan mengubah nilai 100 (dalam milidetik)
  } else {
    setTimeout(resetText, 100); // Mengatur ulang teks setelah 1 detik
  }
}

function resetText() {
  typingText.innerHTML = ""; // Mengosongkan teks
  index = 0; // Mengatur ulang indeks
  type(); // Memulai animasi ketik lagi
}

type(); // Memulai animasi ketik saat halaman dimuat

// // Memuat data komentar dari local storage saat halaman dimuat
// let comments = JSON.parse(localStorage.getItem("productComments")) || [];

// // Fungsi untuk menyimpan data komentar ke local storage
// function saveCommentsToStorage() {
//   localStorage.setItem("productComments", JSON.stringify(comments));
// }

// // Fungsi untuk menampilkan daftar komentar di halaman
// function showComments() {
//   const commentsContainer = document.querySelector(".comments");
//   commentsContainer.innerHTML = "";

//   comments.forEach((comment) => {
//     const commentElement = document.createElement("div");
//     commentElement.className = "comment";
//     commentElement.innerHTML = `
//              <p><strong>Name:</strong> ${comment.name}</p>
//              <p><strong>Email:</strong> ${comment.email}</p>
//              <p><strong>Message:</strong> ${comment.message}</p>
//              <div class="rating">
//                  <input type="radio" id="commentStar5" value="5" ${
//                    comment.rating === "5" ? "checked" : ""
//                  } disabled>
//                  <label for="commentStar5">&#9733;</label>
//                  <input type="radio" id="commentStar4" value="4" ${
//                    comment.rating === "4" ? "checked" : ""
//                  } disabled>
//                  <label for="commentStar4">&#9733;</label>
//                  <input type="radio" id="commentStar3" value="3" ${
//                    comment.rating === "3" ? "checked" : ""
//                  } disabled>
//                  <label for="commentStar3">&#9733;</label>
//                  <input type="radio" id="commentStar2" value="2" ${
//                    comment.rating === "2" ? "checked" : ""
//                  } disabled>
//                  <label for="commentStar2">&#9733;</label>
//                  <input type="radio" id="commentStar1" value="1" ${
//                    comment.rating === "1" ? "checked" : ""
//                  } disabled>
//                  <label for="commentStar1">&#9733;</label>
//              </div>
//          `;
//     commentsContainer.appendChild(commentElement);
//   });
// }

// function sendMessage() {
//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
//   const message = document.getElementById("message").value;
//   const rating = document.querySelector('input[name="rating"]:checked');

//   if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
//     alert("Please fill in all fields before sending the message.");
//   } else if (!rating) {
//     alert("Please select a rating before sending the message.");
//   } else {
//     const newComment = {
//       name: name,
//       email: email,
//       message: message,
//       rating: rating.value,
//     };
//     comments.push(newComment);
//     saveCommentsToStorage(); // Simpan data komentar ke local storage
//     alert(
//       "Message sent successfully!\n\nName: " +
//         name +
//         "\nEmail: " +
//         email +
//         "\nMessage: " +
//         message +
//         "\nRating:" +
//         newComment.rating
//     );
//     showComments(); // Tampilkan daftar komentar yang telah disimpan
//     clearForm();
//   }
// }

// function clearForm() {
//   document.getElementById("name").value = "";
//   document.getElementById("email").value = "";
//   document.getElementById("message").value = "";
//   const ratingInputs = document.querySelectorAll('input[name="rating"]');
//   ratingInputs.forEach((input) => (input.checked = false));
// }

// // Memanggil fungsi untuk menampilkan daftar komentar dari local storage saat halaman dimuat
// showComments();

// // Fungsi untuk menyimpan data ke local storage
// function saveToLocalStorage(data) {
//   localStorage.setItem("comments", JSON.stringify(data));
// }

// // Fungsi untuk membaca data dari local storage
// function readFromLocalStorage() {
//   const data = localStorage.getItem("comments");
//   return data ? JSON.parse(data) : [];
// }

// // Fungsi untuk menampilkan daftar komentar di halaman
// function showComments() {
//   const commentsContainer = document.querySelector(".comments");
//   commentsContainer.innerHTML = "";

//   const comments = readFromLocalStorage();

//   comments.forEach((comment) => {
//     const commentElement = document.createElement("div");
//     commentElement.className = "comment";
//     commentElement.innerHTML = `
//           <p><strong>Name:</strong> ${comment.name}</p>
//           <p><strong>Email:</strong> ${comment.email}</p>
//           <p><strong>Message:</strong> ${comment.message}</p>
//           <div class="rating">
//               <input type="radio" value="5" ${
//                 comment.rating === "5" ? "checked" : ""
//               } disabled>
//               <label>&#9733;</label>
//               <input type="radio" value="4" ${
//                 comment.rating === "4" ? "checked" : ""
//               } disabled>
//               <label>&#9733;</label>
//               <input type="radio" value="3" ${
//                 comment.rating === "3" ? "checked" : ""
//               } disabled>
//               <label>&#9733;</label>
//               <input type="radio" value="2" ${
//                 comment.rating === "2" ? "checked" : ""
//               } disabled>
//               <label>&#9733;</label>
//               <input type="radio" value="1" ${
//                 comment.rating === "1" ? "checked" : ""
//               } disabled>
//               <label>&#9733;</label>
//           </div>
//           <button type="button" onclick="showReplyForm(${
//             comment.id
//           })">Reply</button>
//           <div id="replyForm${comment.id}" class="reply-form">
//               <label for="replyMessage">Your Reply:</label>
//               <textarea id="replyMessage${
//                 comment.id
//               }" name="replyMessage" rows="2"></textarea>
//               <button type="button" onclick="replyToComment(${
//                 comment.id
//               })">Send Reply</button>
//           </div>
//           <div id="replyContainer${comment.id}"></div>
//       `;
//     commentsContainer.appendChild(commentElement);

//     // Tampilkan balasan jika ada
//     if (comment.replies && comment.replies.length > 0) {
//       const replyContainer = document.getElementById(
//         `replyContainer${comment.id}`
//       );
//       comment.replies.forEach((reply) => {
//         const replyElement = document.createElement("div");
//         replyElement.className = "comment reply";
//         replyElement.innerHTML = `
//                   <p><strong>Reply from Website Owner:</strong></p>
//                   <p>${reply}</p>
//               `;
//         replyContainer.appendChild(replyElement);
//       });
//     }
//   });
// }

// // Fungsi untuk menampilkan form balasan
// function showReplyForm(commentId) {
//   const replyForm = document.getElementById(`replyForm${commentId}`);
//   replyForm.style.display = "block";
// }

// // Fungsi untuk melakukan balasan komentar
// function replyToComment(commentId) {
//   const replyMessage = document.getElementById(
//     `replyMessage${commentId}`
//   ).value;
//   if (!replyMessage.trim()) {
//     alert("Please enter your reply before sending.");
//     return;
//   }

//   const comments = readFromLocalStorage();
//   const commentIndex = comments.findIndex(
//     (comment) => comment.id === commentId
//   );
//   if (commentIndex !== -1) {
//     if (!comments[commentIndex].replies) {
//       comments[commentIndex].replies = [];
//     }
//     comments[commentIndex].replies.push(replyMessage);
//     saveToLocalStorage(comments);
//     showComments();
//   }

//   // Clear the reply form
//   const replyForm = document.getElementById(`replyForm${commentId}`);
//   replyForm.style.display = "none";
//   document.getElementById(`replyMessage${commentId}`).value = "";
// }

// // Fungsi untuk mengirimkan pesan dari formulir
// function sendMessage() {
//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
//   const message = document.getElementById("message").value;
//   const rating = document.querySelector('input[name="rating"]:checked');

//   if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
//     alert("Please fill in all fields before sending the message.");
//   } else if (!rating) {
//     alert("Please select a rating before sending the message.");
//   } else {
//     const comments = readFromLocalStorage();
//     const newComment = {
//       id: Date.now(),
//       name: name,
//       email: email,
//       message: message,
//       rating: rating.value,
//     };
//     comments.push(newComment);
//     saveToLocalStorage(comments);
//     showComments();
//     clearForm();
//   }
// }

// // Fungsi untuk mengosongkan formulir
// function clearForm() {
//   document.getElementById("name").value = "";
//   document.getElementById("email").value = "";
//   document.getElementById("message").value = "";
//   const ratingInputs = document.querySelectorAll('input[name="rating"]');
//   ratingInputs.forEach((input) => (input.checked = false));
// }

// // Pemanggilan fungsi untuk menampilkan daftar komentar dari local storage saat halaman dimuat
// showComments();

function showAdminComments() {
  const commentsContainer = document.querySelector(".comments");
  commentsContainer.innerHTML = "";

  // Ambil data komentar dari local storage
  const comments = readFromLocalStorage();

  // Tampilkan daftar komentar
  comments.forEach((comment) => {
    const commentElement = document.createElement("div");
    commentElement.className = "comment";
    commentElement.innerHTML = `
                <div class="meta">
                    <strong>${comment.name}</strong> on ${new Date(
      comment.timestamp
    ).toLocaleString()}
                </div>
                <p>${comment.message}</p>
                <div class="reply-form" style="display: none;">
                    <label for="replyMessage">Your Reply:</label>
                    <textarea name="replyMessage" rows="2"></textarea>
                    <button type="button" onclick="replyToComment(${
                      comment.id
                    })">Send Reply</button>
                </div>
                <button type="button" onclick="showReplyForm(${
                  comment.id
                })">Reply</button>
            `;

    // Tampilkan balasan jika ada
    if (comment.replies && comment.replies.length > 0) {
      const replyContainer = document.createElement("div");
      replyContainer.className = "replies";
      comment.replies.forEach((reply) => {
        const replyElement = document.createElement("div");
        replyElement.className = "reply";
        replyElement.innerHTML = `
                        <div class="meta">
                            <strong>You (Admin)</strong> on ${new Date().toLocaleString()}
                        </div>
                        <p>${reply}</p>
                    `;
        replyContainer.appendChild(replyElement);
      });
      commentElement.appendChild(replyContainer);
    }

    commentsContainer.appendChild(commentElement);
  });
}

// Fungsi untuk menampilkan form balasan
function showReplyForm(commentId) {
  const replyForm = document.querySelector(
    `.comment[data-id="${commentId}"] .reply-form`
  );
  replyForm.style.display = "block";
}

// Fungsi untuk melakukan balasan komentar
function replyToComment(commentId) {
  const replyMessage = document.querySelector(
    `.comment[data-id="${commentId}"] .reply-form textarea`
  ).value;
  if (!replyMessage.trim()) {
    alert("Please enter your reply before sending.");
    return;
  }

  // Ambil data komentar dari local storage
  const comments = readFromLocalStorage();

  // Cari komentar yang sesuai berdasarkan ID
  const commentIndex = comments.findIndex(
    (comment) => comment.id === commentId
  );
  if (commentIndex !== -1) {
    if (!comments[commentIndex].replies) {
      comments[commentIndex].replies = [];
    }
    comments[commentIndex].replies.push(replyMessage);
    saveToLocalStorage(comments);
    showAdminComments();
  }

  // Clear the reply form
  const replyForm = document.querySelector(
    `.comment[data-id="${commentId}"] .reply-form`
  );
  replyForm.style.display = "none";
  replyForm.querySelector("textarea").value = "";
}

// Fungsi untuk menyimpan data ke local storage
function saveToLocalStorage(data) {
  localStorage.setItem("comments", JSON.stringify(data));
}

// Fungsi untuk membaca data dari local storage
function readFromLocalStorage() {
  const data = localStorage.getItem("comments");
  return data ? JSON.parse(data) : [];
}

// Pemanggilan fungsi untuk menampilkan daftar komentar dari local storage di halaman admin saat halaman dimuat
showAdminComments();
