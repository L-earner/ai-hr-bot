import { useState } from 'react';
import './ChallengeOverview.css';

const ChallengeOverview = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="challenge-overview">
      <div className="challenge-header">
        <div className="header-image">
          <div className="header-gradient"></div>
          <div className="header-content">
            <h1 className="challenge-title">AI for HR - "First Day"</h1>
            <p className="challenge-due">Due on Oct 17, 2025</p>
          </div>
        </div>
      </div>

      <div className="tabs">
        <button
          className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button
          className={`tab ${activeTab === 'application' ? 'active' : ''}`}
          onClick={() => setActiveTab('application')}
        >
          My application
        </button>
      </div>

      {activeTab === 'overview' && (
        <div className="overview-content">
          <section className="section">
            <h2>About the Company</h2>
            <p>
              SXSW Sydney brings together professionals from business, tech, government, health, marketing,
              creative industries and more for seven days of ideas, innovation and inspiration.
            </p>
          </section>

          <section className="section">
            <h2>Description</h2>

            <div className="subsection">
              <h3>Why:</h3>
              <ul>
                <li>Remote and hybrid work makes onboarding isolating and inconsistent.</li>
                <li>New hires feel lost, leading to poor retention.</li>
              </ul>
            </div>

            <div className="subsection">
              <h3>Outcome:</h3>
              <ul>
                <li>An AI onboarding companion that guides new hires through day 1 to 30 — answers questions,
                    introduces culture, and connects people.</li>
              </ul>
            </div>

            <div className="subsection">
              <h3>Role-Specific Ideas:</h3>
              <ul>
                <li>Integrate with Slack, Notion, or HRIS (BambooHR, Deel).</li>
                <li>Auto-customize welcome flows by role/team.</li>
                <li>Track sentiment and questions to improve onboarding design.</li>
              </ul>
            </div>
          </section>

          <section className="section">
            <h2>Technical Details</h2>

            <div className="detail-row">
              <div className="detail-label">How long does the current process take?</div>
              <div className="detail-value">N/A</div>
            </div>

            <div className="detail-row">
              <div className="detail-label">Data Sources</div>
              <div className="detail-value">Other</div>
            </div>

            <div className="detail-row">
              <div className="detail-label">Type</div>
              <div className="detail-value">Web Application</div>
            </div>
          </section>

          <section className="section">
            <h2>Integration Capabilities</h2>
            <div className="integration-cards">
              <div className="integration-card">
                <div className="integration-icon">💬</div>
                <h4>Slack</h4>
                <p>Connect with team communication</p>
              </div>
              <div className="integration-card">
                <div className="integration-icon">📝</div>
                <h4>Notion</h4>
                <p>Sync onboarding documentation</p>
              </div>
              <div className="integration-card">
                <div className="integration-icon">👥</div>
                <h4>HRIS Systems</h4>
                <p>BambooHR, Deel integration</p>
              </div>
            </div>
          </section>

          <section className="section">
            <h2>AI Features</h2>
            <div className="feature-list">
              <div className="feature-item">
                <div className="feature-icon">🤖</div>
                <div>
                  <h4>Intelligent Guidance</h4>
                  <p>AI companion guides new hires through their first 30 days</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">💡</div>
                <div>
                  <h4>Smart Answers</h4>
                  <p>Instant responses to onboarding questions</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🎯</div>
                <div>
                  <h4>Personalization</h4>
                  <p>Auto-customize experience by role and team</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">📊</div>
                <div>
                  <h4>Sentiment Tracking</h4>
                  <p>Monitor and improve onboarding experience</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {activeTab === 'application' && (
        <div className="application-content">
          <section className="section">
            <h2>Your Application</h2>
            <p>Submit your solution for the AI for HR - "First Day" challenge.</p>

            <div className="application-form">
              <div className="form-group">
                <label>Project Name</label>
                <input type="text" placeholder="Enter your project name" />
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea rows="4" placeholder="Describe your solution"></textarea>
              </div>

              <div className="form-group">
                <label>Demo URL</label>
                <input type="url" placeholder="https://..." />
              </div>

              <div className="form-group">
                <label>GitHub Repository</label>
                <input type="url" placeholder="https://github.com/..." />
              </div>

              <div className="form-group">
                <label>Video Demo (Optional)</label>
                <input type="url" placeholder="https://..." />
              </div>

              <button className="submit-btn">Submit Application</button>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default ChallengeOverview;
