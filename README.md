# Modern Under Construction Template

A beautiful and modern under construction template built with Next.js and Material UI. This template provides 12 different layouts with unique designs, animations, and features.

## Features

- 12 Unique Layout Designs with distinct countdown timer styles
- Fully Responsive
- Modern Animations with Framer Motion
- Social Media Integration
- Customizable Countdown Timer with 12 variants
- Easy to Customize
- Well Documented
- Multi-Browser Support
- Header Navigation
- Footer with Branding
- Vercel Deployment Ready

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/natasun/natasun.com-template-under-construction.git
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This template is optimized for deployment on Vercel. The code includes proper Suspense boundaries for components using `useSearchParams()` to ensure successful static site generation.

To deploy to Vercel:

1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Deploy with default settings

## Customization

### Basic Customization

1. Edit the `defaultProps` object in `src/app/page.tsx` to customize:
   - Title and subtitle
   - Countdown date
   - Social media links

2. Replace background images in the `public/background` directory with your own images.

### Countdown Timer Variants

The template includes 12 unique countdown timer styles:

1. **Minimal** - Clean design with bottom border
2. **Gradient** - Gradient background with blur effect
3. **Glass** - Glassmorphism effect with backdrop filter
4. **Neon** - Glowing neon effect
5. **Timeline** - Connected timeline style
6. **Card** - Card-based design with hover effects
7. **Split** - Split design with diagonal gradient
8. **Diagonal** - Design with diagonal clipped corners
9. **Default** - Simple, clean design
10. **Geometric** - Polygon shapes with layered effects
11. **Circular** - Circular design with pulsing animations
12. **Wave** - Fluid wave-inspired design

### Using a Single Layout

1. Open `src/app/page.tsx`
2. Remove or comment out the `LayoutSwitcher` component
3. Set the `currentLayout` state to your preferred layout number (1-12)

## Pages

- **Home Page** - Showcases all layouts and features
- **Layouts Page** - Gallery of all available layouts
- **Documentation** - Comprehensive usage instructions
- **Layout Preview** - Individual layout previews

## Components

- **Header** - Navigation between pages and purchase button
- **Footer** - Branding and copyright information
- **CountdownTimer** - Customizable timer with multiple variants
- **SocialIcons** - Social media links with animations
- **LayoutSwitcher** - UI for switching between layouts

## Documentation

Visit `/docs` route to view the complete documentation on how to use and customize the template.

## Dependencies

- Next.js
- Material UI
- Framer Motion
- Iconify
- React Countdown

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue in the GitHub repository or contact us at info@natasun.com.

## Preview

Visit our demo page to see all layouts in action: [Demo Link]

## Credits

- Background images from Unsplash
- Icons from Iconify
- Animations powered by Framer Motion
- Logo from Natasun.com
