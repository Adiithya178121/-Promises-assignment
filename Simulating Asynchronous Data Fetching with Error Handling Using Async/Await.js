function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random(); // Generates number between 0 and 1
      if (random > 0.5) {
        resolve("Data received successfully!");
      } else {
        reject(new Error("Failed to fetch data"));
      }
    }, 1000);
  });
}

async function fetchDataHandler() {
  try {
    const result = await fetchData();
    console.log("Fetched data successfully!", result);
  } catch (error) {
    console.log("Error fetching data:", error.message);
  }
}
fetchDataHandler();
