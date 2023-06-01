const obj = {
    a: function () {
        console.log(this);
    },
};

class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type);
    }

    play() {
        console.log(`I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Jamil', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark magic');

wizard1.play();
wizard2.introduce();
