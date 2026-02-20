# Omnion Security Group - Cybersecurity Consulting Website

A professional multi-page website for a cybersecurity consulting firm. Built with plain HTML, CSS, and JavaScript—no build step required.

## Structure

```
/
├── index.html       # Home page
├── services.html    # Services overview
├── about.html       # About & team
├── contact.html     # Contact form
├── css/styles.css   # Global styles
├── js/main.js       # Navigation, form, interactions
└── assets/          # Favicon, images
```

## Running Locally

Serve the site with any static file server, or open `index.html` directly in a browser. Examples:

```bash
# Python
python -m http.server 8000

# Node (npx)
npx serve .
```

Then visit `http://localhost:8000`.

## Contact Form (Formspree)

The contact form is configured for [Formspree](https://formspree.io). To enable submissions:

1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form and copy your form ID
3. In `contact.html`, replace `YOUR_FORM_ID` in the form `action`:
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```

## Deployment

Deploy to any static host:

- **Netlify**: Drag and drop the folder or connect a Git repo
- **GitHub Pages**: Push to a repo and enable Pages
- **Vercel**: Import project and deploy

## Customization

- **Firm name**: Search and replace "Omnion Security Group" across all HTML files
- **Colors**: Edit CSS variables in `:root` in `css/styles.css`
- **Contact details**: Update email, phone, and address in `contact.html`
