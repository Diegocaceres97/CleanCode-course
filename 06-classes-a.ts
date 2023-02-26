
   
    type Gender = 'M' | 'F';

    class Person {


        constructor(
            public name: string,
            public gender: Gender,
            public birthDate: Date
        ){

        }
    }

    const newPerson = new Person('Diego','M', new Date('1997-10-21'));
    console.log(newPerson);

