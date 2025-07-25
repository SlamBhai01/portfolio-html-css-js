// Scroll to Top Button Logic
window.onscroll = function () {
  const scrollBtn = document.getElementById("scrollTopBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Toggle Projects Section
function toggleProjects() {
  const projectSection = document.getElementById("projects");
  if (projectSection.style.display === "none") {
    projectSection.style.display = "block";
  } else {
    projectSection.style.display = "none";
  }
}

// Demo Contact Action
function contactMe() {
  alert("Thank you for reaching out! I’ll reply to your email soon.");
}
