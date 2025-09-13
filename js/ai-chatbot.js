// AI Chatbot Integration
class AIChatbot {
    constructor() {
        this.apiKey = this.getAPIKey();
        this.model = 'gpt-3.5-turbo';
        this.maxTokens = 150;
        this.conversationHistory = [];
    }

    // Get API key from environment or use fallback
    getAPIKey() {
        // In a real implementation, you would load this from a secure environment
        // For demo purposes, we'll use a placeholder
        return process.env.OPENAI_API_KEY || null;
    }

    // Send message to AI
    async sendMessage(message) {
        try {
            if (this.apiKey) {
                return await this.callOpenAI(message);
            } else {
                return this.getFallbackResponse(message);
            }
        } catch (error) {
            console.error('AI Chatbot Error:', error);
            return "I'm sorry, I'm having trouble connecting right now. Please try again later.";
        }
    }

    // Call OpenAI API
    async callOpenAI(message) {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.apiKey}`
            },
            body: JSON.stringify({
                model: this.model,
                messages: [
                    {
                        role: 'system',
                        content: 'You are a helpful AI assistant for Locomotive Express, a web development company. Be friendly, professional, and helpful. Keep responses concise and relevant to web development, design, and our services.'
                    },
                    ...this.conversationHistory,
                    {
                        role: 'user',
                        content: message
                    }
                ],
                max_tokens: this.maxTokens,
                temperature: 0.7
            })
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        const data = await response.json();
        const aiResponse = data.choices[0].message.content;

        // Update conversation history
        this.conversationHistory.push(
            { role: 'user', content: message },
            { role: 'assistant', content: aiResponse }
        );

        // Keep only last 10 messages to manage context
        if (this.conversationHistory.length > 20) {
            this.conversationHistory = this.conversationHistory.slice(-20);
        }

        return aiResponse;
    }

    // Fallback responses when API is not available
    getFallbackResponse(message) {
        const responses = {
            greeting: [
                "Hello! I'm the AI assistant for Locomotive Express. How can I help you today?",
                "Hi there! Welcome to Locomotive Express. What would you like to know about our services?",
                "Greetings! I'm here to help you learn more about our web development services."
            ],
            services: [
                "We specialize in modern web development, AI integration, and smooth animations using cutting-edge technologies.",
                "Our services include responsive web design, mobile app development, AI-powered features, and e-commerce solutions.",
                "We offer full-stack development, UI/UX design, and custom AI integrations for your business needs."
            ],
            pricing: [
                "Our pricing varies based on project scope and complexity. Let's schedule a consultation to discuss your specific needs.",
                "We provide custom quotes for each project. Contact us to get a detailed estimate for your requirements.",
                "Pricing depends on features, timeline, and complexity. We'd love to discuss your project in detail."
            ],
            contact: [
                "You can reach us at hello@locomotiveexpress.com or use our contact form. We'd love to hear from you!",
                "Feel free to contact us through our website form or email. We're here to help with your project.",
                "Get in touch with us via email or our contact page. We're excited to work with you!"
            ],
            technology: [
                "We use modern technologies like React, Vue.js, Node.js, GSAP, and AI/ML frameworks.",
                "Our tech stack includes JavaScript, Python, cloud platforms, and the latest web development tools.",
                "We work with cutting-edge technologies including AI integration, responsive design, and performance optimization."
            ],
            default: [
                "That's a great question! Let me help you with that.",
                "I understand you're interested in our services. We'd love to discuss your project!",
                "Thanks for reaching out! Our team specializes in modern web development and AI integration.",
                "I can help you learn more about our locomotive-themed web solutions.",
                "That sounds like an exciting project! We have experience with similar technologies.",
                "Feel free to ask me anything about our services or schedule a consultation.",
                "Our team is passionate about creating smooth, animated web experiences.",
                "I'd be happy to connect you with our development team for more details."
            ]
        };

        const messageLower = message.toLowerCase();
        
        // Keyword matching for better responses
        if (this.containsKeywords(messageLower, ['hello', 'hi', 'hey', 'greetings'])) {
            return this.getRandomResponse(responses.greeting);
        } else if (this.containsKeywords(messageLower, ['service', 'services', 'what do you do', 'offer'])) {
            return this.getRandomResponse(responses.services);
        } else if (this.containsKeywords(messageLower, ['price', 'cost', 'expensive', 'budget', 'quote'])) {
            return this.getRandomResponse(responses.pricing);
        } else if (this.containsKeywords(messageLower, ['contact', 'email', 'phone', 'meeting', 'call'])) {
            return this.getRandomResponse(responses.contact);
        } else if (this.containsKeywords(messageLower, ['technology', 'tech', 'framework', 'language', 'tool'])) {
            return this.getRandomResponse(responses.technology);
        } else {
            return this.getRandomResponse(responses.default);
        }
    }

    // Check if message contains any of the keywords
    containsKeywords(message, keywords) {
        return keywords.some(keyword => message.includes(keyword));
    }

    // Get random response from array
    getRandomResponse(responses) {
        return responses[Math.floor(Math.random() * responses.length)];
    }

    // Reset conversation history
    reset() {
        this.conversationHistory = [];
    }
}

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AIChatbot;
} else {
    window.AIChatbot = AIChatbot;
}
