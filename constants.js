/**
 * Constants and Configuration for AI Intelligence Hub
 * 
 * This file contains all constant values used throughout the application.
 * Centralizing constants makes the code more maintainable and reduces magic numbers.
 */

// ===========================
// PAGINATION SETTINGS
// ===========================
export const PAGINATION = {
  ITEMS_PER_PAGE: 12,
  MAX_PAGE_NUMBER: 100, // Safety limit
};

// ===========================
// FEATURE LIMITS
// ===========================
export const LIMITS = {
  MAX_COMPARISON_TOOLS: 3,
  MAX_CALCULATOR_TOOLS: 10,
  MAX_SEARCH_LENGTH: 100,
  MAX_EMAIL_LENGTH: 255,
  MAX_REVIEW_LENGTH: 500,
};

// ===========================
// TOOL CATEGORIES
// ===========================
export const CATEGORIES = {
  TEXT_GENERATION: 'text-generation',
  IMAGE_GENERATION: 'image-generation',
  VIDEO_GENERATION: 'video-generation',
  AUDIO_GENERATION: 'audio-generation',
  CODE_GENERATION: 'code-generation',
  DATA_ANALYSIS: 'data-analysis',
  PRODUCTIVITY: 'productivity',
  AI_ASSISTANT: 'ai-assistant',
  VIDEO_EDITING: 'video-editing',
  DESIGN: 'design',
};

// ===========================
// USE CASES
// ===========================
export const USE_CASES = {
  WRITING: 'writing',
  CODING: 'coding',
  DESIGN: 'design',
  MARKETING: 'marketing',
  ANALYSIS: 'analysis',
  AUTOMATION: 'automation',
  RESEARCH: 'research',
  CONTENT_CREATION: 'content-creation',
  VIDEO_EDITING: 'video-editing',
  SOCIAL_MEDIA: 'social-media',
};

// ===========================
// PRICING MODELS
// ===========================
export const PRICING_MODELS = {
  FREE: 'free',
  FREEMIUM: 'freemium',
  PAID: 'paid',
  ENTERPRISE: 'enterprise',
};

// ===========================
// SORT OPTIONS
// ===========================
export const SORT_OPTIONS = {
  NAME: 'name',
  RATING: 'rating',
  POPULARITY: 'popularity',
  ROI: 'roi',
  PRICE: 'price',
};

// ===========================
// VIBE CATEGORIES
// ===========================
export const VIBES = {
  CREATIVE: 'creative',
  PRODUCTIVE: 'productive',
  EXPLORATIVE: 'explorative',
  RELAXED: 'relaxed',
};

// ===========================
// WORKFLOW CATEGORIES
// ===========================
export const WORKFLOW_CATEGORIES = {
  CONTENT_CREATION: 'content-creation',
  MARKETING: 'marketing',
  BUSINESS: 'business',
  RESEARCH: 'research',
  CREATIVE: 'creative',
  DEVELOPMENT: 'development',
  DESIGN: 'design',
};

// ===========================
// DIFFICULTY LEVELS
// ===========================
export const DIFFICULTY_LEVELS = {
  BEGINNER: 'beginner',
  INTERMEDIATE: 'intermediate',
  ADVANCED: 'advanced',
  EXPERT: 'expert',
};

// ===========================
// NOTIFICATION SETTINGS
// ===========================
export const NOTIFICATIONS = {
  DURATION: 3000, // milliseconds
  ANIMATION_DURATION: 300, // milliseconds
};

// ===========================
// DEBOUNCE TIMINGS
// ===========================
export const TIMINGS = {
  SEARCH_DEBOUNCE: 300, // milliseconds
  SCROLL_DEBOUNCE: 100, // milliseconds
  RESIZE_DEBOUNCE: 200, // milliseconds
};

// ===========================
// LOCAL STORAGE KEYS
// ===========================
export const STORAGE_KEYS = {
  FAVORITES: 'ai-hub-favorites',
  BOOKMARKS: 'ai-hub-bookmarks',
  USER_PREFERENCES: 'ai-hub-preferences',
  CALCULATOR_TOOLS: 'ai-hub-calculator',
  RECENT_SEARCHES: 'ai-hub-recent-searches',
};

