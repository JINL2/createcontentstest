# Contents Helper - Gamified Content Creation Platform

A fun and engaging platform that helps employees create content through gamification elements. Designed for retail and service companies to boost their social media presence through employee-generated content.

![Platform Screenshot](screenshot.png)

## 🎮 Features

### Core Features
- **🎯 Content Ideas**: Get AI-generated content ideas with detailed scenarios
- **🏆 Gamification**: Points, levels, and achievements system
- **⭐ Video Review**: Tinder-style video rating system
- **📊 Team Performance**: Real-time team statistics and rankings
- **📱 Mobile-First Design**: Optimized for mobile content creation
- **🌐 Multi-language**: Vietnamese UI with Korean content support

### Recent Updates (June 2025)
- **Enhanced Video Review**: Integrity protection to ensure fair reviews
- **Custom Ideas**: Users can create their own content ideas
- **Error Handling**: Improved video playback error management
- **Team Stats**: Daily/weekly/monthly performance tracking

## 🚀 Getting Started

### Prerequisites

- Web server (Apache, Nginx, or any static hosting)
- Supabase account (free tier available)
- Modern browser with video support

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/contents-helper.git
cd contents-helper
```

2. Copy the config example:
```bash
cp config.example.js config.js
```

3. Edit `config.js` with your Supabase credentials:
```javascript
const SUPABASE_CONFIG = {
    url: 'YOUR_SUPABASE_URL',
    anonKey: 'YOUR_SUPABASE_ANON_KEY'
};
```

4. Set up the database:
   - Go to your Supabase dashboard
   - Run the SQL scripts in the `setup/` folder in order:
     1. `initial-schema.sql`
     2. `game-system-tables.sql`
     3. `create_video_review_tables.sql`
     4. `add_company_store_columns.sql`
   - Check `docs/database-structure.md` for details

5. Create storage bucket:
   - In Supabase Dashboard, go to Storage
   - Create a bucket named `contents-videos`
   - Set it as public bucket

6. Deploy to your web server or hosting platform

### Usage

Access the platform with URL parameters:
```
https://yoursite.com/?user_id=USER_ID&user_name=NAME&company_id=COMPANY&store_id=STORE
```

Example:
```
https://yoursite.com/?user_id=123e4567-e89b-12d3-a456-426614174000&user_name=John&company_id=company-uuid&store_id=store-uuid
```

## 📱 Key Pages

### Main Flow
- **Main Page** (`index.html`): Content idea selection and video upload
- **Video Review** (`video-review.html`): Rate videos from colleagues
- **Rankings**: Company-wide and store-level leaderboards

### Features by Page

#### Main Page
- Choose from 5 content ideas
- View detailed scenarios with tabs (Script, Guide, Caption)
- Upload videos with drag-and-drop
- Track points and level progress
- Create custom content ideas

#### Video Review
- Watch videos from same company
- Rate with 1-5 stars (must watch 3+ seconds)
- Earn points for reviewing
- Daily review goals (20 videos)
- Streak bonuses

#### Team Performance
- View today/week/month statistics
- Active members count
- Total videos uploaded
- Team points earned

## 🎮 Gamification System

### Points System
- Select idea: +10 points
- Upload video: +50 points
- Add metadata: +20 points
- Complete flow: +20 points
- Rate video: +5 points
- Review streak (5): +20 points
- Daily goal (20 reviews): +50 points

### Levels
1. 🌱 Beginner (0 points)
2. 🌿 Junior Creator (100 points)
3. 🌳 Senior Creator (500 points)
4. 🏆 Professional Creator (1000 points)
5. 👑 Legendary Creator (2000 points)

## 🛠️ Tech Stack

- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Backend**: Supabase (PostgreSQL + Realtime)
- **Storage**: Supabase Storage for videos
- **Icons**: Emoji-based (no external dependencies)
- **No Build Process**: Deploy directly without compilation

## 🔒 Security Features

### Video Review Integrity
- Minimum 3-second watch time requirement
- Video load state verification
- DevTools manipulation prevention
- Metadata tracking for audit trail
- Anonymous reviewer system

## 📁 Project Structure

```
contents-helper/
├── index.html          # Main application
├── script.js           # Core logic
├── style.css           # Main styles
├── config.js           # Supabase config
├── video-review.html   # Review page
├── video-review.js     # Review logic
├── video-review.css    # Review styles
├── setup/              # SQL scripts
├── docs/               # Documentation
└── assets/             # Images/resources
```

## 📄 Documentation

- [Database Structure](docs/database-structure.md)
- [API Documentation](docs/api-docs.md)
- [Development Guide](docs/development-guide.md)
- [Deployment Guide](DEPLOYMENT.md)

## 🌏 Localization

The platform is designed for Vietnamese users with:
- Vietnamese UI text
- Korean content ideas
- Bilingual scenario display
- Local timezone handling

## 🚨 Troubleshooting

### Common Issues

1. **Videos not playing**
   - Check CORS settings
   - Ensure Supabase Storage bucket is public
   - Verify video format compatibility

2. **Points not updating**
   - Check database connection
   - Verify user_progress table exists
   - Check RLS policies (should be disabled)

3. **Company filtering not working**
   - Ensure company_id is passed in URL
   - Check all users have same company_id

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Support

For questions or support:
- Open an issue on GitHub
- Check existing documentation
- Review SQL setup scripts

## 🙏 Acknowledgments

- Built for retail/service companies
- Inspired by social media trends
- Designed for mobile-first usage

---

Made with ❤️ for content creators in Vietnam 🇻🇳
