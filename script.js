const icons = document.querySelectorAll(".icon");

// Add click event listeners to each icon
icons.forEach((icon) => {
  icon.addEventListener("click", function (event) {
    // Prevent default link behavior only if contact-info is toggled
    const contactInfo = icon.querySelector(
      ".contact-infoPhone, .contact-infoMail"
    );
    if (contactInfo) {
      event.preventDefault();
      // Toggle active class on clicked icon
      icon.classList.toggle("active");

      // Hide all other contact-info elements
      icons.forEach((otherIcon) => {
        if (otherIcon !== icon) {
          otherIcon.classList.remove("active");
        }
      });
    }
  });

  // Handle click event for the email link specifically
  const emailLink = icon.querySelector(".contact-infoMail a");
  if (emailLink) {
    emailLink.addEventListener("click", function (event) {
      // Open the email client using mailto link
      window.location.href = "mailto:" + emailLink.textContent;
      event.preventDefault();
    });
  }
});
