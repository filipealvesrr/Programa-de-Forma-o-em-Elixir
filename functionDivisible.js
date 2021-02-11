function valueDivisible(shoppingList, listEmails) { // lista de email pode ser vazia
    let qtdEmails = listEmails.length
    let listPay = {}
    
    if(shoppingList.length && qtdEmails){
        let valueTotal = 0
    
        for (let object of shoppingList){
            valueTotal = valueTotal + (object.price * object.qtd)
        }
        
        rest = valueTotal % qtdEmails
        division = Math.trunc(valueTotal / qtdEmails)

        for(let i = 0; i < qtdEmails; i++){
            if(i < rest) {
                listPay[listEmails[i]] = division + 1 
            
            } else {
                listPay[listEmails[i]] = division
            }
        }
        
        return listPay
    
    } else {
        console.log('[!] A LISTA DE EMAILS OU DE COMPRAS ESTÁ VAZIA!')
    }

}
