// AI Video Generation Models Data
const aiVideoModels = [
    {
        id: 'sora',
        name: 'Sora',
        company: 'OpenAI',
        logo: '🎬',
        category: 'text-to-video',
        pricing: 'paid',
        rating: 9.5,
        popularity: 95,
        description: 'Advanced text-to-video generation model capable of creating highly realistic and imaginative scenes from textual descriptions.',
        features: ['Text-to-video', 'High realism', 'Complex scenes', 'Creative control'],
        quality: 95,
        speed: 85,
        easeOfUse: 90,
        price: '$15/month',
        website: 'https://openai.com/sora',
        useCases: ['Marketing videos', 'Creative storytelling', 'Educational content']
    },
    {
        id: 'runway-gen2',
        name: 'Gen-2',
        company: 'Runway ML',
        logo: '🚀',
        category: 'text-to-video',
        pricing: 'freemium',
        rating: 9.2,
        popularity: 88,
        description: 'Professional AI video generation tool with advanced controls for text, image, and video-to-video conversion.',
        features: ['Text-to-video', 'Image-to-video', 'Video-to-video', 'Style presets'],
        quality: 90,
        speed: 80,
        easeOfUse: 85,
        price: 'Free trial, $15/month Pro',
        website: 'https://runwayml.com',
        useCases: ['Professional video editing', 'Content creation', 'Art projects']
    },
    {
        id: 'pika-labs',
        name: 'Pika Labs',
        company: 'Pika Labs',
        logo: '🎨',
        category: 'text-to-video',
        pricing: 'freemium',
        rating: 8.8,
        popularity: 82,
        description: 'Creative AI video generation platform known for artistic and stylized video creation.',
        features: ['Text-to-video', 'Artistic styles', 'Character consistency', 'Custom models'],
        quality: 85,
        speed: 90,
        easeOfUse: 88,
        price: 'Free tier, $8/month Creator',
        website: 'https://pika.art',
        useCases: ['Creative projects', 'Social media content', 'Art generation']
    },
    {
        id: 'stable-video-diffusion',
        name: 'Stable Video Diffusion',
        company: 'Stability AI',
        logo: '🔬',
        category: 'image-to-video',
        pricing: 'free',
        rating: 8.5,
        popularity: 75,
        description: 'Open-source AI video generation model based on Stable Diffusion, excellent for consistent character animation.',
        features: ['Image-to-video', 'Open source', 'Character consistency', 'Customizable'],
        quality: 80,
        speed: 75,
        easeOfUse: 70,
        price: 'Free',
        website: 'https://stability.ai/stable-video',
        useCases: ['Character animation', 'Educational content', 'Research']
    },
    {
        id: 'google-veo',
        name: 'Veo',
        company: 'Google',
        logo: '🌟',
        category: 'text-to-video',
        pricing: 'paid',
        rating: 9.0,
        popularity: 78,
        description: 'Google\'s advanced AI video generation model with excellent prompt understanding and high-quality output.',
        features: ['Text-to-video', 'High resolution', 'Complex prompts', 'Google integration'],
        quality: 88,
        speed: 82,
        easeOfUse: 85,
        price: 'Contact for pricing',
        website: 'https://deepmind.google/veo',
        useCases: ['Professional content', 'Marketing', 'Enterprise solutions']
    },
    {
        id: 'luma-dream-machine',
        name: 'Dream Machine',
        company: 'Luma AI',
        logo: '⚡',
        category: 'text-to-video',
        pricing: 'freemium',
        rating: 8.7,
        popularity: 80,
        description: 'Fast and efficient AI video generation with focus on motion quality and realistic movements.',
        features: ['Text-to-video', 'Fast generation', 'Motion focus', 'Realistic physics'],
        quality: 82,
        speed: 95,
        easeOfUse: 83,
        price: 'Free tier, $29/month Pro',
        website: 'https://lumalabs.ai/dream-machine',
        useCases: ['Quick content creation', 'Social media', 'Dynamic scenes']
    },
    {
        id: 'kling-ai',
        name: 'Kling AI',
        company: 'Kling AI',
        logo: '🎭',
        category: 'text-to-video',
        pricing: 'freemium',
        rating: 8.6,
        popularity: 73,
        description: 'Chinese AI video generation model known for detailed scenes and realistic video output.',
        features: ['Text-to-video', 'Detailed scenes', 'Realistic rendering', 'Asian language support'],
        quality: 86,
        speed: 78,
        easeOfUse: 75,
        price: 'Free tier, ¥99/month Pro',
        website: 'https://klingai.com',
        useCases: ['Detailed storytelling', 'Realistic scenes', 'Asian markets']
    },
    {
        id: 'hailuo-ai',
        name: 'Hailuo AI',
        company: 'Hailuo AI',
        logo: '🌊',
        category: 'text-to-video',
        pricing: 'freemium',
        rating: 8.4,
        popularity: 70,
        description: 'AI video generation model with focus on realistic video creation and natural movements.',
        features: ['Text-to-video', 'Realistic motion', 'Natural language', 'High fidelity'],
        quality: 84,
        speed: 80,
        easeOfUse: 78,
        price: 'Free tier, ¥68/month Pro',
        website: 'https://hailuoai.com',
        useCases: ['Realistic content', 'Training videos', 'Documentaries']
    }
];

