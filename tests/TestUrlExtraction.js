function testUrlExtraction() {
  var emailContent = `[image: Digital Innovation One] 
<https://2lspc0k8.r.us-east-1.awstrack.me/L0/https:%2F%2Fdio.me%2Fcertificate%2F3BC06686%2Fshare/1/0100018705ff1817-32a69667-2920-4e95-9dd5-fca668160648-000000/Uzx80Xp3DKvvSfDVvxE0_OImZK4=314> 

Parabéns Rodrigo! Você acaba de dar um grande passo rumo ao sucesso, 
finalizando o bootcamp Bootcamp Cloud AWS. 

Clique no botão abaixo para adicionar o certificado ao seu LinkedIn ou 
fazer o download:
Adicionar certificado no LinkedIn 
<https://www.linkedin.com/profile/add?startTask=Bootcamp Cloud AWS> 
Download do certificado 
<https://2lspc0k8.r.us-east-1.awstrack.me/L0/https:%2F%2Fdio.me%2Fcertificate%2F3BC06686%2Fshare/2/0100018705ff1817-32a69667-2920-4e95-9dd5-fca668160648-000000/tJIjHF1ybbnjYDdrvbqzSc71GC4=314> 

<https://2lspc0k8.r.us-east-1.awstrack.me/L0/https:%2F%2Fweb.dio.me%2Fpro%3Ftype=annual%26cupom=DIOCHECKOUT%26utm_source=emailtransacional%26utm_medium=email%26utm_campaign=emailtransacional%26utm_id=email%2Btransacional%2522/1/0100018705ff1817-32a69667-2920-4e95-9dd5-fca668160648-000000/KpOhg-gkN3jH9Xwfm9VW7NoFYyE=314>`;

  var extractedUrl = extractURLfromMail(emailContent);

  var expectedUrl = "https://2lspc0k8.r.us-east-1.awstrack.me/L0/https:%2F%2Fdio.me%2Fcertificate%2F3BC06686%2Fshare/2/0100018705ff1817-32a69667-2920-4e95-9dd5-fca668160648-000000/tJIjHF1ybbnjYDdrvbqzSc71GC4=314";

  if (extractedUrl === expectedUrl) {
    Logger.log("Test passed: URL extracted successfully.");
  } else {
    Logger.log("Test failed: URL extraction mismatch.");
    Logger.log("Expected URL: " + expectedUrl);
    Logger.log("Extracted URL: " + extractedUrl);
  }
}

