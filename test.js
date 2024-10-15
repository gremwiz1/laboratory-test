const { serialize, deserialize } = require('./index');

// Функция для расчета коэффициента сжатия
function calculateCompressionRatio(original, serialized) {
    return original.length / serialized.length;
}

// Тесты
const tests = [
    {
        name: 'Простейший тест',
        input: [1, 2, 3],
    },
    {
        name: 'Случайный массив из 50 чисел',
        input: Array.from({ length: 50 }, () => Math.floor(Math.random() * 300) + 1),
    },
    {
        name: 'Все числа 300 (900 чисел)',
        input: Array.from({ length: 900 }, () => 300),
    },
    {
        name: 'Все числа 1 (1000 чисел)',
        input: Array.from({ length: 1000 }, () => 1),
    },
];

// Запуск тестов
tests.forEach(test => {
    const serialized = serialize(test.input);
    const deserialized = deserialize(serialized);
    const compressionRatio = calculateCompressionRatio(test.input, serialized);
    
    console.log(`Тест: ${test.name}`);
    console.log(`Исходный массив: ${JSON.stringify(test.input.slice(0, 10))}...`);
    console.log(`Сжатая строка: ${serialized.slice(0, 20)}...`);
    console.log(`Результат десериализации: ${JSON.stringify(deserialized.slice(0, 10))}...`);
    console.log(`Коэффициент сжатия: ${compressionRatio.toFixed(2)}`);
    console.log('======================================');
});
