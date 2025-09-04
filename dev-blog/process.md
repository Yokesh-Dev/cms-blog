Let’s walk through everything you built — step-by-step — so you **understand the full picture** from a developer’s point of view. I’ll explain:

1. 🧠 The concepts used
2. 🏗️ The end-to-end process
3. 🔧 Technologies involved
4. 📚 Why it works the way it does

---

## 🧠 1. Concepts Used

| Concept                   | Description                                                                                    |
| ------------------------- | ---------------------------------------------------------------------------------------------- |
| **Headless CMS**          | A backend that manages content (like blog posts), but does **not** control how it’s displayed. |
| **Sanity.io**             | A modern, flexible headless CMS — stores content in a database and serves it via APIs.         |
| **GROQ (Query Language)** | Sanity’s custom query language, like GraphQL/SQL, used to retrieve content.                    |
| **Slug**                  | A URL-friendly string to identify a post (`my-first-post`) used in routing.                    |
| **Portable Text**         | Sanity’s rich text format — structured as JSON blocks, not raw HTML.                           |
| **Vanilla JavaScript**    | No frameworks (like React or Vue) — just HTML, CSS, and JavaScript.                            |
| **Fetch API**             | Browser method to make HTTP requests (used to get data from Sanity).                           |
| **Query Parameters**      | The `?slug=my-post` part of a URL — used to fetch specific post data.                          |

---

## 🏗️ 2. End-to-End Build Process (Step-by-Step)

Here’s exactly how we built it:

---

### ✅ Step 1: Set up Sanity CMS

1. Installed Sanity CLI:

   ```bash
   npm install -g @sanity/cli
   ```

2. Created a new project:

   ```bash
   sanity init
   ```

3. Selected the **Blog schema** or created a custom one with:

   * `title` (string)
   * `slug` (auto-generated from title)
   * `publishedAt` (datetime)
   * `body` (Portable Text)

4. Launched Sanity Studio:

   ```bash
   sanity start
   ```

5. Added a few blog posts from the Studio UI

---

### ✅ Step 2: Set Dataset & CORS Access

1. Went to [https://manage.sanity.io](https://manage.sanity.io)
2. Allowed `public` read access to dataset
3. Added CORS origin (e.g., `http://localhost:5500`) so the frontend can access the API

---

### ✅ Step 3: Built the Frontend (Plain JS)

---

#### 🏠 `index.html`

```html
<div id="posts"></div>
```

This is the container where all blog post summaries will be inserted dynamically.

---

#### 📜 `main.js` (Blog List Logic)

```js
fetch(`https://${projectId}.api.sanity.io/v1/data/query/${dataset}?query=*[_type == "post"]{title,slug,publishedAt}`)
```

1. Sends a **GROQ query** to fetch all posts.
2. Parses the JSON response.
3. Injects each post into the DOM like:

```html
<h2><a href="post.html?slug=post-slug">Title</a></h2>
<p>Published: Date</p>
```

---

### ✅ Step 4: Dynamic Routing with Slugs

Each blog post links to:

```
post.html?slug=my-first-post
```

The `slug` is read from the URL using:

```js
const params = new URLSearchParams(window.location.search);
const slug = params.get('slug');
```

---

### ✅ Step 5: Display a Single Post (`post.html`)

```js
const query = encodeURIComponent(`*[_type == "post" && slug.current == "${slug}"][0]{title, body}`);
```

This fetches the post with the matching slug.

The result is:

```js
{
  title: "My Post",
  body: [
    {
      _type: "block",
      children: [
        { text: "First paragraph" },
        { text: "Second sentence" }
      ]
    },
    ...
  ]
}
```

You then render that with plain JavaScript, like:

```js
result.body.forEach(block => {
  const paragraph = block.children.map(child => child.text).join('');
  postDiv.innerHTML += `<p>${paragraph}</p>`;
});
```

---

### ✅ Step 6: Testing Locally

You can't open `.html` files directly via `file://` — you must serve them over HTTP:

```bash
# Python 3
python -m http.server

# Or Live Server in VSCode
```

---

## 🔧 Technologies Used

| Tech       | Purpose                      |
| ---------- | ---------------------------- |
| HTML       | Structure                    |
| CSS        | Style (optional)             |
| JavaScript | DOM manipulation + API calls |
| Sanity.io  | Headless CMS for content     |
| GROQ       | Querying content             |
| Fetch API  | Making HTTP requests         |

---

## 🧠 Why This Architecture?

* **Fast to build** (no frameworks)
* **Easy to scale** — later you can add React, Vue, or Svelte
* **Real-world** — this is how blogs, docs, and marketing sites are built today
* **Clean separation** between content (Sanity) and frontend (your code)

---

## 📦 What You Learned

✅ How to:

* Use a headless CMS (Sanity)
* Structure schema & content
* Fetch external data via JavaScript
* Render dynamic content based on slugs
* Build a blog with 100% control over HTML, CSS, and JS

---
Perfect — here’s a **visual explanation (in diagram form)** showing how the **Developer Blog CMS** works from end to end.

---

## 📊 System Flow Diagram

```
[ User's Browser (Frontend) ]
            |
            | 1. Loads index.html (via Live Server / GitHub Pages / Netlify)
            ↓
  ┌─────────────────────────────┐
  │         index.html          │
  │  + main.js fetches posts    │
  └─────────────────────────────┘
            |
            | 2. Fetches all blog posts via GROQ query
            ↓
  ┌─────────────────────────────────────────────┐
  │      Sanity.io Content Lake (Public API)    │
  │  → Query: *[_type == "post"]{title, slug}   │
  └─────────────────────────────────────────────┘
            |
            | 3. Receives JSON response with posts
            ↓
  ┌─────────────────────────────┐
  │    JavaScript (main.js)     │
  │  + Loops through posts      │
  │  + Injects into HTML DOM    │
  └─────────────────────────────┘
            |
            | 4. User clicks post link → post.html?slug=my-post
            ↓
  ┌─────────────────────────────┐
  │         post.html           │
  │  + Reads `slug` from URL    │
  └─────────────────────────────┘
            |
            | 5. Fetches specific post by slug
            ↓
  ┌─────────────────────────────────────────────────────────────┐
  │      Sanity.io Content Lake (Public API)                    │
  │  → Query: *[_type == "post" && slug.current == "..."][0]    │
  └─────────────────────────────────────────────────────────────┘
            |
            | 6. Gets single post { title, body } as JSON
            ↓
  ┌─────────────────────────────┐
  │  JavaScript (post.html)     │
  │  + Parses rich text blocks  │
  │  + Renders HTML paragraphs  │
  └─────────────────────────────┘
            ↓
       Final Rendered Page
     ➝ Title + Formatted Content
```

---

## 🧠 Quick Summary of the Data Flow:

| Step  | Action                                       |
| ----- | -------------------------------------------- |
| **1** | User opens the homepage                      |
| **2** | JS fetches all blog posts from Sanity        |
| **3** | Posts are shown as clickable links           |
| **4** | User clicks a post (via slug in URL)         |
| **5** | `post.html` fetches full post using the slug |
| **6** | Post content is rendered on the page         |

---

### 🔁 Reusability

This structure is great because:

* You can change content in Sanity without touching code
* You can redesign the frontend without changing Sanity
* It can scale later to React/Next.js, Vue, etc.

---

-**mermaid diagram** to embed in your README!
