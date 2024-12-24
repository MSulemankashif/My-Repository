const base_url ="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json";

const dropdowns = document.querySelectorAll(".dropdowns select");
let btn = document.querySelector(".btn")
for(let select of dropdowns){
    for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText=currCode;
        newOption.value=currCode;
        select.append(newOption);
    if(select.name === "from" && currCode === "USD"){
        newOption.selected="selected";
    } else if(select.name === "to" && currCode === "PKR"){
        newOption.selected="selected"
        };
    }
select.addEventListener("change",(evt)=>{
    updateFlag(evt.target);
});
};
const updateFlag=(element)=>{
    // console.log(element);
    let currCode = element.value;
    // console.log(currCode);
    let countryCode = countryList[currCode];
    let newSrc =`https://flagsapi.com/${countryCode}/shiny/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src=newSrc;
};

btn.addEventListener("click",(evt)=>{
    evt.preventDefault();
    let amount = document.querySelector(".amount input ");
    let amountVal = amount.value;
    if(amountVal === "" || amountVal < 0 ){
        // amountVal = 1;
        amount.value = 1;
    }
    
});