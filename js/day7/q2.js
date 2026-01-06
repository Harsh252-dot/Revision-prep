async function fetchWithRetry(
  url,
  maxRetries = 3,
  delay = 500 
) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`Attempt ${attempt} failed:`, error.message);

      if (attempt === maxRetries) {
        throw new Error('Failed after multiple retries');
      }

      await new Promise((resolve) =>
        setTimeout(resolve, delay * Math.pow(2, attempt - 1))
      );
    }
  }
}


fetchWithRetry('https://jsonplaceholder.typicode.com/posts/1')
  .then((data) => console.log('Success:', data))
  .catch((err) => console.error('Final Error:', err.message));