// DOM Elements
const modelsGrid = document.getElementById('modelsGrid');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const pricingFilter = document.getElementById('pricingFilter');
const sortFilter = document.getElementById('sortFilter');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    populateModels(aiVideoModels);
    setupEventListeners();
});

// Populate models grid
function populateModels(models) {
    modelsGrid.innerHTML = '';
    
    models.forEach(model => {
        const modelCard = createModelCard(model);
        modelsGrid.appendChild(modelCard);
    });
}

// Create model card HTML
function createModelCard(model) {
    const card = document.createElement('div');
    card.className = 'model-card';
    card.innerHTML = `
        <div class="model-header">
            <div class="model-logo">${model.logo}</div>
            <div class="model-name">${model.name}</div>
            <div class="model-company">${model.company}</div>
            <div class="model-badge ${model.pricing}">${model.pricing}</div>
        </div>
        <div class="model-body">
            <div class="model-description">${model.description}</div>
            <div class="model-features">
                ${model.features.map(feature => `<div class="feature-tag">${feature}</div>`).join('')}
            </div>
            <div class="model-metrics">
                <div class="metric">
                    <div class="metric-value">${model.quality}%</div>
                    <div class="metric-label">Quality</div>
                </div>
                <div class="metric">
                    <div class="metric-value">${model.speed}%</div>
                    <div class="metric-label">Speed</div>
                </div>
                <div class="metric">
                    <div class="metric-value">${model.easeOfUse}%</div>
                    <div class="metric-label">Ease of Use</div>
                </div>
            </div>
            <div class="model-actions">
                <a href="${model.website}" target="_blank" class="btn btn-primary">
                    <i class="fas fa-external-link-alt"></i>
                    Visit Site
                </a>
                <button class="btn btn-secondary" onclick="addToComparison('${model.id}')">
                    <i class="fas fa-balance-scale"></i>
                    Compare
                </button>
            </div>
        </div>
    `;
    return card;
}

// Setup event listeners
function setupEventListeners() {
    searchInput.addEventListener('input', filterModels);
    categoryFilter.addEventListener('change', filterModels);
    pricingFilter.addEventListener('change', filterModels);
    sortFilter.addEventListener('change', filterModels);
}

// Filter and sort models
function filterModels() {
    const searchTerm = searchInput.value.toLowerCase();
    const categoryValue = categoryFilter.value;
    const pricingValue = pricingFilter.value;
    const sortValue = sortFilter.value;

    let filteredModels = aiVideoModels.filter(model => {
        const matchesSearch = model.name.toLowerCase().includes(searchTerm) || 
                             model.description.toLowerCase().includes(searchTerm) ||
                             model.company.toLowerCase().includes(searchTerm);
        
        const matchesCategory = categoryValue === 'all' || model.category === categoryValue;
        const matchesPricing = pricingValue === 'all' || model.pricing === pricingValue;

        return matchesSearch && matchesCategory && matchesPricing;
    });

    // Sort models
    filteredModels.sort((a, b) => {
        switch(sortValue) {
            case 'name':
                return a.name.localeCompare(b.name);
            case 'rating':
                return b.rating - a.rating;
            case 'popularity':
                return b.popularity - a.popularity;
            default:
                return 0;
        }
    });

    populateModels(filteredModels);
}

// Comparison functionality
let comparisonModels = [];

function addToComparison(modelId) {
    const model = aiVideoModels.find(m => m.id === modelId);
    
    if (comparisonModels.length < 2 && !comparisonModels.find(m => m.id === modelId)) {
        comparisonModels.push(model);
        updateComparisonTable();
        
        // Show success message
        showNotification(`${model.name} added to comparison`);
    } else if (comparisonModels.find(m => m.id === modelId)) {
        showNotification(`${model.name} is already in comparison`);
    } else {
        showNotification('Maximum 2 models can be compared at once');
    }
}

