/**
 * AI Intelligence Hub - Comprehensive AI Tools Platform
 * The ultimate platform for discovering, comparing, and optimizing AI tools
 */

// Comprehensive AI Tools Database
const aiToolsDatabase = [
    // TEXT GENERATION TOOLS
    {
        id: 'chatgpt',
        name: 'ChatGPT',
        company: 'OpenAI',
        logo: '🤖',
        primaryCategory: 'text-generation',
        subcategories: ['writing', 'conversation', 'productivity'],
        useCases: ['writing', 'coding', 'analysis', 'customer-support'],
        pricing: { model: 'freemium', monthlyCost: 20, freeTier: true },
        performance: { quality: 9.2, speed: 8.8, consistency: 9.0, reliability: 9.3 },
        userExperience: { learningCurve: 'beginner', interface: 'intuitive', documentation: 'excellent', support: 'responsive' },
        analytics: { popularity: 95, growth: '+12%', lastUpdated: '2024-01-15', launchDate: '2022-11-30' },
        community: { rating: 4.7, reviewCount: 15420, sentiment: 'positive' },
        description: 'Advanced conversational AI that can understand and generate human-like text for a wide variety of tasks.',
        features: ['Natural conversation', 'Code generation', 'Text analysis', 'Multi-language support', 'API access'],
        capabilities: { inputTypes: ['text'], outputTypes: ['text'], integrations: ['api', 'zapier'], platforms: ['web', 'api'] },
        vibeAlignment: { creative: 8, productive: 9, explorative: 9, relaxed: 8 },
        roiScore: 6900,
        website: 'https://chat.openai.com',
        tasks: {
            'Write a blog post': { effectiveness: 9.2, timeToComplete: '5 minutes', outputQuality: 'professional' },
            'Generate product descriptions': { effectiveness: 8.8, timeToComplete: '2 minutes', outputQuality: 'commercial' },
            'Create social media content': { effectiveness: 8.5, timeToComplete: '3 minutes', outputQuality: 'engaging' }
        }
    },
    {
        id: 'claude',
        name: 'Claude',
        company: 'Anthropic',
        logo: '🧠',
        primaryCategory: 'text-generation',
        subcategories: ['writing', 'analysis', 'research'],
        useCases: ['writing', 'research', 'analysis', 'coding'],
        pricing: { model: 'freemium', monthlyCost: 20, freeTier: true },
        performance: { quality: 9.5, speed: 8.5, consistency: 9.2, reliability: 9.4 },
        userExperience: { learningCurve: 'intermediate', interface: 'intuitive', documentation: 'excellent', support: 'responsive' },
        analytics: { popularity: 78, growth: '+25%', lastUpdated: '2024-01-15', launchDate: '2023-03-14' },
        community: { rating: 4.8, reviewCount: 8930, sentiment: 'positive' },
        description: 'Constitutional AI assistant focused on safety and helpfulness, with strong reasoning capabilities.',
        features: ['Constitutional AI', 'Strong reasoning', 'Safety-focused', 'Long context', 'Code analysis'],
        capabilities: { inputTypes: ['text'], outputTypes: ['text'], integrations: ['api'], platforms: ['web', 'api'] },
        vibeAlignment: { creative: 7, productive: 9, explorative: 8, relaxed: 7 },
        roiScore: 6350,
        website: 'https://claude.ai',
        tasks: {
            'Research complex topics': { effectiveness: 9.5, timeToComplete: '10 minutes', outputQuality: 'comprehensive' },
            'Analyze documents': { effectiveness: 9.2, timeToComplete: '8 minutes', outputQuality: 'detailed' }
        }
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
    // IMAGE GENERATION TOOLS
    {
        id: 'midjourney',
        name: 'Midjourney',
        company: 'Midjourney',
        logo: '🎨',
        primaryCategory: 'image-generation',
        subcategories: ['art', 'design', 'creative'],
        useCases: ['art', 'design', 'marketing', 'social-media'],
        pricing: { model: 'freemium', monthlyCost: 10, freeTier: true },
        performance: { quality: 9.3, speed: 7.5, consistency: 8.8, reliability: 8.9 },
        userExperience: { learningCurve: 'intermediate', interface: 'moderate', documentation: 'good', support: 'community' },
        analytics: { popularity: 88, growth: '+18%', lastUpdated: '2024-01-15', launchDate: '2022-07-12' },
        community: { rating: 4.6, reviewCount: 12450, sentiment: 'positive' },
        description: 'AI art generation tool that creates stunning images from text prompts, popular among artists and designers.',
        features: ['High-quality art', 'Style variety', 'Community gallery', 'Discord integration'],
        capabilities: { inputTypes: ['text'], outputTypes: ['image'], integrations: ['discord'], platforms: ['web'] },
        vibeAlignment: { creative: 10, productive: 6, explorative: 8, relaxed: 9 },
        roiScore: 3800,
        website: 'https://midjourney.com',
        tasks: {
            'Create concept art': { effectiveness: 9.3, timeToComplete: '2 minutes', outputQuality: 'artistic' },
            'Design social media graphics': { effectiveness: 8.7, timeToComplete: '3 minutes', outputQuality: 'professional' }
        }
    },
    {
        id: 'dalle-3',
        name: 'DALL-E 3',
        company: 'OpenAI',
        logo: '🎭',
        primaryCategory: 'image-generation',
        subcategories: ['art', 'design', 'creative'],
        useCases: ['art', 'design', 'illustration', 'marketing'],
        pricing: { model: 'paid', monthlyCost: 20, freeTier: false },
        performance: { quality: 9.1, speed: 8.2, consistency: 8.9, reliability: 9.2 },
        userExperience: { learningCurve: 'beginner', interface: 'intuitive', documentation: 'excellent', support: 'responsive' },
        analytics: { popularity: 82, growth: '+15%', lastUpdated: '2024-01-15', launchDate: '2023-10-01' },
        community: { rating: 4.5, reviewCount: 9870, sentiment: 'positive' },
        description: 'OpenAI\'s latest image generation model with improved understanding and higher quality outputs.',
        features: ['Text-to-image', 'High coherence', 'Style consistency', 'ChatGPT integration'],
        capabilities: { inputTypes: ['text'], outputTypes: ['image'], integrations: ['chatgpt'], platforms: ['web'] },
        vibeAlignment: { creative: 9, productive: 8, explorative: 7, relaxed: 8 },
        roiScore: 4100,
        website: 'https://openai.com/dall-e-3',
        tasks: {
            'Generate product images': { effectiveness: 9.1, timeToComplete: '2 minutes', outputQuality: 'commercial' },
            'Create illustrations': { effectiveness: 8.9, timeToComplete: '3 minutes', outputQuality: 'artistic' }
        }
    },

    // CODE GENERATION TOOLS
    {
        id: 'github-copilot',
        name: 'GitHub Copilot',
        company: 'GitHub',
        logo: '💻',
        primaryCategory: 'code-generation',
        subcategories: ['coding', 'debugging', 'documentation'],
        useCases: ['coding', 'debugging', 'documentation', 'learning'],
        pricing: { model: 'paid', monthlyCost: 10, freeTier: false },
        performance: { quality: 9.4, speed: 9.5, consistency: 9.1, reliability: 9.3 },
        userExperience: { learningCurve: 'intermediate', interface: 'intuitive', documentation: 'excellent', support: 'responsive' },
        analytics: { popularity: 91, growth: '+22%', lastUpdated: '2024-01-15', launchDate: '2021-06-29' },
        community: { rating: 4.7, reviewCount: 23450, sentiment: 'positive' },
        description: 'AI pair programming tool that suggests code completions and entire functions in real-time.',
        features: ['Code completion', 'Function suggestions', 'Multi-language support', 'IDE integration'],
        capabilities: { inputTypes: ['code'], outputTypes: ['code'], integrations: ['vscode', 'jetbrains'], platforms: ['web', 'desktop'] },
        vibeAlignment: { creative: 6, productive: 10, explorative: 7, relaxed: 5 },
        roiScore: 4200,
        website: 'https://github.com/features/copilot',
        tasks: {
            'Write function code': { effectiveness: 9.4, timeToComplete: '1 minute', outputQuality: 'professional' },
            'Debug existing code': { effectiveness: 8.8, timeToComplete: '5 minutes', outputQuality: 'accurate' }
        }
    },

    // VIDEO GENERATION TOOLS
    {
        id: 'sora',
        name: 'Sora',
        company: 'OpenAI',
        logo: '🎬',
        primaryCategory: 'video-generation',
        subcategories: ['text-to-video', 'creative'],
        useCases: ['marketing', 'entertainment', 'education'],
        pricing: { model: 'paid', monthlyCost: 15, freeTier: false },
        performance: { quality: 9.5, speed: 8.5, consistency: 9.2, reliability: 9.0 },
        userExperience: { learningCurve: 'intermediate', interface: 'intuitive', documentation: 'good', support: 'responsive' },
        analytics: { popularity: 95, growth: '+45%', lastUpdated: '2024-01-15', launchDate: '2024-02-15' },
        community: { rating: 4.8, reviewCount: 5670, sentiment: 'positive' },
        description: 'Advanced text-to-video generation model capable of creating highly realistic and imaginative scenes.',
        features: ['Text-to-video', 'High realism', 'Complex scenes', 'Creative control'],
        capabilities: { inputTypes: ['text'], outputTypes: ['video'], integrations: ['api'], platforms: ['web'] },
        vibeAlignment: { creative: 10, productive: 7, explorative: 8, relaxed: 6 },
        roiScore: 5200,
        website: 'https://openai.com/sora',
        tasks: {
            'Create marketing videos': { effectiveness: 9.5, timeToComplete: '10 minutes', outputQuality: 'professional' },
            'Generate educational content': { effectiveness: 9.0, timeToComplete: '8 minutes', outputQuality: 'educational' }
        }
    },

    // AUDIO GENERATION TOOLS
    {
        id: 'elevenlabs',
        name: 'ElevenLabs',
        company: 'ElevenLabs',
        logo: '🎵',
        primaryCategory: 'audio-generation',
        subcategories: ['speech', 'voice', 'entertainment'],
        useCases: ['podcasting', 'audiobooks', 'gaming', 'accessibility'],
        pricing: { model: 'freemium', monthlyCost: 22, freeTier: true },
        performance: { quality: 9.2, speed: 8.7, consistency: 9.0, reliability: 8.8 },
        userExperience: { learningCurve: 'beginner', interface: 'intuitive', documentation: 'excellent', support: 'responsive' },
        analytics: { popularity: 79, growth: '+35%', lastUpdated: '2024-01-15', launchDate: '2022-01-01' },
        community: { rating: 4.6, reviewCount: 7890, sentiment: 'positive' },
        description: 'Ultra-realistic voice synthesis and cloning platform for content creators and businesses.',
        features: ['Voice synthesis', 'Voice cloning', 'Multi-language', 'Emotional control', 'API access'],
        capabilities: { inputTypes: ['text'], outputTypes: ['audio'], integrations: ['api', 'zapier'], platforms: ['web', 'api'] },
        vibeAlignment: { creative: 8, productive: 8, explorative: 7, relaxed: 9 },
        roiScore: 3100,
        website: 'https://elevenlabs.io',
        tasks: {
            'Create podcast voiceovers': { effectiveness: 9.2, timeToComplete: '5 minutes', outputQuality: 'natural' },
            'Generate audiobooks': { effectiveness: 8.9, timeToComplete: '15 minutes', outputQuality: 'expressive' }
        }
    },

    // DATA ANALYSIS TOOLS
    {
        id: 'julius',
        name: 'Julius AI',
        company: 'Julius',
        logo: '📊',
        primaryCategory: 'data-analysis',
        subcategories: ['analytics', 'business-intelligence'],
        useCases: ['analysis', 'reporting', 'business'],
        pricing: { model: 'freemium', monthlyCost: 29, freeTier: true },
        performance: { quality: 8.8, speed: 9.0, consistency: 8.7, reliability: 8.9 },
        userExperience: { learningCurve: 'beginner', interface: 'intuitive', documentation: 'excellent', support: 'responsive' },
        analytics: { popularity: 73, growth: '+28%', lastUpdated: '2024-01-15', launchDate: '2023-06-01' },
        community: { rating: 4.4, reviewCount: 3420, sentiment: 'positive' },
        description: 'AI-powered data analysis and visualization tool that makes complex data accessible to everyone.',
        features: ['Natural language queries', 'Automated insights', 'Interactive visualizations', 'Report generation'],
        capabilities: { inputTypes: ['text', 'data'], outputTypes: ['data', 'insights'], integrations: ['api'], platforms: ['web'] },
        vibeAlignment: { creative: 6, productive: 9, explorative: 8, relaxed: 7 },
        roiScore: 2850,
        website: 'https://julius.ai',
        tasks: {
            'Analyze datasets': { effectiveness: 8.8, timeToComplete: '3 minutes', outputQuality: 'comprehensive' },
            'Generate reports': { effectiveness: 8.5, timeToComplete: '5 minutes', outputQuality: 'professional' }
        }
    },

    // PRODUCTIVITY TOOLS
    {
        id: 'notion-ai',
        name: 'Notion AI',
        company: 'Notion',
        logo: '📝',
        primaryCategory: 'productivity',
        subcategories: ['writing', 'organization', 'collaboration'],
        useCases: ['writing', 'project-management', 'documentation'],
        pricing: { model: 'freemium', monthlyCost: 10, freeTier: true },
        performance: { quality: 8.6, speed: 8.9, consistency: 8.8, reliability: 9.1 },
        userExperience: { learningCurve: 'beginner', interface: 'intuitive', documentation: 'excellent', support: 'responsive' },
        analytics: { popularity: 89, growth: '+15%', lastUpdated: '2024-01-15', launchDate: '2022-11-01' },
        community: { rating: 4.7, reviewCount: 28900, sentiment: 'positive' },
        description: 'AI-enhanced workspace that combines notes, docs, and project management with intelligent assistance.',
        features: ['AI writing', 'Auto-summarization', 'Task management', 'Real-time collaboration'],
        capabilities: { inputTypes: ['text'], outputTypes: ['text'], integrations: ['api'], platforms: ['web', 'desktop', 'mobile'] },
        vibeAlignment: { creative: 7, productive: 10, explorative: 6, relaxed: 8 },
        roiScore: 3200,
        website: 'https://notion.so',
        tasks: {
            'Write project briefs': { effectiveness: 8.6, timeToComplete: '4 minutes', outputQuality: 'structured' },
            'Summarize meeting notes': { effectiveness: 8.9, timeToComplete: '2 minutes', outputQuality: 'concise' }
        }
    }
];

// Workflow Templates Database
const workflowTemplates = {
    'content-creation': [
        {
            id: 'blog-writing-workflow',
            name: 'Professional Blog Writing',
            description: 'Complete workflow for research, writing, and publishing blog content',
            category: 'content-creation',
            difficulty: 'beginner',
            estimatedTime: 180, // minutes
            totalCost: 45,
            tools: ['chatgpt', 'grammarly', 'notion-ai'],
            steps: [
                'Research topic with ChatGPT',
                'Create outline and structure',
                'Write first draft',
                'Edit and improve with Grammarly',
                'Format and publish'
            ],
            benefits: {
                timeSaved: '12 hours/week',
                costSavings: 480,
                outputQuality: 'Professional',
                consistency: 'High'
            }
        },
        {
            id: 'social-media-workflow',
            name: 'Social Media Campaign',
            description: 'Create engaging social media content from idea to publication',
            category: 'content-creation',
            difficulty: 'beginner',
            estimatedTime: 150,
            totalCost: 64,
            tools: ['chatgpt', 'midjourney', 'capcut'],
            steps: [
                'Generate content ideas with ChatGPT',
                'Create visuals with Midjourney',
                'Edit videos with CapCut',
                'Schedule and publish'
            ],
            benefits: {
                timeSaved: '15 hours/week',
                costSavings: 600,
                outputQuality: 'Professional',
                consistency: 'High'
            }
        }
    ]
};

// Vibe Categories Configuration
const vibeCategories = {
    creative: {
        name: 'Creative Flow',
        emoji: '🎨',
        description: 'For artistic and innovative projects',
        gradient: 'from-pink-400 to-orange-500',
        tools: ['midjourney', 'dalle-3', 'sora', 'elevenlabs']
    },
    productive: {
        name: 'Goal Crusher',
        emoji: '⚡',
        description: 'For maximum productivity and efficiency',
        gradient: 'from-green-400 to-blue-500',
        tools: ['chatgpt', 'github-copilot', 'notion-ai']
    },
    explorative: {
        name: 'Curious Explorer',
        emoji: '🔍',
        description: 'For research and discovery',
        gradient: 'from-blue-400 to-purple-500',
        tools: ['claude', 'perplexity', 'chatgpt']
    },
    relaxed: {
        name: 'Chill Creator',
        emoji: '😌',
        description: 'For casual, pressure-free creation',
        gradient: 'from-indigo-400 to-purple-400',
        tools: ['chatgpt', 'canva-magic', 'remove-bg']
    }
};

// Application State
const appState = {
    currentView: 'discover',
    selectedVibe: null,
    selectedTools: [],
    comparisonTools: [],
    searchTerm: '',
    filters: {
        category: 'all',
        useCase: 'all',
        pricing: 'all',
        sortBy: 'popularity'
    }
};

// DOM Elements
const modelsGrid = document.getElementById('modelsGrid');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const useCaseFilter = document.getElementById('useCaseFilter');
const pricingFilter = document.getElementById('pricingFilter');
const sortFilter = document.getElementById('sortFilter');
const vibeGrid = document.getElementById('vibeGrid');
const featuredWorkflows = document.getElementById('featuredWorkflows');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApplication();
});

