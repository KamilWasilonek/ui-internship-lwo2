export class Human {
  constructor(name, sex) {
    this.sex = sex;
    this.name = name;
  }
}

export class Man extends Human {
  constructor(name, sex) {
    super(name, sex);
  }
}

export class Woman extends Human {
  constructor(name, sex) {
    super(name, sex);
  }
}

export class God {
  static create() {
    return [new Man('Adam', 'male'), new Woman('Eve', 'female')];
  }
}
