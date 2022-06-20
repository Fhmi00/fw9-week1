const name = [
    'Abigail','Alexandra','Aliison','Amanda','Angela','Bella','Carol','Caroline','Carolyn','Deirdre','Diana','Elizabeth','Ella','Faith','Olivia','Penelope'
]

// function searchName(i,search) {
//     return i.filter(function(b) {
//         return b.toLowerCase().indexOf(search.toLowerCase())
// !== -1
//     searchName.length >= 2;
//     })
// }

// console.log(searchName(name, 'an'))

// function searchName(query,max,callback) {
//     let result = []
//     return name.filter(function(b){
//         return b.toLowerCase().indexOf(query.toLowerCase()) !== -1
//     result.push(b[query]);
//     if(result.length == max) {
//         ;
//     }
//     })
//     callback(result);
// }
// function print(result) {
//     console.log(result);
// }
// searchName('an','3',callback);

function searchName(query,max,callback) {
    let result = [];
    for(i = 0 ; i < name.length ; i++) {
        if(name[i].toLowerCase().indexOf(query) !==1) {
            result.push(name[i]);
            if(result.length == max) {
                break;
            }
        }
    }
    callback(result);
}
function print(result) {
    console.log(result);
}
searchName('a',1,print);