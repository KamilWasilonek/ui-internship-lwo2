export class Human {
  constructor(name, sex) {
    this.sex = sex;
    this.name = name;
  }
}

export class Man extends Human {
  constructor(name) {
    super(name, 'male');
  }
}

export class Woman extends Human {
  constructor(name) {
    super(name, 'female');
  }
}

export class God {
  static create() {
    return [new Man('Adam'), new Woman('Eve')];
  }
}
