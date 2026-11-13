
import { test, expect } from '@playwright/test';

// GET - Retrieve a specific object by ID
test('API Example 2 - Get specific object', async ({ request }) => {

  // Send GET request to retrieve the object with ID 7
  const response = await request.get(
    'https://qualitythoughtnew-employee-api.onrender.com/employees/76'
  );

  // Assert the expected HTTP status code is 200
  expect(response.status()).toBe(200);

  // Convert the response body into JSON format
  const data = await response.json();

   // Print the object ID
  //console.log('Object ID:', data.id);  //10

//   // Print the object name
  //console.log('Object Name:', data.name);  //Apple iPad Mini 5th Gen

//   // Print the complete data associated with the object
   //console.log('Object Data:', data.data);

//    // Print the complete response data in readable JSON format
  console.log('Complete Response Data:');
  console.log(JSON.stringify(data, null, 2));

    // Print the HTTP status text
  console.log('Status Text:', response.statusText());  //OK

  // Assert the expected HTTP status text is OK
  expect(response.statusText()).toBe('OK');

});
