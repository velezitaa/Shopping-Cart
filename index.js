const shopIcon = document.querySelector('#shop-icon');
const cart = document.querySelector('.cart');
const table = document.querySelector('#table-body');
const courseBtn = document.querySelectorAll('.course-btn');
const tableClear = document.querySelector('#table-clear');


courseBtn.forEach(btn => {
    btn.addEventListener('click', e => {
        const img = e.target.parentElement.parentElement.children[0].innerHTML;
        const name = e.target.parentElement.children[0].innerHTML;

        const exist = [...table.children].find(element => element.children[1].innerHTML === name);
        if (exist) {
            exist.children[3].innerHTML = Number(exist.children[3].innerHTML) + 1;
        } else {
             const row = document.createElement('tr');
        row.innerHTML = `
        <td>${img}</td>
        <td>${name}</td>
        <td>15$</td>
        <td>1</td>   
        <td>
        <svg xmlns="http://www.w3.org/2000/svg" class="delete-btn" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
        </td>
        `;

        row.children[4].addEventListener('click', e => {
            e.currentTarget.parentElement.remove()
        });

        table.append(row);
        }

       
    })
})


shopIcon.addEventListener('click', e => {
    cart.classList.toggle('show-cart');
});

tableClear.addEventListener('click', e => {
    table.innerHTML = '';
});