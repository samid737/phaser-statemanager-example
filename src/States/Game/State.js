export default class State
{
    constructor(){
        console.log(this);
    }

    enter (oldState)
    {
        console.log("oldState:" + oldState.constructor.name);
    }

    exit(newState)
    {
        console.log("newState:" + newState.constructor.name);
    }

    update(){

    }

}
