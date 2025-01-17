function initSelect(selectWrapper) {
    let inputField = selectWrapper.querySelector('.chosen-value');
    let inputHiddenField = selectWrapper.querySelector('.input-hidden');
    let dropdown = selectWrapper.querySelector('.value-list');
    let dropdownItems = [...dropdown.querySelectorAll('.drop-li')];

    const filterItems = (inputValue) => {
        dropdownItems.forEach(item => {
            const itemText = item.textContent.toLowerCase();
            item.classList.toggle('closed', !itemText.startsWith(inputValue.toLowerCase()));
        });
    };

    inputField.addEventListener('input', () => {
        filterItems(inputField.value);
        dropdown.classList.add('open');
    });

    dropdownItems.forEach(item => {
        item.addEventListener('click', () => {
            inputField.value = item.textContent;
            inputHiddenField.value = item.dataset.id;
            dropdown.classList.remove('open');
            filterItems('');
        });
    });

    inputField.addEventListener('focus', () => {
        inputField.placeholder = 'Поиск...';
        dropdown.classList.add('open');
        filterItems('');
    });

    inputField.addEventListener('blur', () => {
        inputField.placeholder = inputField.getAttribute('data-placeholder');
        dropdown.classList.remove('open');
    });
}
let selectWrappers = document.querySelectorAll('.select-wrapper');
selectWrappers.forEach(initSelect);