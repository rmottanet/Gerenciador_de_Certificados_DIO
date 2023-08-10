function extractURLfromMail(content) {
  var startIndex = content.toLowerCase().indexOf("download do certificado");
  
  if (startIndex !== -1) {
    var startTag = "<";
    var endTag = ">";
    
    var startTagIndex = content.indexOf(startTag, startIndex);
    var endTagIndex = content.indexOf(endTag, startTagIndex);
    
    if (startTagIndex !== -1 && endTagIndex !== -1) {
      var extractedURL = content.substring(startTagIndex + startTag.length, endTagIndex);
      return extractedURL;
    }
  }
  
  return null;
}
