# Next.js Shopify E-Commerce

A high-performance, feature-rich e-commerce storefront built with Next.js and Shopify integration.

![Next.js Shopify Store](site/public/card.png)

## 📋 Project Overview

This project is a modern e-commerce storefront built with Next.js and integrated with Shopify. It provides a performant, SEO-friendly, and customizable shopping experience with features like product browsing, search, and cart management.

## ✨ Features

The following features are currently enabled in this project:

- **Product Catalog** - Browse and view products with detailed information
- **Search** - Find products quickly with the integrated search functionality
- **Shopping Cart** - Add products to cart and manage cart items
- **Responsive Design** - Optimized for all device sizes
- **Dark Mode** - Toggle between light and dark themes
- **Internationalization** - Support for multiple languages (en-US, es)

Features that can be enabled:
- Wishlist
- Customer Authentication
- Custom Checkout

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (v13)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with CSS Modules
- **State Management**: React Context API
- **UI Components**: Custom component library
- **Animation**: React Spring
- **Slider**: Keen Slider
- **Package Manager**: pnpm

## 📁 Project Structure

```
site/
├── components/         # UI components
│   ├── common/         # Common components (Navbar, SEO, etc.)
│   ├── icons/          # SVG icons as React components
│   ├── product/        # Product-related components
│   ├── ui/             # Base UI components
│   └── wishlist/       # Wishlist components
├── config/             # Configuration files
├── lib/                # Utility functions and hooks
├── pages/              # Next.js pages
│   ├── api/            # API routes
│   └── product/        # Product pages
├── public/             # Static assets
└── styles/             # Global styles
```

### Key Components

- **ProductView**: Main product display component
- **ProductCard**: Card component for product listings
- **ProductSlider**: Image slider for product images
- **Navbar**: Main navigation component
- **UserNav**: User navigation with cart access
- **Searchbar**: Search functionality component

## 🚀 Getting Started

### Prerequisites

- Node.js 14.x or later
- pnpm 7.x or later

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/nextjs-shopify.git
   cd nextjs-shopify
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up environment variables:
   - Copy `site/.env.template` to `site/.env.local`
   - Add your Shopify credentials:
     ```
     COMMERCE_PROVIDER=@vercel/commerce-shopify
     NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your_access_token
     NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
     ```

4. Build the packages:
   ```bash
   pnpm build
   ```

5. Run the development server:
   ```bash
   cd site
   pnpm dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## ⚙️ Configuration

### Commerce Provider

The project is configured to use Shopify as the commerce provider. You can change this in `site/.env.local`:

```
COMMERCE_PROVIDER=@vercel/commerce-shopify
```

### Feature Toggles

Features can be enabled or disabled in `site/commerce.config.json`:

```json
{
  "features": {
    "cart": true,
    "search": true,
    "wishlist": false,
    "customerAuth": false,
    "customCheckout": false
  }
}
```

## 🎨 Customization

### Theme

The project uses `next-themes` for theme management. You can customize the themes in `site/components/ui/context.tsx`.

### UI Components

All UI components are located in `site/components/ui/`. These components are designed to be atomic and reusable.

### Adding New Pages

Create new pages in the `site/pages/` directory following the Next.js file-based routing system.

## 🔧 Performance & Optimization

### Incremental Static Regeneration (ISR)

The project uses Next.js ISR for better SEO and performance. Product pages are statically generated at build time and can be regenerated on-demand.

### Image Optimization

Images are optimized using Next.js `next/image` component, which provides:
- Automatic WebP/AVIF conversion
- Responsive sizes
- Lazy loading
- CDN caching

### SWC Compiler

The project uses the SWC compiler for faster builds and development experience.

## 📈 SEO Best Practices

### Meta Tags

SEO meta tags are managed through the `SEO` component in `site/components/common/SEO/SEO.tsx`.

### Open Graph

Open Graph tags are included for better social media sharing.

### Structured Data

JSON-LD structured data is implemented for better search engine understanding of product information.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'Add my feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a pull request

### Development Guidelines

- Follow the existing code style
- Write tests for new features
- Update documentation when necessary

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](license.md) file for details.
