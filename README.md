# Contents Helper - Gamified Content Creation Platform

A fun and engaging platform that helps employees create content through gamification elements.

![Platform Screenshot](screenshot.png)

## 🎮 Features

- **Content Ideas**: Get AI-generated content ideas with scenarios
- **Gamification**: Points, levels, and achievements system  
- **Video Review**: Rate and review videos from other creators
- **Team Performance**: Track team statistics and rankings
- **Mobile-First Design**: Optimized for mobile content creation

## 🚀 Getting Started

### Prerequisites

- Web server (Apache, Nginx, or any static hosting)
- Supabase account (free tier available)

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
   - Run the SQL scripts in the `setup/` folder in order
   - Check `docs/database-structure.md` for details

5. Deploy to your web server or hosting platform

### Usage

Access the platform with URL parameters:
```
https://yoursite.com/?user_id=USER_ID&user_name=NAME&company_id=COMPANY&store_id=STORE
```

## 📱 Key Pages

- **Main Page** (`index.html`): Content idea selection and creation flow
- **Video Review** (`video-review.html`): Rate videos from other creators
- **Team Stats**: View team performance and rankings

## 🛠️ Tech Stack

- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Backend**: Supabase (PostgreSQL + Auth)
- **Storage**: Supabase Storage for videos
- **No Build Process**: Deploy directly without compilation

## 📄 Documentation

- [Database Structure](docs/database-structure.md)
- [API Documentation](docs/api-docs.md)
- [Development Guide](docs/development-guide.md)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Support

For questions or support, please open an issue on GitHub.

---

Made with ❤️ for content creators
