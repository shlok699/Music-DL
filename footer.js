class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .footer-link:hover {
                    color: #1DB954;
                    transform: translateX(2px);
                }
                .social-icon:hover {
                    transform: translateY(-3px);
                }
            </style>
            <footer class="bg-gray-800 dark:bg-gray-900 text-white py-12">
                <div class="container mx-auto px-4">
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 class="text-xl font-bold mb-4 flex items-center">
                                <i data-feather="music" class="text-primary-500 mr-2"></i>
                                ROWDY MUSIC
</h3>
                            <p class="text-gray-400 mb-4">
                                Premium music downloads with speed and quality. Get your playlists now!
</p>
                            <div class="flex space-x-4">
                                <a href="#" class="social-icon text-gray-400 hover:text-primary-500 transition-transform">
                                    <i data-feather="twitter"></i>
                                </a>
                                <a href="#" class="social-icon text-gray-400 hover:text-primary-500 transition-transform">
                                    <i data-feather="instagram"></i>
                                </a>
                                <a href="#" class="social-icon text-gray-400 hover:text-primary-500 transition-transform">
                                    <i data-feather="facebook"></i>
                                </a>
                            </div>
                        </div>
                        
                        <div>
                            <h4 class="font-semibold text-lg mb-4">Quick Links</h4>
                            <ul class="space-y-2">
                                <li><a href="#" class="footer-link text-gray-400 transition-all">Home</a></li>
                                <li><a href="#" class="footer-link text-gray-400 transition-all">Features</a></li>
                                <li><a href="#" class="footer-link text-gray-400 transition-all">Pricing</a></li>
                                <li><a href="#" class="footer-link text-gray-400 transition-all">FAQ</a></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 class="font-semibold text-lg mb-4">Legal</h4>
                            <ul class="space-y-2">
                                <li><a href