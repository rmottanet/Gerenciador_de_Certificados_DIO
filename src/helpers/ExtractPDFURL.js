function extractPDFURL(urlCert) {
  var response = UrlFetchApp.fetch(urlCert);
  var content = response.getContentText();

  var startIndex = content.indexOf('href="https://hermes.digitalinnovation.one/certificates/');
  
  if (startIndex !== -1) {
    var endIndex = content.indexOf('.pdf', startIndex);
    
    if (endIndex !== -1) {
      var pdfUrl = content.substring(startIndex + 6, endIndex + 4);
      return pdfUrl;
    }
  }
  
  return null;
}
