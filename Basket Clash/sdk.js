window.SDK_OPTIONS = {
    gameId: "04msk542l5wweag4o95atecysu4xv86m",
    onEvent: function(a) {
        switch (a.name) {
            case "SDK_GAME_PAUSE":
                // pause game logic / mute audio
                break;
            case "SDK_GAME_START":
                // advertisement done, resume game logic and unmute audio
                break;
            case "SDK_READY":
                // when sdk is ready
                break;
        }
    }
};
(function(a, b, c) {
    var d = a.getElementsByTagName(b)[0];
    a.getElementById(c) || (a = a.createElement(b), a.id = c, a.src = "https://api.gamemonetize.com/sdk.js", d.parentNode.insertBefore(a, d))
})(document, "script", "gamemonetize-sdk");


function google_analytics() {
    if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined') {
        sdk.showBanner();
    }
};

function google_analytics_ID() {
    if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined') {
        sdk.showBanner();
    }
};


setTimeout(function() {
    google_analytics();
}, 1500);
setInterval(function() {
    google_analytics_ID();
}, 6500);