'use strict';
        // Создаем массив с числами
        const numbers = [12, 45, 67, 23, 89, 34, 56, 78, 90, 11];

        // Выводим массив на страницу
        const arrayOutput = document.getElementById('array-output');
        arrayOutput.innerHTML = `<h2>Массив чисел:</h2><p>${numbers.join(', ')}</p>`;

        const ctx = document.getElementById('chart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: numbers.map((_, index) => `Элемент ${index + 1}`),
                datasets: [{
                    label: 'Значения массива',
                    data: numbers,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });