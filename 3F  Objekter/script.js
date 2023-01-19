let personer = [
    {navn: "Jo bjørnar", fodselsaar: 1982},
    {navn: "Lars"      , fodselsaar: 1957}
]
console.log(personer)
console.log(personer[0].navn)

for(let personer of personer){
    console.log(personer.navn)
}