/**
 * Function to make HTTP requests to the API
 * @param {string} url - The URL of the API endpoint
 * @param {string} httpMethod - The HTTP method (e.g., GET, POST, PUT, DELETE)
 * @param {object|null} payload - The data to be sent in the request body (optional)
 * @returns {Promise<object>} - A Promise that resolves to the API response data
 */
export const apiClient = async (url, httpMethod, payload = null) => {
  try {
    // Set the request headers
    const headers = {
      "Content-Type": "application/json",
    };

    // Configure the request option
    let requestOptions = {
      method: httpMethod,
      headers: headers,
    };

    // Add payload to the request body if present
    if (payload !== null) {
      requestOptions.body = JSON.stringify(payload);
    }

    const response = await fetch(url, requestOptions);
    const result = await response.json();

    // Check if the response status is not 200 (success)
    if (result.status !== 200) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return result;
  } catch (error) {
    // Handle any errors and return an error message
    return { error: error.message };
  }
};
