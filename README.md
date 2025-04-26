# Physio-Track2: Bilateral Training for Monoplegic Patients

Physio-Track2 is an innovative rehabilitation system designed to assist monoplegic patients in regaining arm movement through bilateral training. The system leverages a robotic glove, EMG sensors, and real-time data visualization to provide adaptive therapy and progress tracking.

## Features

- **Real-Time EMG Monitoring**: Visualize muscle activity data in real-time.
- **Rehabilitation Exercises**: Guided exercises for different skill levels (Beginner, Intermediate, Advanced).
- **Progress Tracking**: Track improvement over time with detailed charts and summaries.
- **Live Readings**: Monitor live EMG readings during therapy sessions.
- **Customizable UI**: Dark mode support and responsive design for various devices.
- **Integration with Firebase**: Simulated real-time data updates (can be replaced with actual Firebase integration).

## Tech Stack

- **Frontend**: React, Next.js, TypeScript
- **UI Framework**: Tailwind CSS
- **Charts**: Recharts
- **State Management**: React Context API
- **Icons**: Lucide React

## Getting Started

Follow these steps to set up the project locally:

### Prerequisites

- Node.js (v16 or higher)
- pnpm (v7 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/physio-track2.git
   cd physio-track2
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

### Configuration

- Firebase integration can be added by replacing the mock data functions in `components/emg-chart.tsx` and `app/live-readings/page.tsx` with actual Firebase API calls.
- Tailwind CSS configuration can be customized in `tailwind.config.ts`.

## Project Structure

```
physio-track2/
├── app/                     # Next.js app directory
├── components/              # Reusable React components
├── hooks/                   # Custom React hooks
├── lib/                     # Utility functions
├── styles/                  # Global and Tailwind CSS styles
├── public/                  # Static assets
├── README.md                # Project documentation
└── pnpm-lock.yaml           # Dependency lockfile
```

## Contributing

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.
