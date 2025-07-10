
  document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent actual form submission

    // Get field values
    const email = document.getElementById("email").value.trim();
    const phno = document.getElementById("phno").value.trim();
    const message = document.getElementById("message").value.trim();

    // Email pattern
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Validation
    if (!email || !phno || !message) {
      alert("❌ Please fill in all fields.");
      return;
    }

    if (!emailPattern.test(email)) {
      alert("⚠️ Please enter a valid email address.");
      return;
    }

    if (!/^\d{10}$/.test(phno)) {
      alert("📞 Phone number must be exactly 10 digits.");
      return;
    }

    // If all checks pass
    alert("✅ Form submitted successfully!");
    this.reset(); // Clear form fields
  });

