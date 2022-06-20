function valueSelection(firstValue, lastValue, valueArray) {

    let newArray = [];

    let countArray = valueArray.length;

    if (firstValue > lastValue) {
        return "Nilai akhir harus lebih besar dari nilai awal";
    } else if (5 > countArray) {
        return "Jumlah angka dalam dataArray harus lebih dari 5";
    } else {
        for (let i = 0; i < countArray; i++) {
            if (valueArray[i] > firstValue && valueArray[i] < lastValue) {
                newArray.push(valueArray[i]);
            }
        }
        return newArray.sort((a, b) => a - b);
    }

}

console.log(valueSelection(5, 20, [2, 25, 4, 14, 17, 30, 8]))

// bingung kak mau revisi yg mana, jadinya saya cuman copas dari task3