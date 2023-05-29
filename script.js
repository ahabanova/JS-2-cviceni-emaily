const inboxElm = document.querySelector('#inbox');
//01
// fetch(`https://apps.kodim.cz/daweb/trening-api/apis/emails`)
//   .then(response => response.json())
//   .then((data) => {

//     inboxElm.innerHTML += data.emails
//       .map(email => `
//       <div class="email">
//           <div class="email__head">
//             <button class="email__icon email__icon--closed"></button>
//             <div class="email__info">
//               <div class="email__sender">${email.sender.name}</div>
//               <div class="email__subject">${email.subject}</div>
//             </div>
//             <div class="email__time">${email.time}</div>
//           </div>
//           <div class="email__body"></div>
//       </div>
//       `
//       )
//       .join('')
//   });

//02
const unreadElm = document.querySelector('.unread');
const readElm = document.querySelector('.read');


fetch(`https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=unread`)
  .then(response => response.json())
  .then((data) => {
    unreadElm.innerHTML += data.emails
      .map(email => `
          <div class="email">
              <div class="email__head">
                <button class="email__icon email__icon--closed"></button>
                <div class="email__info">
                  <div class="email__sender">${email.sender.name}</div>
                  <div class="email__subject">${email.subject}</div>
                </div>
                <div class="email__time">${email.time}</div>
              </div>
              <div class="email__body"></div>
          </div>
          `
      )
      .join('')
  });



fetch(`https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=read`)
  .then(response => response.json())
  .then((data) => {
    readElm.innerHTML += data.emails
      .map(email => `
          <div class="email">
              <div class="email__head">
                <button class="email__icon email__icon--opened"></button>
                <div class="email__info">
                  <div class="email__sender">${email.sender.name}</div>
                  <div class="email__subject">${email.subject}</div>
                </div>
                <div class="email__time">${email.time}</div>
              </div>
              <div class="email__body"></div>
          </div>
          `
      )
      .join('')
  });