import 'phaser';
import StateManager from "./States/StateManager";
import * as GameStates from './States/Game';

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 540,
    height: 960,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('logo', 'assets/logo.png');
}

function create ()
{
    var logo = this.add.image(400, 150, 'logo');

    var gameStateManager = new StateManager(GameStates);
    gameStateManager.state = gameStateManager.states.Menu;

    gameStateManager.state = gameStateManager.states.Playing;

    console.log(gameStateManager);
}

function update(){
    StateManager.update();
}
