document.addEventListener('DOMContentLoaded', () => {
    const toggleText = document.getElementById('themeToggleText');
    const body = document.body;

    toggleText.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            document.documentElement.style.setProperty('--bg-color', '#000');
            document.documentElement.style.setProperty('--text-color', '#fff');
            toggleText.textContent = 'DARK';
        } else {
            document.documentElement.style.setProperty('--bg-color', '#fff');
            document.documentElement.style.setProperty('--text-color', '#000');
            toggleText.textContent = 'LIGHT';
        }
    });
});
