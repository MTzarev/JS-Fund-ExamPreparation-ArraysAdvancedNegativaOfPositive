function negativaOfPositive(input) {

    let newArr = [];
    for (let num of input) {
        if (num < 0) {
            newArr.unshift(num);
        } else {
            newArr.push(num);
        }
    }
    console.log(newArr.join(`\n`));

}
negativaOfPositive(['7', '-2', '8', '9']);
