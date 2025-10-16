import { useState } from 'react';
import Sidebar from './components/Sidebar';
import OnboardingDashboard from './components/OnboardingDashboard';
import ChallengeOverview from './components/ChallengeOverview';
import InfoSidebar from './components/InfoSidebar';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="app">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />

      <main className="main-content">
        {activeSection === 'home' && <OnboardingDashboard />}

        {activeSection === 'challenges' && <ChallengeOverview />}

        {activeSection === 'notifications' && (
          <div className="placeholder-content">
            <h1>🔔 Notifications</h1>
            <div className="notification-list">
              <div className="notification-item">
                <div className="notification-icon">👋</div>
                <div>
                  <h3>Welcome to the team!</h3>
                  <p>Your manager has scheduled a 1-on-1 for tomorrow at 10 AM</p>
                  <span className="notification-time">2 hours ago</span>
                </div>
              </div>
              <div className="notification-item">
                <div className="notification-icon">✅</div>
                <div>
                  <h3>Task completed</h3>
                  <p>You've completed "Set up work accounts"</p>
                  <span className="notification-time">5 hours ago</span>
                </div>
              </div>
              <div className="notification-item">
                <div className="notification-icon">📚</div>
                <div>
                  <h3>New training module available</h3>
                  <p>Check out "Company Culture 101" in the Learn section</p>
                  <span className="notification-time">1 day ago</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'learn' && (
          <div className="placeholder-content">
            <h1>📚 Learn & Grow</h1>
            <div className="learn-grid">
              <div className="learn-card">
                <h3>🎯 Company Culture 101</h3>
                <p>Learn about our values, mission, and what makes us unique</p>
                <span className="learn-duration">30 min</span>
              </div>
              <div className="learn-card">
                <h3>🛠️ Tools & Systems</h3>
                <p>Master the tools you'll use every day</p>
                <span className="learn-duration">45 min</span>
              </div>
              <div className="learn-card">
                <h3>👥 Working with Your Team</h3>
                <p>Communication best practices and collaboration tips</p>
                <span className="learn-duration">25 min</span>
              </div>
              <div className="learn-card">
                <h3>🚀 Role-Specific Training</h3>
                <p>Deep dive into your specific role and responsibilities</p>
                <span className="learn-duration">60 min</span>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'bounties' && (
          <div className="placeholder-content">
            <h1>🎁 Onboarding Challenges</h1>
            <div className="bounty-list">
              <div className="bounty-item">
                <h3>🎨 Personalize Your Profile</h3>
                <p>Add a photo, bio, and fun facts about yourself</p>
                <span className="bounty-reward">+50 points</span>
              </div>
              <div className="bounty-item">
                <h3>☕ Coffee Chat Champion</h3>
                <p>Have coffee chats with 5 team members</p>
                <span className="bounty-reward">+100 points</span>
              </div>
              <div className="bounty-item">
                <h3>📝 Documentation Hero</h3>
                <p>Contribute to team documentation</p>
                <span className="bounty-reward">+75 points</span>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'leaderboard' && (
          <div className="placeholder-content">
            <h1>🏆 Onboarding Leaderboard</h1>
            <p className="leaderboard-desc">Top new hires this month</p>
            <div className="leaderboard-list">
              <div className="leaderboard-item rank-1">
                <span className="rank">1st</span>
                <span className="name">Sarah Johnson</span>
                <span className="score">450 pts</span>
              </div>
              <div className="leaderboard-item rank-2">
                <span className="rank">2nd</span>
                <span className="name">Michael Chen</span>
                <span className="score">420 pts</span>
              </div>
              <div className="leaderboard-item rank-3">
                <span className="rank">3rd</span>
                <span className="name">You</span>
                <span className="score">150 pts</span>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'directory' && (
          <div className="placeholder-content">
            <h1>👥 Team Directory</h1>
            <div className="directory-grid">
              <div className="team-member-card">
                <div className="member-avatar">👨‍💼</div>
                <h3>John Smith</h3>
                <p className="member-role">Engineering Manager</p>
                <p className="member-team">Engineering</p>
                <button className="member-action">Schedule 1-on-1</button>
              </div>
              <div className="team-member-card">
                <div className="member-avatar">👩‍💻</div>
                <h3>Emily Davis</h3>
                <p className="member-role">Senior Developer</p>
                <p className="member-team">Engineering</p>
                <button className="member-action">Schedule 1-on-1</button>
              </div>
              <div className="team-member-card">
                <div className="member-avatar">👨‍🎨</div>
                <h3>Alex Rodriguez</h3>
                <p className="member-role">Product Designer</p>
                <p className="member-team">Design</p>
                <button className="member-action">Schedule 1-on-1</button>
              </div>
              <div className="team-member-card">
                <div className="member-avatar">👩‍💼</div>
                <h3>Lisa Wong</h3>
                <p className="member-role">HR Manager</p>
                <p className="member-team">People Ops</p>
                <button className="member-action">Schedule 1-on-1</button>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'games' && (
          <div className="placeholder-content">
            <h1>🎮 Team Building Games</h1>
            <div className="games-grid">
              <div className="game-card">
                <div className="game-icon">🧩</div>
                <h3>Company Trivia</h3>
                <p>Test your knowledge about the company</p>
                <button className="game-button">Play Now</button>
              </div>
              <div className="game-card">
                <div className="game-icon">🎯</div>
                <h3>Team Matcher</h3>
                <p>Find colleagues with similar interests</p>
                <button className="game-button">Start Matching</button>
              </div>
              <div className="game-card">
                <div className="game-icon">🏃</div>
                <h3>Onboarding Sprint</h3>
                <p>Complete tasks faster than other new hires</p>
                <button className="game-button">Join Sprint</button>
              </div>
            </div>
          </div>
        )}
      </main>

      {activeSection === 'challenges' && <InfoSidebar />}
    </div>
  );
}

export default App;
