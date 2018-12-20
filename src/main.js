/*
游戏主程序
*/
import * as THREE from '../libs/three'  
window.THREE = THREE
import game from './game/game'
GameGlobal.ImageBitmap = function() {} // <- HERE
class Main{
  init (){
    game.init()
  }
}

export default new Main()