// const icons = document.querySelectorAll(".icon");

// // Add click event listeners to each icon
// icons.forEach((icon) => {
//   icon.addEventListener("click", function (event) {
//     // Check if the clicked target is the icon itself or its contact info
//     if (event.target === icon || icon.contains(event.target)) {
//       const contactInfo = icon.querySelector(
//         ".contact-infoPhone, .contact-infoMail"
//       );
//       if (contactInfo) {
//         event.preventDefault();
//         // Toggle active class on clicked icon
//         icon.classList.toggle("active");

//         // Hide all other contact-info elements
//         icons.forEach((otherIcon) => {
//           if (otherIcon !== icon) {
//             otherIcon.classList.remove("active");
//           }
//         });
//       }
//     }
//   });
// });

// // Handle click events for the email link and phone numbers specifically
// document.addEventListener("click", function (event) {
//   const emailLink = event.target.closest(".contact-infoMail a");
//   if (emailLink) {
//     window.location.href = "mailto:" + emailLink.textContent;
//     return;
//   }

//   const phoneNumber = event.target.closest(".phone-number span");
//   if (phoneNumber) {
//     window.location.href = "tel:" + phoneNumber.textContent;
//   }
// });

// const icons = document.querySelectorAll(".icon");

// // Add click event listeners to each icon
// icons.forEach((icon) => {
//   icon.addEventListener("click", function (event) {
//     // Prevent default link behavior only if contact-info is toggled
//     const contactInfo = icon.querySelector(
//       ".contact-infoPhone, .contact-infoMail"
//     );
//     if (contactInfo) {
//       event.preventDefault();
//       // Toggle active class on clicked icon
//       icon.classList.toggle("active");

//       // Hide all other contact-info elements
//       icons.forEach((otherIcon) => {
//         if (otherIcon !== icon) {
//           otherIcon.classList.remove("active");
//         }
//       });
//     }
//   });
// });

// // Handle click events for the email link and phone numbers specifically
// document.addEventListener("click", function (event) {
//   const emailLink = event.target.closest(".contact-infoMail a");
//   if (emailLink) {
//     // Open the email client using mailto link
//     window.location.href = "mailto:" + emailLink.textContent;
//     event.preventDefault();
//     return;
//   }

//   const phoneNumber = event.target.closest(".phone-number span");
//   if (phoneNumber) {
//     // Open the phone app using tel link
//     window.location.href = "tel:" + phoneNumber.textContent;
//   }
// });

const icons = document.querySelectorAll(".icon");

// Add click event listeners to each icon
icons.forEach((icon) => {
  icon.addEventListener("click", function (event) {
    // Prevent default link behavior only if contact-info is toggled
    const contactInfo = icon.querySelector(
      ".contact-infoPhone, .contact-infoMail"
    );
    if (contactInfo && !event.target.closest(".contact-infoMail a")) {
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

// Handle click events for the email link specifically
document.addEventListener("click", function (event) {
  const emailLink = event.target.closest(".contact-infoMail a");
  if (emailLink) {
    // Open the email client using mailto link
    window.location.href = "mailto:" + emailLink.textContent;
    event.preventDefault();
  }
});
