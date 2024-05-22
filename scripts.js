// document.addEventListener("DOMContentLoaded", () => {
//   // Function to remove 'current' class from all TOC links
//   const clearCurrentClass = () => {
//     document.querySelectorAll(".aside-toc a").forEach((link) => {
//       link.classList.remove("current");
//     });
//   };

//   const observer = new IntersectionObserver(
//     (entries, observer) => {
//       entries.forEach((entry) => {
//         // Check if the entry is intersecting (visible)
//         if (entry.isIntersecting) {
//           // Clear current from all links
//           clearCurrentClass();

//           // Find the link that corresponds to the id of the intersecting section
//           const id = entry.target.getAttribute("id");
//           const newCurrentLink = document.querySelector(
//             `.aside-toc a[href="#${id}"]`
//           );

//           // Add 'current' class to the new current link
//           if (newCurrentLink) {
//             newCurrentLink.classList.add("current");
//           }

//           // Optional: Stop observing the current entry
//           // observer.unobserve(entry.target);
//         }
//       });
//     },
//     {
//       rootMargin: "0px 0px -50%", // Adjust rootMargin to control when the callback is invoked
//       threshold: 0.1, // Threshold: triggers when 10% of the target is visible
//     }
//   );

//   // Observe all sections referenced in the TOC
//   document.querySelectorAll("section[id]").forEach((section) => {
//     observer.observe(section);
//   });
// });

// // Get the button
// let mybutton = document.getElementById("myBtn");

// // Immediately hide the button on page load
// mybutton.style.display = "none"; // Ensure the button is hidden when the page loads

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
// }

document.querySelectorAll(".accordion-item-icon-wrapper").forEach((wrapper) => {
  wrapper.addEventListener("click", (event) => {
    const accordionItem = wrapper.closest(".accordion-item");
    accordionItem.classList.toggle("active");
    const expanded = wrapper.getAttribute("aria-expanded") === "true" || false;
    wrapper.setAttribute("aria-expanded", !expanded);
    event.stopPropagation(); // Prevents the click event from bubbling up to the .accordion-item
  });

  wrapper.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      const accordionItem = wrapper.closest(".accordion-item");
      accordionItem.classList.toggle("active");
      const expanded =
        wrapper.getAttribute("aria-expanded") === "true" || false;
      wrapper.setAttribute("aria-expanded", !expanded);
      event.preventDefault(); // Prevent default action for Enter or Space keys
      event.stopPropagation(); // Prevents the event from bubbling up
    }
  });
});
