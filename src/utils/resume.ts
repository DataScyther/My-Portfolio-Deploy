export const downloadResume = () => {
  // Create a temporary anchor element
  const link = document.createElement('a');
  
  // Set the href to the resume file path
  link.href = '/resume.pdf';
  
  // Set the download attribute with the desired filename
  link.download = 'Nishant_Kumar_Resume.pdf';
  
  // Append to the document, trigger the click, and remove the element
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
