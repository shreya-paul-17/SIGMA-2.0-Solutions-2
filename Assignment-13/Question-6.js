// To print the product-related information details 

const productDetails = {
    name: "Apple 2020 MacBook Air Laptop",
    price: 82000,
    color: "Grey",
    hardDisk: "256 GB",
};

console.log(`Below are the product details.`)

for (const property in productDetails) {
  console.log(`${property} : ${productDetails[property]}`);
}

