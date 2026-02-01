function abrirRota(lat, lng) {
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
  const isAndroid = /Android/i.test(navigator.userAgent);

  let url = "";

  if (isIOS) {
    // Apple Maps
    url = `https://maps.apple.com/?daddr=${lat},${lng}`;
  } else if (isAndroid) {
    // Google Maps (Android)
    url = `geo:${lat},${lng}?q=${lat},${lng}`;
  } else {
    // Desktop (Google Maps)
    url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
  }

  window.open(url, "_blank");
}
