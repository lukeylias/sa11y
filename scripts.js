document.addEventListener("DOMContentLoaded", () => {
  // Function to remove 'current' class from all TOC links
  const clearCurrentClass = () => {
    document.querySelectorAll(".aside-toc a").forEach((link) => {
      link.classList.remove("current");
    });
  };

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        // Check if the entry is intersecting (visible)
        if (entry.isIntersecting) {
          // Clear current from all links
          clearCurrentClass();

          // Find the link that corresponds to the id of the intersecting section
          const id = entry.target.getAttribute("id");
          const newCurrentLink = document.querySelector(
            `.aside-toc a[href="#${id}"]`
          );

          // Add 'current' class to the new current link
          if (newCurrentLink) {
            newCurrentLink.classList.add("current");
          }

          // Optional: Stop observing the current entry
          // observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: "0px 0px -50%", // Adjust rootMargin to control when the callback is invoked
      threshold: 0.1, // Threshold: triggers when 10% of the target is visible
    }
  );

  // Observe all sections referenced in the TOC
  document.querySelectorAll("section[id]").forEach((section) => {
    observer.observe(section);
  });
});
