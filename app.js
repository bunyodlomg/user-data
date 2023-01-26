
const form = document.querySelector('form'),
  btn = document.querySelector('.submit'),
  first = document.querySelector('#first'),
  last = document.querySelector('#last'),
  email = document.querySelector('#email'),
  tbody = document.querySelector('tbody');
let id = 1;

let update = document.createElement('button');
update.style.background = 'none';
update.style.padding = '0';
update.style.border = '0';
update.innerHTML = `
  <button class="btn btn-primary update">Update</button>
`;
console.log(update.textContent);
update.style.display = 'none';

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (first.value.length > 0 && last.value.length > 0 && email.value.length > 0) {
    const tr = document.createElement('tr');
    tr.classList.add(`tr${id}`);
    tr.innerHTML = `
    <th scope="row">${id}</th>
    <td>${first.value}</td>
    <td>${last.value}</td>
    <td>${email.value}</td>
    <td class="d-flex align-items-center gap-2">
    <button class="btn btn-secondary edit${id}">Edit</button>
    <button class="btn btn-danger delete${id}">Delete</button>
    </td>
    `;
    tbody.appendChild(tr);
    const editBtn = document.querySelector(`.edit${id}`),
      deleteBtn = document.querySelector(`.delete${id}`);

    editBtn.addEventListener('click', (e) => {
      e.preventDefault();
      first.value = tr.children[1].textContent;
      last.value = tr.children[2].textContent;
      email.value = tr.children[3].textContent;
      btn.style.display = 'none';
      update.style.display = 'block';
      form.appendChild(update);
    });

    update.addEventListener('click', (e) => {
      e.preventDefault();
      form.removeChild(update);
      btn.style.display = 'block';
      tr.children[1].textContent = first.value;
      tr.children[2].textContent = last.value;
      tr.children[3].textContent = email.value;
      tbody.appendChild(tr);
      first.value = '';
      last.value = '';
      email.value = '';
    });

    deleteBtn.addEventListener('click', (e) => {
      e.preventDefault();
      btn.style.display = 'block';
      tbody.removeChild(tr)
    });
    first.value = '';
    last.value = '';
    email.value = '';
    id++;
  } else {
    alert('Please enter your details!');
  }
});
