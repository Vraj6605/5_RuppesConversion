// fetch API give the response in the form of JSON . Now we Convert This JSON into Js Object using 
// json() Method.

const url = "https://cat-fact.herokuapp.com/facts";

let btn = document.querySelector("#btn");
let box = document.querySelector("#factsdisplay");
let para = document.querySelector("#fact");
const getFacts =  async ()=>{
    let response = await fetch(url);
    console.log(response.status); //Response is in form of JSON.
    let a  = Math.ceil(Math.random()*10)%5;
    let data = await response.json();
    console.log(data[a].text);
    para.innerText = data[a].text;
}
btn.addEventListener("click",getFacts);


