import State from "./State"; 

export default class Menu extends State
{
    constructor(){
        super(); 
        this.initial = true;
    }

    enter (oldState)
    {
        super.enter(oldState);
        console.log("menustatetest");
    }

    exit(newState)
    {
        super.exit(newState);
        console.log("lalalaalal");
    }

    update(){

    }

}

