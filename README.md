# Exercism Dark Mode Userscript

This repository contains a Tampermonkey userscript that **forces dark mode on [Exercism.org](https://exercism.org)**, bypassing the "Insiders-only" restriction.

## What It Does

- Forces Exercism into dark mode regardless of account status
- Sets the appropriate `theme-dark` class on `<body>`
- Automatically applies on every visit `theme-dark`, using `MutationObserver` to ensure dark mode is always enabled

## Installation

1. Install [Tampermonkey](https://www.tampermonkey.net/) in your browser.
2. Click [here to view raw script](https://github.com/gumbarros/exercism-dark-mode/raw/refs/heads/main/exercism-dark-mode.user.js), then hit “Install” in Tampermonkey.
3. Reload any Exercism page. Dark mode will be applied automatically.

---

## Why This Script Exists

Despite the long-standing demand for dark mode, Exercism continues to restrict full-featured dark theming behind their **"Insiders" paywall**, even though:

- **Dark mode is an accessibility requirement**, not just an aesthetic feature. Many users, especially those with light sensitivity or working at night, experience eye strain and discomfort on bright white backgrounds.
- Exercism officially stated dark mode was coming in *early 2023*, but it's only available unless you're an Insider.
- Not everyone can afford recurring payments just to unlock essential UI features.

Dark mode should not be paywalled! It's a **basic accessibility and user experience feature**, not a luxury.

## Disclaimer

For legal reasons, this script was created for educational purposes. I'm just a tourist.
