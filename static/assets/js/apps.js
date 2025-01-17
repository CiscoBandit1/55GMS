class ABC {
  constructor(o = {}) {
    (this.type = o.type || "blank"), (this.url = o.url || "about:blank");
  }
  setType(o) {
    o && (this.type = o);
  }
  setUrl(o) {
    o && (this.url = o);
  }
  getCode() {
    return (
      '<iframe style="height:100%; width: 100%; border: none; position: fixed; top: 0; right: 0; left: 0; bottom: 0; border: none" sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation" src="' +
      this.url +
      '"></iframe>'
    );
  }
  open() {
    if ("blank" == this.type)
      try {
        (o = window.open()).document.body.innerHTML =
          '<iframe style="height:100%; width: 100%; border: none; position: fixed; top: 0; right: 0; left: 0; bottom: 0; border: none" sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation" src="' +
          this.url +
          '"></iframe>';
      } catch {}
    else if ("blob" == this.type)
      try {
        var o = new Blob(
          [
            '<iframe style="height:100%; width: 100%; border: none; position: fixed; top: 0; right: 0; left: 0; bottom: 0; border: none" sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation" src="' +
              this.url +
              '"></iframe>',
          ],
          { type: "text/html" },
        );
        window.open(URL.createObjectURL(o));
      } catch {}
    else if ("overwrite" == this.type)
      try {
        document.body.innerHTML =
          '<iframe style="height:100%; width: 100%; border: none; position: fixed; top: 0; right: 0; left: 0; bottom: 0; border: none" sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation" src="' +
          this.url +
          '"></iframe>';
      } catch {}
  }
}
function flix() {
  var o = new ABC({ type: "blank", url: "https://google.com" });
  o.setType("blank"), o.setUrl("https://direct.gmsmedia.pics/"), o.open();
}
function netflix() {
  var o = new ABC({ type: "blank", url: "https://google.com" });
  o.setType("blank"), o.setUrl("https://direct.gmsmedia.pics/"), o.open();
}
