class ClassWithPrivateField {
    #privateField;
  
    constructor() {
      this.#privateField = 42;
    }
  }
  
  class SubClass extends ClassWithPrivateField {
    subPrivateField;
  
    constructor() {
      super();
      this.subPrivateField = 23;
    }
  }
  
  const a = new SubClass();
  // SubClass {subPrivateField: 23}
  console.log(a)    