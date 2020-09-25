// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

"use strict";

let hidePopupButton = document.getElementById("hidePopup");

hidePopupButton.onclick = function(element) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id, { code: 'document.body.style.overflow = "";' });
        chrome.tabs.executeScript(tabs[0].id, {
            code: 'document.getElementsByClassName("fc-ab-root")[0].setAttribute("style", "display: none !important");'
        });
        window.close();
    });
};
