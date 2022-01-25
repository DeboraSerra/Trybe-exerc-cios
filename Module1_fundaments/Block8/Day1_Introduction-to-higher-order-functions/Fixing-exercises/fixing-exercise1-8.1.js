const wakeUp = () => 'Waking up!';

const breakfast = () => 'Let\'s have some coffee!';

const sleep = () => 'Back to sleep!!';

const doingThings = (func) => console.log(func());

doingThings(wakeUp);
doingThings(breakfast);
doingThings(sleep);