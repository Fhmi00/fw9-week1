let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    addres:
    {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874"
    },
    phone: "1-770-736-8031 x56442",
    website: "hilldegard.org"
}

data.name = "fahmi"
data.email = "ifahmi5555@gmail.com"
let newData = {...data, hobby: "makan"}


let {addres} = data
let {street, city} = addres

