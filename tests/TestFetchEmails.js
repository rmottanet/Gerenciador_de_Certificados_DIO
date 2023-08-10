function testFetchEmails() {
  const emails = fetchEmails();
  
  if (emails.length > 0) {
    for (const email of emails) {
      console.log('========================');
      console.log('Date:', email.date);
      console.log('Content:', email.content);
      console.log('========================');
    }
  } else {
    Logger.log('No emails found.');
  }
}