// Main application initialization
function initializeApplication() {
    console.log('🚀 Initializing AI Intelligence Hub...');

    // Initialize all components
    populateVibeGrid();
    populateModels(aiToolsDatabase);
    populateWorkflows();
    setupEventListeners();
    animateStats();

    console.log('✅ AI Intelligence Hub initialized successfully');
}

// Populate vibe discovery grid
function populateVibeGrid() {
    if (!vibeGrid) return;

    vibeGrid.innerHTML = '';

    Object.entries(vibeCategories).forEach(([key, vibe]) => {
        const vibeCard = document.createElement('div');
        vibeCard.className = 'vibe-card';
        vibeCard.setAttribute('data-vibe', key);
        vibeCard.onclick = () => selectVibe(key);

        vibeCard.innerHTML = `
            <div class="vibe-icon">${vibe.emoji}</div>
            <h3>${vibe.name}</h3>
            <p>${vibe.description}</p>
            <div class="vibe-tools-count">${vibe.tools.length}+ tools</div>
        `;

        vibeGrid.appendChild(vibeCard);
    });
}

// Populate AI tools grid
function populateModels(tools) {
    if (!modelsGrid) return;

    modelsGrid.innerHTML = '';

    tools.forEach(tool => {
        const toolCard = createToolCard(tool);
        modelsGrid.appendChild(toolCard);
    });
}

