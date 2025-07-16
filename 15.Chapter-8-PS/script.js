let url = "https://jsonplaceholder.typicode.com/posts";
const container = document.querySelector('.post-container');

fetch(url)
    .then(response => { 
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();  //Parsing Data to JSON
    })
    .then(posts =>{
        console.log(posts);
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <p>${post.id}</p>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            `;
            container.appendChild(postElement);
        }); 
    })
    .catch(error => {
        console.error("There was a problem with the fetch operation:", error);
    });
// let timerID = setInterval(() => {
//    fetch(url)
//         .then(response => {
//             console.log(response);
//             if (!response.ok) {         
//                 throw new Error("Network response was not ok");
//             }
//             return response.json();  //Parsing Data to JSON
//         })
//         .then(data => {
//             console.log(data);
//         })
//         .catch(error => {
//             console.error("There was a problem with the fetch operation:", error);
//         });
// }, 5000);



// const fetchData = async (url) => {
//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error("Network response was not ok");
//         }
//         const data = await response.json();  //Parsing Data to JSON
//         console.log(data);
//     } catch (error) {
//         console.error("There was a problem with the fetch operation:", error);
//     }
// }

// fetchData("https://jsonplaceholder.typicode.com/posts");

//clearInterval(timerID)