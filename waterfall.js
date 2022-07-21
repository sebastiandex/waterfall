function findWater(arr) {
    // code goes here
    let firstTop = 0;
    let secondTop = 0;

    // Находим самую высокую точку
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstTop) {
            firstTop = arr[i];
        }
    }

    // Находим вторую по высоте точку
    for (let i = 0; i < arr.length; i++) {
        const moreThenPrev = arr[i] >= secondTop;
        const lessOrEqualMax = arr[i] <= firstTop;
        const hasSameIndex = i === arr.indexOf(firstTop);
        if (moreThenPrev && lessOrEqualMax && !hasSameIndex) {
            secondTop = arr[i];
        }
    }
    // Находим левую и правую точки "резервуара"
    let leftBorder = 0;
    let rightBorder = 0;

    for (let i = arr.length; i >= 0; i--) {
        if (arr[i] === firstTop || arr[i] === secondTop) {
            leftBorder = i;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === firstTop || arr[i] === secondTop) {
            rightBorder = i;
        }
    }

    // Оставляем ту часть массива которая нужна при расчетах
        arr.splice(rightBorder);
        arr.splice(0, leftBorder + 1);

    // Проходим по итоговому массиву и считаем сколько воды помещается в каждом элементе
    const waterArray = arr.map(el => secondTop - el);
    // Складываем полученные значения
    return waterArray.reduce((a, b) => a + b, 0);
}

// keep this function call here
console.log(findWater([6, 2, 1, 1, 2]));
