function downloadPDFAndSaveold(url, filename) {
  var response = UrlFetchApp.fetch(url);
  var content = response.getContent();
  
  var blob = Utilities.newBlob(content, "application/pdf");
  
  // Salvar o blob como um arquivo
  DriveApp.createFile(blob).setName(filename);
}
// src/helpers/DownloadCertificatePDF
function downloadCertificatePDF2() {
  var url = "https://2lspc0k8.r.us-east-1.awstrack.me/L0/https:%2F%2Fwww.dio.me%2Fcertificate%2F630E4BF3%2Fshare/1/01000188726cc670-2ae1b308-b0e9-4f5a-bb3b-8722c6288de2-000000/nSp2OW_-c_Yhivyqez6eN8yrnl4=324"; // Substitua pela URL real

  var response = UrlFetchApp.fetch(url);
  var content = response.getContentText();

  // Localizar a posição do início do link do PDF
  var startIndex = content.indexOf('href="https://hermes.digitalinnovation.one/certificates/');
  
  if (startIndex !== -1) {
    var endIndex = content.indexOf('.pdf', startIndex);
    
    if (endIndex !== -1) {
      var pdfUrl = content.substring(startIndex + 6, endIndex + 4);
      
      // Nome original do arquivo (usando a parte final da URL)
      var fileName = pdfUrl.substring(pdfUrl.lastIndexOf("/") + 1);

      // Download e salvar o PDF no Google Drive
      var pdfResponse = UrlFetchApp.fetch(pdfUrl);
      var pdfContent = pdfResponse.getBlob();
      
      var folder = DriveApp.getFolderById("1er8FZpE-qPZ9GX36rBFdMSAxAIQXMpij"); // Substitua pela ID da pasta real
      folder.createFile(pdfContent).setName(fileName);
      
      console.log("PDF salvo com sucesso: " + fileName);
    } else {
      console.log("Extensão .pdf não encontrada na URL");
    }
  } else {
    console.log("Link do PDF não encontrado na página");
  }
}


function downloadCertificatePDFold() {
  var url = "https://2lspc0k8.r.us-east-1.awstrack.me/L0/https:%2F%2Fwww.dio.me%2Fcertificate%2F630E4BF3%2Fshare/1/01000188726cc670-2ae1b308-b0e9-4f5a-bb3b-8722c6288de2-000000/nSp2OW_-c_Yhivyqez6eN8yrnl4=324"; // Substitua pela URL real

  var response = UrlFetchApp.fetch(url);
  var content = response.getContentText();

  // Decodificar o conteúdo para lidar com caracteres codificados
  content = decodeURIComponent(escape(content));

  var startIndex = content.indexOf('href="');
  var endIndex = content.indexOf('.pdf"', startIndex);

  if (startIndex !== -1 && endIndex !== -1) {
    var pdfUrl = content.substring(startIndex + 6, endIndex + 4);
    var pdfResponse = UrlFetchApp.fetch(pdfUrl);
    var pdfContent = pdfResponse.getBlob();
    
    // Nome original do arquivo (usando a parte final da URL)
    var fileName = pdfUrl.substring(pdfUrl.lastIndexOf("/") + 1);

    // Salvar o PDF no Google Drive
    var folder = DriveApp.getFolderById("1er8FZpE-qPZ9GX36rBFdMSAxAIQXMpij"); // Substitua pela ID da pasta realda pasta real
    folder.createFile(pdfContent).setName(fileName);
  } else {
    console.log("URL do PDF não encontrada");
  }
}

