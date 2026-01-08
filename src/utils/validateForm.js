export function validateContactForm(data) {
  const errors = {};

  // Name
  if (!data.name || data.name.trim().length < 3) {
    errors.name = "Name must be at least 3 characters";
  }

  // Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    errors.email = "Invalid email address";
  }

  // Phone (optional but if filled, validate)
  if (data.phone && data.phone.length < 10) {
    errors.phone = "Invalid phone number";
  }

  // Message
  if (!data.message || data.message.trim().length < 15) {
    errors.message = "Message too short (min 15 characters)";
  }

  // Spam keywords (basic protection)
  const spamWords = ["crypto", "bitcoin", "loan", "casino", "bet"];
  if (spamWords.some((word) => data.message.toLowerCase().includes(word))) {
    errors.message = "Suspicious content detected";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
