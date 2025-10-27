---
theme: ./
---

# Slidev Theme **Rockdove**

Presentation slides for developers

<div class="pt-12">
  <span @click="next" class="px-2 p-1 rounded cursor-pointer hover:bg-white hover:bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

---
layout: bio
image: /unicorn.png
tagline: Senior Developer at Bump Digital
---

Speaker of talks

- <logos-mastodon-icon /> [@joe@umbraco&#8239;community.social](https://umbracocommunity.social/joe)
- <logos-bluesky />  [@joe.gl](https://bsky.app/profile/joe.gl)
- <solar-global-bold-duotone /> https://joe.gl/ombek

---

# What is Slidev?

Slidev is a slides maker and presenter designed for developers, consist of the following features

- 📝 **Text-based** - focus on the content with Markdown, and then style them later
  Including multi-line bullet points!
  Even a *third* line
- 🎨 **Themable** - theme can be shared and used with npm packages
- 🧑‍💻 **Developer Friendly** - code highlighting, live coding with autocompletion
- 🤹 **Interactive** - embedding Vue components to enhance your expressions
- 🎥 **Recording** - built-in recording and camera view
- 📤 **Portable** - export into PDF, PNGs, or even a hostable SPA
- 🛠 **Hackable** - anything possible on a webpage

<br>
<br>

Read more about [Why Slidev?](https://sli.dev/guide/why)

---

# Navigation

Hover on the bottom-left corner to see the navigation's controls panel

## Keyboard Shortcuts

|     |     |
| --- | --- |
| <kbd>space</kbd> / <kbd>tab</kbd> / <kbd>right</kbd> | next animation or slide |
| <kbd>left</kbd>  / <kbd>shift</kbd><kbd>space</kbd> | previous animation or slide |
| <kbd>up</kbd> | previous slide |
| <kbd>down</kbd> | next slide |

---
layout: image-right
image: 'https://source.unsplash.com/collection/94734566/1920x1080'
---

# Code

Use code snippets and get the highlighting directly!

```ts
interface User {
  id: number
  firstName: string
  lastName: string
  role: string
}

function updateUser(id: number, update: Partial<User>) {
  const user = getUser(id)
  const newUser = { ...user, ...update }
  saveUser(id, newUser)
}
```

---
layout: center
---

| Table                  | Chair   | Tablecloth   |
| ---------------------- | ------- | ------------ |
| Wood                 | Wood  | Table runner |
| Plastic                | Plastic | Paper        |
| Wood with metal legs | Metal   | None         |

---
layout: icons
cols: 4
---

- <logos-mercurial />
  **Mercurial**
  hg, if you will
- <logos-subversion />
  **Subversion**
  **Sub**par or just an older **version**?
- <logos-visual-studio />
  **Team Foundation Version Control**
  if thats even what they're still calling it!
- <logos-git-icon />
  **Git**
  The norm, really
- <logos-mercurial /> **Mercurial**
- <logos-subversion /> **Subversion**
- <logos-visual-studio /> **Team Foundation Version Control**
- <logos-git-icon /> **Git**

---
layout: icons-header
cols: 4
---

# With a heading
And icons that reveal on-click.

::icons::

<v-clicks>

- <solar-box-bold-duotone /> Backup
- <solar-archive-up-bold-duotone /> Versioning
- <solar-hand-stars-bold-duotone /> Sharability
- <solar-rocket-2-bold-duotone /> Release management

</v-clicks>