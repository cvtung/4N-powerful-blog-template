Live demo:

This project is one of my experiments with JAM stack. You can learn more about JAM stack here: https://jamstack.org.
I was about to build a new personal blog only which should be as simple as possible and I ended up with crafting a new template because I couldn't find any [template](https://templates.netlify.com/) that satisfies my requirements. It took me few weeks to study, write guiding stuffs, ... but it was fun and worth my while. Hope you like it too.

This project is under [MIT license](https://github.com/cvtung/4N-powerful-blog-template/blob/main/LICENSE) which means it is free to use for any purpose.

You can contribute to or fork it from my Github repository: https://github.com/cvtung/4N-powerful-blog-template

If you want to propose any new feature or ask any question about this project, please visit project's discussion section and search for it before opening a new thread: https://github.com/cvtung/4N-powerful-blog-template/discussions



---
## Frequently asked questions

### Why was this template named as 4N?

> It was built with [Nuxt](https://nuxtjs.org/) framework, styled with made-by-me [Notion](notion.so/)-liked theme, uses [Netlify CMS](https://www.netlifycms.org/) to manage content and hosted by [Netlify](https://www.netlify.com/).

### Why should I use Netlify CMS as a content management system?

> Because it's convinient. If you want to write/edit/delete posts anywhere (even on your phone), you can go to `https://your-blog-name.com/admin`, log in and do whatever you want.

### I'm a non-tech user, can I still use it?

> Sure. This template is a ready-to-use blog. The only things you need to do is to register a [Github](https://github.com/) account and a [Netlify](https://www.netlify.com/) account (all free) and click a some magic buttons, everything will be ready in 5 minutes (no kidding :sunglasses:). Please read [Getting started](/getting-started) page and [Tutorials](/tutorials) category for more information.

### Please explain more ... :cry:

> When you decide to click [Deploy to Netlify](https://app.netlify.com/start/deploy?repository=https://github.com/cvtung/4N-powerful-blog-template&stack=cms), Netlify will copy this template source code into your Github account, start generating a static website from code and host that site for you automatically. After few minutes, your site will be ready at `https://your-netlify-site-name.netlify.com`, you can go to `https://your-netlify-site-name.netlify.com/admin` and tweak. From now on, all content you publish will be saved in your Github account and Netlify will update your site with your new content automatically. Normally, it only takes 1 minute to refresh your site after you finish writing.

---

## Installation and commands

### Clone this project

```bash
git clone https://github.com/cvtung/4N-powerful-blog-template.git
```

### Install all required packages

```bash
npm install
```

### Run Nuxt development server

```bash
npm run dev
```

### Static site

#### Generate static site

Build this project as a static site, generate all routes as a single HTML files (with CSS + Javascript). Your site will be exported to `dist/` folder

```bash
npm run generate
```

#### Serve static site

Serve the `dist/` directory like your static hosting would do (Netlify, Vercel, Surge, etc), great for testing before deploying.

```bash
npm run start
```

For more information, please read https://nuxtjs.org/docs/2.x/get-started/commands#target-static

### Analyze

This will visualize your bundles and show you libraries' size.

```bash
npm run analyze
```

---

## Credits

-   [Twitter's Twemoji](https://twemoji.twitter.com/) and [Mozilla's FirefoxEmoji](https://mozilla.github.io/fxemoji) icon sets

-   [Vue](https://vuejs.org/) and [Nuxt](https://nuxtjs.org/) and many [open source packages](https://github.com/cvtung/4N-powerful-blog-template/blob/main/package.json)

-   [Netlify](https://www.netlify.com/) and [Netlify CMS](https://www.netlifycms.org/)

-   [Unsplash](https://unsplash.com/) beautiful images
