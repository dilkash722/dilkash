export function validateContactForm(data) {
  const errors = {};

  /* ---------- NAME ---------- */
  if (!data.name || data.name.trim().length < 3) {
    errors.name = "Name must be at least 3 characters";
  } else if (!/^[a-zA-Z\s.'-]+$/.test(data.name)) {
    errors.name = "Name contains invalid characters";
  }

  /* ---------- EMAIL ---------- */
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(data.email)) {
    errors.email = "Invalid email address";
  }

  /* ---------- PHONE (OPTIONAL BUT STRICT) ---------- */
  if (data.phone) {
    const phone = data.phone.replace(/\D/g, "");

    if (phone.length < 10 || phone.length > 13) {
      errors.phone = "Invalid phone number";
    }

    // block repeated numbers like 0000000000, 1111111111
    if (/^(\d)\1+$/.test(phone)) {
      errors.phone = "Invalid phone number";
    }
  }

  /* ---------- PROJECT TYPE ---------- */
  if (!data.projectType) {
    errors.projectType = "Please select project type";
  }

  /* ---------- MESSAGE ---------- */
  if (!data.message || data.message.trim().length < 20) {
    errors.message = "Message must be at least 20 characters";
  }

  /* ---------- SPAM & BOT PROTECTION ---------- */
  const lowerMessage = data.message.toLowerCase();

  // spam keywords
  const spamWords = [
    "crypto",
    "bitcoin",
    "investment",
    "loan",
    "casino",
    "bet",
    "forex",
    "trading",
    "adult",
    "porn",
    "sex",
    "http",
    "https",
    "www.",
  ];

  if (spamWords.some((word) => lowerMessage.includes(word))) {
    errors.message = "Suspicious content detected";
  }

  // repeated characters like aaaaa, !!!!!!
  if (/(.)\1{5,}/.test(data.message)) {
    errors.message = "Message looks automated";
  }

  // copy-paste bot pattern
  if (data.message.length > 4000) {
    errors.message = "Message too long";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
