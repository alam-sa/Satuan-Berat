
function convertWeight(summation, unitWeight) {
    //your code here
    let result = ''
    let idx = ['g', 'dag', 'ons', 'kg', '-', 'kwintal', 'ton' ]
    let array = summation.split('+')
    let total = 0
    let indexUnitWeight = 0

    for (let i = 0; i < idx.length; i++) {
        for (let j = 0; j < array.length; j++) {
            let hasil = []
            hasil = array[j].split(' ')
            for (let k = 0; k < hasil.length; k++) {
                if (hasil[k] === idx[i]) {
                   total += hasil[k-1]*Math.pow(10,i)
                } 
            }
        }
        if (unitWeight === idx[i]) {
            indexUnitWeight = i
        }
    }
    result = `${total/Math.pow(10,indexUnitWeight)} ${idx[indexUnitWeight]}`
    return result
}
  
  console.log(convertWeight('1 ton +10 ons+2 kwintal', 'kg')) //1201 kg
  
  console.log(convertWeight('1 ton +10 ons+2 kwintal', 'g')) //1201000 g
  
  console.log(convertWeight(' 2 ton + 500 kwintal+ 3 kg + 350 ons', 'kg'))  //52038 kg
  