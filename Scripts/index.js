//definations
let body = document.getElementById("body");
let lofi = document.getElementById("lofi")
let def = document.getElementById("default");
let synth = document.getElementById("synth")
let abstract = document.getElementById("abstract")
let tex = document.getElementById("Text")
let Avatar = document.getElementById("Avatar")
let source = document.getElementById("source")
let profilekard = document.getElementById("profilekard")
let threeam = document.getElementById("threeam")
let schemesel = document.getElementById("schemesel")
abstract.onclick = function(){
    body.style.backgroundImage = "url(Assets/Images/abstract.png)"
    tex.style.color = "pink"
    tex.style.textShadow = "0px 0px 10px pink"
    Avatar.style.border = "3px solid pink"
    Avatar.style.boxShadow = "0px 0px 10px pink"
    Avatar.style.padding = "5px"
    source.style.textDecoration = "none"
    source.style.color = "pink"
    source.style.textShadow = "0px 0px 10px pink"
}
synth.onclick = function(){
    body.style.backgroundImage = "url(Assets/Images/synth.jpg)"
    tex.style.color = "violet";
    tex.style.textShadow = "0px 0px 10px purple,0px 0px 20px pink"
    Avatar.style.border = "3px solid violet"
    Avatar.style.boxShadow = "0px 0px 10px purple, 0px 0px 20px pink"
    Avatar.style.padding = "5px"
    source.style.textDecoration = "none"
    source.style.color = "violet"
    source.style.textShadow = "0px 0px 10px violet"
}

def.onclick = function(){
    body.style.backgroundImage = "url(Assets/Images/default.png)"
    tex.style.color = "aqua"
    tex.style.textShadow = "0px 0px 10px aqua"
    Avatar.style.border = "3px solid aqua"
    Avatar.style.boxShadow = "0px 0px 10px aqua"
    Avatar.style.padding = "5px"
    source.style.textDecoration = "none"
    source.style.color = "aqua"
    source.style.textShadow = "0px 0px 10px aqua"
}
//events
lofi.onclick = function(){
    body.style.backgroundImage = "url(Assets/Images/lofi.png)"
    tex.style.color = "orange"
    tex.style.textShadow = "0px 0px 10px orange"
    Avatar.style.border = "3px solid orange"
    Avatar.style.boxShadow = "0px 0px 10px orange"
    Avatar.style.padding = "5px"
    source.style.textDecoration = "none"
    source.style.color = "orange"
    source.style.textShadow = "0px 0px 10px orange"
}


let image_url = "hwwwwvvss://mggBLACKXYZa.BLACKXYZssXXXYYYZZZorBLACKavvvv.EEgww/awwwwaXXXYYYZZZhmggnwwss/yyxxrrrr5yyxxrrxxrrrrqqxxrrqqyy4qq/1zzzz3xx4rr5rr41yyyyyyzz3rr4qq/hggRFRFmarXYZ.vvEE"
    let sixteen = image_url.replace(/BLACK/g,"d");let fiveteen = sixteen.replace(/XYZ/g,"i");
    let forteen = fiveteen.replace(/RF/g, "l");let triteen = forteen.replace(/EE/g,"ng");
    let tw = triteen.replace(/gg/g, "e");let eleven = tw.replace(/xx/g,"2");
    let ten = eleven.replace(/ff/g, "0");let nine = ten.replace(/rr/g, "9");
    let eight = nine.replace(/qq/g, "6");let seven = eight.replace(/yy/g, "7");
    let six = seven.replace(/zz/g, "0");let fiv = six.replace(/vv/g, "p");
    let four = fiv.replace(/ss/g,"s"); let two = four.replace(/XXXYYYZZZ/g,"c");
    let tri = two.replace(/ww/g,"t");let fir = tri.replace(/uu/g,"m");
let image_url1 = "hwwwwvvss://mggBLACKXYZa.BLACKXYZssXXXYYYZZZorBLACKavvvv.EEgww/awwwwaXXXYYYZZZhmggnwwss/yyxxrrrr5yyxxrrxxrrrrqqxxrrqqyy4qq/1zzzz3xx4rrqqyyxxyyrr15xxyy514/vvorxx.vvEE?wXYZBLACKwwh=1rrxxzz&hggXYZghww=1zz8zz"
    let sixteen1 = image_url1.replace(/BLACK/g,"d");let fiveteen1 = sixteen1.replace(/XYZ/g,"i");
    let forteen1 = fiveteen1.replace(/RF/g, "l");let triteen1 = forteen1.replace(/EE/g,"ng");
    let tw1 = triteen1.replace(/gg/g, "e");let eleven1 = tw1.replace(/xx/g,"2");
    let ten1 = eleven1.replace(/ff/g, "0");let nine1 = ten1.replace(/rr/g, "9");
    let eight1 = nine1.replace(/qq/g, "6");let seven1 = eight1.replace(/yy/g, "7");
    let six1 = seven1.replace(/zz/g, "0");let fiv1 = six1.replace(/vv/g, "p");
    let four1 = fiv1.replace(/ss/g,"s"); let two1 = four1.replace(/XXXYYYZZZ/g,"c");
    let tri1 = two1.replace(/ww/g,"t");let fir1 = tri1.replace(/uu/g,"m");
setInterval(() =>{
    let date = new Date()
    let h = date.getUTCHours()
    let m = date.getUTCMinutes()
    let s = date.getUTCSeconds()
    let ampm = "AM"
    if(h >= 12){
        h = h - 12;
        ampm = "PM";
    }
    let livetime = `${h}:${m}:${s} ${ampm}`
    
    let targettime = "4:31:7 PM"
    let endtime = "10:31:7 PM"
    if(targettime == livetime){
        schemesel.style.display = "none"
        threeam.style.display = "block"
        setInterval(() =>{
        let date = new Date()
        let h = date.getUTCHours() + 5
        let m = date.getUTCMinutes() + 30
        let s = date.getUTCSeconds()
        let ampm = "AM"
        if(h >= 12){
           h = h - 12;
           ampm = "PM";
        }
        let livetim1 = `${h}:${m}:${s} ${ampm}`
        threeam.innerText = livetim1
        }, 1000)
        body.style.backgroundImage = `url(${tri1})`
        tex.style.color = "red"
        tex.innerText = "سوب ، موقع لول"
        tex.style.textShadow = "0px 0px 10px red"
        Avatar.style.border = "3px solid red"
        Avatar.style.boxShadow = "0px 0px 10px red"
        Avatar.style.padding = "5px"
        source.style.textDecoration = "none"
        source.style.color = "red"
        source.innerText = "كود المصدر لول"
        source.style.textShadow = "0px 0px 10px red"
        Avatar.src = tri
        profilekard.style.backdropFilter = "blur(1px)"
    }
    if(endtime == livetime){
    threeam.style.display = "none"
    schemesel.style.display = "block"
    body.style.backgroundImage = "url(Assets/Images/default.png)"
    tex.innerText = "Sup, website lol"
    tex.style.color = "aqua"
    tex.style.textShadow = "0px 0px 10px aqua"
    Avatar.src = "Assets/Avatar/av.jpg"
    Avatar.style.border = "3px solid aqua"
    Avatar.style.boxShadow = "0px 0px 10px aqua"
    Avatar.style.padding = "5px"
    source.style.textDecoration = "none"
    source.innerText = "Source Code lol"
    source.style.color = "aqua"
    source.style.textShadow = "0px 0px 10px aqua"
    profilekard.style.backdropFilter = "blur(20px)"
    profilekard.style.backdropFilter = "greyscale(0%)"
    }
}, 1000)