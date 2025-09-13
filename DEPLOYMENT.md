# Deployment Guide

This guide will help you deploy the Locomotive Express website to various hosting platforms.

## 🚀 Quick Deploy Options

### 1. GitHub Pages (Free)

1. **Create a GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/locomotive-express-website.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click on "Settings" tab
   - Scroll down to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

3. **Access Your Site**
   - Your site will be available at: `https://yourusername.github.io/locomotive-express-website`

### 2. Netlify (Free)

1. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login with GitHub
   - Click "New site from Git"
   - Choose your repository
   - Deploy settings are already configured in `netlify.toml`

2. **Custom Domain (Optional)**
   - Go to Site settings > Domain management
   - Add your custom domain
   - Update DNS records as instructed

### 3. Vercel (Free)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```
   - Follow the prompts
   - Your site will be deployed automatically

3. **Custom Domain (Optional)**
   - Go to your project dashboard
   - Add domain in settings

### 4. Netlify Drop (Drag & Drop)

1. **Zip Your Project**
   - Create a zip file of your project folder
   - Exclude `node_modules` and `.git` folders

2. **Deploy**
   - Go to [app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag and drop your zip file
   - Your site will be live in minutes

## 🔧 Environment Variables

### For AI Chatbot (Optional)

If you want to use the OpenAI API for the chatbot:

1. **Get OpenAI API Key**
   - Go to [platform.openai.com](https://platform.openai.com)
   - Create an account and get an API key

2. **Set Environment Variables**

   **For Netlify:**
   - Go to Site settings > Environment variables
   - Add: `OPENAI_API_KEY` = `your_api_key_here`

   **For Vercel:**
   - Go to Project settings > Environment variables
   - Add: `OPENAI_API_KEY` = `your_api_key_here`

   **For GitHub Pages:**
   - GitHub Pages doesn't support server-side environment variables
   - The chatbot will use fallback responses

## 📁 File Structure for Deployment

Make sure your project has this structure:
```
locomotive-express-website/
├── index.html
├── about.html
├── projects.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   ├── script.js
│   └── ai-chatbot.js
├── assets/
├── package.json
├── vercel.json
├── netlify.toml
└── README.md
```

## 🛠️ Build Commands

### Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Or use live-server directly
npx live-server --port=3000
```

### Production Build
```bash
# No build process needed - it's a static site
# Just upload all files to your hosting provider
```

## 🔍 Testing Before Deployment

1. **Local Testing**
   ```bash
   npm run dev
   ```
   - Test all pages and functionality
   - Check responsive design on different screen sizes
   - Test chatbot functionality

2. **Performance Check**
   - Use Google PageSpeed Insights
   - Check Lighthouse scores
   - Optimize images if needed

## 🚨 Common Issues & Solutions

### Issue: Locomotive Scroll not working
**Solution:** Make sure you're using HTTPS in production. Some features require secure context.

### Issue: AI Chatbot not responding
**Solution:** 
- Check if API key is set correctly
- Verify CORS settings
- Check browser console for errors

### Issue: Animations not smooth on mobile
**Solution:** 
- Check if `smoothMobile: false` is set in Locomotive Scroll config
- Test on actual devices, not just browser dev tools

### Issue: Images not loading
**Solution:**
- Check file paths are correct
- Ensure images are in the `assets` folder
- Use relative paths, not absolute paths

## 📊 Performance Optimization

1. **Minify Files** (Optional)
   ```bash
   # Install minification tools
   npm install -g html-minifier cssnano-cli uglify-js

   # Minify HTML
   html-minifier --collapse-whitespace --remove-comments --minify-css --minify-js -o index.min.html index.html

   # Minify CSS
   cssnano css/style.css css/style.min.css

   # Minify JS
   uglifyjs js/script.js -o js/script.min.js
   ```

2. **Image Optimization**
   - Use WebP format for better compression
   - Compress images before uploading
   - Use appropriate image sizes

3. **CDN Usage**
   - Consider using a CDN for faster loading
   - Use CDN for external libraries (already implemented)

## 🔒 Security Considerations

1. **API Keys**
   - Never commit API keys to version control
   - Use environment variables
   - Rotate keys regularly

2. **HTTPS**
   - Always use HTTPS in production
   - Set up SSL certificates

3. **Content Security Policy**
   - Consider adding CSP headers
   - Restrict resource loading

## 📈 Monitoring & Analytics

1. **Google Analytics**
   - Add GA tracking code to all pages
   - Monitor user behavior and performance

2. **Error Monitoring**
   - Use services like Sentry for error tracking
   - Monitor console errors

3. **Uptime Monitoring**
   - Use services like UptimeRobot
   - Set up alerts for downtime

## 🎯 Post-Deployment Checklist

- [ ] All pages load correctly
- [ ] Navigation works on all devices
- [ ] Animations are smooth
- [ ] Chatbot responds properly
- [ ] Contact form works (if backend is set up)
- [ ] Images load properly
- [ ] Performance scores are good
- [ ] SSL certificate is active
- [ ] Custom domain is working (if applicable)
- [ ] Analytics is tracking correctly

## 🆘 Support

If you encounter any issues during deployment:

1. Check the browser console for errors
2. Verify all file paths are correct
3. Ensure all dependencies are loaded
4. Test on different browsers and devices
5. Check hosting provider documentation

For additional help, please open an issue on GitHub or contact us at hello@locomotiveexpress.com.

---

**Happy Deploying! 🚂✨**
