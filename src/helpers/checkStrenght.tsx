function checkStrength(password: string) {
  let score = 0;

  if (!password) return "No";
  if (password.length > 8) score += 1;
  if (/[a-z]/.test(password)) score += 1;
  if (/[A-Z]/.test(password)) score += 1;
  if (/\d/.test(password)) score += 1;
  if (/[^A-Za-z0-9]/.test(password)) score += 1;

  switch (score) {
    case 0:
    case 1:
      return "Weak";
    case 2:
      return "Medium";
    case 3:
    case 4:
      return "Strong";
    default:
      return "Weak";
  }
}

export default checkStrength;
