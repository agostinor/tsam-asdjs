function merge(firstArray, secondArray){
    var i = 0;
    var j = 0;
    var newArray = [];

    while(i < firstArray.length && j < secondArray.length){
        if(firstArray[i] < secondArray[j]){
            newArray.push(firstArray[i]);
            i++;
        } else {
            newArray.push(secondArray[j]);
            j++;
        }
    }
    return newArray.concat(firstArray.slice(i)).concat(secondArray.slice(j));
}

