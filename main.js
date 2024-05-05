document.addEventListener('DOMContentLoaded', function () {
    const switchButton = document.querySelector('#switch button');
    const avatarImg = document.querySelector('#avatar');

    switchButton.addEventListener('click', function () {
        document.body.classList.toggle('light');
        if (document.body.classList.contains('light')) {
            switchButton.style.right = 'auto';
            switchButton.style.left = '0';
            avatarImg.src = 'avatar-light.png';
            switchButton.style.backgroundImage = 'url(sun-stars.svg)';
        } else {
            switchButton.style.left = 'auto';
            switchButton.style.right = '0';
            avatarImg.src = 'avatar.png';
            switchButton.style.backgroundImage = 'url(moon-stars.svg)';
        }
    });
});