// ===========================
// API ENDPOINTS (Future)
// ===========================
export const API = {
  BASE_URL: process.env.API_URL || 'http://localhost:3000',
  ENDPOINTS: {
    TOOLS: '/api/tools',
    WORKFLOWS: '/api/workflows',
    REVIEWS: '/api/reviews',
    ANALYTICS: '/api/analytics',
  },
  TIMEOUT: 10000, // milliseconds
};

// ===========================
// VALIDATION PATTERNS
// ===========================
export const PATTERNS = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  URL: /^https?:\/\/.+/,
  SLUG: /^[a-z0-9-]+$/,
};

// ===========================
// ERROR MESSAGES
// ===========================
export const ERROR_MESSAGES = {
  TOOL_NOT_FOUND: 'Tool not found',
  INVALID_EMAIL: 'Please enter a valid email address',
  COMPARISON_LIMIT: 'Maximum 3 tools can be compared at once',
  CALCULATOR_LIMIT: 'Maximum 10 tools can be added to calculator',
  NETWORK_ERROR: 'Network error. Please try again.',
  UNKNOWN_ERROR: 'An unexpected error occurred',
};

// ===========================
// SUCCESS MESSAGES
// ===========================
export const SUCCESS_MESSAGES = {
  TOOL_ADDED_COMPARISON: 'Tool added to comparison',
  TOOL_ADDED_CALCULATOR: 'Tool added to calculator',
  FAVORITE_ADDED: 'Added to favorites',
  FAVORITE_REMOVED: 'Removed from favorites',
  BOOKMARK_ADDED: 'Bookmarked',
  BOOKMARK_REMOVED: 'Bookmark removed',
  NEWSLETTER_SUBSCRIBED: 'Thanks for subscribing!',
  REVIEW_SUBMITTED: 'Review submitted successfully',
};

// ===========================
// BREAKPOINTS (for responsive design)
// ===========================
export const BREAKPOINTS = {
  MOBILE: 480,
  TABLET: 768,
  DESKTOP: 1024,
  WIDE: 1280,
};

// ===========================
// PERFORMANCE THRESHOLDS
// ===========================
export const PERFORMANCE = {
  QUALITY_MIN: 0,
  QUALITY_MAX: 10,
  SPEED_MIN: 0,
  SPEED_MAX: 10,
  CONSISTENCY_MIN: 0,
  CONSISTENCY_MAX: 10,
};

// ===========================
// DEFAULT VALUES
// ===========================
export const DEFAULTS = {
  CURRENT_PAGE: 1,
  ITEMS_PER_PAGE: 12,
  SORT_BY: 'popularity',
  FILTER_CATEGORY: 'all',
  FILTER_USE_CASE: 'all',
  FILTER_PRICING: 'all',
};

// ===========================
// FEATURE FLAGS (for gradual rollout)
// ===========================
export const FEATURES = {
  ENABLE_REVIEWS: true,
  ENABLE_CALCULATOR: true,
  ENABLE_COMPARISON: true,
  ENABLE_WORKFLOWS: true,
  ENABLE_ANALYTICS: true,
  ENABLE_FAVORITES: true,
  ENABLE_BOOKMARKS: true,
};

// ===========================
// DEVELOPMENT FLAGS
// ===========================
export const DEBUG = {
  ENABLED: process.env.NODE_ENV === 'development',
  LOG_STATE_CHANGES: false,
  LOG_FILTERS: false,
  LOG_SEARCHES: false,
};

// ===========================
// EXPORT ALL AS DEFAULT
// ===========================
export default {
  PAGINATION,
  LIMITS,
  CATEGORIES,
  USE_CASES,
  PRICING_MODELS,
  SORT_OPTIONS,
  VIBES,
  WORKFLOW_CATEGORIES,
  DIFFICULTY_LEVELS,
  NOTIFICATIONS,
  TIMINGS,
  STORAGE_KEYS,
  API,
  PATTERNS,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
  BREAKPOINTS,
  PERFORMANCE,
  DEFAULTS,
  FEATURES,
  DEBUG,
};
