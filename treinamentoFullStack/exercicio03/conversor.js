let value = prompt('Digite quantos metros voce deseja')

const conversion = prompt('Qula valor de medida vc deseja converter\n mm) \n cm) \n dm) \n dam) \n hm) \n km)')


switch (conversion) {
    case "mm":
       
        alert(`O resultado é ${value * 1000} Milimetro`)
        break
    case "cm":
        alert(`O resultado é ${value * 100} Cemtietros`)
        break    
    case "dm":
        alert(`O resultado é ${value * 10} Decimetros`)
        break    
    case "dam":
        alert(`O resultado é ${value / 10} Decametros`)
        break    
    case "hm":
        alert(`O resultado é ${value / 100} Hectometros`)
        break    
    case "km":
        alert(`O resultado é ${value / 1000} Quilometros`)
        break    
    default: alert('Opção invalida')
}
