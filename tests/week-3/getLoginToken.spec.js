const { test, expect, request } = require('@playwright/test');

test('Store and print login token', async ({ request }) => {
    
  // Define the login endpoint and payload
  const loginEndpoint = 'https://rahulshettyacademy.com/api/ecom/auth/login';
  const loginPayload = {
    userEmail: 'cesar.christianne@gmail.com',
    userPassword: 'NewApprentice'
  };

  // Send POST request to login endpoint
  const response = await request.post(loginEndpoint, {
    data: loginPayload
  });

  // Check if the response is successful
  expect(response.ok()).toBeTruthy();

  // Extract the token from the response
  const responseBody = await response.json();
  const { token, userId, message } = responseBody;

  // Print the token, userID, and message
  console.log('Login Token:', token);
  console.log('UserID:', userId);
  console.log('Message:', message);

});
