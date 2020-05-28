import '../styles/styles.css';

if (module.hot) {
    module.hot.accept();
}

/* Lesson example code below this line */

var john = new Person("John Doe", "Blue");
john.greet();

var jane = new Person("Jane Smith", "Green");
jane.greet();