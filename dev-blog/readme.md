 **Developer Blog CMS** using **Plain JavaScript + Sanity.io**.

---

### ✅ Here's your complete `README.md`:

```md
# 🧠 Developer Blog CMS

A simple, clean blog powered by [Sanity.io](https://www.sanity.io/) as a headless CMS and plain JavaScript for the frontend. Built from scratch without any frameworks — just **HTML**, **CSS**, and **JS**.

> 🔥 Perfect for learning how to integrate a CMS with a custom frontend.

---

## 🚀 Features

- CMS-powered blog with dynamic content
- Posts fetched from Sanity using GROQ queries
- Slug-based routing for individual blog posts
- Lightweight and beginner-friendly
- No frameworks, no build tools — just vanilla web tech!

---

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **CMS**: Sanity.io
- **API**: Sanity’s Content Lake with GROQ queries

---

## 📸 Demo

> Coming soon — or deploy to [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/) and drop a link here!

---

## 🧩 Folder Structure

```

.
├── index.html        # Blog post list
├── post.html         # Individual blog post (based on slug)
├── main.js           # Fetches blog list from Sanity
├── style.css         # Basic styling
├── sanity/           # Sanity Studio (if applicable)
└── README.md

````

---

## ✅ Requirements

- [Sanity CLI](https://www.sanity.io/docs/getting-started-with-sanity-cli) installed globally
- A free Sanity account

---

## 🧰 Setup Instructions

### 1. 🧱 Set up Sanity CMS

```bash
npm install -g @sanity/cli
sanity init
````

> Choose `blog` template or create a custom schema with fields: `title`, `slug`, `publishedAt`, and `body`.

### 2. ✏️ Make Your Dataset Public

In [Sanity Manage](https://www.sanity.io/manage):

* Go to **Project Settings → API**
* Make your dataset `public` (read access)
* Add your local dev URL (`http://localhost:5500`, etc.) to **CORS origins**

### 3. 🧪 Add some posts in Sanity Studio

Run:

```bash
sanity start
```

Use the Studio UI to add blog posts with:

* `title` (String)
* `slug` (Slug)
* `publishedAt` (Date)
* `body` (Portable Text)

---

## 💻 Run the Frontend Locally

You can use **Live Server** in VSCode or Python's simple server:

```bash
# Using Python 3
python -m http.server

# Or use Live Server extension in VSCode
```

Then open:

```
http://localhost:8000
```

---

## 📄 Blog Page URLs

* `/index.html` → Blog list
* `/post.html?slug=my-post-slug` → Single blog post

---

## 🛡️ Security

This project uses **public access** to fetch content only. For editing, use Sanity Studio (admin access).

---

## 🎉 Credits

* Built by [Your Name](#) — inspired by real-world CMS use cases
* Powered by [Sanity.io](https://sanity.io)

---

## 📌 License

MIT License — free to use, share, and build on 🚀

```

---

### 👉 To Use:

1. Create a `README.md` file in your project root
2. Paste the above
3. Customize your name / links / demo URL (if any)

---
