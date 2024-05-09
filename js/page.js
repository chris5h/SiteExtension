document.getElementById("save").addEventListener("click",async function(){
    var url = document.getElementById("url").value;
    await chrome.storage.local.set({ url: url});
});

(async function() {
	var {url} = await chrome.storage.local.get(["url"]);
    var real_url = url === undefined ? "" : url;
	document.getElementById("url").value = real_url;
 })();