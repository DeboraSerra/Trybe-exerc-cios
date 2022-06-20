const validateName = (req, res, next) => {
  const { firstName, lastName } = req.body;
  if (!firstName) {
    return res.status(400).json({
      error: true,
      message: "The field 'firstName' is required",
    })
  }
  if (!lastName) {
    return res.status(400).json({
      error: true,
      message: "The field 'lastName' is required",
    })
  }
  next();
}

const validateEmailAndPass = (req, res, next) => {
  const { email, password } = req.body;
  const isValidEmail = email && /[a-zA-Z0-9\W]+@[a-z]+\.[a-z]+/.test(email);
  const isValidPass = password && password.length >= 6 && typeof password === 'string';
  if (!isValidEmail) {
    return res.status(400).json({
      error: true,
      message: "The field 'email' is required",
    })
  }
  if (!isValidPass) {
    return res.status(400).json({
      error: true,
      message: "The field 'password' must have at least 6 characters",
    })
  }
  next();
}

module.exports = {
  validateEmailAndPass,
  validateName,
}
