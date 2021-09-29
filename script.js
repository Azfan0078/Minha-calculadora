const res = document.getElementById('res')
var primeiroNumero = []
var segundoNumero = []
var operacao = ''
var indice = 0
let memoria = ''
let memoria2 = ''
var finalizado = 0
var terceiroNumero = ''
let finalizado2 = 0
var escrito = false
const conta = document.getElementById('conta')

function resetParcial(){
    if(finalizado == 1 ){
        resetTotal()
    }else{
        memoria = ''
        res.innerHTML = 0
    }
}

function resetTotal(){

    primeiroNumero = []
    segundoNumero = []
    operacao = ''
    indice = 0
    memoria = ''
    memoria2 = ''
    finalizado = 0
    terceiroNumero = ''
    finalizado2 = 0
    escrito = false

    res.innerHTML = 0
    conta.innerHTML = ''
}
function adicionarVirgula(){
    if(memoria == ''){

        memoria = 0
        memoria += '.'
    
    }else {
        memoria += '.'
    }
    
    
    
}

function apagarUltimoNumero(){
    let numeroIndice = ''
     
    if(memoria == ''){

        memoria2 = ''
        conta.innerHTML = ''

    }else if(indice == 0 && finalizado == 0){
        
        numeroIndice = primeiroNumero[0]
        numeroIndice = parseInt(numeroIndice / 10)

        if(numeroIndice == 0){
            memoria = numeroIndice
            numeroIndice = ''
            res.innerHTML = 0
        }else{
             primeiroNumero[0] = numeroIndice
            res.innerHTML =  primeiroNumero[0]
            memoria = `${numeroIndice}`
            memoria2 = `${numeroIndice}`
        }

       
            
        
    }else if(indice == 1 && finalizado == 0) {
        
        numeroIndice = segundoNumero[0]
        numeroIndice = parseInt(numeroIndice / 10)
    
        if(numeroIndice == 0){
            numeroIndice = ''
            res.innerHTML = 0
        }else{
            segundoNumero[0] = numeroIndice
            res.innerHTML = segundoNumero[0]
            memoria = `${numeroIndice}`
            memoria2 = `${numeroIndice}`
        }
        
    }

}

function adicionarNumero(numero){

    if(indice == 0 && finalizado == 0){
        
        primeiroNumero.shift()
        memoria += numero
        memoria2 += numero
        primeiroNumero.push(Number(memoria))

        res.innerHTML = memoria
        
        
    }else if(indice == 1 && finalizado == 0){
        
        segundoNumero.shift()
        memoria += numero
        memoria2 +=numero
        segundoNumero.push(Number(memoria))

        res.innerHTML = memoria
        
        
    }else if(indice == 0 && finalizado == 1){

        
        conta.innerHTML =''

        primeiroNumero.shift()
        memoria += numero
        memoria2 += numero

        primeiroNumero.push(Number(memoria))

        res.innerHTML = memoria
        finalizado = 0
        escrito = true
    }else if(indice == 1 && finalizado == 1){

        
        conta.innerHTML = ''
        
        segundoNumero.shift()
        memoria += numero
        memoria2 += numero

        segundoNumero.push(Number(memoria))

        res.innerHTML = memoria
        finalizado = 0
        escrito=false
        
    }
    
}
function dividir(){
    if(memoria === 0){

    }else{
        if(indice == 1){

            if(segundoNumero.length == 1){
                finalizar()
            }
    
            if(finalizado == 1){
                primeiroNumero[0] = terceiroNumero[0]
                operacao = 'dividir'
                
                console.log('ola mundo')
                memoria2 += `${primeiroNumero[0]}/`
                conta.innerHTML = memoria2
    
                indice = 1
                finalizado = 0
            }else{
                operacao = 'dividir'
                
                console.log('ola mundo')
                memoria2 +=''
                conta.innerHTML = memoria2
    
                indice = 1
            }  
        }else{
        
            if(segundoNumero.length == 1){
            finalizar()
            }

            if(finalizado == 1){
                primeiroNumero[0] = terceiroNumero[0]
                operacao = 'dividir'
                memoria = ''
                console.log('ola mundo')
                memoria2 += `${primeiroNumero[0]}/`
                conta.innerHTML = memoria2

                indice = 1
                finalizado = 0
            }else{
                operacao = 'dividir'
                memoria = ''
                console.log('ola mundo')
                memoria2 +='/'
                conta.innerHTML = memoria2

                indice = 1
            }  
        }
    }
}
function multiplicar(){
    if(memoria === 0){

    }else{
        if(indice == 1){

            if(segundoNumero.length == 1){
                finalizar()
            }
    
            if(finalizado == 1){
                primeiroNumero[0] = terceiroNumero[0]
                operacao = 'multiplicar'
                memoria = ''
    
                memoria2 += `${primeiroNumero[0]}x`
                conta.innerHTML = memoria2
    
                indice = 1
                finalizado = 0
            }else{
                operacao = 'multiplicar'
                memoria = ''
    
                memoria2 +=''
                conta.innerHTML = memoria2
    
                indice = 1
            }  
        }else{
        
            if(segundoNumero.length == 1){
            finalizar()
            }

            if(finalizado == 1){
                primeiroNumero[0] = terceiroNumero[0]
                operacao = 'multiplicar'
                memoria = ''

                memoria2 += `${primeiroNumero[0]}x`
                conta.innerHTML = memoria2

                indice = 1
                finalizado = 0
            }else{
                operacao = 'multiplicar'
                memoria = ''

                memoria2 +='x'
                conta.innerHTML = memoria2

                indice = 1
            }  
        }
    }
}

