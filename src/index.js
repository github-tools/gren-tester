const test = (str = "", obj = {}) => console.log(`Log: ${str}`, object);
const otherTest = (num = 0) => num + 1000;
const lastTest = (arr = []) => arr.slice(0, -1);

export default test;

export {
  otherTest,
  lastTest
};
