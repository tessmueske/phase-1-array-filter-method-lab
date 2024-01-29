const findMatching = function(array, string){
    let drivers = []
    for (let i = 0; i < array.length; i++) {
        let driverName = array[i];
        if (driverName.toLowerCase() === string.toLowerCase())
            drivers.push(driverName);
}
return drivers;
}

const fuzzyMatch = function(array, string){
    let matchingDrivers = array.filter(driver => driver.startsWith(string));
    return matchingDrivers;
}

const matchName = function(array, string){
    return array.filter(driver => driver.name === string);
}