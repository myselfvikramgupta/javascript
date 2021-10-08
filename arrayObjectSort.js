let person=[
    {
    name:"Vikram",
    age:25,
    dob:"1995-09-20"
   },
   {
    name:"Suresh",
    age:40,
    dob:"1980-01-15"
   },
   {
    name:"Mukesh",
    age:17,
    dob:"2004-04-12"
   },
  {
      name:"Surender",
      age:60,
      dob:"1884-12-14"
  },
  {
    name:"Akash",
    age:28,
    dob:"1995-09-01"
  },
  {
    name:"Dipak",
    age:30,
    dob:"1993-07-23"
  }

];
// sort array object by age
let sortByage=person.sort((a,b)=>b.age-a.age);
//console.log(sortByage);


//sort by name
let sortByName=person.sort((a,b)=>{
    let fa=a.name.toLocaleLowerCase();
    let fb=b.name.toLocaleLowerCase();
   if(fa > fb){ return 1}
   if(fa < fb){ return -1}
    return 0
})
//console.log(sortByName);

//sort by date
let sortByDate=person.sort((date1,date2)=>{
    let d1=new Date(date1.dob);
    let d2=new Date(date2.dob);
   
   
    return d1-d2
})
console.log(sortByDate);