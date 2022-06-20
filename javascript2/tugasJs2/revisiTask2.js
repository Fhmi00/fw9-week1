function searchName(query, max, callback) {
const name = [
    'Abigail','Alexandra','Aliison','Amanda','Angela','Bella','Carol','Caroline','Carolyn','Deirdre','Diana','Elizabeth','Ella','Faith','Olivia','Penelope']

    function lowerCaseName(element, i) {
        return element.toLowerCase()
    }

    const reslowerCaseName = name.map(lowerCaseName)
    const result = reslowerCaseName.filter(element => element.includes(query))

    const cond = max === 0? result.length : max
    const lastResult = result.slice(0, cond)

    let lastLastResult = []
    lastResult.forEach(element => {
        const first = element.charAt(0).toUpperCase()
        const lastWord = `${first}${element.slice(1, element.length)}`
        lastLastResult.push(lastWord)
    })

    callback(lastLastResult)
}

searchName('an', 2, console.log);