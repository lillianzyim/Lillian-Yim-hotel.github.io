function addguest1() {
// numbered guest list
// check if length is less than 4 (index 3)
    if (document.getElementById('guestlist1').children.length > 3) {
        window.alert("Room full. Max occupancy 4 persons per room. Can't have anyone sleeping on the floor yk?")
        // document.getElementById('addguest1bt').disabled = true; idk how to disable ts
    }
    else {
        let g1 = document.createElement('li')
        let newguest = document.createTextNode(document.getElementById('name1').value)
        g1.appendChild(newguest)
        document.getElementById('guestlist1').appendChild(g1)
        // clear input field
        document.getElementById('name1').value =""
        document.getElementById('name1').focus()
    }
}

function removguest1() {
    let tbr = document.getElementById('name1').value
    let removlist = tbr.parentNode
    containerElement.removeChild(tbr)
}
