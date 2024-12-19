const base_url ="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json";

const dropdowns = document.querySelectorAll(".dropdowns select");

for(let select of dropdowns){
    for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText=currCode;
        newOption.value=currCode;
        select.append(newOption);
    if(select.name === "from" && currCode === "USD"){
        newOption.selected="selected"
    } else if(select.name === "to" && currCode === "PKR"){
        newOption.selected="selected"
        };
    };
};