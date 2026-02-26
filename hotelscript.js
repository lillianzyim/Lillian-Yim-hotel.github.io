// OMG YES IT WORKS NOW JS MOVE THE GUESTLIST1 UNDER THE BODY OMG I AM GOD thank you gemini-shifu

// empty guestlist
    //const can only be assigned once, so make sure this is a let
let copygl1 = []

function addguest1() {
// numbered guest list
    // check if length is less than 4 (index 3)
    if (document.getElementById('guestlist1').children.length > 3) {
        window.alert("Room full. Max occupancy 4 persons per room. Can't have anyone sleeping on the floor yk?")
        document.getElementById('addguest1bt').disabled = true; // idk how to disable ts WAIT WHY DOES IT WORK OMG
    }
    // else if didnt type name
    else if (document.getElementById('name1').value.length < 1 ) {
        window.alert("Invalid. Please enter a name.")
    }
    else {
        document.getElementById('addguest1bt').disabled = false
        let g1 = document.createElement('li')
        let newguest = document.createTextNode(document.getElementById('name1').value)
        g1.appendChild(newguest)
        document.getElementById('guestlist1').appendChild(g1)
        // keep track/add name to guestlist
        copygl1.push(document.getElementById('name1').value)
        console.log(copygl1)
        // clear input field
        document.getElementById('name1').value =""
        document.getElementById('name1').focus()
    }
}

function removguest1() {
    // to be removed
    let tbr = document.getElementById('name1').value
    let tbri = copygl1.indexOf(tbr)
    // if tbr not in copygl1
    if (copygl1.includes(tbr) == false) {
        window.alert('Name not found')
    }
    // else/if tbr found, remove it
    else {
        // for (created var removli) of each item in the children <li> of guestlist1
        for (let removli of Array.from(guestlist1.children)) {
            // if the textContent of 
            if (removli.textContent === tbr) {
                // let removlist = __.parentNode
                guestlist1.removeChild(removli)
                // splice(indexOf) to remove specific element from array, 1 deletecount
                copygl1.splice(tbri, 1)
                console.log(copygl1)
                // clear input field
                document.getElementById('name1').value =""
                document.getElementById('name1').focus()
            }
        }}
    console.log(copygl1)
}

// solely to clear names as in restart, not total checkout
function clearrm1() {
    // remove all textnodes
    // this loop takes the first child and removes it, but it repeats so the each element gets pushed up to firstChild until empty
    while (guestlist1.firstChild) {
        guestlist1.removeChild(guestlist1.firstChild)
    }
    copygl1 = []
    console.log(copygl1)
    document.getElementById('addguest1bt').disabled = false
}

let statusrm1 = false

//  THE LIGHT SWITCH THING CHECKOUT/CLEAN
function checkoutrm1() {
    clearrm1()
    // CLEANING ON
    if (statusrm1 == false) {
        // set it to true
        statusrm1 = true
        // uhh the style thing is erroring
        document.getElementById('statusrm1holder').style.color = "red"
        document.getElementById('statusrm1holder').innerText = "Closed for CLEANING"
        // disable all buttons
        document.getElementById('addguest1bt').disabled = true
        document.getElementById('removguest1bt').disabled = true
        document.getElementById('clearrm1bt').disabled = true
        document.getElementById('name1').disabled = true
    }
    else {
        statusrm1 = false
        // gets rid of red text
        document.getElementById('statusrm1holder').innerText = ""
        document.getElementById('addguest1bt').disabled = false
        document.getElementById('removguest1bt').disabled = false
        document.getElementById('clearrm1bt').disabled = false
        document.getElementById('name1').disabled = false
    }
}