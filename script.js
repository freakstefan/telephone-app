/** @format */

class Phone {
  constructor() {
    this.numbers = new Set();
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notifyObservers(phoneNumber) {
    this.observers.forEach((observer) => observer.notify(phoneNumber));
  }

  addNumber(phoneNumber) {
    this.numbers.add(phoneNumber);
  }

  removeNumber(phoneNumber) {
    this.numbers.delete(phoneNumber);
  }

  dialNumber(phoneNumber) {
    if (this.numbers.has(phoneNumber)) {
      console.log(`Dialing ${phoneNumber}...`);
      this.notifyObservers(phoneNumber);
    } else {
      console.log(`Error: Number ${phoneNumber} not found.`);
    }
  }
}

class PhoneObserver {
  constructor(callback) {
    this.callback = callback;
  }

  notify(phoneNumber) {
    this.callback(phoneNumber);
  }
}

const myPhone = new Phone();

const printNumberObserver = (phoneNumber) => {
  console.log(`Dialed: ${phoneNumber}`);
};

const nowDialingObserver = (phoneNumber) => {
  console.log(`Now Dialing ${phoneNumber}`);
};

const observer1 = new PhoneObserver(printNumberObserver);
const observer2 = new PhoneObserver(nowDialingObserver);

myPhone.addObserver(observer1);
myPhone.addObserver(observer2);

myPhone.addNumber("123-456-7890");
myPhone.addNumber("987-654-3210");

myPhone.dialNumber("123-456-7890");

myPhone.removeNumber("123-456-7890");

myPhone.dialNumber("123-456-7890");
