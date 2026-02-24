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


function abrirBuscaProximidade(tipo, lat, lng) {

  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
  const isAndroid = /Android/i.test(navigator.userAgent);

  let url = "";

  if (isIOS) {
    url = `https://maps.apple.com/?q=${tipo}&near=${lat},${lng}`;
  } 
  else if (isAndroid) {
    url = `geo:${lat},${lng}?q=${tipo}`;
  } 
  else {
    url = `https://www.google.com/maps/search/?api=1&query=${tipo}&near=${lat},${lng}&zoom=17`;
  }

  window.open(url, "_blank");
}