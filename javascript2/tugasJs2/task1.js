// 10 method bawaan javascript (Built-in Function) beserta contohnya!

// 1. join
// menggabungkan seluruh elemen array dan mengubahnya menjadi string. bersiifat isi merubah array
// keyword : join()
// parameter optional
// contoh:

let component = ['mobo','processor','ram','ssd','vga',]
console.log(component.join());

// 2. pop
// berfungsi untuk mengambil elemen terakhir pada array. bersiifat merubah isi array.
// keyword : pop()
// contoh:

console.log(component.pop());

// 3. shift
// mengambil elemen pertama pada array. bersifat merubah isi array.
// keyword : shift()
// contoh:

console.log(component.shift());

// 4. unshift
// menambah elemen pada array, dan meletakkannya pada elemen pertama. bersifat merubah isi array.
// keyword : unshift(elemen0)
// parameter optional, bisa menambahkan lebih dari satu elemen.
// contoh:

console.log(component.unshift('fan'));

// 5. slice
// memanggil (shallow copy) sebagian elemen pada array kedalam array baru yang dipilih, dimulai dari start(elemen awal yg akan dipanggil) sampai end(elemen akhir, dan tidak terasuk). tidak merubah isi array.
// keyword : slice()
// parameter optional, bisa memanggil sebagian atau bahkan semua elemen pada array. bisa menggunakan negative index.
// contoh:

const fruits = ['apple','mango','melon','papaya','tomato']
console.log(fruits.slice(1,2));
console.log(fruits);

// 6. splice
// berfungsi untuk menghapus, mengganti, atau menambahkan elemen didalam array.
// keyword : splice()
// parammeter (start/titik awal,jumlah elemen yang akan dihapus(optional),elemen yang akan ditambahkan(optional,bisa lebih dari satu))

const day = ['sun','mon','wed','thu']
day.splice(2,0,'tue');
console.log(day);

//  7. forEach
//  digunkan untuk melakukan perulangan dari jumlah elemen array
//  keyword :  forEach((elemen) => {})
//  contoh :

day.forEach(Element => console.log(Element));

//  8. sort
//  berungsi untuk mengurutkan elemen sesuai abjad atau nilai dari bawah ke atas.
//  keyword : sort()
//  contoh :

const num = [5,3,4,1,2]
num.sort();
console.log(num);

//  9. indexOf
//  berfungsi untuk memilih element dalam array sesuai dengan kriteria yang kita berikan. mengembalikan nilai -1 jika elemen tidak ditemukan.
//  keyword : indexOf(searchElement)
//  contoh :

console.log(day.indexOf('sun'));

//  10. length
//  mengembalikan nilai berupa panjang dari elemen suatu array. juga bisa digunakan untuk mengatur panjang array. 
//  keyword : length()
//  contoh :

const t = [1,2,3,4,5]
console.log(t.length);