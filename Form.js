class Form{
    constructor(){

    }
    display(){
        var title = createElement('h2')
        title.html("CAR RACING GAME")
        title.position(130,0)
        var input = createInput("Name")
        var button = createButton("Play")
        input.position(130,160)
        button.position(250,200)
        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name = input.value()
            var greeting = createElement("h3")
            greeting.html("Hello " + Name)
            greeting.position(130,160)
        })
    }
}