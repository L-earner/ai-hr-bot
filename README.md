# AI for HR - "First Day"

An AI-powered onboarding companion that guides new hires through their first 30 days at a company.

## Overview

This application addresses the challenge of remote and hybrid onboarding by providing an intelligent AI companion that:
- Answers questions in real-time
- Introduces company culture
- Connects people
- Tracks progress through a 30-day journey
- Monitors sentiment and engagement

## Features

### 🤖 AI Chat Companion
- Intelligent conversational AI that answers onboarding questions
- Context-aware responses about team, tools, culture, and processes
- Real-time sentiment detection
- Available 24/7 to support new hires

### 📅 30-Day Onboarding Journey
- Structured week-by-week progression
- Clear tasks and milestones for each phase
- Progress tracking with visual indicators
- Customizable by role and team

### 👥 Team Integration
- Team directory with member profiles
- 1-on-1 scheduling
- Coffee chat challenges
- Cross-functional connections

### 📚 Learning & Development
- Role-specific training modules
- Company culture education
- Tools and systems tutorials
- Interactive learning experiences

### 🎯 Gamification
- Onboarding challenges and bounties
- Leaderboard for engagement
- Points and rewards system
- Team building games

### 🔗 Integration Capabilities
- Slack - Team communication
- Notion - Documentation sync
- HRIS Systems - BambooHR, Deel integration

## Technology Stack

- **Frontend**: React 18 with Vite
- **Styling**: CSS with CSS Variables
- **Icons**: Lucide React
- **Runtime**: Node.js 20

## Getting Started

### Prerequisites
- Node.js 20 or higher
- npm

### Installation

1. Clone the repository
2. Navigate to the project directory:
   ```bash
   cd ai-hr-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev -- --host
   ```

5. Open your browser to the URL shown in the terminal (typically `http://localhost:5173`)

## Project Structure

```
ai-hr-app/
├── src/
│   ├── components/
│   │   ├── ChatBot.jsx              # AI chat companion
│   │   ├── ChatBot.css
│   │   ├── OnboardingDashboard.jsx  # Main dashboard with 30-day journey
│   │   ├── OnboardingDashboard.css
│   │   ├── Sidebar.jsx              # Navigation sidebar
│   │   ├── Sidebar.css
│   │   ├── ChallengeOverview.jsx    # Challenge/hackathon info
│   │   ├── ChallengeOverview.css
│   │   ├── InfoSidebar.jsx          # Status sidebar
│   │   └── InfoSidebar.css
│   ├── App.jsx                      # Main application component
│   ├── App.css                      # Application styles
│   ├── index.css                    # Global styles and CSS variables
│   └── main.jsx                     # Entry point
├── public/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Key Components

### OnboardingDashboard
The main dashboard showing:
- Welcome banner with current day indicator
- Quick stats (progress, tasks, meetings)
- 4-week onboarding journey with progress tracking
- Connected tools and integrations

### ChatBot
AI companion features:
- Natural conversation interface
- Keyword-based intelligent responses (ready for API integration)
- Typing indicators
- Message history
- Real-time interaction

### Navigation Sections
- **Home**: Onboarding dashboard with AI chat
- **Notifications**: Important updates and reminders
- **Learn**: Training modules and educational content
- **Bounties**: Onboarding challenges and rewards
- **Challenges**: Hackathon challenge information
- **Leaderboard**: Top new hire engagement
- **Directory**: Team member profiles and connections
- **Games**: Team building activities

## Future Enhancements

### Backend Integration
- Connect to Claude API or OpenAI for true AI conversations
- Real-time HRIS data synchronization (BambooHR, Deel)
- Slack and Notion webhooks for live updates
- Database for user progress and analytics

### Advanced Features
- Sentiment analysis dashboard for HR teams
- Automated welcome flow customization by role
- Video introductions from team members
- Virtual office tours
- Calendar integration for automatic scheduling
- Mobile app support

### Analytics
- Track onboarding completion rates
- Measure time-to-productivity
- Identify common pain points
- Generate HR insights and reports

## Design Principles

- **User-Centric**: Designed from the new hire's perspective
- **Progressive Disclosure**: Information revealed as needed
- **Visual Clarity**: Clean, modern interface with clear hierarchy
- **Responsive**: Works on desktop, tablet, and mobile
- **Accessible**: Following WCAG guidelines

## Contributing

This project was built for the SXSW Sydney Hackathon - Build Club: Supercharging Work with AI challenge.

## License

MIT

## Contact

For questions or feedback about this project, please reach out through the SXSW Sydney platform.

---

Built with ❤️ for better onboarding experiences
