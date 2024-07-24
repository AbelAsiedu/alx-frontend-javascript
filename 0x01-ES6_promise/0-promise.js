// 0-promise.js

function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        // Simulating an asynchronous operation (like fetching data)
        setTimeout(() => {
            resolve("Response from API"); // You can customize the response
        }, 1000); // Simulate a delay of 1 second
    });
}

export default getResponseFromAPI;
