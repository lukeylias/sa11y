// Get the navigation bar element
const navbar = document.getElementById("navbar");

// Function to run when the page is scrolled
function onScroll() {
  if (window.scrollY > 80) {
    // Check if the page is scrolled more than 50px
    navbar.classList.add("scrolled"); // Add 'scrolled' class to navbar
  } else {
    navbar.classList.remove("scrolled"); // Remove 'scrolled' class from navbar
  }
}

// Listen for scroll events on the window
window.addEventListener("scroll", onScroll);

/* ==========================================================================
   DOM Content Loaded Listener
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  // Optional: Set the default text for the Table of Contents toggle
  var firstTOCItemText = document.querySelector(".toc li a").textContent;
  if (firstTOCItemText) {
    updateTOCText(firstTOCItemText);
  }

  // Optional: Add event listeners to TOC links for updating text and toggling TOC
  document.querySelectorAll(".toc a").forEach((link) => {
    link.addEventListener("click", (event) => {
      updateTOCText(event.target.textContent);
      toggleTOC(); // Optionally close the TOC
    });
  });

  // Add click event listeners to each expand button
  document.querySelectorAll(".expand-btn").forEach((button) => {
    button.addEventListener("click", () => {
      toggleContent(button); // Pass the button itself to the toggle function
    });
  });

  // Get the button and add click event for 'Back to top' button
  let mybutton = document.getElementById("top-btn");
  if (mybutton) {
    mybutton.addEventListener("click", scrollToTop);
  }

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };
});

/* ==========================================================================
     Toggle Table of Contents
     ========================================================================== */
function toggleTOC() {
  var toc = document.querySelector(".toc");
  if (toc) {
    toc.classList.toggle("active");
  }
}

/* ==========================================================================
     Update Table of Contents Text
     ========================================================================== */
function updateTOCText(selectedText) {
  var tocToggle = document.getElementById("toc-toggle");
  if (tocToggle) {
    tocToggle.textContent = selectedText;
  }
}

/* ==========================================================================
     Section Content Toggle and Scroll
     ========================================================================== */
function toggleContent(buttonElement) {
  var section = buttonElement.closest(".article-section");
  var content = section.querySelector(".additional-content");
  var icon = buttonElement.querySelector(".material-icons");

  var isContentHidden =
    content.style.display === "none" || content.style.display === "";

  // Toggle the display of the content
  content.style.display = isContentHidden ? "block" : "none";
  icon.textContent = isContentHidden ? "expand_less" : "expand_more";

  // If the content is being shown, scroll to the section header
  // If the content is being shown, scroll to the section header
  if (isContentHidden) {
    setTimeout(() => {
      const navbarHeight = 80; // Explicitly set the navbar height to 80px
      const tocHeight = document.querySelector(".toc")?.offsetHeight || 0;
      const additionalOffset = 24; // Space above the TOC

      const sectionTop =
        section.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight -
        tocHeight -
        additionalOffset;

      window.scrollTo({ top: sectionTop, behavior: "smooth" });
    }, 10);
  }
}

/* ==========================================================================
     Back to Top Functionality
     ========================================================================== */
function scrollFunction() {
  let mybutton = document.getElementById("top-btn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

document.getElementById("openVideoBtn").addEventListener("click", function () {
  var videoContainer = document.getElementById("videoContainer");
  if (videoContainer.classList.contains("video-hidden")) {
    videoContainer.classList.replace("video-hidden", "video-visible");
  } else {
    videoContainer.classList.replace("video-visible", "video-hidden");
  }
});
