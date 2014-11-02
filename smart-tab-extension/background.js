// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//alert('smar-tab extension runnning.')

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({url:chrome.extension.getURL("tabs_api.html")});
});


//タブがアクティブになったとき
chrome.tabs.onActivated.addListener(function(activeInfo){
    chrome.tabs.get(activeInfo.tabId, function(tab){
    setTimeout(function(){  chrome.tabs.move(tab.id, {index: 0}, function(){
//=========

chrome.tabs.query({active:false,url:"*://www.google.co.jp/*"}, function(tabA){
//------------
 
tabA.map(function(tab){
//---
//alert(tab.id);
chrome.tabs.remove(tab.id);
//---
});

//-------------

});

// function(tabA){

//*tabA.map(function(tab){alert(tab.id);});*/});


//======================

}) ;},500);

    });
});
