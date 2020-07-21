    //全屏
    fullScreen() {
        var el = document.documentElement;
        var rfs =
            el.requestFullScreen ||
            el.webkitRequestFullScreen ||
            el.mozRequestFullScreen ||
            el.msRequestFullScreen;
        if (rfs) {
            rfs.call(el);
        }
        if (window.ActiveXObject) {
            if (typeof window.ActiveXObject != "undefined") {
                var wscript = new window.ActiveXObject("WScript.Shell");
                if (wscript != null) {
                    wscript.SendKeys("{F11}");
                }
            }
        }
        this.iSfullScreen = true;
    }
    //退出全屏
    exitScreen() {
        var el = document;
        var cfs =
            el.cancelFullScreen ||
            el.webkitCancelFullScreen ||
            el.mozCancelFullScreen ||
            el.exitFullScreen;
        if (cfs) {
            cfs.call(el);
        }
        if (window.ActiveXObject) {
            if (typeof window.ActiveXObject != "undefined") {
                var wscript = new window.ActiveXObject("WScript.Shell");
                if (wscript != null) {
                    wscript.SendKeys("{F11}");
                }
            }
        }
        this.iSfullScreen = false;
    }