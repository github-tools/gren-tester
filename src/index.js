const test = (str = "", object = {}) => console.log(`Log: ${str}`, object);
const otherTest = (num = 0) => num + 10;

export default test;

export {
  otherTest
};
