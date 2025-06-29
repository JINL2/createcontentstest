# Deployment Guide

## GitHub Pages Deployment

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/contents-helper.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages section
   - Source: Deploy from a branch
   - Branch: main / (root)
   - Click Save

3. **Update config.js**
   - Create `config.js` from `config.example.js`
   - Add your Supabase credentials
   - Commit and push

4. **Access your site**
   ```
   https://yourusername.github.io/contents-helper/?user_id=test&user_name=Test&company_id=company1&store_id=store1
   ```

## Netlify Deployment

1. **Push to GitHub** (if not already done)

2. **Connect to Netlify**
   - Login to [Netlify](https://www.netlify.com)
   - Click "New site from Git"
   - Choose GitHub
   - Select your repository

3. **Configure build settings**
   - Build command: (leave empty)
   - Publish directory: .

4. **Environment variables**
   - Add site environment variables for sensitive data
   - Or commit config.js with your credentials

## Vercel Deployment

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow prompts**
   - Set up and deploy? Y
   - Which scope? (select)
   - Link to existing project? N
   - What's your project's name? contents-helper
   - In which directory? ./
   - Want to override settings? N

## Custom Server Deployment

### Apache
1. Upload files to your web root
2. Ensure `.htaccess` is properly configured
3. Enable mod_rewrite if needed

### Nginx
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /path/to/contents-helper;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## Post-Deployment Checklist

- [ ] Verify Supabase connection
- [ ] Test user parameter passing
- [ ] Check video upload functionality
- [ ] Verify all API endpoints work
- [ ] Test on mobile devices
- [ ] Set up custom domain (optional)

## Security Considerations

1. **API Keys**
   - Never commit real API keys to public repos
   - Use environment variables when possible
   - Rotate keys regularly

2. **CORS Settings**
   - Configure Supabase CORS for your domain
   - Add your domain to allowed origins

3. **RLS Policies**
   - Enable Row Level Security in Supabase
   - Create appropriate policies for your use case

## Monitoring

1. **Supabase Dashboard**
   - Monitor API usage
   - Check storage usage
   - Review database performance

2. **Analytics** (optional)
   - Add Google Analytics
   - Or use Vercel/Netlify analytics

## Troubleshooting

### Common Issues

1. **404 Errors**
   - Check file paths
   - Verify index.html exists
   - Check server configuration

2. **Supabase Connection Failed**
   - Verify API keys
   - Check CORS settings
   - Ensure project is not paused

3. **Video Upload Issues**
   - Check storage bucket permissions
   - Verify file size limits
   - Check network connectivity

### Debug Mode

Add `?debug=true` to URL for verbose logging:
```
https://yoursite.com/?user_id=test&debug=true
```

## Support

- GitHub Issues: [Create an issue](https://github.com/yourusername/contents-helper/issues)
- Documentation: [Full docs](docs/README.md)
