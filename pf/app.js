// document.addEventListener("DOMContentLoaded", () => {
//   // 1. Form Submission Alert
//   const form = document.querySelector("form");
//   if (form) {
//     form.addEventListener("submit", () => {
//       setTimeout(() => {
//         alert("Thank you for reaching out! I will get back to you soon.");
//       }, 500);
//     });
//   }

//   // 2. Sidebar Toggle
//   const toggle = document.getElementById("menu-toggle");
//   const sidebar = document.getElementById("sidebar");

//   if (toggle && sidebar) {
//     toggle.addEventListener("click", () => {
//       sidebar.style.display = sidebar.style.display === "flex" ? "none" : "flex";
//     });

//     // 3. Auto-close sidebar when link is clicked
//     const sidebarLinks = sidebar.querySelectorAll("a");
//     sidebarLinks.forEach(link => {
//       link.addEventListener("click", () => {
//         sidebar.style.display = "none";
//       });
//     });
//   }
// });

document.addEventListener("DOMContentLoaded", () => {
  // Sidebar toggle
  const toggle = document.getElementById("menu-toggle");
  const sidebar = document.getElementById("sidebar");

  toggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });

  // Close sidebar when a link is clicked
  const sidebarLinks = sidebar.querySelectorAll("a");
  sidebarLinks.forEach(link => {
    link.addEventListener("click", () => {
      sidebar.classList.remove("active");
    });
  });

  // Show alert after form submission
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", () => {
      setTimeout(() => {
        alert("Thank you for reaching out! I will get back to you soon.");
      }, 500);
    });
  }
});
