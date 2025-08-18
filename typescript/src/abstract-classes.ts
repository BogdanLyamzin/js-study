interface EmployeeProps {
  name: string;
  lastName: string;
  position: string;
  sallaryPerHour: number;
}

abstract class Employee {
  name: string;
  lastName: string;
  positon: string;
  sallaryPerHour: number;
  protected abstract probation: boolean;

  constructor({ name, lastName, position, sallaryPerHour }: EmployeeProps) {
    this.name = name;
    this.lastName = lastName;
    this.positon = position;
    this.sallaryPerHour = sallaryPerHour;
  }

  isPositiveNumber(value: unknown) {
    return (
      typeof value === "number" &&
      !Number.isNaN(value) &&
      Number.isFinite(value) &&
      value > 0
    );
  }

  abstract calcSallary(workHours: number): number;
}

class FullTimeEmployee extends Employee {
  protected probation: boolean = true;
  private workTerm: number = 0;

  constructor({ name, lastName, position, sallaryPerHour }: EmployeeProps) {
    super({ name, lastName, position, sallaryPerHour });
  }

  addWorkTerm(term: number) {
    if (!this.isPositiveNumber(term)) {
      throw new Error("term must be number greater then 0");
    }
    this.workTerm += term;
    if (this.workTerm > 6) {
      this.probation = false;
    }
  }

  calcSallary(): number {
      const workYears = Math.floor(this.workTerm / 12);
      return this.sallaryPerHour * 180 * (1 + workYears / 10);
  }
}

class PartTimeEmployee extends Employee {
  protected probation: boolean = false;

  constructor({ name, lastName, position, sallaryPerHour }: EmployeeProps) {
    super({ name, lastName, position, sallaryPerHour });
  }

  calcSallary(workHours: number): number {
      return this.sallaryPerHour * workHours;
  }
}

const newFullTimeEmployee = new FullTimeEmployee({ name: "Bohdan", lastName: "Liamzin", sallaryPerHour: 50, position: "FullStack Developer" });


