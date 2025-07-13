// ==UserScript==
// @name         Exercism Dark Mode
// @namespace    https://exercism.org/
// @version      1.0.2
// @description  Force dark mode on Exercism, bypassing Insiders requirement, aggressively applied with MutationObserver
// @match        https://exercism.org/*
// @grant        none
// @run-at       document-idle
// @author       gumbarros
// ==/UserScript==

(function () {
  'use strict';

  const forceDarkMode = () => {
    document.body.classList.remove('theme-light', 'theme-system');
    if (!document.body.classList.contains('theme-dark')) {
      document.body.classList.add('theme-dark');
    }
  };

  const observer = new MutationObserver(() => {
    if (!document.body.classList.contains('theme-dark')) {
      forceDarkMode();
    }
  });

  const startObserver = () => {
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
  };

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    forceDarkMode();
    startObserver();
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      forceDarkMode();
      startObserver();
    });
  }
})();
