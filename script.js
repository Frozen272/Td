document.addEventListener('DOMContentLoaded', () => {
    const checkButtons = document.querySelectorAll('.check-btn');

    checkButtons.forEach(button => {
        const cell = button.parentElement;
        const id = cell.getAttribute('data-id');
        
        // Load saved state from localStorage
        if (localStorage.getItem(id) === 'checked') {
            cell.classList.add('clicked');
        }

        button.addEventListener('click', () => {
            const isChecked = cell.classList.toggle('clicked');
            localStorage.setItem(id, isChecked ? 'checked' : 'unchecked');
            
            // Remove the saved state after a week
            setTimeout(() => {
                localStorage.removeItem(id);
                cell.classList.remove('clicked');
            }, 604800000); // 7 days in milliseconds
        });
    });
});