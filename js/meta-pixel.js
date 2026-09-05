/**
 * Minimal Meta Pixel helper.
 * Replace PIXEL_ID below with your real pixel ID to activate tracking.
 * Leave it empty to keep tracking disabled.
 */
window.META_PIXEL_ID = ""; // e.g. "123456789012345"

(function () {
  function loadPixel(id) {
    if (window.fbq) return;
    var n = (window.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    });
    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [];
    window._fbq = n;
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(s);
    window.fbq("init", id);
    window.fbq("track", "PageView");
  }

  if (window.META_PIXEL_ID) loadPixel(window.META_PIXEL_ID);

  /** Fires the Meta Lead event. Call only after a confirmed successful submission. */
  window.trackLead = function () {
    if (window.META_PIXEL_ID && window.fbq) window.fbq("track", "Lead");
  };
})();
