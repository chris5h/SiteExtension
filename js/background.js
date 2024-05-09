async function saveUrl(){
    var url = document.getElementById("url").value;
    await chrome.storage.local.set({ url: url});
}

chrome.tabs.onCreated.addListener(async function (tab) {
    if (tab.pendingUrl == "chrome://newtab/"){
        var{url} = await chrome.storage.local.get(["url"]);
        var real_url = (url === undefined || url == "")  ? "Chrome://new-tab-page" : url;
        chrome.tabs.update(tab.id, { 'url': real_url }, (tab) => { });
    }
});

chrome.windows.onCreated.addListener(async function (win) {
    var windown = await chrome.windows.get(win.id, {populate: true});
    var tab = await chrome.tabs.get(windown.tabs[0].id);
<<<<<<< HEAD
    console.log(tab);
    var{url} = await chrome.storage.local.get(["url"]);
    var real_url = (url === undefined || url == "") ? "Chrome://new-tab-page" : url;
    var eval = (typeof tab.pendingUrl !== 'undefined') ? tab.pendingUrl : tab.url;
    if (eval == "chrome://newtab/" || (!eval.includes("localhost") && !eval.includes("oauth"))){
=======
    if (tab.pendingUrl == "chrome://newtab/" || (!tab.pendingUrl.includes("localhost") && !tab.pendingUrl.includes("oauth"))){
        var{url} = await chrome.storage.local.get(["url"]);
        var real_url = (url === undefined || url == "") ? "Chrome://new-tab-page" : url;
>>>>>>> f652fb5340b48421e0631222e586d23a37ca0084
        chrome.tabs.update(tab.id, { 'url': real_url }, (tab) => { });
    }
});