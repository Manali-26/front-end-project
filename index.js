//document.write('hi'); generally use nhi akrte kyuki esame koi tag ya id nhi hai
document.getElementById('demo').textContent="welcome";
console.log(document);
//alert('he he')

// if(confirm('wanna continue')){
//   document.getElementById('demo').textContent='you can go'

// }

// else{
//   document.getElementById('demo').textContent='dhulai'
// }
name1=prompt('enter name')
if(name1){
  document.getElementById('demo').textContent="welcome" +name1;
}

console.log(name1)