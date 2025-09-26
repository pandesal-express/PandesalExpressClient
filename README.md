# Pandesal Express Bakery - Client Frontend

A comprehensive inventory management system with face recognition attendance for Pandesal Express Bakery operations.

## Overview

This frontend application provides a complete business management solution for bakery operations, featuring:

- **Face Recognition Attendance** - Biometric employee check-in/check-out system also acts as authentication
- **Multi-Store Operations** - Support for multiple bakery locations
- **Inventory Management** - Real-time stock tracking and delivery management
- **Role-Based Access** - Admin, Cashier, and Commissary user roles

## Tech Stack

- **Framework**: Astro 5.14 with SSR
- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS + HeroUI components
- **State Management**: Nanostores
- **HTTP Client**: Axios

## Development Setup

### Prerequisites

- Node.js 18+
- Bun

### Installation

```bash
# Install dependencies
bun install

# Start development server
bun run dev
```

### Local Environment Configuration

Create `.env` file with:

```env
PUBLIC_API_URL="https://localhost:7017"
PUBLIC_KEY_PATH="./cert/pandesal-express.key"
PUBLIC_CERT_PATH="./cert/pandesal-express.crt"
```

### Available Scripts

```bash
bun run dev      # Start development server (port 3000)
bun run build    # Build for production
bun run preview  # Preview production build
```

## Key Features

### Authentication & Authorization
- JWT-based authentication with refresh tokens
- Role-based access control (Cashier and Commissary)
- Secure middleware for route protection

### Face Recognition Attendance
- Real-time camera integration
- Biometric employee identification

### Multi-Store Management
- Individual store dashboards
- Store-specific inventory tracking
- Inter-store stock transfers

### Inventory & Sales
- Real-time stock monitoring
- Delivery receipt management
- End-of-shift reporting

## API Integration

The frontend communicates with backend services through:
- Main API: `https://localhost:7017`

All API calls are authenticated through face recognition using JWT tokens with automatic refresh handling.

## Deployment

Built for server-side rendering with Vercel adapter.

```bash
bun run build
vercel deploy
```

## Contributing

1. Follow TypeScript strict mode guidelines
2. Use existing component patterns and hooks
3. Maintain consistent styling with Tailwind CSS
4. Test authentication flows thoroughly
5. Ensure responsive design compatibility
