document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent actual form submission

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const response = document.getElementById("responseMessage");

  // Simple validation
  if (name === "" || email === "" || message === "") {
    response.style.color = "red";
    response.textContent = "Please fill in all fields.";
    response.style.display = "block";
    return;
  }

  // Basic email pattern check
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    response.style.color = "red";
    response.textContent = "Please enter a valid email address.";
    response.style.display = "block";
    return;
  }

  // Show success message
  response.style.color = "green";
  response.textContent = "Thank you! Your message has been sent.";
  response.style.display = "block";

  // Reset form
  document.getElementById("contactForm").reset();
});


/** this section is for gallery */

const images = [
  "images/img1.png",
  "images/img2.png",
  "images/img3.png",
  "images/img4.png",
  "images/img5.png",
  "images/img6.png",
  
];

const gallery = document.getElementById("imageGallery");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close-btn");

// Add images to gallery
images.forEach((src) => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = "Project Image";

  // On click, show lightbox
  img.addEventListener("click", () => {
    lightboxImg.src = src;
    lightbox.style.display = "flex";
  });

  gallery.appendChild(img);
});

// Close button logic
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Close when clicking outside the image
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});