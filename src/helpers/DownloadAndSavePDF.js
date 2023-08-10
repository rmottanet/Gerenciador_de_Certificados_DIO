function downloadAndSavePDF(pdfUrl, email) {
	
	const targetFolderId = 'ID_DA_SUA_PASTA_NO_GOOGLE_DRIVE'; // Substitua pela ID da pasta real
	
	var pdfResponse = UrlFetchApp.fetch(pdfUrl);
	var pdfContent = pdfResponse.getBlob();
	
	var emailDate = email.date;
	var year = emailDate.getFullYear();
	var month = (emailDate.getMonth() + 1).toString().padStart(2, '0');
	var day = emailDate.getDate().toString().padStart(2, '0');
	
	var folder = DriveApp.getFolderById(targetFolderId);
	var fileName = year + "-" + month + "-" + day + "_" + pdfUrl.substring(pdfUrl.lastIndexOf("/") + 1);
	
	folder.createFile(pdfContent).setName(fileName);
	
	console.log("PDF salvo com sucesso no Google Drive.");
  
}
