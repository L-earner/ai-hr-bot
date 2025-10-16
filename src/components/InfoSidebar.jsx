import { Calendar, DollarSign, Tag, Lock } from 'lucide-react';
import './InfoSidebar.css';

const InfoSidebar = () => {
  return (
    <div className="info-sidebar">
      <div className="info-card">
        <div className="info-item">
          <div className="info-label">Status</div>
          <div className="status-badge listed">Listed</div>
        </div>

        <div className="info-item">
          <div className="info-label">Reward</div>
          <div className="reward-value">
            <DollarSign size={18} />
            <span>100</span>
          </div>
        </div>

        <div className="info-item">
          <div className="info-label">Challenge</div>
          <div className="challenge-name">
            SXSW Sydney Hackathon + Build Club:<br />
            Supercharging Work with AI
          </div>
        </div>

        <div className="info-item">
          <div className="info-label">Category</div>
          <div className="category-badge">
            <Tag size={14} />
            <span>Custom</span>
          </div>
        </div>

        <div className="info-item">
          <div className="info-label">Private to Organization</div>
          <div className="privacy-badge">
            <Lock size={14} />
            <span>Yes</span>
          </div>
        </div>

        <div className="info-item">
          <div className="info-label">Submission Deadline</div>
          <div className="deadline">
            <Calendar size={14} />
            <span>Oct 16, 2025 at 11:30 PM</span>
          </div>
        </div>
      </div>

      <div className="quick-links">
        <h3>Quick Links</h3>
        <a href="#" className="quick-link">Challenge Guidelines</a>
        <a href="#" className="quick-link">Submission Template</a>
        <a href="#" className="quick-link">FAQs</a>
        <a href="#" className="quick-link">Contact Support</a>
      </div>

      <div className="progress-section">
        <h3>Your Progress</h3>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: '30%' }}></div>
        </div>
        <div className="progress-text">3 of 10 steps completed</div>
      </div>
    </div>
  );
};

export default InfoSidebar;
