const mtk = 82;
const bIndo = 75;
const bIng = 75;
const ipa = 80;

const rataRata = ((mtk+bIndo+bIng+ipa)/4);
console.log('Rata-rata = ' + rataRata);

let grade = rataRata;
if(grade>=90 && grade<=100) {
    grade = 'A';
}else if(grade>=80 && grade<=89) {
    grade = 'B';
}else if(grade>=70 && grade<=79) {
    grade = 'C';
}else if(grade>=60 && grade<=69) {
    grade = 'D';
}else if(grade>=0 && grade<=59) {
    grade = 'E';
}else{
    grade = "nilai yang anda masukkan salah"
};
console.log('Grade = ' + grade);