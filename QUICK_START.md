# 🚀 Quick Start Guide

## 1. Supabase Setup (5 minutes)

1. Create a free Supabase account at [supabase.com](https://supabase.com)

2. Create a new project:
   - Click "New Project"
   - Choose a name and password
   - Select your region (closest to your users)

3. Get your credentials:
   - Go to Settings → API
   - Copy:
     - Project URL
     - Anon/Public API Key

4. Set up the database:
   - Go to SQL Editor
   - Run each file in `setup/` folder in order:
     ```
     1. create_tables.sql
     2. add_company_store_columns.sql
     3. update_database_2025_06_29.sql
     4. create_video_review_tables.sql
     ```

## 2. Configure the App (2 minutes)

1. Rename `config.example.js` to `config.js`

2. Update with your Supabase credentials:
   ```javascript
   const SUPABASE_CONFIG = {
       url: 'https://your-project.supabase.co',
       anonKey: 'your-anon-key'
   };
   ```

## 3. Deploy (3 minutes)

### Option A: GitHub Pages
1. Push to GitHub
2. Go to Settings → Pages
3. Select source: "Deploy from a branch"
4. Select branch: main, folder: / (root)
5. Your site will be live at: `https://yourusername.github.io/contents-helper`

### Option B: Netlify
1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect GitHub and select your repo
5. Deploy settings: Leave defaults
6. Click "Deploy site"

### Option C: Local Testing
1. Use any local server:
   ```bash
   # Python
   python -m http.server 8000
   
   # Node.js
   npx http-server
   
   # PHP
   php -S localhost:8000
   ```

2. Open: `http://localhost:8000/?user_id=test&user_name=Test&company_id=company1&store_id=store1`

## 4. First Use

Access with parameters:
```
https://yoursite.com/?user_id=USER_ID&user_name=NAME&company_id=COMPANY&store_id=STORE
```

Example:
```
https://yoursite.com/?user_id=emp001&user_name=John&company_id=acme&store_id=branch1
```

## 🎯 What's Next?

1. **Add Content Ideas**: Insert rows in `contents_idea` table
2. **Customize Points**: Modify `points_system` table
3. **Set Levels**: Update `level_system` table
4. **Create Achievements**: Add to `achievement_system` table

## ⚡ Troubleshooting

- **"Supabase not defined"**: Check if config.js has correct credentials
- **No ideas showing**: Make sure `contents_idea` table has data
- **Can't upload videos**: Check Supabase Storage bucket is public

## 📚 More Help

- [Full Documentation](docs/README.md)
- [Database Structure](docs/database-structure.md)
- [Create an Issue](https://github.com/yourusername/contents-helper/issues)
