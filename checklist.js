// Checklist

// 1.
const student = {
    name: 'Abul Bashar',
    age: 24,
    bestFriend: {
        name: 'Nabil',
        age: 24,
        isToxic: false
    },
    time: 7,
    courses: ['Complete web development with JM', 'stackLearnerJsPlaylist', 'jsWesBoss', 'jsBradTraversey', 'cssWithKevinPowell'],
    readBooks: function () {
        console.log(this.name, ': you have 15 books to read within', this.time, 'months')
    }
}
student.readBooks();

// 2.
const templateString = `${student.name} is ${student.bestFriend.age} years old, he likes the course ${student.courses[2]}`
// console.log(templateString);


// 3.1
const eightyNineReturns = () => 40 + (7 * 7);
const result = eightyNineReturns()
// console.log(result)

// 3.2
const devidedBySeven = num => num / 7;
const output = devidedBySeven(89);
// console.log(output)

// 3.3
const addedThenDevidedByTwo = (num1, num2) => (num1 + num2) / 2;
const total = addedThenDevidedByTwo(23, 15);
// console.log(total);

// 3.4

const multiLiner = (num1, num2, num3) => {
    const first = num1 + 7;
    const second = num2 + 7;
    const third = num3 + 7;
    const sum = first + second + third;
    return sum;
}

const multiLinerResult = multiLiner(21, 32, 14);
// console.log(multiLinerResult);


// 4.
// map 
const numbers = [21, 56, 84, 35, 14, 91, 133, 42, 77];
const result2 = numbers.map(number => number / 7);
// console.log(result2);


// filter 
const filter = numbers.filter(number => number < 50);
// console.log(filter)

// find 
const finder = numbers.find(number => number < 50);
// console.log(finder);

// foreach 

// const foreach = numbers.forEach(number => (number / 7) + 2);

// console.log(foreach);
//=====> undefined



// (numbers.forEach(number => console.log(number + 2)));
//======>23
/*58
86
37
16
93
135
44
79*/



// 6.1

const [myName, hisName, myAge, hisAge, myJob, HisJob] = [student.name, student.bestFriend, student.age, student.bestFriend.age, student?.job, student?.bestFriend?.job]

// console.log(myName, hisAge, HisJob);
//======> Abul Bashar 24 undefined


// 6.2
const [, balance] = [...numbers];
// console.log(balance);
//====> 56


