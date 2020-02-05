const sheet = {
  range: "Test2!A1:C1001",
  majorDimension: "ROWS",
  values: [
    ["name", "id", "role"],
    ["Jon", "1234", "front"],
    ["Mike", "3456", "full"],
    ["Joana", "1212", "full"],
    ["Carol", "9843", "back"]
  ]
};

const { values } = sheet;
const [header, ...data] = values;
const object = data.map(row => {
  return Object.fromEntries(
    row.map((column, index) => {
      return [header[index], row[index]];
    })
  );
});
console.log('FROM:',values)
console.log('TO:',object);
