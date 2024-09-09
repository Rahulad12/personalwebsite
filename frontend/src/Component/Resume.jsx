const resumeDownload = () => {
    const link = document.createElement('a');
    link.href = "/Rahul Adhikari Resume.pdf"; // This is the file you are downloading
    link.download = "Rahul_Adhikari_Resume.pdf"; // This will be the downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

export default resumeDownload;