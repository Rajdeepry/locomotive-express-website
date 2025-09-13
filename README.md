# Locomotive Express Website

A modern, locomotive-themed website featuring smooth animations, AI integration, and responsive design. Built with HTML5, CSS3, JavaScript, GSAP, and Locomotive Scroll.

## 🚂 Features

- **Smooth Animations**: Powered by GSAP and Locomotive Scroll
- **AI Chatbot**: Interactive AI assistant using OpenAI API
- **Spiderman Animation**: Fun swinging animation on section transitions
- **Responsive Design**: Perfect on desktop, tablet, and mobile
- **Modern UI**: Dark theme with locomotive-inspired design
- **Interactive Elements**: Hover effects, parallax scrolling, and smooth transitions

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Animation Libraries**: GSAP 3.12.2, Locomotive Scroll 4.1.4
- **AI Integration**: OpenAI API
- **Icons**: Font Awesome 6.0.0
- **Fonts**: Inter (Google Fonts)

## 📁 Project Structure

```
locomotive-express-website/
├── index.html              # Home page
├── about.html              # About page
├── projects.html           # Projects showcase
├── contact.html            # Contact form
├── css/
│   └── style.css          # Main stylesheet
├── js/
│   └── script.js          # JavaScript functionality
├── assets/                # Images and other assets
├── package.json           # Node.js dependencies
├── env.example            # Environment variables template
└── README.md              # This file
```

## 🚀 Quick Start

### Option 1: Direct Browser Opening
1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! The website is ready to use

### Option 2: Local Development Server
1. Install Node.js (if not already installed)
2. Run the following commands:
   ```bash
   npm install
   npm run dev
   ```
3. Open your browser and go to `http://localhost:3000`

## 🤖 AI Chatbot Setup

To enable the AI chatbot functionality:

1. Get an OpenAI API key from [OpenAI](https://platform.openai.com/api-keys)
2. Copy `env.example` to `.env`
3. Add your API key to the `.env` file:
   ```
   OPENAI_API_KEY=your_actual_api_key_here
   ```
4. The chatbot will automatically use the API for intelligent responses

**Note**: Without an API key, the chatbot will use predefined responses.

## 🎨 Customization

### Colors
The main color scheme is defined in CSS variables at the top of `style.css`:
- Primary: `#ff6b35` (Orange)
- Secondary: `#f7931e` (Light Orange)
- Background: `#0a0a0a` (Dark)
- Text: `#fff` (White)

### Animations
All animations are controlled in `js/script.js` using GSAP. You can modify:
- Animation durations
- Easing functions
- Trigger points
- Animation sequences

### Content
- Update text content directly in HTML files
- Modify project data in `projects.html`
- Change team information in `about.html`
- Update contact details in `contact.html`

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🌐 Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build` (or leave empty for static sites)
3. Set publish directory: `/` (root)
4. Deploy!

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts to deploy

## 🔧 Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Contact us at hello@locomotiveexpress.com
- Use the AI chatbot on the website

## 🙏 Acknowledgments

- [GSAP](https://greensock.com/gsap/) for amazing animations
- [Locomotive Scroll](https://locomotive.ca/) for smooth scrolling
- [Font Awesome](https://fontawesome.com/) for beautiful icons
- [OpenAI](https://openai.com/) for AI capabilities

---

**Built with ❤️ by the Locomotive Express Team**
