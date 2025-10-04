# software.blog ⚡️

A modern software engineering blog built with Qwik, deployed on Cloudflare Pages.

## Tech Stack

- **Framework**: [Qwik](https://qwik.dev/) - Resumable, instant-loading web framework
- **Routing**: [Qwik City](https://qwik.dev/qwikcity/overview/) - File-based routing and layouts
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) - Modern utility-first CSS
- **UI Components**: [@qwik-ui/headless](https://qwikui.com/) - Accessible, unstyled components
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/) - Edge deployment
- **Language**: TypeScript - Type-safe development

## Project Structure

```
├── public/               # Static assets (images, fonts, etc.)
├── src/
│   ├── components/      # Reusable UI components
│   ├── routes/          # File-based routing
│   │   ├── index.tsx    # Home page
│   │   └── layout.tsx   # Root layout
│   ├── global.css       # Global styles
│   └── root.tsx         # Application root
└── adapters/            # Platform-specific adapters
```

## Development

### Prerequisites

- Node.js 18.17.0+ or 20.3.0+ or 21.0.0+
- pnpm (recommended package manager)

### Getting Started

1. Install dependencies:

```bash
pnpm install
```

2. Start the development server:

```bash
pnpm dev
```

Visit [http://localhost:5173/](http://localhost:5173/)

### Available Scripts

- `pnpm dev` - Start development server with SSR
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build locally
- `pnpm lint` - Run ESLint
- `pnpm fmt` - Format code with Prettier
- `pnpm serve` - Test Cloudflare Pages build locally

## Building for Production

```bash
pnpm build
```

This creates optimized client and server bundles in the `dist/` directory.

## Deployment

The blog is deployed on Cloudflare Pages with automatic deployments on git push.

### Cloudflare Pages Configuration

- **Build command**: `pnpm build`
- **Build output directory**: `dist`
- **Node version**: 20.x

### Local Preview

Test the Cloudflare Pages build locally:

```bash
pnpm serve
```

Visit [http://localhost:8787/](http://localhost:8787/)

## Content Management

Blog posts are managed through:

- Markdown files for content
- File-based routing for automatic URL generation
- Type-safe front matter for metadata

## Code Quality

- **Linting**: ESLint with TypeScript and Qwik rules
- **Formatting**: Prettier with Tailwind CSS plugin
- **Type Checking**: TypeScript strict mode

## Learn More

- [Qwik Documentation](https://qwik.dev/)
- [Qwik City Guide](https://qwik.dev/qwikcity/overview/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Cloudflare Pages](https://developers.cloudflare.com/pages/)

## License

Private project
