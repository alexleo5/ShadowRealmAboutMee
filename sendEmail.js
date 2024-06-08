const googleapi = require('googleapis').google;
const gmail = googleapi.gmail('v1');
const OAuth2 = googleapi.auth.OAuth2;

// Replace with your own credentials
const clientId = 'your-client-id';
const clientSecret = 'your-client-secret';
const redirectUri = 'your-redirect-uri';
const refreshToken = 'your-refresh-token';

const oauth2Client = new OAuth2(clientId, clientSecret, redirectUri);
oauth2Client.setCredentials({ refresh_token: refreshToken });

const rawMessage = `
  From: Your Name <your-email@gmail.com>
  To: Recipient Name <recipient-email@example.com>
  Subject: Hello from Gmail API
  ${'\n'}
  This is a test email sent through the Gmail API.
`;
const encodedMessage = Buffer.from(rawMessage)
  .toString('base64')
  .replace(/\+/g, '-')
  .replace(/\//g, '_')
  .replace(/=+$/, '');

const sendMessage = (auth) => {
  return new Promise((resolve, reject) => {
    gmail.users.messages.send(
      {
        auth: auth,
        userId: 'me',
        resource: {
          raw: encodedMessage,
        },
      },
      (err, response) => {
        if (err) reject(err);
        else resolve(response);
      }
    );
  });
};

sendMessage(oauth2Client)
  .then((response) => {
    console.log('Email sent successfully:', response);
  })
  .catch((error) => {
    console.error('Error sending email:', error);
  });