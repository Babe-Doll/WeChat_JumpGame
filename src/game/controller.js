import gameView from './gameView'
import gameModel from './gameModel'

class GameController {
    constructor (){
        this.gameView = gameView
        this.gameModel = gameModel
    }
    showGameOverPage =() =>{
        // 用箭头函数的话就不会改掉this ,只能是上层调用这个函数的那个this
        this.gameView.showGameOverPage()
    }
    restartGame =() =>{

    }

    initPages (){
        const gamePageCallbacks ={
            showGameOverPage: this.showGameOverPage
        }

        const gameOverPageCallbacks ={
            gameRestart: this.restartGame
        }

        this.gameView.initGameOverPage(gameOverPageCallbacks)
        this.gameView.initGamePage(gamePageCallbacks)
    }
}