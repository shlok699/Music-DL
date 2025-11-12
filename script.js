// Theme switcher functionality
document.addEventListener('DOMContentLoaded', () => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    // Handle Spotify download button
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            const input = button.previousElementSibling;
            if (input.value.trim() === '') {
                input.focus();
                return;
            }
            
            // Show loading state
            const originalText = button.textContent;
            button.innerHTML = '<span class="animate-pulse">Processing...</span>';
            button.disabled = true;
            
            // Simulate processing (in a real app, this would be an API call)
            setTimeout(() => {
                button.textContent = originalText;
                button.disabled = false;
                
                // Show success message
                const toast = document.createElement('div');
                toast.className = 'fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg';
                toast.textContent = 'Playlist processed successfully!';
                document.body.appendChild(toast);
                
                setTimeout(() => {
                    toast.remove();
                }, 3000);
            }, 2000);
        });
    });
});