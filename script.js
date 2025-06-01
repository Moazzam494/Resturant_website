function ToggleMenu() {
    const menuList = document.querySelector('.menuList');
    const clkBtn = document.querySelector('.clkBtn');

    if (menuList.style.visibility === 'visible') {
        menuList.style.visibility = 'hidden';
    } else {
        menuList.style.visibility = 'visible';
    }
    if (clkBtn.style.visibility === 'visible') {
        clkBtn.style.visibility = 'hidden';
    } else {
        clkBtn.style.visibility = 'visible';
    }
}

    const subscribeForm = document.getElementById('subscribeForm');
    const modal = document.getElementById('subscriptionModal');
    const closeModalBtn = document.querySelector('.close-modal');
    const formMessage = document.getElementById('formMessage');

    subscribeForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('email').value;

        if (email.trim() !== '' && email.includes('@')) {
            modal.style.display = 'block';
            subscribeForm.reset();
        } else {
            formMessage.textContent = 'Please enter a valid email address.';
            formMessage.classList.add('show');
        }
    });
    closeModalBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });
    window.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

