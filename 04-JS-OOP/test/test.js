import assert from 'chai';
import Employee, { Manager } from '../index';

// Test for Manager class which extends from Employee
describe('Manager', () => {
  const mrRajesh = new Manager('Rajesh', 'male', 1999);
  it('should return a number for mrRajesh.age', () => {
    assert.assert.typeOf(mrRajesh.age, 'number');
  });

  it(`should return I'm Rajesh, and I am your Manager for mrRajesh.speak()`, () => {
    assert.assert.equal(mrRajesh.speak(), `I'm Rajesh, and I am your Manager.`)
  });

  it(`should return male of mrRajesh.sex`, () => {
    assert.assert.equal(mrRajesh.sex, 'male');
  });
  it(`should return object for the instance of the class`, () => {
    assert.assert.equal(typeof (mrRajesh), 'object');
  });
  it(`should be an instance of the Manager class`, () => {
    assert.assert.equal(mrRajesh instanceof Manager, true);
  });
});

describe('Employee', () => {
  const mrRajesh = new Employee(undefined, 'clerk', 'm', 1983);
  it(`should return name as Rajesh if no name is given`, () => {
    assert.assert.equal(mrRajesh.name, 'Rajesh');
  });
  it(`should return invalid input if name is not string`, () => {
    const mrRajesh = new Employee(232, 'Driver', 'f', 1988);
    assert.assert.equal(mrRajesh.err, 'invalid input');
  });
});