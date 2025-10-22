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
        primaryCategory: 'text-to-video',
        subcategories: ['video-generation', 'image-to-video', 'video-editing'],
        useCases: ['Professional video editing', 'Content creation', 'Art projects'],
        pricing: { model: 'freemium', monthlyCost: 15, freeTier: true },
        performance: { quality: 9.0, speed: 8.0, consistency: 8.5, reliability: 8.8 },
        userExperience: { learningCurve: 'intermediate', interface: 'professional', documentation: 'good', support: 'responsive' },
        analytics: { popularity: 88, growth: '+15%', lastUpdated: '2024-01-15', launchDate: '2023-03-01' },
        community: { rating: 9.2, reviewCount: 3200, sentiment: 'positive' },
        description: 'Professional AI video generation tool with advanced controls for text, image, and video-to-video conversion.',
        features: ['Text-to-video', 'Image-to-video', 'Video-to-video', 'Style presets'],
        capabilities: { inputTypes: ['text', 'image', 'video'], outputTypes: ['video'], integrations: ['api'], platforms: ['web', 'api'] },
        vibeAlignment: { creative: 9, productive: 8, explorative: 8, relaxed: 6 },
        roiScore: 7920,
        website: 'https://runwayml.com',
        tasks: {
            'Generate video from text': { effectiveness: 9.0, timeToComplete: '2 minutes', outputQuality: 'professional' },
            'Convert image to video': { effectiveness: 8.8, timeToComplete: '90 seconds', outputQuality: 'high-quality' },
            'Edit existing videos': { effectiveness: 8.5, timeToComplete: '3 minutes', outputQuality: 'polished' }
        }
    },
    {
        id: 'pika-labs',
        name: 'Pika Labs',
        company: 'Pika Labs',
        logo: '🎨',
        primaryCategory: 'text-to-video',
        subcategories: ['video-generation', 'art-generation', 'creative-tools'],
        useCases: ['Creative projects', 'Social media content', 'Art generation'],
        pricing: { model: 'freemium', monthlyCost: 8, freeTier: true },
        performance: { quality: 8.5, speed: 9.0, consistency: 8.2, reliability: 8.5 },
        userExperience: { learningCurve: 'beginner', interface: 'intuitive', documentation: 'good', support: 'community' },
        analytics: { popularity: 82, growth: '+20%', lastUpdated: '2024-01-10', launchDate: '2023-04-15' },
        community: { rating: 8.8, reviewCount: 2850, sentiment: 'positive' },
        description: 'Creative AI video generation platform known for artistic and stylized video creation.',
        features: ['Text-to-video', 'Artistic styles', 'Character consistency', 'Custom models'],
        capabilities: { inputTypes: ['text', 'image'], outputTypes: ['video'], integrations: [], platforms: ['web'] },
        vibeAlignment: { creative: 10, productive: 7, explorative: 9, relaxed: 8 },
        roiScore: 6560,
        website: 'https://pika.art',
        tasks: {
            'Create artistic video': { effectiveness: 8.8, timeToComplete: '1.5 minutes', outputQuality: 'stylized' },
            'Generate social media clips': { effectiveness: 9.0, timeToComplete: '1 minute', outputQuality: 'engaging' },
            'Experimental art projects': { effectiveness: 8.5, timeToComplete: '2 minutes', outputQuality: 'unique' }
        }
    },
    {
        id: 'stable-video-diffusion',
        name: 'Stable Video Diffusion',
        company: 'Stability AI',
        logo: '🔬',
        primaryCategory: 'image-to-video',
        subcategories: ['video-generation', 'animation', 'open-source'],
        useCases: ['Character animation', 'Educational content', 'Research'],
        pricing: { model: 'free', monthlyCost: 0, freeTier: true },
        performance: { quality: 8.0, speed: 7.5, consistency: 8.2, reliability: 7.8 },
        userExperience: { learningCurve: 'advanced', interface: 'technical', documentation: 'excellent', support: 'community' },
        analytics: { popularity: 75, growth: '+18%', lastUpdated: '2024-01-05', launchDate: '2023-11-21' },
        community: { rating: 8.5, reviewCount: 4100, sentiment: 'positive' },
        description: 'Open-source AI video generation model based on Stable Diffusion, excellent for consistent character animation.',
        features: ['Image-to-video', 'Open source', 'Character consistency', 'Customizable'],
        capabilities: { inputTypes: ['image'], outputTypes: ['video'], integrations: ['python', 'api'], platforms: ['local', 'cloud'] },
        vibeAlignment: { creative: 8, productive: 6, explorative: 10, relaxed: 5 },
        roiScore: 6000,
        website: 'https://stability.ai/stable-video',
        tasks: {
            'Animate character': { effectiveness: 8.5, timeToComplete: '5 minutes', outputQuality: 'consistent' },
            'Research experiments': { effectiveness: 9.0, timeToComplete: '10 minutes', outputQuality: 'customizable' },
            'Educational demos': { effectiveness: 8.0, timeToComplete: '7 minutes', outputQuality: 'clear' }
        }
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
    },

    // MORE TEXT GENERATION TOOLS
    {
        id: 'perplexity',
        name: 'Perplexity AI',
        company: 'Perplexity',
        logo: '🔍',
        primaryCategory: 'text-generation',
        subcategories: ['research', 'search', 'analysis'],
        useCases: ['research', 'analysis', 'learning'],
        pricing: { model: 'freemium', monthlyCost: 20, freeTier: true },
        performance: { quality: 8.9, speed: 9.2, consistency: 8.7, reliability: 9.0 },
        userExperience: { learningCurve: 'beginner', interface: 'intuitive', documentation: 'excellent', support: 'responsive' },
        analytics: { popularity: 76, growth: '+35%', lastUpdated: '2024-01-15', launchDate: '2022-12-01' },
        community: { rating: 4.5, reviewCount: 5670, sentiment: 'positive' },
        description: 'AI-powered search engine that provides comprehensive answers with source citations and real-time information.',
        features: ['Source citations', 'Real-time search', 'Follow-up questions', 'Export answers'],
        capabilities: { inputTypes: ['text'], outputTypes: ['text'], integrations: ['api'], platforms: ['web', 'mobile'] },
        vibeAlignment: { creative: 6, productive: 8, explorative: 10, relaxed: 7 },
        roiScore: 2850,
        website: 'https://perplexity.ai',
        tasks: {
            'Research any topic': { effectiveness: 8.9, timeToComplete: '3 minutes', outputQuality: 'comprehensive' },
            'Find latest information': { effectiveness: 9.2, timeToComplete: '2 minutes', outputQuality: 'current' }
        }
    },

    // DESIGN TOOLS
    {
        id: 'canva-magic',
        name: 'Canva Magic Studio',
        company: 'Canva',
        logo: '🎨',
        primaryCategory: 'image-generation',
        subcategories: ['design', 'social-media', 'marketing'],
        useCases: ['design', 'social-media', 'marketing'],
        pricing: { model: 'freemium', monthlyCost: 13, freeTier: true },
        performance: { quality: 8.4, speed: 9.5, consistency: 8.8, reliability: 9.2 },
        userExperience: { learningCurve: 'beginner', interface: 'intuitive', documentation: 'excellent', support: 'responsive' },
        analytics: { popularity: 92, growth: '+18%', lastUpdated: '2024-01-15', launchDate: '2023-03-01' },
        community: { rating: 4.6, reviewCount: 34500, sentiment: 'positive' },
        description: 'AI-powered design platform that makes professional graphics accessible to everyone.',
        features: ['Magic Studio', 'Template library', 'Brand kit', 'Team collaboration', 'AI image generation'],
        capabilities: { inputTypes: ['text'], outputTypes: ['image'], integrations: ['api'], platforms: ['web', 'mobile'] },
        vibeAlignment: { creative: 9, productive: 9, explorative: 6, relaxed: 10 },
        roiScore: 4100,
        website: 'https://canva.com/magic',
        tasks: {
            'Create social media posts': { effectiveness: 8.4, timeToComplete: '5 minutes', outputQuality: 'professional' },
            'Design presentations': { effectiveness: 8.2, timeToComplete: '10 minutes', outputQuality: 'polished' }
        }
    },

    // PRODUCTIVITY TOOLS
    {
        id: 'grammarly',
        name: 'Grammarly',
        company: 'Grammarly',
        logo: '✏️',
        primaryCategory: 'productivity',
        subcategories: ['writing', 'editing', 'grammar'],
        useCases: ['writing', 'editing', 'proofreading'],
        pricing: { model: 'freemium', monthlyCost: 12, freeTier: true },
        performance: { quality: 9.1, speed: 9.3, consistency: 9.4, reliability: 9.5 },
        userExperience: { learningCurve: 'beginner', interface: 'intuitive', documentation: 'excellent', support: 'responsive' },
        analytics: { popularity: 88, growth: '+8%', lastUpdated: '2024-01-15', launchDate: '2009-01-01' },
        community: { rating: 4.7, reviewCount: 45600, sentiment: 'positive' },
        description: 'AI-powered writing assistant that helps with grammar, clarity, and tone.',
        features: ['Grammar checking', 'Style suggestions', 'Tone detection', 'Plagiarism detection'],
        capabilities: { inputTypes: ['text'], outputTypes: ['text'], integrations: ['browser', 'api'], platforms: ['web', 'desktop', 'mobile'] },
        vibeAlignment: { creative: 7, productive: 10, explorative: 5, relaxed: 8 },
        roiScore: 3200,
        website: 'https://grammarly.com',
        tasks: {
            'Edit writing': { effectiveness: 9.1, timeToComplete: '2 minutes', outputQuality: 'polished' },
            'Check grammar': { effectiveness: 9.4, timeToComplete: '1 minute', outputQuality: 'accurate' }
        }
    },

    // MORE CODE TOOLS
    {
        id: 'cursor',
        name: 'Cursor',
        company: 'Cursor',
        logo: '⚡',
        primaryCategory: 'code-generation',
        subcategories: ['coding', 'ai-assistance', 'productivity'],
        useCases: ['coding', 'debugging', 'documentation'],
        pricing: { model: 'freemium', monthlyCost: 20, freeTier: true },
        performance: { quality: 9.1, speed: 9.3, consistency: 8.9, reliability: 9.0 },
        userExperience: { learningCurve: 'intermediate', interface: 'intuitive', documentation: 'excellent', support: 'responsive' },
        analytics: { popularity: 71, growth: '+45%', lastUpdated: '2024-01-15', launchDate: '2023-01-01' },
        community: { rating: 4.6, reviewCount: 7890, sentiment: 'positive' },
        description: 'AI-first code editor with advanced autocomplete and intelligent suggestions.',
        features: ['AI autocomplete', 'Code generation', 'Debugging help', 'Multi-language support'],
        capabilities: { inputTypes: ['code'], outputTypes: ['code'], integrations: ['api'], platforms: ['web', 'desktop'] },
        vibeAlignment: { creative: 7, productive: 10, explorative: 8, relaxed: 6 },
        roiScore: 3800,
        website: 'https://cursor.sh',
        tasks: {
            'Write code faster': { effectiveness: 9.1, timeToComplete: 'varies', outputQuality: 'professional' },
            'Debug code': { effectiveness: 8.7, timeToComplete: '5 minutes', outputQuality: 'accurate' }
        }
    },

    // MORE VIDEO TOOLS
    {
        id: 'kapwing',
        name: 'Kapwing',
        company: 'Kapwing',
        logo: '🎬',
        primaryCategory: 'video-generation',
        subcategories: ['editing', 'social-media', 'marketing'],
        useCases: ['video-editing', 'social-media', 'marketing'],
        pricing: { model: 'freemium', monthlyCost: 16, freeTier: true },
        performance: { quality: 8.3, speed: 8.8, consistency: 8.5, reliability: 8.7 },
        userExperience: { learningCurve: 'beginner', interface: 'intuitive', documentation: 'excellent', support: 'responsive' },
        analytics: { popularity: 74, growth: '+22%', lastUpdated: '2024-01-15', launchDate: '2018-01-01' },
        community: { rating: 4.4, reviewCount: 12340, sentiment: 'positive' },
        description: 'Collaborative video editing platform with AI-powered features for social media content.',
        features: ['AI video editing', 'Subtitle generation', 'Template library', 'Team collaboration'],
        capabilities: { inputTypes: ['video', 'text'], outputTypes: ['video'], integrations: ['api'], platforms: ['web'] },
        vibeAlignment: { creative: 8, productive: 9, explorative: 6, relaxed: 8 },
        roiScore: 2650,
        website: 'https://kapwing.com',
        tasks: {
            'Edit social videos': { effectiveness: 8.3, timeToComplete: '15 minutes', outputQuality: 'professional' },
            'Add subtitles': { effectiveness: 8.6, timeToComplete: '5 minutes', outputQuality: 'accurate' }
        }
    },

    // MORE AUDIO TOOLS
    {
        id: 'murf',
        name: 'Murf.ai',
        company: 'Murf',
        logo: '🎙️',
        primaryCategory: 'audio-generation',
        subcategories: ['voice', 'speech', 'marketing'],
        useCases: ['voiceover', 'marketing', 'accessibility'],
        pricing: { model: 'freemium', monthlyCost: 19, freeTier: true },
        performance: { quality: 8.7, speed: 8.5, consistency: 8.9, reliability: 8.6 },
        userExperience: { learningCurve: 'beginner', interface: 'intuitive', documentation: 'excellent', support: 'responsive' },
        analytics: { popularity: 68, growth: '+28%', lastUpdated: '2024-01-15', launchDate: '2020-01-01' },
        community: { rating: 4.3, reviewCount: 4560, sentiment: 'positive' },
        description: 'AI voice generator that creates realistic voiceovers in multiple languages and accents.',
        features: ['Voice synthesis', 'Multi-language', 'Custom voices', 'Commercial usage'],
        capabilities: { inputTypes: ['text'], outputTypes: ['audio'], integrations: ['api'], platforms: ['web'] },
        vibeAlignment: { creative: 7, productive: 8, explorative: 6, relaxed: 9 },
        roiScore: 2350,
        website: 'https://murf.ai',
        tasks: {
            'Create voiceovers': { effectiveness: 8.7, timeToComplete: '5 minutes', outputQuality: 'natural' },
            'Generate podcasts': { effectiveness: 8.2, timeToComplete: '10 minutes', outputQuality: 'engaging' }
        }
    },

    // MORE DATA ANALYSIS TOOLS
    {
        id: 'tableau-ai',
        name: 'Tableau AI',
        company: 'Salesforce',
        logo: '📊',
        primaryCategory: 'data-analysis',
        subcategories: ['analytics', 'visualization', 'business-intelligence'],
        useCases: ['analysis', 'reporting', 'business-intelligence'],
        pricing: { model: 'paid', monthlyCost: 70, freeTier: false },
        performance: { quality: 9.0, speed: 8.2, consistency: 9.1, reliability: 9.3 },
        userExperience: { learningCurve: 'intermediate', interface: 'moderate', documentation: 'excellent', support: 'responsive' },
        analytics: { popularity: 82, growth: '+12%', lastUpdated: '2024-01-15', launchDate: '2023-05-01' },
        community: { rating: 4.5, reviewCount: 23400, sentiment: 'positive' },
        description: 'Enterprise-grade data visualization and business intelligence platform with AI-powered insights.',
        features: ['AI data analysis', 'Interactive dashboards', 'Natural language queries', 'Predictive analytics'],
        capabilities: { inputTypes: ['data'], outputTypes: ['data', 'insights'], integrations: ['api'], platforms: ['web', 'desktop'] },
        vibeAlignment: { creative: 5, productive: 9, explorative: 8, relaxed: 6 },
        roiScore: 3150,
        website: 'https://tableau.com/ai',
        tasks: {
            'Analyze business data': { effectiveness: 9.0, timeToComplete: '10 minutes', outputQuality: 'comprehensive' },
            'Create dashboards': { effectiveness: 8.8, timeToComplete: '20 minutes', outputQuality: 'visual' }
        }
    },
    {
        id: 'notebooklm',
        name: 'NotebookLM',
        logo: '📚',
        company: 'Google',
        description: 'AI-powered research assistant that helps you understand and synthesize information from your documents',
        primaryCategory: 'productivity',
        subcategories: ['research', 'note-taking', 'education'],
        pricing: { model: 'free', monthlyCost: 0, freeTier: true },
        performance: { quality: 90, speed: 85, consistency: 88, reliability: 92 },
        userExperience: { learningCurve: 'beginner', interfaceQuality: 92, documentation: 'excellent' },
        features: ['Document analysis', 'Source-grounded answers', 'Audio overviews', 'Multi-document synthesis', 'Citation tracking'],
        useCases: ['Research', 'Study notes', 'Document analysis', 'Content synthesis'],
        integrations: ['Google Drive', 'PDF upload', 'Text documents'],
        limitations: ['Limited to 50 sources', 'No real-time collaboration'],
        vibeAlignment: { creative: 6, productive: 9, explorative: 10, relaxed: 7 },
        analytics: { popularity: 85, growth: 'rapid', userSatisfaction: 92 },
        community: { rating: 4.7, reviewCount: 8500, activeUsers: '2M+' },
        roiScore: 2850,
        website: 'https://notebooklm.google.com'
    },
    {
        id: 'replit-agent',
        name: 'Replit Agent',
        logo: '🤖',
        company: 'Replit',
        description: 'AI agent that builds full-stack applications from natural language descriptions',
        primaryCategory: 'code-generation',
        subcategories: ['development', 'automation', 'prototyping'],
        pricing: { model: 'paid', monthlyCost: 25, freeTier: false },
        performance: { quality: 85, speed: 88, consistency: 82, reliability: 86 },
        userExperience: { learningCurve: 'beginner', interfaceQuality: 90, documentation: 'good' },
        features: ['Full-stack app generation', 'Natural language coding', 'Instant deployment', 'Real-time collaboration', 'Multi-language support'],
        useCases: ['Rapid prototyping', 'App development', 'Learning to code', 'Automating tasks'],
        integrations: ['GitHub', 'npm', 'pip', 'Database hosting'],
        limitations: ['Computing resource limits', 'Complex apps may need refinement'],
        vibeAlignment: { creative: 8, productive: 9, explorative: 7, relaxed: 6 },
        analytics: { popularity: 82, growth: 'rapid', userSatisfaction: 88 },
        community: { rating: 4.5, reviewCount: 12000, activeUsers: '5M+' },
        roiScore: 3200,
        website: 'https://replit.com/agent'
    },
    {
        id: 'framer-ai',
        name: 'Framer AI',
        logo: '🎨',
        company: 'Framer',
        description: 'AI-powered website builder that creates professional sites from text descriptions',
        primaryCategory: 'design',
        subcategories: ['web-design', 'prototyping', 'no-code'],
        pricing: { model: 'freemium', monthlyCost: 15, freeTier: true },
        performance: { quality: 88, speed: 90, consistency: 86, reliability: 89 },
        userExperience: { learningCurve: 'beginner', interfaceQuality: 94, documentation: 'excellent' },
        features: ['Text-to-website', 'Responsive design', 'Custom animations', 'CMS integration', 'SEO optimization'],
        useCases: ['Landing pages', 'Portfolio sites', 'Marketing websites', 'Startup MVPs'],
        integrations: ['Analytics', 'Forms', 'CMS', 'Custom code'],
        limitations: ['Advanced customization requires plan upgrade', 'Learning curve for animations'],
        vibeAlignment: { creative: 9, productive: 8, explorative: 6, relaxed: 7 },
        analytics: { popularity: 86, growth: 'rapid', userSatisfaction: 91 },
        community: { rating: 4.6, reviewCount: 15000, activeUsers: '3M+' },
        roiScore: 3100,
        website: 'https://framer.com/ai'
    },
    {
        id: 'opus-clip',
        name: 'Opus Clip',
        logo: '✂️',
        company: 'Opus Pro',
        description: 'AI-powered tool that automatically creates viral short clips from long videos',
        primaryCategory: 'video-editing',
        subcategories: ['content-creation', 'social-media', 'automation'],
        pricing: { model: 'freemium', monthlyCost: 29, freeTier: true },
        performance: { quality: 87, speed: 92, consistency: 85, reliability: 88 },
        userExperience: { learningCurve: 'beginner', interfaceQuality: 88, documentation: 'good' },
        features: ['Auto clip generation', 'Viral score prediction', 'Auto captions', 'Brand customization', 'Multi-platform export'],
        useCases: ['YouTube shorts', 'TikTok content', 'Instagram reels', 'Podcast clips'],
        integrations: ['YouTube', 'Direct upload', 'Social media platforms'],
        limitations: ['Clip quality depends on source', 'Limited customization on free tier'],
        vibeAlignment: { creative: 8, productive: 9, explorative: 5, relaxed: 8 },
        analytics: { popularity: 84, growth: 'rapid', userSatisfaction: 87 },
        community: { rating: 4.4, reviewCount: 9500, activeUsers: '500K+' },
        roiScore: 2900,
        website: 'https://opus.pro'
    },
    {
        id: 'claude-artifacts',
        name: 'Claude Artifacts',
        logo: '⚡',
        company: 'Anthropic',
        description: 'Interactive creation feature that generates live code, documents, and visualizations',
        primaryCategory: 'ai-assistant',
        subcategories: ['code-generation', 'content-creation', 'visualization'],
        pricing: { model: 'freemium', monthlyCost: 20, freeTier: true },
        performance: { quality: 92, speed: 88, consistency: 90, reliability: 91 },
        userExperience: { learningCurve: 'beginner', interfaceQuality: 93, documentation: 'excellent' },
        features: ['Live code execution', 'Interactive visualizations', 'Document creation', 'React components', 'SVG graphics'],
        useCases: ['Prototyping', 'Data visualization', 'Learning code', 'Creating demos'],
        integrations: ['Claude API', 'Web technologies'],
        limitations: ['Requires Claude Pro for heavy usage', 'Limited to supported frameworks'],
        vibeAlignment: { creative: 10, productive: 8, explorative: 9, relaxed: 6 },
        analytics: { popularity: 88, growth: 'explosive', userSatisfaction: 93 },
        community: { rating: 4.8, reviewCount: 18000, activeUsers: '4M+' },
        roiScore: 3400,
        website: 'https://claude.ai'
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
function initializeApplication() {
    console.log('🚀 Initializing AI Intelligence Hub...');

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