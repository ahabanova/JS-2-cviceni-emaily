const inboxElm = document.querySelector('#inbox')

//01
// fetch(`https://apps.kodim.cz/daweb/trening-api/apis/emails`)
//   .then(response => response.json())
//   .then((data) => {
//     console.log(data)
//     data.emails.forEach(email => {
//       inboxElm.innerHTML += `
//       <div class="email">
//         <div class="email__head">
//           <button class="email__icon email__icon--closed"></button>
//           <div class="email__info">
//             <div class="email__sender">${email.sender.name}</div>
//             <div class="email__subject">${email.subject}</div>
//           </div>
//           <div class="email__time">${email.time}</div>
//         </div>
//         <div class="email__body"></div>
//       </div>
//         `
//     });
//   })

//02