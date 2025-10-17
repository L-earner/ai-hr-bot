export const trainingModules = {
  culture: {
    id: 'culture',
    icon: '🎯',
    title: 'Company Culture 101',
    duration: '30 min',
    slides: [
      {
        title: 'Welcome to Our Culture',
        subtitle: 'Understanding what makes us unique',
        content: [
          {
            type: 'text',
            text: 'Welcome to AI for Everyone! Our culture is the foundation of everything we do. It shapes how we work, collaborate, and democratize AI technology for the world.'
          },
          {
            type: 'highlight',
            icon: '💡',
            title: 'Our Mission',
            text: 'To make artificial intelligence accessible, understandable, and beneficial for everyone - from students to enterprises, regardless of technical background.'
          },
          {
            type: 'text',
            text: 'In this module, you\'ll learn about our core values, work environment, and the principles that guide our daily decisions as we revolutionize AI education and implementation.'
          }
        ]
      },
      {
        title: 'Our Core Values',
        subtitle: 'The principles that drive us',
        content: [
          {
            type: 'text',
            text: 'Our values aren\'t just words on a wall - they\'re the compass that guides every decision we make as we democratize AI.'
          },
          {
            type: 'card-grid',
            cards: [
              {
                icon: '🌍',
                title: 'Accessibility',
                description: 'We make AI understandable and usable for everyone, regardless of technical expertise.'
              },
              {
                icon: '🚀',
                title: 'Innovation',
                description: 'We push boundaries in AI education and create tools that empower users.'
              },
              {
                icon: '🤝',
                title: 'Collaboration',
                description: 'We believe diverse perspectives create the best AI solutions for humanity.'
              },
              {
                icon: '⚖️',
                title: 'Responsible AI',
                description: 'We build ethical, transparent, and fair AI systems that benefit society.'
              }
            ]
          },
          {
            type: 'text',
            text: 'These values inform how we interact with each other, our users, and the global AI community we serve.'
          }
        ]
      },
      {
        title: 'Work-Life Balance',
        subtitle: 'How we support your wellbeing',
        content: [
          {
            type: 'text',
            text: 'We believe that great AI solutions happen when people are supported, healthy, and balanced.'
          },
          {
            type: 'heading',
            text: 'Our Commitments to You'
          },
          {
            type: 'list',
            items: [
              'Flexible working hours - Work when you\'re most productive',
              'Fully remote culture - Work from anywhere in the world',
              'Unlimited PTO - Take time when you need it, no questions asked',
              'Mental health support - Free therapy and wellness programs',
              'Learning & development - $3000 annual AI education budget',
              'AI exploration time - 20% time for personal AI projects'
            ]
          },
          {
            type: 'quote',
            text: 'The future of AI is built by well-rested, inspired minds - not exhausted ones.',
            author: 'Dr. Maya Chen, CEO & Founder'
          }
        ]
      },
      {
        title: 'Communication & Transparency',
        subtitle: 'How we stay connected',
        content: [
          {
            type: 'text',
            text: 'Open communication is essential to our culture. We believe in radical transparency about our AI development, decisions, and company direction.'
          },
          {
            type: 'heading',
            text: 'How We Communicate'
          },
          {
            type: 'list',
            items: [
              'Weekly AI Town Halls - Leadership shares updates and AI breakthroughs',
              'Open Slack channels for all projects and AI experiments',
              'Regular 1-on-1s with your manager',
              'Anonymous AI ethics feedback channel',
              'Documentation-first approach - all AI decisions documented',
              'Public roadmaps for our AI products and research'
            ]
          },
          {
            type: 'highlight',
            icon: '📢',
            title: 'Remember',
            text: 'No AI question is too basic. If you\'re wondering about something, others probably are too. We\'re all learning together!'
          }
        ]
      },
      {
        title: 'Diversity & Inclusion in AI',
        subtitle: 'Building AI for everyone, by everyone',
        content: [
          {
            type: 'text',
            text: 'Diversity isn\'t just good for culture - it\'s essential for building fair, unbiased AI. We\'re committed to creating AI that serves all of humanity.'
          },
          {
            type: 'card-grid',
            cards: [
              {
                icon: '🌈',
                title: 'Diverse AI Teams',
                description: 'Our AI developers represent 40+ countries and varied backgrounds.'
              },
              {
                icon: '🔬',
                title: 'Bias Detection',
                description: 'We actively test and eliminate bias in all our AI systems.'
              },
              {
                icon: '📚',
                title: 'AI Ethics Training',
                description: 'Mandatory training on responsible AI development for everyone.'
              },
              {
                icon: '⚖️',
                title: 'Fair AI Advocate',
                description: 'Dedicated team ensuring our AI serves all communities equally.'
              }
            ]
          },
          {
            type: 'text',
            text: 'We measure our AI fairness metrics regularly and hold ourselves accountable to building inclusive AI solutions.'
          }
        ]
      }
    ]
  },

  tools: {
    id: 'tools',
    icon: '🛠️',
    title: 'Tools & Systems',
    duration: '45 min',
    slides: [
      {
        title: 'Your AI Toolkit',
        subtitle: 'Essential tools for AI development',
        content: [
          {
            type: 'text',
            text: 'Welcome to your AI toolkit! These tools will help you build, collaborate, and democratize AI technology.'
          },
          {
            type: 'highlight',
            icon: '🔑',
            title: 'Getting Started',
            text: 'You should have received login credentials for all AI tools and platforms. If not, reach out to IT support immediately!'
          },
          {
            type: 'text',
            text: 'Let\'s explore each tool and how we use them in our AI development workflow.'
          }
        ]
      },
      {
        title: 'Slack - Team Communication',
        subtitle: 'Your AI collaboration hub',
        content: [
          {
            type: 'text',
            text: 'Slack is our primary communication platform. Think of it as your virtual AI lab where ideas and breakthroughs happen in real-time.'
          },
          {
            type: 'heading',
            text: 'Key AI Channels to Join'
          },
          {
            type: 'list',
            items: [
              '#ai-general - Company-wide AI announcements and discussions',
              '#your-ai-team - Your AI team\'s dedicated channel',
              '#ai-breakthroughs - Share exciting AI discoveries',
              '#ai-help-desk - Get technical AI support',
              '#ai-ethics - Discuss AI ethics and responsible development',
              '#ai-learning - Share AI courses, papers, and insights'
            ]
          },
          {
            type: 'highlight',
            icon: '💬',
            title: 'Pro Tip',
            text: 'Use AI-powered Slack bots to summarize threads and find relevant AI discussions quickly!'
          }
        ]
      },
      {
        title: 'Notion - AI Documentation Hub',
        subtitle: 'Where AI knowledge lives',
        content: [
          {
            type: 'text',
            text: 'Notion is our central AI knowledge base. All AI models, research, and project documentation lives here.'
          },
          {
            type: 'card-grid',
            cards: [
              {
                icon: '🤖',
                title: 'AI Model Registry',
                description: 'Catalog of all our AI models, versions, and performance metrics.'
              },
              {
                icon: '📋',
                title: 'AI Project Docs',
                description: 'Track AI experiments, results, and learnings.'
              },
              {
                icon: '📝',
                title: 'AI Research Notes',
                description: 'All AI research and papers documented and searchable.'
              },
              {
                icon: '🎯',
                title: 'AI Ethics Guidelines',
                description: 'Our principles for responsible AI development.'
              }
            ]
          },
          {
            type: 'text',
            text: 'Your first task: Add yourself to the AI team directory and document your first AI experiment!'
          }
        ]
      },
      {
        title: 'GitHub - AI Code & Models',
        subtitle: 'Where AI magic happens',
        content: [
          {
            type: 'text',
            text: 'GitHub is where all our AI code and models live. Our entire AI infrastructure is open-source and collaborative.'
          },
          {
            type: 'heading',
            text: 'Our AI Development Workflow'
          },
          {
            type: 'list',
            items: [
              'Feature branches for all AI model updates',
              'Pull requests require AI ethics review',
              'CI/CD pipelines run model performance tests',
              'Main branch models are production-ready',
              'Clear commit messages documenting AI changes',
              'Peer code reviews for knowledge sharing'
            ]
          },
          {
            type: 'highlight',
            icon: '🔒',
            title: 'AI Security First',
            text: 'Never commit training data, API keys, or proprietary AI models. Use our secure AI vault and encryption.'
          }
        ]
      },
      {
        title: 'AI Platform Suite',
        subtitle: 'Your AI development environment',
        content: [
          {
            type: 'text',
            text: 'We use cutting-edge AI platforms to build, train, and deploy our models.'
          },
          {
            type: 'heading',
            text: 'Core AI Tools'
          },
          {
            type: 'list',
            items: [
              'Hugging Face - Model hosting and collaboration',
              'Weights & Biases - Experiment tracking and visualization',
              'LangChain - Building AI applications',
              'PyTorch/TensorFlow - Model development',
              'Modal/Replicate - AI deployment and scaling',
              'Pinecone - Vector databases for AI memory'
            ]
          },
          {
            type: 'text',
            text: 'Don\'t worry if these are new to you - we have comprehensive training for all AI tools!'
          }
        ]
      },
      {
        title: 'Getting AI Help',
        subtitle: 'Resources when you need support',
        content: [
          {
            type: 'text',
            text: 'Building AI is complex - asking for help is encouraged! Here\'s where to find AI-specific support.'
          },
          {
            type: 'card-grid',
            cards: [
              {
                icon: '🤖',
                title: 'AI Support Bot',
                description: 'Slack: Use /ai-help for instant AI troubleshooting'
              },
              {
                icon: '👥',
                title: 'AI Mentors',
                description: 'Book time with senior AI engineers for guidance'
              },
              {
                icon: '📚',
                title: 'AI Knowledge Base',
                description: 'Check our AI wiki for tutorials and best practices'
              },
              {
                icon: '🤝',
                title: 'AI Buddy Program',
                description: 'Your assigned AI expert for onboarding support'
              }
            ]
          },
          {
            type: 'quote',
            text: 'The best AI engineers are those who ask the best questions. Never hesitate to seek help!',
            author: 'AI Engineering Team'
          }
        ]
      }
    ]
  },

  team: {
    id: 'team',
    icon: '👥',
    title: 'Working with Your Team',
    duration: '25 min',
    slides: [
      {
        title: 'Welcome to the AI Team',
        subtitle: 'Collaboration in AI development',
        content: [
          {
            type: 'text',
            text: 'Great AI doesn\'t happen in isolation. It\'s built on collaboration, diverse perspectives, and shared learning.'
          },
          {
            type: 'highlight',
            icon: '🎯',
            title: 'Our AI Team Philosophy',
            text: 'We build AI together. Every model is a team effort, every breakthrough is celebrated collectively, every ethical concern is addressed together.'
          },
          {
            type: 'text',
            text: 'This module will help you understand how we collaborate on AI projects and build responsible AI systems as a team.'
          }
        ]
      },
      {
        title: 'AI Communication Guidelines',
        subtitle: 'How to discuss AI effectively',
        content: [
          {
            type: 'text',
            text: 'Good communication is critical when building AI. Here\'s how we approach AI discussions and collaboration.'
          },
          {
            type: 'heading',
            text: 'Communication Channels by AI Context'
          },
          {
            type: 'card-grid',
            cards: [
              {
                icon: '🚨',
                title: 'AI Ethics Issues',
                description: 'Immediate escalation - use #ai-ethics channel or page on-call'
              },
              {
                icon: '⚡',
                title: 'Model Performance',
                description: 'Slack - share metrics and discuss improvements'
              },
              {
                icon: '📧',
                title: 'AI Research',
                description: 'Email or Notion - detailed technical discussions'
              },
              {
                icon: '📝',
                title: 'AI Documentation',
                description: 'Notion - all AI decisions and architecture docs'
              }
            ]
          },
          {
            type: 'highlight',
            icon: '⏰',
            title: 'Response Times',
            text: 'AI work requires deep focus. Respect async work time. For urgent AI issues, use appropriate escalation channels.'
          }
        ]
      },
      {
        title: 'AI Meeting Culture',
        subtitle: 'Making AI meetings productive',
        content: [
          {
            type: 'text',
            text: 'We believe in effective AI-focused meetings. Every meeting should advance our AI development or solve AI challenges.'
          },
          {
            type: 'heading',
            text: 'Our AI Meeting Principles'
          },
          {
            type: 'list',
            items: [
              'Always share AI context/metrics in advance',
              'Start with AI ethics check-in for model discussions',
              'One person speaks - diverse AI perspectives heard',
              'Document AI decisions in Notion immediately',
              'End with clear AI action items and owners',
              'No meeting? Share AI update async instead'
            ]
          },
          {
            type: 'quote',
            text: 'The best AI meetings end with clarity on what we\'re building and why it matters for users.',
            author: 'AI Product Team'
          }
        ]
      },
      {
        title: 'AI Feedback & Growth',
        subtitle: 'Learning together in AI',
        content: [
          {
            type: 'text',
            text: 'AI development is continuous learning. We give and receive feedback to build better AI systems and grow as AI practitioners.'
          },
          {
            type: 'heading',
            text: 'Giving AI-Focused Feedback'
          },
          {
            type: 'list',
            items: [
              'Be specific - reference AI metrics and examples',
              'Focus on AI approach, not personal capability',
              'Balance praise with constructive AI improvements',
              'Discuss AI ethics implications openly',
              'Suggest alternative AI methods and resources',
              'Celebrate AI breakthroughs publicly'
            ]
          },
          {
            type: 'highlight',
            icon: '💬',
            title: 'Receiving AI Feedback',
            text: 'AI development is iterative. Listen, ask AI-specific questions, and stay curious about improving your AI skills.'
          }
        ]
      },
      {
        title: 'AI Collaboration Best Practices',
        subtitle: 'Building AI together',
        content: [
          {
            type: 'text',
            text: 'With distributed AI teams, we\'ve mastered async AI collaboration. Here\'s how we build great AI together.'
          },
          {
            type: 'card-grid',
            cards: [
              {
                icon: '📝',
                title: 'Document AI Decisions',
                description: 'Write down why you chose this AI approach. Future AI devs will thank you!'
              },
              {
                icon: '🔄',
                title: 'Version AI Models',
                description: 'Track AI model changes, document performance impacts.'
              },
              {
                icon: '🏷️',
                title: 'Tag AI Experiments',
                description: 'Use clear tags so AI experiments are discoverable.'
              },
              {
                icon: '🤝',
                title: 'Share AI Learnings',
                description: 'Every AI failure teaches us. Share openly so we all learn.'
              }
            ]
          },
          {
            type: 'text',
            text: 'Remember: Async AI collaboration means thoughtful, inclusive, and well-documented AI development.'
          }
        ]
      }
    ]
  },

  role: {
    id: 'role',
    icon: '🚀',
    title: 'Role-Specific Training',
    duration: '60 min',
    slides: [
      {
        title: 'Your AI Role & Impact',
        subtitle: 'What success looks like in your position',
        content: [
          {
            type: 'text',
            text: 'Welcome to your AI role training! This module helps you understand how you contribute to democratizing AI for everyone.'
          },
          {
            type: 'highlight',
            icon: '🎯',
            title: 'Your AI Impact',
            text: 'Every role at AI for Everyone is crucial. Your work directly helps make AI accessible and beneficial for millions of users worldwide.'
          },
          {
            type: 'text',
            text: 'Let\'s dive into your role in our mission to democratize artificial intelligence.'
          }
        ]
      },
      {
        title: 'Key AI Responsibilities',
        subtitle: 'Your primary focus areas',
        content: [
          {
            type: 'text',
            text: 'Here are the core AI responsibilities of your role. Your manager will provide specifics during your 1-on-1s.'
          },
          {
            type: 'card-grid',
            cards: [
              {
                icon: '🤖',
                title: 'AI Development',
                description: 'Build, test, and deploy AI solutions that are accessible to all users.'
              },
              {
                icon: '⚖️',
                title: 'Ethical AI',
                description: 'Ensure all AI systems are fair, transparent, and responsible.'
              },
              {
                icon: '📊',
                title: 'AI Documentation',
                description: 'Create clear docs explaining AI decisions and model behavior.'
              },
              {
                icon: '📈',
                title: 'AI Learning',
                description: 'Stay current with AI trends and share knowledge with team.'
              }
            ]
          },
          {
            type: 'text',
            text: 'Your AI responsibilities evolve as our technology advances. Regular check-ins ensure you\'re on the cutting edge.'
          }
        ]
      },
      {
        title: 'AI Success Metrics',
        subtitle: 'How we measure AI impact',
        content: [
          {
            type: 'text',
            text: 'We believe in transparent AI performance expectations. Here\'s how we measure success in AI development.'
          },
          {
            type: 'heading',
            text: 'What Great AI Work Looks Like'
          },
          {
            type: 'list',
            items: [
              'AI Model Quality - Accuracy, fairness, and performance metrics',
              'AI Ethics - Responsible, unbiased AI system development',
              'AI Communication - Clear explanations of AI capabilities',
              'AI Initiative - Proactively identifying AI improvements',
              'User AI Impact - How our AI helps real users daily',
              'AI Growth - Advancing your AI skills continuously'
            ]
          },
          {
            type: 'highlight',
            icon: '📊',
            title: 'AI Reviews & Growth',
            text: 'Quarterly AI skill reviews, but daily AI learning. Your AI expertise grows through continuous practice and feedback.'
          }
        ]
      },
      {
        title: 'Your First 30 AI Days',
        subtitle: 'Your AI onboarding journey',
        content: [
          {
            type: 'text',
            text: 'Your first month is about AI learning, AI team connection, and starting to build accessible AI.'
          },
          {
            type: 'heading',
            text: 'Week 1-2: Learn AI Foundations'
          },
          {
            type: 'list',
            items: [
              'Complete all AI training modules',
              'Set up your AI development environment',
              'Meet with AI team members 1-on-1',
              'Shadow senior AI engineers',
              'Study our AI models and architecture'
            ]
          },
          {
            type: 'heading',
            text: 'Week 3-4: Build Your First AI'
          },
          {
            type: 'list',
            items: [
              'Take on your first AI feature or experiment',
              'Participate in AI team discussions',
              'Ask AI-specific questions freely',
              'Start contributing to AI code reviews',
              'Identify AI improvements you can make'
            ]
          }
        ]
      },
      {
        title: 'AI Career Development',
        subtitle: 'Growing your AI expertise',
        content: [
          {
            type: 'text',
            text: 'We invest in your AI career growth. Here\'s how we support your journey to becoming an AI expert.'
          },
          {
            type: 'card-grid',
            cards: [
              {
                icon: '📚',
                title: 'AI Learning Budget',
                description: '$3000/year for AI courses, conferences, and certifications'
              },
              {
                icon: '👥',
                title: 'AI Mentorship',
                description: 'Learn from our AI leaders and industry experts'
              },
              {
                icon: '🎯',
                title: 'AI Career Paths',
                description: 'Grow as AI engineer, researcher, or product leader'
              },
              {
                icon: '🔬',
                title: 'AI Research Time',
                description: '20% time for personal AI experiments and learning'
              }
            ]
          },
          {
            type: 'quote',
            text: 'Your AI career is a journey of continuous discovery. We support every step as you master AI.',
            author: 'AI Talent Team'
          }
        ]
      },
      {
        title: 'AI Resources & Next Steps',
        subtitle: 'Your AI toolkit for success',
        content: [
          {
            type: 'text',
            text: 'Congratulations on completing AI role training! Here are resources to accelerate your AI journey.'
          },
          {
            type: 'heading',
            text: 'Key AI Resources'
          },
          {
            type: 'list',
            items: [
              'AI Model Wiki - Complete docs on all our AI systems',
              'AI Ethics Guide - Principles for responsible AI',
              'AI Architecture - Understand our AI infrastructure',
              'AI Slack Channels - #ai-team, #ai-help, #ai-ethics',
              'AI Buddy - Your assigned AI expert mentor',
              'AI Manager - Regular 1-on-1s for AI guidance'
            ]
          },
          {
            type: 'highlight',
            icon: '🎉',
            title: 'Welcome to AI!',
            text: 'You\'re ready to build AI that serves everyone! Remember, we\'re democratizing AI together. Let\'s make it accessible!'
          }
        ]
      }
    ]
  }
};
