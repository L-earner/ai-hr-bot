import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';
import './ChatBot.css';

function ChatBot() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: "Hi there! 👋 I'm your AI onboarding companion. I'm here to guide you through your first 30 days and answer any questions you have. How are you feeling about starting your new role?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const getAIResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();

    // Simple keyword-based responses (in production, this would use Claude API)
    if (lowerMessage.includes('team') || lowerMessage.includes('meet')) {
      return "Your team is excited to meet you! You'll have 1-on-1s scheduled with each team member during your first week. Your direct manager will reach out today to set up your first meeting. In the meantime, check out the 'Directory' section to learn about your teammates.";
    } else if (lowerMessage.includes('slack') || lowerMessage.includes('tools')) {
      return "Great question! You should have received invites to:\n• Slack (our main communication tool)\n• Notion (documentation & project management)\n• GitHub (code repositories)\n\nIf you haven't received access, please let your manager know. I can also help you navigate these tools once you're set up.";
    } else if (lowerMessage.includes('first day') || lowerMessage.includes('today')) {
      return "Your Day 1 checklist:\n✅ Set up your accounts and tools\n✅ Complete HR paperwork\n✅ Meet with your manager\n✅ Join the team Slack channel\n✅ Review the company handbook\n\nTake your time - there's no rush! Let me know if you need help with any of these.";
    } else if (lowerMessage.includes('culture') || lowerMessage.includes('values')) {
      return "Our company culture is built on collaboration, innovation, and transparency. We value:\n• Work-life balance - flexible hours and remote work\n• Continuous learning - education budget for courses\n• Open communication - everyone's voice matters\n• Diversity & inclusion - we celebrate our differences\n\nYou'll see these values in action as you work with the team!";
    } else if (lowerMessage.includes('nervous') || lowerMessage.includes('worried') || lowerMessage.includes('anxious')) {
      return "It's completely normal to feel nervous on your first day! Remember, everyone here has been in your shoes. We've designed this onboarding process to help you feel confident and supported. Take it one step at a time, and don't hesitate to ask questions - there are no silly questions here! 💪";
    } else if (lowerMessage.includes('excited') || lowerMessage.includes('great') || lowerMessage.includes('good')) {
      return "That's wonderful to hear! 🎉 Your positive energy is exactly what we love to see. Let's make your onboarding experience amazing. What would you like to focus on first?";
    } else if (lowerMessage.includes('help') || lowerMessage.includes('question')) {
      return "I'm here to help! You can ask me about:\n• Your first day tasks and schedule\n• Team members and company structure\n• Tools and systems access\n• Company culture and values\n• Office locations and facilities\n• Benefits and policies\n\nWhat would you like to know?";
    } else {
      return "Thanks for sharing that! I'm here to support you through your entire onboarding journey. Feel free to ask me anything about the company, your role, the team, or any concerns you have. You can also check your progress tracker to see what's coming up next in your onboarding plan.";
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      text: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        type: 'bot',
        text: getAIResponse(inputMessage),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="chatbot">
      <div className="chatbot-header">
        <div className="chatbot-header-info">
          <Bot className="chatbot-icon" size={24} />
          <div>
            <h3>AI Onboarding Companion</h3>
            <span className="chatbot-status">Online</span>
          </div>
        </div>
      </div>

      <div className="chatbot-messages">
        {messages.map((message) => (
          <div key={message.id} className={`message ${message.type}`}>
            <div className="message-avatar">
              {message.type === 'bot' ? <Bot size={20} /> : <User size={20} />}
            </div>
            <div className="message-content">
              <div className="message-text">{message.text}</div>
              <div className="message-time">
                {message.timestamp.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="message bot">
            <div className="message-avatar">
              <Bot size={20} />
            </div>
            <div className="message-content">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="chatbot-input">
        <textarea
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask me anything about your onboarding..."
          rows="1"
        />
        <button
          onClick={handleSendMessage}
          disabled={!inputMessage.trim()}
          className="send-button"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
}

export default ChatBot;
