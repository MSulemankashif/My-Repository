const searchInput = document.getElementById("searchInput");
const items = itemList.getElementsByTagName("li");

searchInput.addEventListener("input", function (){
    const filter = searchInput.value.toLowerCase();

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const itemText = item.innerText;
       
        if(itemText.toLowerCase().indexOf(filter) > -1){
            items[i].style.display = '';
        }else{
            items[i].style.display = 'none';
        }
    }
    });