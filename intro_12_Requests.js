// >>>> 1/10

// const jsonButton = document.querySelector('#generate');
// const buttonContainer = document.querySelector('#buttonContainer');
// const display = document.querySelector('#displayContainer');
// const collection = ["Another", "More", "Next", "Continue", "Keep going", "Click me", "A new one"];

// const generateJson = () => {
//     const xhr = new XMLHttpRequest();
//     xhr.responseType = 'json';

//     xhr.onreadystatechange = () => {
//         if (xhr.readyState === XMLHttpRequest.DONE) {
//             renderResponse(xhr.response);
//             changeButton();
//         }
//     }
//     xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
//     xhr.send();
// }

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
// }

// const renderResponse = (jsonResponse) => {
//     const jsonSelection = Math.floor(Math.random() * 10);
//     display.innerHTML = `<pre>${formatJson(jsonResponse[jsonSelection])}</pre>`;
// }

// const changeButton = () => {
//     const newText = Math.floor(Math.random() * 7);
//     jsonButton.innerHTML = `${collection[newText]}!`;
// }

// jsonButton.addEventListener('click', generateJson);

// >>>> 2/10
// console.log('First message!');
// setTimeout(() => {
//     console.log('This message will always run last...');
// }, 0);
// console.log('Second message!');

// >>>> 3/10
// -----------> see image in XHR.md file

// >>>> 4/10
// const xhr = new XMLHttpRequest;
// const url = 'https://api-to-call.com/endpoint';

// xhr.responseType = 'json';

// xhr.onreadystatechange = () => {
//     if (xhr.readyState === XMLHttpRequest.DONE) {
//         return xhr.response;
//     }
// };

// xhr.open('GET', url);
// xhr.send();

// >>>> 5/10
// Information to reach API
// const url = 'https://api.datamuse.com/words?';
// const queryParams = 'rel_rhy=';


// // Selecting page elements
// const inputField = document.querySelector('#input');
// const submit = document.querySelector('#submit');
// const responseField = document.querySelector('#responseField');

// // AJAX function
// const getSuggestions = () => {
//     const wordQuery = inputField.value;
//     const endpoint = url + queryParams + wordQuery;
//     const xhr = new XMLHttpRequest;
//     xhr.responseType = 'json';
//     xhr.onreadystatechange = () => {
//         if (xhr.readyState === XMLHttpRequest.DONE) {
//             renderResponse(xhr.response)
//         };
//     };
//     xhr.open('GET', endpoint);
//     xhr.send();
// }

// // Clear previous results and display results to webpage
// const displaySuggestions = (event) => {
//     event.preventDefault();
//     while (responseField.firstChild) {
//         responseField.removeChild(responseField.firstChild);
//     };
//     getSuggestions();
// }

// submit.addEventListener('click', displaySuggestions);

// >>>> 6/10
// Information to reach API
// const url = 'https://api.datamuse.com/words?';
// const queryParams = 'rel_jjb=';
// const additionalParams = '&topics='

// // Selecting page elements
// const inputField = document.querySelector('#input');
// const topicField = document.querySelector('#topic');
// const submit = document.querySelector('#submit');
// const responseField = document.querySelector('#responseField');

// // AJAX function
// const getSuggestions = () => {
//   const wordQuery = inputField.value;
//   const topicQuery = topicField.value;
//   const endpoint = `${url}${queryParams}${wordQuery}${additionalParams}${topicQuery}`;
  
//   const xhr = new XMLHttpRequest();
//   xhr.responseType = 'json';

//   xhr.onreadystatechange = () => {
//     if (xhr.readyState === XMLHttpRequest.DONE) {
//       renderResponse(xhr.response);
//     }
//   }
  
//   xhr.open('GET', endpoint);
//   xhr.send();
// }

// // Clear previous results and display results to webpage
// const displaySuggestions = (event) => {
//   event.preventDefault();
//   while(responseField.firstChild){
//     responseField.removeChild(responseField.firstChild);
//   }
//   getSuggestions();
// }

// submit.addEventListener('click', displaySuggestions);

// >>>> 7/10
// ------> picture diagram of the POST scheme

// >>>> 8/10
// const xhr = new XMLHttpRequest;
// const url = 'https://api-to-call.com/endpoint';
// const data = JSON.stringify({id: '200'});

// xhr.responseType = 'json';

// xhr.onreadystatechange = () => {
//   if (xhr.readyState === XMLHttpRequest.DONE) {
//     return xhr.response;
//   }
// };

// xhr.open('POST', url);
// xhr.send(data);

// >>>> 9/10
// Information to reach API
const apiKey = '9299153837f044968a04e1cf984eb50b';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  const xhr = new XMLHttpRequest;
  xhr.responseType = 'json';
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
  renderResponse(xhr.response);
};
  };
  xhr.open('POST', url);
  xhr.setRequestHeader('Content-type', 'application/json');
	xhr.setRequestHeader('apikey', apiKey);
  xhr.send(data);
};


// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);

// >>>> 10/10
