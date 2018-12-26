import GameOverPage from '../pages/game-over-page'
import GamePage from '../pages/game-page'

class GameView{
    constructor (){ 
    } 
    showGameOverPage (){
        this.gamePage.hide()
        this.gameOverPage.show()
    }
    showGamePage (){
        this.gameOverPage.hide()
        this.gamePage.restart()
        this.gamePage.show()
    }
    restartGame (){
        this.gamePage.restart()
    }
    initGameOverPage (callbacks){
        this.gameOverPage = new GameOverPage(callbacks)
        this.gameOverPage.init({
            scene: this.gamePage.scene
        })
    }
    initGamePage (callbacks){
        // gamepage 当view改变需要驱动model和controller的变化 所以需要具备改上层逻辑的能力，∴传callbacks
        this.gamePage = new GamePage(callbacks)
        this.gamePage.init()
    }
}
// gameview是要持有和渲染各个pages
// 且全局单一 所以是工厂模式
export default new GameView()