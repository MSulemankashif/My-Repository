const searchInput = document.getElementById('searchInput');
// const itemList = document.getElementById('itemList');
const items = itemList.getElementsByTagName('li');

searchInput.addEventListener('input', function(){
    const filter = searchInput.value.toLowerCase();

    for (let i = 0; i < items.length; i++){
        const item = items[i];
        const text = item.innerText;
        
        if (text.toLowerCase().indexOf(filter) > -1) {
            item.style.display= '';
        }else{
            item.style.display = 'none';
        };
    };
});