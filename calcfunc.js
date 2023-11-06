storage1=""
storage2= ""
storage3=""
save = ""
onevalue = false
twovalue = false
newsave = false
decimal = false

const btn = document.querySelectorAll('.button button');
btn.forEach(function(btn) {
btn.addEventListener('click', function (e) {
    console.log(btn.textContent);
    parse(btn)
    
});})
    

function parse(key){
    const screen = document.querySelector('.screen')
    screen.textContent = logic(key)

}

function add(){
    return(parseInt(storage1) + parseInt(storage2))
}
function subtract(){
    return(storage1 - storage2)
}
function multiply(){
    return(storage1 * storage2)
}
function divide(){
    return(storage1 / storage2)
}
function fact(){
    reso = 1
    temp1 = parseInt(storage1)
    for(i = 1; i <= temp1; i++){
        reso = reso * i
    }
    return reso
}
   
function logic(key){


    if(parseInt(key.textContent) >= 0 || key.textContent == "."){
        newsave = false
        if(key.textContent == "." && decimal == false){
            decimal = true
        }
        else if(key.textContent == "." && decimal == true){
            return storage1
        }
    
        if(onevalue){
            storage2 = storage2 + key.textContent
            twovalue = true
            return storage2
        }
        
        else storage1 = storage1 + key.textContent
        console.log(storage1)
        return storage1

    }

    else if(key.textContent == "x" || key.textContent == "-" || key.textContent == "+" || key.textContent == "x" ||
    key.textContent == "!" || key.textContent == "/"){
        if(twovalue == true){
            calculate()
            twovalue = false
            storage2 = ''
            storage3 = key.textContent
            return storage3
        }
        if(newsave) storage1 = save
        onevalue = true
        storage3 = key.textContent
        if(key.textContent == "!"){
            return calculate()
        }
        return storage3

    }

    else if(key.textContent == "AC" || key.textContent == "=" || key.textContent == "DEL"){
        switch(key.textContent){
            case "=": return(calculate())
            break;
            case "DEL": 
                
                if(twovalue == true){
                    storage2 = storage2.slice(0,-1)
                    return storage2
                }
                else{
                    storage1 = storage1.slice(0,-1)
                    return storage1
                }
            break;
            case "AC":
                storage1 = ''
                storage2 = ''
                storage3 = ''
                onevalue = false
                twovalue = false
                return("")
            break;
        }
    
    }

}

function calculate(){
    switch(storage3){
        case "x":
            res = multiply()
        break
        case "":
            res = storage1
        break
        case "-":
            res = subtract()
        break
        case "+":
            res = add()
        break
        case "/":
            res = divide()
        break
        case "!":
            res = fact()
        break
    }  
    decimal = false
    storage2 = ''
    twovalue = false
    storage3 = ''
    storage1 = ''
    onevalue = false
    newsave = true
    save = res
    return res
}


