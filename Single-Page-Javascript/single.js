function changeContent(page){
    let contentDiv = document.getElementById('content');

    switch(page){
        case "home":
            contentDiv.innerHTML=`
            <img src=
					"https://media.geeksforgeeks.org/wp-content/uploads/geeksforgeeks-12.png">
				<h2>
					Welcome to the Home Page!
				</h2>
				<p>
					This is the main page of our SPA.
				</p>
				<p>
					Explore the different sections using
					the navigation menu.
				</p>`
                break;
        case "about":
            contentDiv.innerHTML=`<h2>About Us</h2>
				<p>
					This is the about page content. Learn more 
					about our purpose and team.
				</p>
				<p>
					We're passionate about creating engaging and
					informative SPAs.
				</p>`;
                break;
        case "contact":
            contentDiv.innerHTML=`<h2>Contact Us</h2>`
            break;
            
            default:
                contentDiv.innerHTML = "Invalid Page";
    }
}