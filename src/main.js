/*
游戏主程序
*/
import * as THREE from '../libs/three'  
window.THREE = THREE
import game from './game/game'

class Main{
  static init(){
    game.init()
  }
}

export default Main()