// Populate workflows section
function populateWorkflows() {
    if (!featuredWorkflows) return;

    featuredWorkflows.innerHTML = '';

    Object.values(workflowTemplates).flat().slice(0, 6).forEach(workflow => {
        const workflowCard = createWorkflowCard(workflow);
        featuredWorkflows.appendChild(workflowCard);
    });
}

// Vibe selection handler
function selectVibe(vibeKey) {
    const vibe = vibeCategories[vibeKey];
    if (!vibe) return;

    appState.selectedVibe = vibeKey;

    // Update UI
    document.querySelectorAll('.vibe-card').forEach(card => {
        card.classList.remove('selected');
    });
    document.querySelector(`[data-vibe="${vibeKey}"]`)?.classList.add('selected');

    // Filter tools by vibe
    const vibeTools = aiToolsDatabase.filter(tool =>
        vibe.tools.includes(tool.id)
    );

    populateModels(vibeTools);
    showNotification(`Showing ${vibeTools.length} tools for ${vibe.name}`);

    // Scroll to models section
    document.getElementById('models')?.scrollIntoView({ behavior: 'smooth' });
}

// Create enhanced AI tool card
function createToolCard(tool) {
    const card = document.createElement('div');
    card.className = 'model-card hover-lift';
    card.innerHTML = `
        <div class="model-header">
            <div class="model-logo">${tool.logo}</div>
            <div class="model-name">${tool.name}</div>
            <div class="model-company">${tool.company}</div>
            <div class="model-badge ${tool.pricing.model}">${tool.pricing.model}</div>
        </div>
        <div class="model-body">
            <div class="model-description">${tool.description}</div>

            <div class="model-categories">
                <span class="category-tag primary">${tool.primaryCategory.replace('-', ' ')}</span>
                ${tool.subcategories?.slice(0, 2).map(cat => `<span class="category-tag">${cat.replace('-', ' ')}</span>`).join('') || ''}
            </div>

            <div class="model-features">
                ${tool.features?.slice(0, 3).map(feature => `<div class="feature-tag">${feature}</div>`).join('') || ''}
            </div>

            <div class="model-metrics">
                <div class="metric">
                    <div class="metric-value">${Math.round((tool.performance.quality + tool.performance.speed + tool.performance.consistency) / 3)}%</div>
                    <div class="metric-label">Overall</div>
                </div>
                <div class="metric">
                    <div class="metric-value">${tool.analytics.popularity}%</div>
                    <div class="metric-label">Popular</div>
                </div>
                <div class="metric">
                    <div class="metric-value">${tool.roiScore > 1000 ? Math.round(tool.roiScore / 1000) + 'K+' : tool.roiScore + '%'}</div>
                    <div class="metric-label">ROI Score</div>
                </div>
            </div>

            <div class="model-actions">
                <a href="${tool.website}" target="_blank" class="btn btn-primary">
                    <i class="fas fa-external-link-alt"></i>
                    Visit Site
                </a>
                <button class="btn btn-secondary" onclick="addToComparison('${tool.id}')">
                    <i class="fas fa-balance-scale"></i>
                    Compare
                </button>
            </div>
        </div>
    `;
    return card;
}

