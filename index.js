// Code your solution in this file!
function distanceFromHqInBlocks(passengerPickupLocation) {
    const hqLocation = 42;
    let result;

    if (passengerPickupLocation >= 42) {
        result = passengerPickupLocation - hqLocation

    } else if (passengerPickupLocation < 42) {
        result = hqLocation - passengerPickupLocation
    }
    return result;
}
console.log(distanceFromHqInBlocks(34));


function distanceFromHqInFeet(passengerPickupLocation) {
    const feetOnOneBlock = 264;
    const distanceInBlocks = distanceFromHqInBlocks(passengerPickupLocation);
    const distanceInFeet = distanceInBlocks * feetOnOneBlock;

    return distanceInFeet;
}
console.log(distanceFromHqInFeet(34));


function distanceTravelledInFeet(startBlock, destinationBlock) {
    const feetOnOneBlock = 264;
    let numberOfBlocksTravelled;

    if (startBlock < destinationBlock) {
        numberOfBlocksTravelled = destinationBlock - startBlock;
    } else {
        numberOfBlocksTravelled = startBlock - destinationBlock;
    }

    const numberOfFeetTravelled = numberOfBlocksTravelled * feetOnOneBlock;

    return numberOfFeetTravelled;
}
console.log(distanceTravelledInFeet(34, 28));


function calculatesFarePrice(start, destination) {
    const feetOnOneBlock = 264;
    const totalFeetTravelled = Math.abs(start - destination) * feetOnOneBlock;

    let priceCharged;

    if (totalFeetTravelled === 264 || totalFeetTravelled <= 400) {
        priceCharged = 0;
    } else if (totalFeetTravelled > 400 && totalFeetTravelled <= 2000) {
        const extraFeetTravelled = totalFeetTravelled - 400;
        const amountCharged = 2/100 * extraFeetTravelled;
        priceCharged = amountCharged;
    } else if (totalFeetTravelled > 2000 && totalFeetTravelled <= 2500) {
        priceCharged = 25;
    } else {
        priceCharged = "cannot travel that far";
    }
    return priceCharged;
}
console.log(calculatesFarePrice(34, 24));
