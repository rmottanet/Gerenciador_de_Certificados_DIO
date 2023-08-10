function fetchEmails() {
  var emails = [];
  
  try {
    var threads = GmailApp.search('subject:"Certificado de conclusão", label:"CertificadosDio"');
    
    for (var i = 0; i < threads.length; i++) {
      var messages = threads[i].getMessages();
      
      for (var j = 0; j < messages.length; j++) {
        var content = messages[j].getPlainBody();
        var date = messages[j].getDate();
        
        var emailData = {
          content: content,
          date: date
        };
        
        emails.push(emailData);
      }
    }
    
    return emails;
    
  } catch(err) {
      console.log(err.message);
    return [];
  }
}
