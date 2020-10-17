const Employee = require('../lib/Employee');

//focus on this when we try and build out the constructor functions!!!!!!!!!!!!!!!!!!!

test('Can instantiate Employee instance', () => {
  const e = new Employee();
  expect(typeof (e)).toBe('object');  //when you create a new employee do you get back an object
});

test('Can set name via constructor arguments', () => {
  const name = 'Alice';
  const e = new Employee(name);
  expect(e.name).toBe(name);  //does property of name return back the name this.name = name
});

test('Can set id via constructor argument', () => {
  const testValue = 100;
  const e = new Employee('Foo', testValue);
  expect(e.id).toBe(testValue); //this.id = id
});

test('Can set email via constructor argument', () => {
  const testValue = 'test@test.com';
  const e = new Employee('Foo', 1, testValue);
  expect(e.email).toBe(testValue); //this.email = email
});

test('Can get name via getName()', () => {
  const testValue = 'Alice';
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test('Can get id via getId()', () => {
  const testValue = 100;
  const e = new Employee('Foo', testValue);
  expect(e.getId()).toBe(testValue);
});

test('Can get email via getEmail()', () => {
  const testValue = 'test@test.com';
  const e = new Employee('Foo', 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test('getRole() should return \'Employee\'', () => {
  const testValue = 'Employee';
  const e = new Employee('Alice', 1, 'test@test.com');
  expect(e.getRole()).toBe(testValue);
});
