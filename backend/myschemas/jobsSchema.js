const jobsSchema = {
    jobTitle: {
      notEmpty: {
        errorMessage: "job title cannot be empty",
      },
    },
    companyName: {
      notEmpty: {
        errorMessage: "company cannot be empty",
      },
    },
    jobLocation: {
      notEmpty: {
        errorMessage: "job location cannot be empty",
      },
    },
    jobEntryLevel: {
      notEmpty: {
        errorMessage: "job level cannot be empty",
      },
    },
    jobDescription: {
      notEmpty: {
        errorMessage: "job description cannot be empty",
      },
    },
  };
  
  export { jobsSchema };
  