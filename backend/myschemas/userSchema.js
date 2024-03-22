const loginSchema = {
  email: {
    notEmpty: {
      errorMessage: "Email cannot be empty",
    },
    isEmail: {
      errorMessage: "Email must be a valid email",
    },
  },
  password: {
    notEmpty: {
      errorMessage: "Password cannot be empty",
    },
  },
};

const signupSchema = {
  ...loginSchema,
  username: {
    notEmpty: {
      errorMessage: "Username cannot be empty",
    },
    isString: {
      errorMessage: "Username must be a string",
    },
  },
};

export { loginSchema, signupSchema };
