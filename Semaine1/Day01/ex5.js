let courses =[
{ nom: "Pain", prix: 1 },
{ nom: "Lait", prix: 4},
{ nom: "Oeufs", prix: 1.5 }
];
let total = 0;
for (let i = 0; i < courses.length; i++) {
total += courses[i].prix;
}
console.log(total);