function updateComparisonTable() {
    const tableHead = document.querySelector('#comparisonTable thead tr');
    const tableBody = document.querySelector('#comparisonTable tbody');
    
    // Update table headers
    const headers = tableHead.querySelectorAll('th');
    headers[0].textContent = 'Feature';
    headers[1].textContent = comparisonModels[0] ? comparisonModels[0].name : 'Select Model';
    headers[2].textContent = comparisonModels[1] ? comparisonModels[1].name : 'Select Model';
    
    // Update table body
    tableBody.innerHTML = `
        <tr>
            <td>Company</td>
            <td>${comparisonModels[0] ? comparisonModels[0].company : '-'}</td>
            <td>${comparisonModels[1] ? comparisonModels[1].company : '-'}</td>
        </tr>
        <tr>
            <td>Quality</td>
            <td>${comparisonModels[0] ? comparisonModels[0].quality + '%' : '-'}</td>
            <td>${comparisonModels[1] ? comparisonModels[1].quality + '%' : '-'}</td>
        </tr>
        <tr>
            <td>Speed</td>
            <td>${comparisonModels[0] ? comparisonModels[0].speed + '%' : '-'}</td>
            <td>${comparisonModels[1] ? comparisonModels[1].speed + '%' : '-'}</td>
        </tr>
        <tr>
            <td>Ease of Use</td>
            <td>${comparisonModels[0] ? comparisonModels[0].easeOfUse + '%' : '-'}</td>
            <td>${comparisonModels[1] ? comparisonModels[1].easeOfUse + '%' : '-'}</td>
        </tr>
        <tr>
            <td>Pricing</td>
            <td>${comparisonModels[0] ? comparisonModels[0].price : '-'}</td>
            <td>${comparisonModels[1] ? comparisonModels[1].price : '-'}</td>
        </tr>
        <tr>
            <td>Rating</td>
            <td>${comparisonModels[0] ? comparisonModels[0].rating + '/10' : '-'}</td>
            <td>${comparisonModels[1] ? comparisonModels[1].rating + '/10' : '-'}</td>
        </tr>
        <tr>
            <td>Category</td>
            <td>${comparisonModels[0] ? formatCategory(comparisonModels[0].category) : '-'}</td>
            <td>${comparisonModels[1] ? formatCategory(comparisonModels[1].category) : '-'}</td>
        </tr>
    `;
}

function formatCategory(category) {
    const categories = {
        'text-to-video': 'Text to Video',
        'image-to-video': 'Image to Video',
        'video-to-video': 'Video to Video'
    };
    return categories[category] || category;
}

// Notification system
function showNotification(message) {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-info-circle"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: var(--shadow-lg);
        z-index: 1001;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add notification animations to CSS
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(notificationStyles);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Loading state management
function showLoading() {
    modelsGrid.innerHTML = '<div class="loading"><span class="loading-spinner"></span>Loading models...</div>';
}

function hideLoading() {
    const loading = modelsGrid.querySelector('.loading');
    if (loading) {
        loading.remove();
    }
}

// Initialize tooltips for model cards
function initializeTooltips() {
    const modelCards = document.querySelectorAll('.model-card');
    
    modelCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Add tooltip functionality if needed
        });
    });
}

// Statistics counter animation
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = target.textContent;
                
                if (finalValue.includes('%')) {
                    animateNumber(target, 0, parseInt(finalValue), 1000);
                } else if (finalValue.includes('+')) {
                    animateNumber(target, 0, parseInt(finalValue), 1500);
                } else {
                    target.textContent = finalValue;
                }
            }
        });
    });
    
    stats.forEach(stat => observer.observe(stat));
}

function animateNumber(element, start, end, duration) {
    let startTime = null;
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        const current = Math.floor(progress * (end - start) + start);
        element.textContent = end > 100 ? current + '+' : current + '%';
        
        if (progress < 1) {
            requestAnimationFrame(animation);
        }
    }
    
    requestAnimationFrame(animation);
}

// Initialize animations when page loads
window.addEventListener('load', function() {
    animateStats();
    initializeTooltips();
});

// Export functions for potential external use
window.AIVideoHub = {
    addToComparison,
    filterModels,
    showNotification
};