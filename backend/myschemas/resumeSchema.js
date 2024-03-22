const resumeSchema = {
    fileName: {
      notEmpty: {
        errorMessage: "File name cannot be empty",
      },
    },
    fileType: {
      custom: {
        options: (value) => {
          if (!['pdf', 'docx', 'doc'].includes(value)) {
            throw new Error('Invalid file type. Allowed types are: pdf, docx, doc');
          }
          return true;
        },
      },
    },
    
  };
  
  export { resumeSchema };
  