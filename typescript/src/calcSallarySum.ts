interface Employee {
  name: string;
  sallary: number;
}

const calcSallarySum = (arr: Employee[]): number =>
  arr.reduce((acum: number, item: Employee) => item.sallary + acum, 0);

export default calcSallarySum;
