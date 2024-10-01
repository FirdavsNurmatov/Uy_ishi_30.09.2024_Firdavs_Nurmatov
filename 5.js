class Circle {
    constructor(radius){
        this.radius = radius
    }

    getArea (){
        let surface = Math.PI * (this.radius**2)
        console.log(surface)
    }

    getPerimeter (){
        let perimeter = (2 * Math.PI) * this.radius
        console.log(perimeter)
    }
}

let circle = new Circle(4)

circle.getArea()
circle.getPerimeter()