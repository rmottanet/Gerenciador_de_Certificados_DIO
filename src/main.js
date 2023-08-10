function main() {
  // Obtém os email
  var emails = fetchEmails();
  
  for (var i = 0; i < emails.length; i++) {

    try {

      var email = emails[i];
      var content = email.content;  
      var urlCert = extractURLfromMail(content);
      var urlPDF = extractPDFURL(urlCert);
      
      email.urlcert = urlCert;
      email.urlpdf = urlPDF;
      
      // Download e salvar o PDF no Drive
      downloadAndSavePDF(urlPDF, email);
      
    } catch (error) {
      console.error("Error processing email at index " + i + ": " + error.message);
    }
  }
}