// Create workflow card
function createWorkflowCard(workflow) {
    const card = document.createElement('div');
    card.className = 'workflow-card hover-lift';
    card.innerHTML = `
        <div class="workflow-header">
            <div class="workflow-icon">📋</div>
            <div class="workflow-title">
                <h3>${workflow.name}</h3>
                <p>${workflow.description}</p>
            </div>
        </div>
        <div class="workflow-details">
            <div class="workflow-meta">
                <span class="workflow-time"><i class="fas fa-clock"></i> ${workflow.estimatedTime}min</span>
                <span class="workflow-cost"><i class="fas fa-dollar-sign"></i> $${workflow.totalCost}</span>
                <span class="workflow-difficulty ${workflow.difficulty}">${workflow.difficulty}</span>
            </div>
            <div class="workflow-tools">
                ${workflow.tools.map(toolId => {
                    const tool = aiToolsDatabase.find(t => t.id === toolId);
                    return tool ? `<span class="workflow-tool">${tool.logo} ${tool.name}</span>` : `<span class="workflow-tool">🔧 ${toolId}</span>`;
                }).join('')}
            </div>
            <div class="workflow-benefits">
                <div class="benefit-item">
                    <i class="fas fa-rocket"></i>
                    <span>Saves ${workflow.benefits.timeSaved}</span>
                </div>
                <div class="benefit-item">
                    <i class="fas fa-chart-line"></i>
                    <span>${workflow.benefits.outputQuality} Quality</span>
                </div>
            </div>
        </div>
        <div class="workflow-actions">
            <button class="btn btn-primary" onclick="viewWorkflow('${workflow.id}')">
                <i class="fas fa-eye"></i>
                View Workflow
            </button>
        </div>
    `;
    return card;
}

