
const drumBank = [Q, W, E, A, S, D, Z, X, C]



   


$(document).ready(function() {

    var checkbox = document.querySelector('input[type="checkbox"]')

    checkbox.addEventListener('change', function() {
        
        if (checkbox.checked) {

     


$('.drum-pad').click(function(event) {
    var drumName = `${this.id}`
    var drum = $(this).children("p").html()
    for (let i = 0; i < drumBank.length; i++) {
        if (drum === drumBank[i].id) {
            document.getElementById('display').innerText = drumName.toUpperCase()
            drumBank[i].play()
        }
        
    }
})

$(document).keydown(function(event) {
    
    let audioBank = $(this).find("audio")
    var key = `${event.which}`
    var letter = String.fromCharCode(key)
    for (let item of audioBank) {
        if (letter === item.id) {
            item.play()
        }
    }
})

$(document).keydown(function(event) {
    let drumNameBank = $(this).find('.drum-pad')
    
    var key = `${event.which}`
    var letter = String.fromCharCode(key)
    for (let item of drumNameBank) {
        let innerText = item.childNodes[1].innerHTML
        
        if (letter === innerText) {
            let drumName = item.id
            document.getElementById('display').innerText = drumName.toUpperCase()
        }
    }
})


} else {
    document.getElementById('display').innerText = "OFF"
}
})


})