function somar(){
    if(memoria === 0){

    }else{
        if(indice == 1){

            if(segundoNumero.length == 1){
                finalizar()
            }
    
            if(finalizado == 1){
                primeiroNumero[0] = terceiroNumero[0]
                operacao = 'somar'
                memoria = ''
    
                memoria2 += `${primeiroNumero[0]}+`
                conta.innerHTML = memoria2
    
                indice = 1
                finalizado = 0
            }else{
                operacao = 'somar'
                memoria = ''
    
                memoria2 +=''
                conta.innerHTML = memoria2
    
                indice = 1
            }  
        }else{
        
            if(segundoNumero.length == 1){
            finalizar()
            }

            if(finalizado == 1){
                primeiroNumero[0] = terceiroNumero[0]
                operacao = 'somar'
                memoria = ''

                memoria2 += `${primeiroNumero[0]}+`
                conta.innerHTML = memoria2

                indice = 1
                finalizado = 0
            }else{
                operacao = 'somar'
                memoria = ''

                memoria2 +='+'
                conta.innerHTML = memoria2

                indice = 1
            }  
        }
    }
}
function subtrair(){
    if(memoria === 0){

    }else{
        if(indice == 1){

            if(segundoNumero.length == 1){
                finalizar()
            }
    
            if(finalizado == 1){
                primeiroNumero[0] = terceiroNumero[0]
                operacao = 'subtrair'
                memoria = ''
    
                memoria2 += `${primeiroNumero[0]}-`
                conta.innerHTML = memoria2
    
                indice = 1
                finalizado = 0
            }else{
                operacao = 'subtrair'
                memoria = ''
    
                memoria2 +=''
                conta.innerHTML = memoria2
    
                indice = 1
            }  
        }else{
        
            if(segundoNumero.length == 1){
            finalizar()
            }

            if(finalizado == 1){
                primeiroNumero[0] = terceiroNumero[0]
                operacao = 'subtrair'
                memoria = ''

                memoria2 += `${primeiroNumero[0]}-`
                conta.innerHTML = memoria2

                indice = 1
                finalizado = 0
            }else{
                operacao = 'subtrair'
                memoria = ''

                memoria2 +='-'
                conta.innerHTML = memoria2

                indice = 1
            }  
        }
    }
}
function finalizar(){
    let calculo = ''
    if(escrito == false){
        switch(operacao){
        case 'somar' : 
            memoria2 += ' ='
            calculo = primeiroNumero[0] + segundoNumero[0]
            res.innerHTML = calculo
            terceiroNumero = [calculo]
            segundoNumeroSalvo= [segundoNumero[0]]

            conta.innerHTML = memoria2

            memoria2= ''
            memoria = ''
            primeiroNumero = []
            segundoNumero = []

            indice = 0
            finalizado = 1
            finalizado2 = 1
        break

        case 'subtrair' :
            memoria2 += ' ='
            calculo = primeiroNumero[0] - segundoNumero[0]
            res.innerHTML = calculo
            terceiroNumero = [calculo]
            segundoNumeroSalvo= [segundoNumero[0]]

            conta.innerHTML = memoria2
        
            memoria2= ''
            memoria = ''
            primeiroNumero = []
            segundoNumero = []

            indice = 0
            finalizado = 1
            finalizado2 = 1
        
        break

        case 'multiplicar' : 
            memoria2 += ' ='
            calculo = primeiroNumero[0] * segundoNumero[0]
            res.innerHTML = calculo
            terceiroNumero = [calculo]
            segundoNumeroSalvo= [segundoNumero[0]]

            conta.innerHTML = memoria2

            memoria2= ''
            memoria = ''
            primeiroNumero = []
            segundoNumero = []

            indice = 0
            finalizado = 1
            finalizado2 = 1
        break

        case 'dividir' :
            memoria2 += ' ='
            calculo = primeiroNumero[0] / segundoNumero[0]
            res.innerHTML = calculo
            terceiroNumero = [calculo]
            segundoNumeroSalvo= [segundoNumero[0]]

            conta.innerHTML = memoria2

            memoria2= ''
            memoria = ''
            primeiroNumero = []
            segundoNumero = []

            indice = 0
            finalizado = 1
            finalizado2 = 1
        break
        }
    }else{
        switch (operacao){
            case 'somar' :
                calculo = primeiroNumero[0] + segundoNumeroSalvo[0]
                res.innerHTML = calculo
                terceiroNumero = [calculo]

                conta.innerHTML = memoria2

                memoria2= ''
                memoria = ''
                primeiroNumero = []
                segundoNumero = []

                indice = 0
                finalizado = 1
                finalizado2 = 1
            break
            case 'subtrair' :
                calculo = primeiroNumero[0] - segundoNumeroSalvo[0]
                res.innerHTML = calculo
                terceiroNumero = [calculo]

                conta.innerHTML = memoria2

                memoria2= ''
                memoria = ''
                primeiroNumero = []
                segundoNumero = []

                indice = 0
                finalizado = 1
                finalizado2 = 1
            break
            case 'multiplicar' :
                calculo = primeiroNumero[0] * segundoNumeroSalvo[0]
                res.innerHTML = calculo
                terceiroNumero = [calculo]

                conta.innerHTML = memoria2

                memoria2= ''
                memoria = ''
                primeiroNumero = []
                segundoNumero = []

                indice = 0
                finalizado = 1
                finalizado2 = 1
            break
            case 'dividir' :
                calculo = primeiroNumero[0] / segundoNumeroSalvo[0]
                res.innerHTML = calculo
                terceiroNumero = [calculo]

                conta.innerHTML = memoria2

                memoria2= ''
                memoria = ''
                primeiroNumero = []
                segundoNumero = []

                indice = 0
                finalizado = 1
                finalizado2 = 1
            break
            }
        }
}   