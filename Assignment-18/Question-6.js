// A function that asynchronously fetches data from an API and logs the result to the console

async function fetchData () {
    const jsonData = await fetch ('https://jsonplaceholder.typicode.com/todos/1');
    const jsData = await jsonData.json ();
    console.log(jsData);
}
fetchData()