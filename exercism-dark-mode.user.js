// ==UserScript==
// @name         Exercism Dark Mode
// @namespace    https://exercism.org/
// @version      1.0
// @description  Force dark mode on Exercism, bypassing Insiders requirement
// @match        https://exercism.org/*
// @grant        none
// @run-at       document-idle
// @author       gumbarros
// ==/UserScript==

(function () {
  'use strict';

  const setDarkMode = () => {
    const settingsKey = 'editor-settings';

    try {
      const existingSettings = JSON.parse(localStorage.getItem(settingsKey) || '{}');
      existingSettings.theme = 'theme-dark';
      localStorage.setItem(settingsKey, JSON.stringify(existingSettings));
    } catch (e) {
      // fallback: force set
      localStorage.setItem(settingsKey, JSON.stringify({ theme: 'theme-dark' }));
    }

    document.body.classList.remove('theme-light', 'theme-system');
    document.body.classList.add('theme-dark');
  };

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setDarkMode();
  } else {
    document.addEventListener('DOMContentLoaded', setDarkMode);
  }
})();