// Enhanced event listeners setup
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', handleSearch);

    // Filter functionality
    if (categoryFilter) categoryFilter.addEventListener('change', handleFilters);
    if (useCaseFilter) useCaseFilter.addEventListener('change', handleFilters);
    if (pricingFilter) pricingFilter.addEventListener('change', handleFilters);
    if (sortFilter) sortFilter.addEventListener('change', handleFilters);

    // Vibe selection
    document.querySelectorAll('.vibe-card').forEach(card => {
        card.addEventListener('click', function() {
            const vibe = this.getAttribute('data-vibe');
            if (vibe) selectVibe(vibe);
        });
    });

    // Newsletter form
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }

    console.log('✅ Event listeners setup complete');
}

// Enhanced search handler
function handleSearch() {
    appState.searchTerm = searchInput.value;
    applyFiltersAndSearch();
}

// Enhanced filter handler
function handleFilters() {
    if (categoryFilter) appState.filters.category = categoryFilter.value;
    if (useCaseFilter) appState.filters.useCase = useCaseFilter.value;
    if (pricingFilter) appState.filters.pricing = pricingFilter.value;
    if (sortFilter) appState.filters.sortBy = sortFilter.value;

    applyFiltersAndSearch();
}

// Apply all filters and search
function applyFiltersAndSearch() {
    let filteredTools = [...aiToolsDatabase];

    // Apply search filter
    if (appState.searchTerm) {
        const searchTerm = appState.searchTerm.toLowerCase();
        filteredTools = filteredTools.filter(tool =>
            tool.name.toLowerCase().includes(searchTerm) ||
            tool.description.toLowerCase().includes(searchTerm) ||
            tool.company.toLowerCase().includes(searchTerm) ||
            tool.features?.some(f => f.toLowerCase().includes(searchTerm)) ||
            tool.useCases?.some(u => u.toLowerCase().includes(searchTerm))
        );
    }

    // Apply category filter
    if (appState.filters.category !== 'all') {
        filteredTools = filteredTools.filter(tool =>
            tool.primaryCategory === appState.filters.category ||
            tool.subcategories?.includes(appState.filters.category)
        );
    }

    // Apply use case filter
    if (appState.filters.useCase !== 'all') {
        filteredTools = filteredTools.filter(tool =>
            tool.useCases?.includes(appState.filters.useCase)
        );
    }

    // Apply pricing filter
    if (appState.filters.pricing !== 'all') {
        filteredTools = filteredTools.filter(tool =>
            tool.pricing.model === appState.filters.pricing
        );
    }

    // Apply sorting
    filteredTools.sort((a, b) => {
        switch(appState.filters.sortBy) {
            case 'name':
                return a.name.localeCompare(b.name);
            case 'rating':
                return (b.community?.rating || 0) - (a.community?.rating || 0);
            case 'popularity':
                return b.analytics.popularity - a.analytics.popularity;
            case 'roi':
                return b.roiScore - a.roiScore;
            default:
                return b.analytics.popularity - a.analytics.popularity;
        }
    });

    populateModels(filteredTools);
    console.log(`🔍 Filtered to ${filteredTools.length} tools`);
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
    
    // Add notification with proper styling
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: 'var(--success-color)',
        color: 'white',
        padding: '1rem 1.5rem',
        borderRadius: '12px',
        boxShadow: 'var(--shadow-lg)',
        zIndex: '1001',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        animation: 'slideIn 0.3s ease',
        maxWidth: '300px',
        fontSize: '0.9rem',
        fontWeight: '500'
    });
    
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

