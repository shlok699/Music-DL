class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                nav {
                    transition: all 0.3s ease;
                }
                .nav-link:hover {
                    color: #1DB954;
                }
                .theme-toggle:hover {
                    transform: rotate(30deg);
                }
            </style>
            <nav class="bg-white dark:bg-gray-800 shadow-sm">
                <div class="container mx-auto px-4 py-4 flex justify-between items-center">
                    <a href="/" class="flex items-center">
                        <i data-feather="music" class="text-primary-500 mr-2"></i>
                        <span class="text-xl font-bold text-gray-800 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">ROWDY MUSIC</span>
</a>
                    
                    <div class="hidden md:flex space-x-8">
                        <a href="#" class="nav-link text-gray-600 dark:text-gray-300 hover:text-primary-500 font-medium">Home</a>
                        <a href="#" class="nav-link text-gray-600 dark:text-gray-300 hover:text-primary-500 font-medium">Features</a>
                        <a href="#" class="nav-link text-gray-600 dark:text-gray-300 hover:text-primary-500 font-medium">FAQ</a>
                        <a href="#" class="nav-link text-gray-600 dark:text-gray-300 hover:text-primary-500 font-medium">Contact</a>
                    </div>
                    
                    <div class="flex items-center space-x-4">
                        <button id="themeToggle" class="theme-toggle p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 transition-all">
                            <i data-feather="moon" class="hidden dark:block"></i>
                            <i data-feather="sun" class="dark:hidden"></i>
                        </button>
                        <a href="#" class="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                            Get Started
                        </a>
                    </div>
                </div>
            </nav>
        `;
        
        // Add theme toggle functionality
        this.shadowRoot.getElementById('themeToggle').addEventListener('click', () => {
            const html = document.documentElement;
            html.classList.toggle('dark');
            localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
            feather.replace();
        });
    }
}
customElements.define('custom-navbar', CustomNavbar);