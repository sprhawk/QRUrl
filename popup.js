
var qrcode = null;
if( null == qrcode) {
    qrcode  = new QRCode(document.getElementById("qrcode"), {
        width:100, 
        height:100,
        correctLevel:QRCode.CorrectLevel.L,
    });
}

window.onload = function() {
    chrome.tabs.getSelected(null, function(tab){
        qrcode.clear();
        qrcode.makeCode(tab.url);
    });
};