// Workflow recommendation engine
function recommendWorkflows(userContext = {}) {
    const { task, category, skillLevel = 'beginner', budget = 100 } = userContext;

    if (!task) return Object.values(workflowTemplates).flat();

    // Find relevant workflows based on task/category
    let relevantWorkflows = [];

    Object.values(workflowTemplates).forEach(categoryWorkflows => {
        categoryWorkflows.forEach(workflow => {
            const matchesTask = !task || workflow.name.toLowerCase().includes(task.toLowerCase());
            const matchesCategory = !category || workflow.category === category;
            const withinBudget = workflow.totalCost <= budget;

            if (matchesTask && matchesCategory && withinBudget) {
                relevantWorkflows.push(workflow);
            }
        });
    });

    // Sort by relevance and cost-effectiveness
    return relevantWorkflows.sort((a, b) => {
        const aScore = (a.benefits.timeSaved.includes('hour') ? 10 : 5) + (a.totalCost < 50 ? 5 : 0);
        const bScore = (b.benefits.timeSaved.includes('hour') ? 10 : 5) + (b.totalCost < 50 ? 5 : 0);
        return bScore - aScore;
    });
}

// Get workflow recommendations for a specific category
function getWorkflowsByCategory(category) {
    return workflowTemplates[category] || [];
}

