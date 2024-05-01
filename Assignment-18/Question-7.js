// An asynchronous function that retrieves data from 2 different API endpoints

const data = [
    fetch ('https://jsonplaceholder.typicode.com/todos/1'),
    fetch ('https://jsonplaceholder.typicode.com/posts/1')
]
 
async function main () {
    try {
        const result = await Promise.all(data)
        const combinedData = await Promise.all (result.map((item) => {
            return item.json();
        }))
        console.log(combinedData);
    } catch(e) {
        console.log('Multiple requests failed');
    }
}
main()