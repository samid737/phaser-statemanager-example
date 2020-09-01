import State from "./State"; 

export default class Playing extends State
{
    constructor(){
        super();
    }

    enter (oldState)
    {
        super.enter(oldState);
        console.log("enter drolololo")
    }

    exit(newState)
    {
        super.exit(newState);
        console.log("exit drolololo")
    }

    update(){

    }

}