// Initialize animations when page loads
window.addEventListener('load', function() {
    animateStats();
    initializeTooltips();

    // Initialize vibe cards with click handlers
    document.querySelectorAll('.vibe-card').forEach(card => {
        card.classList.add('animate-fade-in-up');
    });
});

// Utility functions
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function handleNewsletterSubmit(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;

    if (email) {
        showNotification('Thanks for subscribing! 🎉');
        e.target.reset();
    }
}

function viewWorkflow(workflowId) {
    // Find workflow in templates
    const workflow = Object.values(workflowTemplates).flat().find(w => w.id === workflowId);
    if (workflow) {
        showNotification(`Opening ${workflow.name} workflow...`);
        // In a real app, this would open a detailed workflow view
        console.log('Viewing workflow:', workflow);
    }
}

// Enhanced comparison functionality
function addToComparison(toolId) {
    const tool = aiToolsDatabase.find(t => t.id === toolId);

    if (!tool) return;

    if (appState.comparisonTools.length < 3 && !appState.comparisonTools.find(t => t.id === toolId)) {
        appState.comparisonTools.push(tool);
        updateComparisonTable();

        showNotification(`${tool.name} added to comparison`);
    } else if (appState.comparisonTools.find(t => t.id === toolId)) {
        showNotification(`${tool.name} is already in comparison`);
    } else {
        showNotification('Maximum 3 tools can be compared at once');
    }
}

