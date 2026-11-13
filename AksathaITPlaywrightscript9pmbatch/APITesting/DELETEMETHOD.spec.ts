
import { test, expect } from '@playwright/test';

// DELETE - Remove a specific object
test('API Example 6 - Delete specific object', async ({ request }) => {

  // Send DELETE request to delete the object with ID 7
  const response = await request.delete(
    'https://qualitythoughtnew-employee-api.onrender.com/employees/77'
  );

  // Print the HTTP status code
  console.log('Status Code:', response.status());

  // Assert the expected HTTP status code
  expect(response.status()).toBe(200);

  // Print the HTTP status text
  console.log('Status Text:', response.statusText());

  // Assert the expected HTTP status text
  expect(response.statusText()).toBe('OK');

  // Convert the response body into JSON format
  const data = await response.json();

  // Print the deletion response
  console.log('Delete Response:', data);

  // Assert that the response contains the expected message
  expect(data.message).toContain('deleted');

});