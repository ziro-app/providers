// error checks
// if header.length === data[0].length
// if values.length >= 2
// if is not null

const sheet = {
  range: "Test2!A1:C1001",
  majorDimension: "ROWS",
  values: [
    ["name", "id", "role"]
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
