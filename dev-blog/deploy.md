Awesome — let’s deploy your **Developer Blog CMS** on **Vercel** step by step. 🚀

You’ll have a **public URL** in minutes like:

```
https://your-blog.vercel.app
```

---

## ✅ 1. Make Sure Your Project Is Ready

Your folder structure should look like this:

```
/your-project
  ├── index.html
  ├── post.html
  ├── main.js
  ├── style.css
  ├── README.md
```

💡 If Sanity Studio is in a separate folder like `/cms`, you can leave that out — Vercel will only host your frontend.

---

## ✅ 2. Push Your Code to GitHub

If you haven’t already:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/dev-blog.git
git push -u origin main
```

✅ Make sure your `index.html` is in the **root** of the repo (not inside `/public` or `/src`).

---

## ✅ 3. Deploy to Vercel

### 🔗 Go to: [https://vercel.com](https://vercel.com)

1. Sign in with GitHub
2. Click **“+ Add New Project”**
3. Import your **GitHub repo**
4. Leave all settings default:

   * Framework = **Other**
   * Root directory = **.**
   * Output = leave empty
5. Click **“Deploy”**

✅ Vercel will build and deploy your static site.

---

## ✅ 4. Fix CORS in Sanity (IMPORTANT)

Vercel will deploy your site to something like:

```
https://dev-blog.vercel.app
```

### Go to your project on [Sanity Manage](https://www.sanity.io/manage) > **API settings**

1. Scroll to **CORS Origins**
2. Add:

   * `https://your-project-name.vercel.app`
   * `http://localhost:3000` (for local dev)
3. Save changes

This allows your frontend to fetch content from Sanity.

---

## ✅ 5. Test the Deployed Site

Visit your Vercel URL — you should see your blog post list.

Click a post — it should fetch and display the full content.

If it doesn't, check:

* The browser console (F12 → Console tab)
* The Network tab for any blocked requests or 403s

---

## 🔁 Optional: Redeploy on Code Change

Every time you push to GitHub:

```bash
git add .
git commit -m "Update styles or fix"
git push
```

➡️ Vercel will automatically re-deploy for you.

---

## 🧼 Clean URL (Optional)

To make `post.html?slug=...` cleaner like `/post/my-post`, you’d need routing support (e.g., with Next.js), but for now:

```
✔️ Simple: post.html?slug=your-post
```

---

## 🎉 That’s It!

Your Developer Blog CMS is now live on Vercel! 💥

Do you want help customizing your **domain name**, or improving SEO or meta tags?
