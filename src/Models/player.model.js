class Player {
    name = "";
    funds = "";
    constructor(name, funds){
        this.name = name;
        this.funds = funds;
    }

    get name(){
        return this.name;
    }
    set name(name){
        this.name = name;
    }
    get funds(){
        return this.funds;
    }
    set funds(funds){
        this.funds = funds
    }
    addFunds(amount){
        this.funds += amount;
    }
}
