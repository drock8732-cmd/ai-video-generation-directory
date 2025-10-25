/**
 * AI Intelligence Hub - Comprehensive AI Tools Platform
 * The ultimate platform for discovering, comparing, and optimizing AI tools
 */

// Comprehensive AI Tools Database (loaded from JSON)
let aiToolsDatabase = [];

// Required fields for tool schema validation
const REQUIRED_TOOL_FIELDS = ['id', 'name', 'company', 'description', 'primaryCategory', 'pricing', 'website'];

/**
 * Load tools from external JSON file
 * @returns {Promise<Array>} Array of validated tools
 */
async function loadToolsData() {
    try {
        const response = await fetch('./data/tools.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const tools = await response.json();
        return validateTools(tools);
    } catch (error) {
        console.error('❌ Failed to load tools data:', error);
        return [];
    }
}

/**
 * Validate tools array and check for missing required fields
 * @param {Array} tools - Array of tool objects
 * @returns {Array} Array of valid tools (invalid tools are skipped)
 */
function validateTools(tools) {
    if (!Array.isArray(tools)) {
        console.error('❌ Tools data is not an array');
        return [];
    }

    const validTools = [];

    tools.forEach((tool, index) => {
        const missingFields = REQUIRED_TOOL_FIELDS.filter(field => !tool[field]);

        if (missingFields.length > 0) {
            console.warn(`⚠️ Tool at index ${index} is missing required fields: ${missingFields.join(', ')}`, tool);
            return; // Skip this tool
        }

        validTools.push(tool);
    });

    console.log(`✅ Loaded ${validTools.length} valid tools (${tools.length - validTools.length} skipped)`);
    return validTools;
}

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
        },
        {
            id: 'youtube-video-workflow',
            name: 'YouTube Video Production',
            description: 'Complete workflow for creating professional YouTube videos from script to upload',
            category: 'content-creation',
            difficulty: 'intermediate',
            estimatedTime: 360,
            tools: ['chatgpt', 'elevenlabs', 'capcut'],
            steps: [
                'Research trending topics and write script with ChatGPT',
                'Generate voiceover narration with ElevenLabs',
                'Create and edit video with CapCut (add visuals, effects, captions)',
                'Design thumbnail and write SEO-optimized title/description',
                'Upload to YouTube and optimize for discoverability'
            ],
            benefits: {
                timeSaved: '25 hours/week',
                costSavings: 1000,
                outputQuality: 'Professional',
                consistency: 'Very High'
            }
        },
        {
            id: 'podcast-creation-workflow',
            name: 'Podcast Creation',
            description: 'End-to-end podcast production from planning to distribution',
            category: 'content-creation',
            difficulty: 'intermediate',
            estimatedTime: 300,
            tools: ['chatgpt', 'elevenlabs', 'capcut'],
            steps: [
                'Generate episode outline and talking points with ChatGPT',
                'Create intro/outro music and AI voice segments with ElevenLabs',
                'Record and edit audio with CapCut (noise reduction, mixing)',
                'Create audiogram clips for social media promotion',
                'Distribute to podcast platforms with show notes'
            ],
            benefits: {
                timeSaved: '20 hours/week',
                costSavings: 800,
                outputQuality: 'Professional',
                consistency: 'High'
            }
        },
        {
            id: 'newsletter-writing-workflow',
            name: 'Newsletter Writing',
            description: 'Research, write, and publish engaging email newsletters consistently',
            category: 'content-creation',
            difficulty: 'beginner',
            estimatedTime: 120,
            tools: ['chatgpt', 'grammarly', 'notion-ai'],
            steps: [
                'Research topics and gather insights with ChatGPT',
                'Write newsletter draft with compelling hooks and CTAs',
                'Polish and check grammar with Grammarly',
                'Format and organize in Notion AI',
                'Schedule and send to email list'
            ],
            benefits: {
                timeSaved: '10 hours/week',
                costSavings: 400,
                outputQuality: 'Professional',
                consistency: 'Very High'
            }
        }
    ],
    'business': [
        {
            id: 'employee-onboarding-workflow',
            name: 'AI Employee Onboarding',
            description: 'Create comprehensive onboarding materials including videos, presentations, and documentation',
            category: 'business',
            difficulty: 'intermediate',
            estimatedTime: 240,
            tools: ['chatgpt', 'midjourney', 'grammarly'],
            steps: [
                'Draft onboarding script and documentation with ChatGPT',
                'Create visual assets and presentation graphics with Midjourney',
                'Polish all written materials with Grammarly',
                'Compile into onboarding package',
                'Test with new hire and iterate'
            ],
            benefits: {
                timeSaved: '20 hours per new hire',
                costSavings: 800,
                outputQuality: 'Professional',
                consistency: 'Very High'
            }
        },
        {
            id: 'startup-launch-workflow',
            name: 'Startup Launch Kit',
            description: 'Build your MVP, landing page, and marketing materials to launch your startup',
            category: 'business',
            difficulty: 'intermediate',
            estimatedTime: 480,
            tools: ['replit-agent', 'framer-ai', 'chatgpt'],
            steps: [
                'Build MVP application with Replit Agent',
                'Create landing page and website with Framer AI',
                'Generate marketing copy and pitch deck with ChatGPT',
                'Set up analytics and tracking',
                'Launch and gather feedback'
            ],
            benefits: {
                timeSaved: '40 hours/week',
                costSavings: 2000,
                outputQuality: 'Professional',
                consistency: 'High'
            }
        }
    ],
    'research': [
        {
            id: 'technical-docs-workflow',
            name: 'Technical Documentation Suite',
            description: 'Research, synthesize, and create comprehensive technical documentation',
            category: 'research',
            difficulty: 'intermediate',
            estimatedTime: 300,
            tools: ['notebooklm', 'claude', 'grammarly'],
            steps: [
                'Upload and analyze existing technical documents with NotebookLM',
                'Generate comprehensive documentation with Claude',
                'Create code examples and API references',
                'Polish and ensure consistency with Grammarly',
                'Publish and maintain documentation'
            ],
            benefits: {
                timeSaved: '25 hours/week',
                costSavings: 1200,
                outputQuality: 'Excellent',
                consistency: 'Very High'
            }
        },
        {
            id: 'research-to-revenue-workflow',
            name: 'Research to Revenue',
            description: 'Transform market research into actionable business strategies and presentations',
            category: 'research',
            difficulty: 'advanced',
            estimatedTime: 360,
            tools: ['perplexity', 'claude', 'chatgpt'],
            steps: [
                'Conduct comprehensive market research with Perplexity',
                'Analyze data and generate insights with Claude',
                'Create business strategy and recommendations with ChatGPT',
                'Build presentation and visualizations',
                'Present findings to stakeholders'
            ],
            benefits: {
                timeSaved: '30 hours/week',
                costSavings: 1500,
                outputQuality: 'Excellent',
                consistency: 'High'
            }
        }
    ],
    'creative': [
        {
            id: 'personal-brand-workflow',
            name: 'Personal Brand Builder',
            description: 'Build your personal brand with AI-generated content, visuals, and voice',
            category: 'creative',
            difficulty: 'intermediate',
            estimatedTime: 420,
            tools: ['chatgpt', 'midjourney', 'elevenlabs'],
            steps: [
                'Define brand identity and messaging with ChatGPT',
                'Create visual brand assets and content with Midjourney',
                'Generate voice content and audio branding with ElevenLabs',
                'Build social media presence',
                'Launch and grow your brand'
            ],
            benefits: {
                timeSaved: '35 hours/week',
                costSavings: 1800,
                outputQuality: 'Professional',
                consistency: 'High'
            }
        }
    ],
    'marketing': [
        {
            id: 'landing-page-workflow',
            name: 'Landing Page Creation',
            description: 'Design and launch high-converting landing pages for products and campaigns',
            category: 'marketing',
            difficulty: 'intermediate',
            estimatedTime: 180,
            tools: ['framer-ai', 'chatgpt', 'midjourney'],
            steps: [
                'Define value proposition and target audience with ChatGPT',
                'Create hero images and visual assets with Midjourney',
                'Build responsive landing page with Framer AI',
                'Write compelling copy and CTAs',
                'Test, optimize, and launch'
            ],
            benefits: {
                timeSaved: '18 hours/week',
                costSavings: 900,
                outputQuality: 'Professional',
                consistency: 'High'
            }
        },
        {
            id: 'social-ad-campaign-workflow',
            name: 'Social Media Ad Campaign',
            description: 'Create and launch data-driven social media advertising campaigns',
            category: 'marketing',
            difficulty: 'intermediate',
            estimatedTime: 240,
            tools: ['chatgpt', 'midjourney', 'capcut'],
            steps: [
                'Research audience and create ad strategy with ChatGPT',
                'Design ad creatives and variations with Midjourney',
                'Create video ads with CapCut',
                'Write ad copy for multiple platforms',
                'Launch, monitor, and optimize campaigns'
            ],
            benefits: {
                timeSaved: '22 hours/week',
                costSavings: 1100,
                outputQuality: 'Professional',
                consistency: 'Very High'
            }
        },
        {
            id: 'email-marketing-workflow',
            name: 'Email Marketing Sequence',
            description: 'Build automated email sequences that nurture leads and drive conversions',
            category: 'marketing',
            difficulty: 'beginner',
            estimatedTime: 150,
            tools: ['chatgpt', 'grammarly', 'notion-ai'],
            steps: [
                'Map customer journey and define sequence goals with ChatGPT',
                'Write email series with compelling subject lines',
                'Edit and optimize for clarity with Grammarly',
                'Organize and schedule in Notion AI',
                'Set up automation and track metrics'
            ],
            benefits: {
                timeSaved: '15 hours/week',
                costSavings: 750,
                outputQuality: 'Professional',
                consistency: 'High'
            }
        }
    ],
    'development': [
        {
            id: 'saas-mvp-workflow',
            name: 'Build a SaaS MVP',
            description: 'Rapidly build and launch a minimum viable product for your SaaS idea',
            category: 'development',
            difficulty: 'advanced',
            estimatedTime: 600,
            tools: ['replit-agent', 'framer-ai', 'chatgpt'],
            steps: [
                'Define product requirements and user stories with ChatGPT',
                'Build backend and core features with Replit Agent',
                'Design and develop landing page with Framer AI',
                'Integrate payment and authentication systems',
                'Test, deploy, and launch MVP'
            ],
            benefits: {
                timeSaved: '80 hours/week',
                costSavings: 4000,
                outputQuality: 'Professional',
                consistency: 'High'
            }
        },
        {
            id: 'api-documentation-workflow',
            name: 'API Documentation',
            description: 'Create comprehensive, developer-friendly API documentation',
            category: 'development',
            difficulty: 'intermediate',
            estimatedTime: 240,
            tools: ['notebooklm', 'claude', 'grammarly'],
            steps: [
                'Analyze existing codebase and APIs with NotebookLM',
                'Generate documentation structure and examples with Claude',
                'Write detailed endpoint descriptions and use cases',
                'Polish technical writing with Grammarly',
                'Publish and maintain documentation site'
            ],
            benefits: {
                timeSaved: '30 hours/week',
                costSavings: 1500,
                outputQuality: 'Excellent',
                consistency: 'Very High'
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
        tools: ['midjourney', 'dalle-3', 'sora', 'elevenlabs', 'canva-magic', 'kapwing']
    },
    productive: {
        name: 'Goal Crusher',
        emoji: '⚡',
        description: 'For maximum productivity and efficiency',
        gradient: 'from-green-400 to-blue-500',
        tools: ['chatgpt', 'github-copilot', 'notion-ai', 'grammarly', 'cursor', 'tableau-ai']
    },
    explorative: {
        name: 'Curious Explorer',
        emoji: '🔍',
        description: 'For research and discovery',
        gradient: 'from-blue-400 to-purple-500',
        tools: ['claude', 'perplexity', 'chatgpt', 'julius']
    },
    relaxed: {
        name: 'Chill Creator',
        emoji: '😌',
        description: 'For casual, pressure-free creation',
        gradient: 'from-indigo-400 to-purple-400',
        tools: ['chatgpt', 'canva-magic', 'grammarly', 'murf']
    }
};

// Application State
const appState = {
    currentView: 'discover',
    selectedVibe: null,
    selectedTools: [],
    comparisonTools: [],
    pricingCalculator: [],
    searchTerm: '',
    filters: {
        category: 'all',
        useCase: 'all',
        pricing: 'all',
        sortBy: 'popularity'
    },
    pagination: {
        currentPage: 1,
        itemsPerPage: 12,
        totalPages: 1,
        totalItems: 0
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
async function initializeApplication() {
    console.log('🚀 Initializing AI Intelligence Hub...');

    // Load tools data from JSON
    aiToolsDatabase = await loadToolsData();

    if (aiToolsDatabase.length === 0) {
        console.error('❌ No tools loaded - check /data/tools.json');
        showNotification('Failed to load tools database');
        return;
    }

    // Initialize all components
    populateVibeGrid();
    displayToolsWithPagination(aiToolsDatabase);
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
function populateWorkflows(category = 'all') {
    if (!featuredWorkflows) return;

    featuredWorkflows.innerHTML = '';

    let workflows = Object.values(workflowTemplates).flat();

    // Filter by category if not 'all'
    if (category !== 'all') {
        workflows = workflows.filter(w => w.category === category);
    }

    if (workflows.length === 0) {
        featuredWorkflows.innerHTML = '<p style="text-align: center; color: var(--text-secondary); padding: 2rem;">No workflows found for this category.</p>';
        return;
    }

    workflows.forEach(workflow => {
        const workflowCard = createWorkflowCard(workflow);
        featuredWorkflows.appendChild(workflowCard);
    });
}

// Filter workflows by category
function filterWorkflows() {
    const select = document.getElementById('workflowCategoryFilter');
    if (!select) return;

    const category = select.value;
    populateWorkflows(category);
}

// Vibe selection handler
function selectVibe(vibeKey) {
    const vibe = vibeCategories[vibeKey];
    if (!vibe) {
        console.error('Vibe not found:', vibeKey);
        return;
    }

    console.log('Selecting vibe:', vibeKey, vibe);

    appState.selectedVibe = vibeKey;

    // Update UI
    document.querySelectorAll('.vibe-card').forEach(card => {
        card.classList.remove('selected');
    });

    const selectedCard = document.querySelector(`[data-vibe="${vibeKey}"]`);
    if (selectedCard) {
        selectedCard.classList.add('selected');
        console.log('Vibe card selected:', vibeKey);
    }

    // Filter tools by vibe
    const vibeTools = aiToolsDatabase.filter(tool =>
        vibe.tools.includes(tool.id)
    );

    console.log(`Found ${vibeTools.length} tools for vibe ${vibeKey}:`, vibeTools.map(t => t.name));

    // Reset to page 1 when selecting a vibe
    appState.pagination.currentPage = 1;
    displayToolsWithPagination(vibeTools);

    if (vibeTools.length > 0) {
        showNotification(`✨ ${vibe.name}: ${vibeTools.length} AI tools ready!`);
    } else {
        showNotification(`No tools found for ${vibe.name} vibe`);
    }

    // Scroll to models section
    const modelsSection = document.getElementById('models');
    if (modelsSection) {
        modelsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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
                <div class="tool-interactions">
                    <button class="interaction-btn favorite-btn ${communityData.favorites.has(tool.id) ? 'active' : ''}"
                            onclick="toggleFavorite('${tool.id}')"
                            title="Add to favorites">
                        <i class="${communityData.favorites.has(tool.id) ? 'fas' : 'far'} fa-heart"></i>
                    </button>
                    <button class="interaction-btn bookmark-btn ${communityData.bookmarks.has(tool.id) ? 'active' : ''}"
                            onclick="toggleBookmark('${tool.id}')"
                            title="Bookmark tool">
                        <i class="${communityData.bookmarks.has(tool.id) ? 'fas' : 'far'} fa-bookmark"></i>
                    </button>
                </div>
                <div class="model-actions-buttons">
                    <a href="${tool.website}" target="_blank" class="btn btn-primary">
                        <i class="fas fa-external-link-alt"></i>
                        Visit Site
                    </a>
                    <button class="btn btn-secondary" onclick="addToComparison('${tool.id}')">
                        <i class="fas fa-balance-scale"></i>
                        Compare
                    </button>
                    <button class="btn btn-secondary" onclick="addToCalculator('${tool.id}')">
                        <i class="fas fa-calculator"></i>
                        Calculator
                    </button>
                </div>
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

    // Pagination functionality
    const prevPageBtn = document.getElementById('prevPageBtn');
    const nextPageBtn = document.getElementById('nextPageBtn');
    if (prevPageBtn) {
        prevPageBtn.addEventListener('click', goToPreviousPage);
    }
    if (nextPageBtn) {
        nextPageBtn.addEventListener('click', goToNextPage);
    }

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
    appState.searchTerm = sanitizeSearchTerm(searchInput.value);
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

// Enhanced search with better algorithm and pagination
function applyFiltersAndSearch() {
    // Reset to first page when filters change
    appState.pagination.currentPage = 1;

    let filteredTools = [...aiToolsDatabase];
    console.log(`🔍 Starting search with ${aiToolsDatabase.length} tools`);

    // Apply search filter with enhanced matching
    if (appState.searchTerm) {
        const searchTerm = appState.searchTerm.toLowerCase().trim();
        filteredTools = filteredTools.filter(tool => {
            // Direct name/company matches (highest priority)
            if (tool.name.toLowerCase().includes(searchTerm) ||
                tool.company.toLowerCase().includes(searchTerm)) {
                return true;
            }

            // Description and feature matches
            if (tool.description.toLowerCase().includes(searchTerm) ||
                tool.features?.some(f => f.toLowerCase().includes(searchTerm))) {
                return true;
            }

            // Use case and category matches
            if (tool.useCases?.some(u => u.toLowerCase().includes(searchTerm)) ||
                tool.subcategories?.some(c => c.toLowerCase().includes(searchTerm))) {
                return true;
            }

            // Task-specific matches
            if (tool.tasks) {
                return Object.keys(tool.tasks).some(task =>
                    task.toLowerCase().includes(searchTerm)
                );
            }

            return false;
        });

        console.log(`🔍 Search "${appState.searchTerm}" found ${filteredTools.length} matches`);
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

    // Use pagination
    displayToolsWithPagination(filteredTools);
    console.log(`🔍 Filtered to ${filteredTools.length} tools`);
}

// Pagination Functions

// Display tools with pagination
function displayToolsWithPagination(tools) {
    // Calculate pagination
    const start = (appState.pagination.currentPage - 1) * appState.pagination.itemsPerPage;
    const end = start + appState.pagination.itemsPerPage;
    const pageTools = tools.slice(start, end);

    // Update pagination state
    appState.pagination.totalPages = Math.ceil(tools.length / appState.pagination.itemsPerPage);
    appState.pagination.totalItems = tools.length;

    // Display the tools for this page
    populateModels(pageTools);

    // Update pagination controls
    updatePaginationControls();
}

// Update pagination controls (buttons and info display)
function updatePaginationControls() {
    const prevBtn = document.getElementById('prevPageBtn');
    const nextBtn = document.getElementById('nextPageBtn');
    const pageInfo = document.getElementById('pageInfo');
    const resultsInfo = document.getElementById('resultsInfo');
    const paginationContainer = document.getElementById('paginationContainer');

    if (!prevBtn || !nextBtn || !pageInfo || !resultsInfo || !paginationContainer) {
        console.warn('updatePaginationControls: Pagination elements not found');
        return;
    }

    // Hide pagination if no results
    if (appState.pagination.totalItems === 0) {
        paginationContainer.style.display = 'none';
        return;
    }

    paginationContainer.style.display = 'flex';

    // Enable/disable buttons
    prevBtn.disabled = appState.pagination.currentPage === 1;
    nextBtn.disabled = appState.pagination.currentPage === appState.pagination.totalPages || appState.pagination.totalPages === 0;

    // Update page info
    pageInfo.textContent = `Page ${appState.pagination.currentPage} of ${appState.pagination.totalPages}`;

    // Update results info
    const start = (appState.pagination.currentPage - 1) * appState.pagination.itemsPerPage + 1;
    const end = Math.min(start + appState.pagination.itemsPerPage - 1, appState.pagination.totalItems);
    resultsInfo.textContent = `Showing ${start}-${end} of ${appState.pagination.totalItems} tools`;
}

// Navigate to previous page
function goToPreviousPage() {
    if (appState.pagination.currentPage > 1) {
        appState.pagination.currentPage--;
        applyFiltersAndSearch();
        scrollToModelsSection();
    }
}

// Navigate to next page
function goToNextPage() {
    if (appState.pagination.currentPage < appState.pagination.totalPages) {
        appState.pagination.currentPage++;
        applyFiltersAndSearch();
        scrollToModelsSection();
    }
}

// Scroll to models section (smooth scroll to top of tools grid)
function scrollToModelsSection() {
    const modelsSection = document.getElementById('models');
    if (modelsSection) {
        modelsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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

// Utility Functions for Validation and Sanitization

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Search term sanitization
function sanitizeSearchTerm(term) {
    if (!term || typeof term !== 'string') return '';
    // Trim whitespace, limit length, remove special chars that could cause issues
    return term.trim().slice(0, 100).replace(/[<>]/g, '');
}

// Safe tool finder with error handling
function findToolById(toolId) {
    try {
        if (!toolId) {
            console.warn('findToolById: No tool ID provided');
            return null;
        }
        const tool = aiToolsDatabase.find(t => t.id === toolId);
        if (!tool) {
            console.warn(`findToolById: Tool not found: ${toolId}`);
            return null;
        }
        return tool;
    } catch (error) {
        console.error('findToolById: Error finding tool:', error);
        return null;
    }
}

function handleNewsletterSubmit(e) {
    e.preventDefault();
    const emailInput = e.target.querySelector('input[type="email"]');
    const email = emailInput ? emailInput.value.trim() : '';

    if (!email) {
        showNotification('Please enter an email address');
        return;
    }

    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address');
        return;
    }

    // Check if already subscribed
    if (communityData.newsletterSubscribers && communityData.newsletterSubscribers.includes(email)) {
        showNotification('You\'re already subscribed!');
        return;
    }

    // Add to subscribers
    if (communityData.newsletterSubscribers) {
        communityData.newsletterSubscribers.push(email);
    }

    showNotification('Thanks for subscribing! 🎉');
    e.target.reset();
}

function viewWorkflow(workflowId) {
    // Find workflow in templates
    const workflow = Object.values(workflowTemplates).flat().find(w => w.id === workflowId);
    if (workflow) {
        console.log('Viewing workflow:', workflow);

        // Create detailed workflow modal
        showWorkflowModal(workflow);
    } else {
        console.error('Workflow not found:', workflowId);
        showNotification('Workflow not found');
    }
}

function showWorkflowModal(workflow) {
    // Calculate total monthly cost from actual tool prices
    let totalMonthlyCost = 0;
    const workflowTools = workflow.tools.map(toolId => {
        const tool = findToolById(toolId);
        if (tool) {
            // Get monthly cost from tool pricing
            let toolCost = 0;
            if (tool.pricing) {
                if (typeof tool.pricing === 'object' && tool.pricing.monthlyCost !== undefined) {
                    toolCost = tool.pricing.monthlyCost;
                } else if (typeof tool.pricing === 'string') {
                    // Parse string pricing like "$20/month" or "freemium"
                    const match = tool.pricing.match(/\$(\d+)/);
                    if (match) {
                        toolCost = parseInt(match[1]);
                    }
                }
            }
            totalMonthlyCost += toolCost;
            return { ...tool, calculatedCost: toolCost };
        }
        return null;
    }).filter(Boolean);

    // Create modal overlay
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    modalOverlay.innerHTML = `
        <div class="modal-content workflow-modal">
            <div class="modal-header">
                <h2>${workflow.name}</h2>
                <button class="modal-close" onclick="closeModal()">&times;</button>
            </div>
            <div class="modal-body">
                <p class="workflow-description">${workflow.description}</p>

                <div class="workflow-meta-detailed">
                    <div class="meta-item">
                        <i class="fas fa-clock"></i>
                        <span><strong>Duration:</strong> ${workflow.estimatedTime} minutes</span>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-dollar-sign"></i>
                        <span><strong>Total Cost:</strong> $${totalMonthlyCost}/month</span>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-signal"></i>
                        <span><strong>Difficulty:</strong> ${workflow.difficulty}</span>
                    </div>
                </div>

                <div class="workflow-benefits-detailed">
                    <h3>Expected Results</h3>
                    <div class="benefits-grid">
                        <div class="benefit-detailed">
                            <i class="fas fa-rocket"></i>
                            <div>
                                <strong>Time Saved:</strong> ${workflow.benefits.timeSaved}
                            </div>
                        </div>
                        <div class="benefit-detailed">
                            <i class="fas fa-star"></i>
                            <div>
                                <strong>Quality:</strong> ${workflow.benefits.outputQuality}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="workflow-tools-detailed">
                    <h3>Tools Used (${workflowTools.length})</h3>
                    <div class="tools-grid-workflow">
                        ${workflowTools.map(tool => `
                            <div class="workflow-tool-card-enhanced">
                                <div class="tool-header-workflow">
                                    <div class="tool-logo-large">${tool.logo}</div>
                                    <div class="tool-info-workflow">
                                        <h4>${tool.name}</h4>
                                        <p class="tool-company">${tool.company}</p>
                                    </div>
                                </div>
                                <div class="tool-description-workflow">
                                    <p>${tool.description ? tool.description.substring(0, 120) + '...' : 'AI-powered tool for enhanced productivity'}</p>
                                </div>
                                <div class="tool-footer-workflow">
                                    <div class="tool-price-workflow">
                                        <i class="fas fa-dollar-sign"></i>
                                        <span>${tool.calculatedCost > 0 ? '$' + tool.calculatedCost + '/mo' : 'Free'}</span>
                                    </div>
                                    <button class="btn-view-tool" onclick="event.stopPropagation(); viewTool('${tool.id}')">
                                        <i class="fas fa-external-link-alt"></i>
                                        View Tool
                                    </button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="workflow-steps">
                    <h3>Step-by-Step Guide</h3>
                    <ol class="steps-list-interactive">
                        ${workflow.steps.map((step, index) => `
                            <li class="step-item-interactive">
                                <input type="checkbox" id="step-${workflow.id}-${index}" class="step-checkbox">
                                <label for="step-${workflow.id}-${index}">
                                    <span class="step-number-interactive">${index + 1}</span>
                                    <span class="step-text-interactive">${step}</span>
                                </label>
                            </li>
                        `).join('')}
                    </ol>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" onclick="closeModal()">Close</button>
                <button class="btn btn-primary" onclick="startWorkflow('${workflow.id}')">
                    <i class="fas fa-play"></i>
                    Start This Workflow
                </button>
            </div>
        </div>
    `;

    // Add modal styles
    if (!document.querySelector('#modal-styles')) {
        const modalStyles = document.createElement('style');
        modalStyles.id = 'modal-styles';
        modalStyles.textContent = `
            .modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 2000;
                padding: 2rem;
            }

            .modal-content {
                background: var(--bg-primary);
                border-radius: 16px;
                max-width: 800px;
                max-height: 90vh;
                overflow-y: auto;
                box-shadow: var(--shadow-xl);
                border: 1px solid var(--border-color);
            }

            .modal-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 2rem;
                border-bottom: 1px solid var(--border-color);
            }

            .modal-close {
                background: none;
                border: none;
                font-size: 2rem;
                cursor: pointer;
                color: var(--text-secondary);
                padding: 0;
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all 0.3s ease;
            }

            .modal-close:hover {
                background: var(--bg-secondary);
                color: var(--text-primary);
            }

            .modal-body {
                padding: 2rem;
            }

            .modal-footer {
                padding: 2rem;
                border-top: 1px solid var(--border-color);
                display: flex;
                gap: 1rem;
                justify-content: flex-end;
            }

            .workflow-description {
                font-size: 1.1rem;
                color: var(--text-secondary);
                margin-bottom: 2rem;
            }

            .workflow-meta-detailed {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 1rem;
                margin-bottom: 2rem;
                padding: 1.5rem;
                background: var(--bg-secondary);
                border-radius: 12px;
            }

            .meta-item {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                font-size: 0.9rem;
            }

            .meta-item i {
                color: var(--primary-color);
                width: 16px;
            }

            .workflow-benefits-detailed h3,
            .workflow-tools-detailed h3,
            .workflow-steps h3 {
                margin-bottom: 1rem;
                color: var(--text-primary);
                font-size: 1.25rem;
            }

            .benefits-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 1rem;
            }

            .benefit-detailed {
                display: flex;
                align-items: center;
                gap: 1rem;
                padding: 1rem;
                background: var(--bg-secondary);
                border-radius: 8px;
            }

            .benefit-detailed i {
                color: var(--success-color);
                font-size: 1.5rem;
            }

            .tools-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 1rem;
            }

            .workflow-tool-card {
                display: flex;
                align-items: center;
                gap: 1rem;
                padding: 1rem;
                background: var(--bg-secondary);
                border-radius: 8px;
                border: 1px solid var(--border-color);
            }

            .tool-logo {
                font-size: 1.5rem;
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: var(--primary-color);
                color: white;
                border-radius: 8px;
            }

            .tool-info h4 {
                margin: 0 0 0.25rem 0;
                font-size: 1rem;
            }

            .tool-info p {
                margin: 0;
                font-size: 0.8rem;
                color: var(--text-secondary);
            }

            .steps-list {
                list-style: none;
                padding: 0;
            }

            .step-item {
                display: flex;
                align-items: flex-start;
                gap: 1rem;
                margin-bottom: 1rem;
                padding: 1rem;
                background: var(--bg-secondary);
                border-radius: 8px;
            }

            .step-number {
                background: var(--primary-color);
                color: white;
                width: 28px;
                height: 28px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
                font-size: 0.9rem;
                flex-shrink: 0;
                margin-top: 0.125rem;
            }

            .step-text {
                flex: 1;
                line-height: 1.6;
            }
        `;
        document.head.appendChild(modalStyles);
    }

    document.body.appendChild(modalOverlay);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
    const modal = document.querySelector('.modal-overlay');
    if (modal) {
        modal.remove();
        document.body.style.overflow = ''; // Restore scrolling
    }
}

// View individual tool in modal
function viewTool(toolId) {
    const tool = findToolById(toolId);
    if (!tool) {
        showNotification('Tool not found');
        return;
    }

    // Close existing modal if any
    closeModal();

    // Create modal overlay
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';

    // Calculate pricing display
    let pricingDisplay = 'Free';
    if (tool.pricing) {
        if (typeof tool.pricing === 'object') {
            if (tool.pricing.monthlyCost > 0) {
                pricingDisplay = `$${tool.pricing.monthlyCost}/month`;
            }
            if (tool.pricing.freeTier) {
                pricingDisplay += ' (Free tier available)';
            }
        } else if (typeof tool.pricing === 'string') {
            pricingDisplay = tool.pricing;
        }
    }

    modalOverlay.innerHTML = `
        <div class="modal-content tool-detail-modal">
            <div class="modal-header">
                <div class="tool-header-modal">
                    <div class="tool-logo-modal">${tool.logo}</div>
                    <div>
                        <h2>${tool.name}</h2>
                        <p class="tool-company-modal">${tool.company}</p>
                    </div>
                </div>
                <button class="modal-close" onclick="closeModal()">&times;</button>
            </div>
            <div class="modal-body">
                <div class="tool-badge-modal ${tool.pricing.model}">${tool.pricing.model}</div>

                <p class="tool-description-modal">${tool.description}</p>

                <div class="tool-detail-section">
                    <h3>Pricing</h3>
                    <p class="tool-pricing-detail">${pricingDisplay}</p>
                </div>

                <div class="tool-detail-section">
                    <h3>Key Features</h3>
                    <ul class="features-list-modal">
                        ${tool.features?.map(feature => `<li>${feature}</li>`).join('') || '<li>No features listed</li>'}
                    </ul>
                </div>

                <div class="tool-detail-section">
                    <h3>Use Cases</h3>
                    <div class="use-cases-grid">
                        ${tool.useCases?.map(useCase => `<span class="use-case-tag">${useCase}</span>`).join('') || '<span>General purpose</span>'}
                    </div>
                </div>

                <div class="tool-detail-section">
                    <h3>Performance Metrics</h3>
                    <div class="metrics-grid-modal">
                        <div class="metric-card-modal">
                            <div class="metric-value-modal">${tool.performance.quality}%</div>
                            <div class="metric-label-modal">Quality</div>
                        </div>
                        <div class="metric-card-modal">
                            <div class="metric-value-modal">${tool.performance.speed}%</div>
                            <div class="metric-label-modal">Speed</div>
                        </div>
                        <div class="metric-card-modal">
                            <div class="metric-value-modal">${tool.analytics.popularity}%</div>
                            <div class="metric-label-modal">Popularity</div>
                        </div>
                        <div class="metric-card-modal">
                            <div class="metric-value-modal">${tool.community.rating}/5</div>
                            <div class="metric-label-modal">Rating</div>
                        </div>
                    </div>
                </div>

                ${tool.alternatives && tool.alternatives.length > 0 ? `
                <div class="tool-detail-section">
                    <h3>Similar Tools</h3>
                    <div class="alternatives-grid">
                        ${tool.alternatives.map(altId => {
                            const altTool = findToolById(altId);
                            if (!altTool) return '';
                            return `
                                <div class="alternative-tool-card" onclick="closeModal(); setTimeout(() => viewTool('${altId}'), 100)">
                                    <span class="alt-logo">${altTool.logo}</span>
                                    <div class="alt-info">
                                        <strong>${altTool.name}</strong>
                                        <span class="alt-price">${altTool.pricing.monthlyCost > 0 ? '$' + altTool.pricing.monthlyCost + '/mo' : 'Free'}</span>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
                ` : ''}
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" onclick="closeModal()">Close</button>
                <button class="btn btn-secondary" onclick="closeModal(); addToComparison('${tool.id}')">
                    <i class="fas fa-balance-scale"></i>
                    Compare
                </button>
                <a href="${tool.website}" target="_blank" class="btn btn-primary">
                    <i class="fas fa-external-link-alt"></i>
                    Visit Website
                </a>
            </div>
        </div>
    `;

    document.body.appendChild(modalOverlay);
    document.body.style.overflow = 'hidden';

    // Add click outside to close
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
}

function startWorkflow(workflowId) {
    closeModal();
    showNotification('🚀 Workflow started! Check each tool for detailed instructions.');
}

// Enhanced comparison functionality with error handling
function addToComparison(toolId) {
    try {
        // Use safe tool finder
        const tool = findToolById(toolId);

        if (!tool) {
            showNotification('Tool not found');
            return;
        }

        // Check if already in comparison
        const alreadyAdded = appState.comparisonTools.find(t => t.id === toolId);

        if (alreadyAdded) {
            showNotification(`${tool.name} is already in comparison`);
            return;
        }

        // Check max limit
        if (appState.comparisonTools.length >= 3) {
            showNotification('Maximum 3 tools can be compared at once');
            return;
        }

        // Add to comparison
        appState.comparisonTools.push(tool);
        updateComparisonTable();
        showNotification(`${tool.name} added to comparison`);

    } catch (error) {
        console.error('Error adding to comparison:', error);
        showNotification('Failed to add tool to comparison');
    }
}

function updateComparisonTable() {
    try {
        const table = document.getElementById('comparisonTable');
        if (!table) {
            console.warn('updateComparisonTable: Comparison table not found');
            return;
        }

        const tbody = table.querySelector('tbody');
        const headerRow = table.querySelector('thead tr');

        if (!tbody || !headerRow) {
            console.warn('updateComparisonTable: Table structure incomplete');
            return;
        }

        // Update headers
        const headers = headerRow.querySelectorAll('th');
        if (headers[0]) headers[0].textContent = 'Metric';

        appState.comparisonTools.forEach((tool, index) => {
            if (headers[index + 1] && tool.name) {
                headers[index + 1].textContent = tool.name;
            }
        });

        // Clear existing rows
        tbody.innerHTML = '';

        if (appState.comparisonTools.length === 0) {
            tbody.innerHTML = '<tr><td colspan="4">Select tools to compare</td></tr>';
            return;
        }

        // Add comparison rows with safe property access
        const comparisonData = [
            ['Company', ...appState.comparisonTools.map(t => t.company || 'N/A')],
            ['Category', ...appState.comparisonTools.map(t => (t.primaryCategory || t.category || 'N/A').replace('-', ' '))],
            ['Quality Score', ...appState.comparisonTools.map(t => t.performance?.quality ? `${t.performance.quality}/10` : t.quality || 'N/A')],
            ['Popularity', ...appState.comparisonTools.map(t => t.analytics?.popularity ? `${t.analytics.popularity}%` : t.popularity || 'N/A')],
            ['ROI Score', ...appState.comparisonTools.map(t => t.roiScore ? `${t.roiScore}%` : 'N/A')],
            ['Pricing', ...appState.comparisonTools.map(t => {
                if (t.pricing?.monthlyCost !== undefined) {
                    return `$${t.pricing.monthlyCost}/${t.pricing.model}`;
                }
                return t.pricing || t.price || 'N/A';
            })]
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

    } catch (error) {
        console.error('Error updating comparison table:', error);
    }
}

// Community features
const communityData = {
    reviews: {},
    userInteractions: [],
    newsletterSubscribers: [],
    favorites: new Set(),
    bookmarks: new Set()
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

// Tool interaction features
function toggleFavorite(toolId) {
    const tool = aiToolsDatabase.find(t => t.id === toolId);
    if (!tool) return;

    if (communityData.favorites.has(toolId)) {
        communityData.favorites.delete(toolId);
        showNotification(`💔 Removed ${tool.name} from favorites`);
    } else {
        communityData.favorites.add(toolId);
        showNotification(`❤️ Added ${tool.name} to favorites`);
    }

    // Update UI
    updateToolCardFavorites(toolId);
}

function toggleBookmark(toolId) {
    const tool = aiToolsDatabase.find(t => t.id === toolId);
    if (!tool) return;

    if (communityData.bookmarks.has(toolId)) {
        communityData.bookmarks.delete(toolId);
        showNotification(`🔖 Removed ${tool.name} from bookmarks`);
    } else {
        communityData.bookmarks.add(toolId);
        showNotification(`📖 Bookmarked ${tool.name}`);
    }

    // Update UI
    updateToolCardBookmarks(toolId);
}

function updateToolCardFavorites(toolId) {
    const favoriteButtons = document.querySelectorAll(`[data-tool-id="${toolId}"] .favorite-btn`);
    favoriteButtons.forEach(btn => {
        const isFavorite = communityData.favorites.has(toolId);
        btn.innerHTML = isFavorite ? '<i class="fas fa-heart"></i>' : '<i class="far fa-heart"></i>';
        btn.classList.toggle('active', isFavorite);
    });
}

function updateToolCardBookmarks(toolId) {
    const bookmarkButtons = document.querySelectorAll(`[data-tool-id="${toolId}"] .bookmark-btn`);
    bookmarkButtons.forEach(btn => {
        const isBookmarked = communityData.bookmarks.has(toolId);
        btn.innerHTML = isBookmarked ? '<i class="fas fa-bookmark"></i>' : '<i class="far fa-bookmark"></i>';
        btn.classList.toggle('active', isBookmarked);
    });
}

// Export functions for external use
// Pricing Calculator Functions
function togglePricingCalculator() {
    const panel = document.getElementById('pricingCalculatorPanel');
    panel.classList.toggle('active');
}

function addToCalculator(toolId) {
    const tool = findToolById(toolId);
    if (!tool) {
        showNotification('Tool not found');
        return;
    }

    if (appState.pricingCalculator.find(t => t.id === toolId)) {
        showNotification(`${tool.name} is already in calculator`);
        return;
    }

    appState.pricingCalculator.push(tool);
    updateCalculator();
    showNotification(`${tool.name} added to calculator`);
}

function removeFromCalculator(toolId) {
    appState.pricingCalculator = appState.pricingCalculator.filter(t => t.id !== toolId);
    updateCalculator();
}

function clearCalculator() {
    appState.pricingCalculator = [];
    updateCalculator();
    showNotification('Calculator cleared');
}

function updateCalculator() {
    const toolsList = document.getElementById('calculatorToolsList');
    const badge = document.getElementById('calculatorBadge');
    const totalTools = document.getElementById('totalTools');
    const freeTools = document.getElementById('freeTools');
    const totalCost = document.getElementById('totalCost');

    badge.textContent = appState.pricingCalculator.length;

    if (appState.pricingCalculator.length === 0) {
        toolsList.innerHTML = '<p class="calculator-empty">Click "+ Calculator" button on any tool to start building your stack!</p>';
        totalTools.textContent = '0';
        freeTools.textContent = '0';
        totalCost.textContent = '$0';
        return;
    }

    let monthlyCost = 0;
    let freeCount = 0;

    toolsList.innerHTML = appState.pricingCalculator.map(tool => {
        let cost = 0;
        if (tool.pricing && typeof tool.pricing === 'object') {
            cost = tool.pricing.monthlyCost || 0;
        }
        if (cost === 0) freeCount++;
        monthlyCost += cost;

        return `
            <div class="calculator-tool-item">
                <div class="calculator-tool-info">
                    <span class="calculator-tool-logo">${tool.logo}</span>
                    <div>
                        <strong>${tool.name}</strong>
                        <div class="calculator-tool-price">${cost > 0 ? '$' + cost + '/mo' : 'Free'}</div>
                    </div>
                </div>
                <button class="calculator-remove-btn" onclick="removeFromCalculator('${tool.id}')" title="Remove">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
    }).join('');

    totalTools.textContent = appState.pricingCalculator.length;
    freeTools.textContent = freeCount;
    totalCost.textContent = '$' + monthlyCost;
}

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