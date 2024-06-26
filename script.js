const icons = document.querySelectorAll(".icon");

// Add click event listeners to each icon
icons.forEach((icon) => {
  icon.addEventListener("click", function (event) {
    const contactInfo = icon.querySelector(
      ".contact-infoPhone, .contact-infoMail"
    );
    if (contactInfo && !event.target.closest(".contact-infoMail span")) {
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
});

// Handle click events for the email link and phone numbers specifically
document.addEventListener("click", function (event) {
  const emailLink = event.target.closest(".contact-infoMail span");
  if (emailLink) {
    window.location.href = "mailto:" + emailLink.textContent;
  }

  const phoneNumber = event.target.closest(".phone-number span");
  if (phoneNumber) {
    window.location.href = "tel:" + phoneNumber.textContent;
  }
});
