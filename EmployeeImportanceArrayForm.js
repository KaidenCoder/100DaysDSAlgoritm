var GetImportance = function (employees, id) {
    let len = employees.length;
    let idx;
    for (let i = 0; i < len; i++) {
        if (employees[i][0] == id) {
            idx = i;
            break;
        }
    }
    let subids = employees[idx][2];
    let len1 = subids.length;
    let sum = 0;
    let j = 0;
    let k = 0;

    while (j < len && k < len1) {
        if (subids[k] == employees[j][0]) {
            sum = sum + employees[j][1]
            k = k + 1
            j = j + 1
        } else {
            j = j + 1
        }
    }

    let totalSum = sum + employees[idx][1]
    return totalSum;
};

console.log(GetImportance([[1, 5, [2, 3]], [2, 3, []], [3, 3, []]], 1))

console.log(GetImportance([[1, 2, [2]], [2, 3, []]], 2))