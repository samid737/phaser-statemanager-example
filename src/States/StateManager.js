export default class StateManager
{
    constructor(manager) {
        this.states = {};
        for(var state in manager)
        {
            this.states[state] = new manager[state];
            if(this.states[state].initial){
                this._state = this.states[state];
            }
        }
    }

    get state()
    {
        return this._state;
    }

    set state(next)
    {
        console.log(next);
        let previous = 0;
        if(this._state != undefined){
            this._state.exit(next);
            previous = this._state;
        }
         this._state = next; 
         this._state.enter(previous);
    }

    update()
    {
        this.state.update();
    }

}