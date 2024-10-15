function serialize(numbers) {
    let bitString = '';
    
    // Преобразуем каждое число в 9-битную строку
    numbers.forEach(num => {
        bitString += num.toString(2).padStart(9, '0');
    });
    
    // Разбиваем строку на 8-битные блоки и конвертируем в ASCII символы
    let serializedString = '';
    for (let i = 0; i < bitString.length; i += 8) {
        let byte = bitString.slice(i, i + 8);
        serializedString += String.fromCharCode(parseInt(byte, 2));
    }
    
    return serializedString;
}

function deserialize(serializedString) {
    let bitString = '';
    
    // Преобразуем каждый символ в 8-битную строку
    for (let i = 0; i < serializedString.length; i++) {
        bitString += serializedString.charCodeAt(i).toString(2).padStart(8, '0');
    }

    let numbers = [];
    for (let i = 0; i < bitString.length; i += 9) {
        let numberBits = bitString.slice(i, i + 9);
        if (numberBits.length === 9) { // игнорируем остатки менее 9 бит
            numbers.push(parseInt(numberBits, 2));
        }
    }
    
    return numbers;
}

module.exports = { serialize, deserialize };
