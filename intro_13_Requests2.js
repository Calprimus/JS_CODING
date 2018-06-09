// >>>> 1/17
// const jsonButton = document.querySelector('#generate');
// const buttonContainer = document.querySelector('#buttonContainer');
// const display = document.querySelector('#displayContainer');
// const collection = ["Another", "More", "Next", "Continue", "Keep going", "Click me", "A new one"];

// const generateJson = async() => {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         if (response.ok) {
//             const jsonResponse = await response.json();
//             renderResponse(jsonResponse);
//             changeButton();
//         }
//     } catch (error) {
//         console.log(error);
//     }
// };

// const formatJson = (resJson) => {
//     resJson = JSON.stringify(resJson);
//     let counter = 0;
//     return resJson.split('')
//         .map(char => {
//             switch (char) {
//                 case ',':
//                     return `,\n${' '.repeat(counter * 2)}`;
//                 case '{':
//                     counter += 1;
//                     return `{\n${' '.repeat(counter * 2)}`;
//                 case '}':
//                     counter -= 1;
//                     return `\n${' '.repeat(counter * 2)}}`;
//                 default:
//                     return char;
//             }
//         })
//         .join('');
// };

// const renderResponse = (jsonResponse) => {
//     const jsonSelection = Math.floor(Math.random() * 10);
//     display.innerHTML = `<pre>${formatJson(jsonResponse[jsonSelection])}</pre>`;
// };

// const changeButton = () => {
//     const newText = Math.floor(Math.random() * 7);
//     jsonButton.innerHTML = `${collection[newText]}!`;
// };

// jsonButton.addEventListener('click', generateJson);

// >>>> 2/17
// The fetch() function:

// - Creates a request object that contains relevant information that an API needs.

// - Sends that request object to the API endpoint provided.

// - Returns a promise that ultimately resolves to a response object, 
//   which contains the status of the promise with information the API sent back.

//   >>>> 3/17
// fetch('https://api-to-call.com/endpoint').then(response => {
//     if (response.ok) {
//         return response.json();
//     }
//     throw new Error('Request failed!');
// }, networkError => {
//     console.log(networkError.message)
// }).then(jsonResponse => {
//     return jsonResponse;
// })

// >>>> 4/17
// // Information to reach API
// const url = 'https://api.datamuse.com/words';
// const queryParams = '?sl='

// // Selects page elements
// const inputField = document.querySelector('#input');
// const submit = document.querySelector('#submit');
// const responseField = document.querySelector('#responseField');

// // AJAX function
// const getSuggestions = () => {
//   const wordQuery = inputField.value;
//   const endpoint = url + queryParams + wordQuery;

//   fetch(endpoint).then(response =>{
//     if(response.ok){
//       return response.json();
//     }
//   throw new Error('Request failed!');  
//   }, networkError => {
//     console.log(networkError.message)
//   }

//                       ) }

// // Clears previous results and display results to webpage
// const displaySuggestions = (event) => {
//   event.preventDefault();
//   while(responseField.firstChild){
//     responseField.removeChild(responseField.firstChild);
//   }
//   getSuggestions();
// };

// submit.addEventListener('click', displaySuggestions);

// >>>> 5/17