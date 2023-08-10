function extractCertificateURL(content) {
  var startIndex = content.indexOf("* DO CERTIFICADO *");
  
  if (startIndex !== -1) {
    var endIndex = content.indexOf(">", startIndex);
    
    if (endIndex !== -1) {
      var rawURL = content.substring(startIndex, endIndex + 1);
      // Remover caracteres indesejados do começo e final
      rawURL = rawURL.replace("* DO CERTIFICADO * <", "").replace(">", "").trim();
      
      // Remover caracteres extras da URL
      rawURL = rawURL.replace(/\/\d+\//, "/").replace(/\/\d+-\d+-\d+-\d+-\d+-\d+-\d+\//, "/");
      
      return rawURL;
    }
  }
  
  return null;
}