function updateComparisonTable() {
    const table = document.getElementById('comparisonTable');
    if (!table) return;

    const tbody = table.querySelector('tbody');
    const headerRow = table.querySelector('thead tr');

    // Update headers
    const headers = headerRow.querySelectorAll('th');
    headers[0] = 'Metric';

    appState.comparisonTools.forEach((tool, index) => {
        if (headers[index + 1]) {
            headers[index + 1].textContent = tool.name;
        }
    });

    // Clear existing rows
    tbody.innerHTML = '';

    if (appState.comparisonTools.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4">Select tools to compare</td></tr>';
        return;
    }

    // Add comparison rows
    const comparisonData = [
        ['Company', ...appState.comparisonTools.map(t => t.company)],
        ['Category', ...appState.comparisonTools.map(t => t.primaryCategory.replace('-', ' '))],
        ['Quality Score', ...appState.comparisonTools.map(t => `${t.performance.quality}/10`)],
        ['Popularity', ...appState.comparisonTools.map(t => `${t.analytics.popularity}%`)],
        ['ROI Score', ...appState.comparisonTools.map(t => `${t.roiScore}%`)],
        ['Pricing', ...appState.comparisonTools.map(t => `$${t.pricing.monthlyCost}/${t.pricing.model}`)]
    ];

    comparisonData.forEach(rowData => {
        const row = document.createElement('tr');
        rowData.forEach(cellData => {
            const cell = document.createElement('td');
            cell.textContent = cellData;
            row.appendChild(cell);
        });
        tbody.appendChild(row);
    });
}

// Community features
const communityData = {
    reviews: {},
    userInteractions: [],
    newsletterSubscribers: []
};

function submitReview(toolId, rating, comment) {
    if (!communityData.reviews[toolId]) {
        communityData.reviews[toolId] = [];
    }

    const review = {
        id: Date.now().toString(),
        toolId,
        rating,
        comment,
        timestamp: new Date().toISOString(),
        helpful: 0
    };

    communityData.reviews[toolId].push(review);
    showNotification('Review submitted successfully! ⭐');

    // Update tool's community rating
    updateToolCommunityRating(toolId);
}

function updateToolCommunityRating(toolId) {
    const tool = aiToolsDatabase.find(t => t.id === toolId);
    const reviews = communityData.reviews[toolId] || [];

    if (reviews.length > 0) {
        const avgRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
        tool.community.rating = Math.round(avgRating * 10) / 10;
        tool.community.reviewCount = reviews.length;
    }
}

// Export functions for external use
window.AIIntelligenceHub = {
    selectVibe,
    addToComparison,
    handleSearch,
    handleFilters,
    scrollToSection,
    showNotification,
    recommendWorkflows,
    submitReview,
    appState: () => appState,
    communityData: () => communityData
};