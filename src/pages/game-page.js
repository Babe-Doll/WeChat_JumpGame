export default class GamePage {
    constructor (callbacks) {
        this.callbacks = callbacks
    }
    init (){
        console.log('game page init')
        var width = window.innerWidth
        var height = window.innerHeight
        var renderer = new THREE.WebGLRenderer({
            canvas: canvas
        })
        // 在scence中维护我们在场景中调用的物体
        var scene =new THREE.Scene()
        this.scene = scene
        // 正交相机 没有透视效果的
        var camera = new THREE.OrthographicCamera(-width/ 2,width/ 2,height/ 2,-height/ 2, -1000, 1000)

        renderer.setClearColor(new THREE.Color(0x000000))
        renderer.setSize(375, 667)

        var triangleShape = new THREE.Shape()
        triangleShape.moveTo(0,100)
        triangleShape.lineTo(-100, -100)
        triangleShape.lineTo(100, -100)
        triangleShape.lineTo(0, 100) 

        var geometry = new THREE.ShapeGeometry(triangleShape)
        var material = new THREE.MeshBasicMaterial({
            color: 0xff0000,
            // 不写就只显示一面
            side: THREE.DoubleSide
        })
        //  geometry类似vertex着色器 material类似fragment
        var mesh = new THREE.Mesh(geometry, material)

        // 物体在0,0,1。 z是1是因为照相机要放在0,0,0,
        mesh.position.x=0
        mesh.position.y=0
        mesh.position.z=1
        this.mesh = mesh
        scene.add(mesh)


        //helper
        var axsHelper = new THREE.AxesHelper(100)
        // scene.add(axsHelper)

        camera.position.x=0
        camera.position.y=0
        camera.position.z=0
        camera.lookAt(new THREE.Vector3(0, 0, 1))

        var currentAngle = 0
        var lastTimestamp = Date.now()

        var animate = function () {
            var now = Date.now()
            var duration = now - lastTimestamp
            lastTimestamp = now
            currentAngle = currentAngle + duration / 1000 * Math.PI
        }
        
        // 触发所有callback
        setTimeout(()=> { 
            this.callbacks.showGameOverPage()
        }, 2000)

        var render = function () {
            animate()
            mesh.rotation.set(0, 0, currentAngle)
            renderer.render(scene, camera)
            requestAnimationFrame(render)
        }

        render()

    }
    show (){
        this.mesh.visible = true
    }
    hide (){
        this.mesh.visible = false
    }
    restart (){
        console.log('game page restart')
 
    }
}