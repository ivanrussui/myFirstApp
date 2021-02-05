function myFirstApp(name, age) {
  alert(`Hello, my name is ${name} and this my first program!`);

  function showSkills() {
    let skills = ['html', 'css', 'js'];
    for (let i = 0; i < skills.length; i++) {
      console.log('I using: ' + skills[i]);
    }
  }

  showSkills();

  function checkAge() {
    age = prompt('You Age?', '31');
    if (age >= 18) {
      console.log('Acess opening!');
    } else if (age < 18) {
      console.log('Acess closed!');
    } else {
      console.log('Error');
    }
  }

  checkAge();

  function calcPow(num) {
    num = +prompt('Enter a number and see its square root!', '5');
    return num * num;
  }
  console.log(calcPow());
}

myFirstApp('Ivan', 31);
