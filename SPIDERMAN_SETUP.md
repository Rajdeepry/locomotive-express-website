# 🕷️ Spiderman Image Setup Guide

## How to Add Your Own Spiderman Picture

### **Step 1: Prepare Your Image**
- **Format**: PNG, JPG, or SVG (PNG recommended for transparency)
- **Size**: 80x100 pixels (or similar aspect ratio)
- **Background**: Transparent background works best
- **File name**: `spiderman.png` (or change the path in HTML)

### **Step 2: Add Image to Assets Folder**
1. Create an `assets` folder in your project root (if not exists)
2. Place your Spiderman image as `assets/spiderman.png`
3. Or change the path in `index.html` line 161:
   ```html
   <img src="assets/your-spiderman-image.png" alt="Spiderman" class="spiderman-image">
   ```

### **Step 3: Supported Image Formats**
- **PNG** (recommended) - supports transparency
- **JPG** - smaller file size
- **SVG** - scalable vector graphics
- **GIF** - animated Spiderman (will work!)

### **Step 4: Image Requirements**
- **Minimum size**: 40x50 pixels
- **Maximum size**: 160x200 pixels
- **Aspect ratio**: 4:5 (width:height)
- **File size**: Under 500KB for best performance

### **Step 5: Customization Options**

#### **Change Image Size**
```css
.spiderman-image {
    width: 100px;  /* Change this */
    height: 125px; /* Change this */
}
```

#### **Change Animation Speed**
```css
.spiderman-image {
    animation: spiderman-swing 2s ease-in-out infinite; /* Change duration */
}
```

#### **Add Different Effects**
```css
.spiderman-image {
    filter: drop-shadow(0 0 20px rgba(255, 0, 0, 0.8)); /* Red glow */
    transform: scale(1.2); /* Make bigger */
}
```

### **Step 6: Test Your Image**
1. **Refresh the page** (Ctrl+F5)
2. **Click "Test Spiderman" button**
3. **Check console** for "🕷️ Spiderman image loaded successfully!"
4. **Scroll the page** to see Spiderman appear

### **Step 7: Troubleshooting**

#### **Image Not Showing?**
- Check file path is correct
- Ensure image file exists in assets folder
- Check console for error messages
- Try different image format

#### **Image Too Big/Small?**
- Adjust CSS width/height
- Resize your image file
- Use object-fit: contain for proper scaling

#### **Animation Not Working?**
- Check if image has proper CSS class
- Verify JavaScript is loading
- Check browser console for errors

### **Step 8: Advanced Customization**

#### **Multiple Spiderman Images**
```html
<img src="assets/spiderman1.png" class="spiderman-image" style="display: none;">
<img src="assets/spiderman2.png" class="spiderman-image" style="display: none;">
```

#### **Random Spiderman Selection**
```javascript
const spidermanImages = document.querySelectorAll('.spiderman-image');
const randomImage = spidermanImages[Math.floor(Math.random() * spidermanImages.length)];
randomImage.style.display = 'block';
```

### **Step 9: Performance Tips**
- **Optimize images** before adding
- **Use WebP format** for better compression
- **Lazy load** if you have many images
- **Preload** critical images

### **Step 10: Fallback System**
The system automatically falls back to CSS Spiderman if:
- Image file not found
- Image fails to load
- Network issues
- Invalid image format

---

## 🎨 **Image Ideas**
- **Classic Spiderman** - Red and blue suit
- **Black Spiderman** - Venom or symbiote suit
- **Spider-Gwen** - White and pink suit
- **Miles Morales** - Black and red suit
- **Custom design** - Your own creation!

## 🚀 **Ready to Go!**
Once you add your image, the Spiderman animation will automatically use it instead of the CSS version. The swinging animation and all effects will work with your custom image!

---

**Need help?** Check the browser console for detailed error messages and debugging information.
