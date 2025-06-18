# Course Content Manager

A web application for managing and displaying course content based on curriculum structure.

## Features

1. Course section management
2. FAQ management
3. Content organization interface
4. Student-facing course view
5. Progress tracking

## Course Structure Implementation

The app includes these key sections:

1. What You Will Learn
2. Description
3. Who This Course is For
4. Requirements
5. Curriculum with sections:
   - Section 1 - Intro To Making AI Movies (05:30)
   - Section 2 – Developing with ChatGPT (05:44)
   - Section 3 – Creating Our Images (08:22)
   - Section 4 - Image Editing (07:35)
6. FAQ section with expandable answers

## Technical Implementation

- **Frontend**: React with TypeScript
- **UI Components**: shadcn-ui with accordion components
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Deployment**: Lovable platform

## Development

### Prerequisites

- Node.js 16.x or higher
- npm 7.x or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/dxaginfo/curriculum-content-manager.git
cd curriculum-content-manager

# Install dependencies
npm install
```

### Running the development server

```bash
npm run dev
```

This will start the development server at http://localhost:5173.

### Building for production

```bash
npm run build
```

The build output will be in the `dist` directory.

## Deployment

This application is ready to deploy via Lovable platform.

1. Use the Share -> Publish option in Lovable
2. The deployment URL will be provided upon completion

## Testing Checklist

- [ ] Section navigation functionality
- [ ] Accordion expansion/collapse
- [ ] Content display accuracy
- [ ] Responsive design
- [ ] FAQ interaction

## License

MIT
