// A shipping application

let packageType = "Standard";

switch (packageType) {
    case "Standard":
        console.log("Standard might take 3-5 days");
        break;

    case "Express":
        console.log("Express might take 1-2 days");
        break;

    case "Overnight":
        console.log("Overnight would be delivered the next day");
        break;

    default:
        console.log("Wrong input for the package type");
        break;
}
