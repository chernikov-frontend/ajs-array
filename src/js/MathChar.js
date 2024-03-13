export default class MathChar {
    constructor(name, type, distance) {
        this.name = name;
        this.type = type;
        this.level = 1;
        this.health = 100;
        this._stoned = false;
        this.distance = distance;
        this._attack = 100;
    };

    get stoned() {
        return this._stoned;
    }

    set stoned(value) {
        if (typeof value === 'boolean') {
            this._stoned = value;
        } else {
            throw new Error('Неверное значение');
        }
    }

    set attack(value) {
        this._attack = value;
    } 

    get attack() {
        let attack = this._attack * ((11 - this.distance) / 10);

        if (this.stoned) {
        attack -= Math.log2(this.distance) * 5
        }

        return (attack > 0) ? Math.round(attack) : 0;
    }
}