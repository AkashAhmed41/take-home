# Take-Home Dashboard Project

A technical assessment project focused on translating a Figma design into a functional, data-driven dashboard. This implementation prioritizes design fidelity, component modularity, and clean engineering practices.

## Live Demo

🔗 [take-home-flax.vercel.app](https://take-home-flax.vercel.app/dashboard)

## Getting Started

### Prerequisites

- Node.js **18.17 or higher** (required for Next.js 15)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/AkashAhmed41/take-home.git
   cd take-home
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000/dashboard](http://localhost:3000/dashboard) to view the application.

### Production Build

To verify the production bundle:

```bash
npm run build
npm run start
```

## Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Library**: React 19
- **Styling**:
  - **CSS Modules**: For encapsulated, component-scoped styling.
  - **CSS Variables (Design Tokens)**: For a centralized design system in `globals.css` used to implement the pixel-perfect UI.
- **Icons**: Custom SVG React components for precision and scalability.
- **Deployment**: Vercel.

## Assumptions & Implementation Details

- **Design System & Tokens**: I utilized a centralized set of CSS tokens to ensure layout, spacing, typography, and colors remain consistent across the entire interface, allowing for a pixel-perfect match with the provided design.
- **Dynamic Data Mocking**: All data shown on the dashboard is mocked dynamically to ensure a rich and representative UI. Using functions like `generateThreatData` and `generateThreatStats`, the application populates the components with realistic, deterministic information while ensuring stability across client-server hydration.
- **Production-Grade Structure**: The project follows a production-grade file/folder structuring strategy, separating concerns between page layouts, domain-specific components, and shared utility libraries for better maintainability.
- **Localization Ready**: I implemented a curried `getLocalizedText` utility to handle section-based text retrieval, making the UI ready for multi-language support.

## Project Structure Overview

```text
src/
 ├── app/              # Next.js App Router & Global Config
 ├── components/       # Production-Level UI Architecture
 │    ├── calendar-view/ # Modular Calendar System
 │    ├── layout/        # Sidebar, Header, DashboardLayout
 │    ├── threat-list/   # Table, Filters, Pagination
 │    └── common/        # Shared Atomic components
 ├── hooks/            # Custom React Hooks
 ├── lib/              # Business Logic & Core Assets
 │    ├── constants/     # Enums and Domain Constants
 │    ├── svg/           # Custom SVG Icon Library
 │    └── utils/         # Data Transformers & Mock Generators
 └── sections/         # High-level Page Composites
```

## Known Limitations

- **Data Fetching**: Currently, all information is dynamically mocked. No real-time logic or external data fetching is included in this version of the assessment.
- **Screen Optimization**: The project is optimized for large screens (ideally 1200px to 1920px) to best showcase the dashboard's layout density.
- **Mobile Responsiveness**: While some layouts use flexible containers that can be adapted in the future, the primary project scope was for Desktop/Large-screen dashboard views, and it is not currently fully responsive for mobile devices.

---

_This project was developed with a strong emphasis on "clean code" and "design accuracy" as requested for the technical assessment._
