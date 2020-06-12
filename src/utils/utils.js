export function secondsToHms(d, simpleFormat) {
  d = Number(d);
  var h = Math.floor(d / 3600);
  var m = Math.floor((d % 3600) / 60);
  var s = Math.floor((d % 3600) % 60);

  if (simpleFormat) {
    var hDisplay = h > 0 ? h + (h == 1 ? ' : ' : ' : ') : '';
    var mDisplay = m > 0 ? m + (s > 0 ? ' : ' : '') : '';
    var sDisplay = s > 0 ? s : '';
  } else {
    var hDisplay = h > 0 ? h + (h == 1 ? ' hr ' : ' hrs ') : '';
    var mDisplay = m > 0 ? m + (m == 1 ? ' min ' : ' min ') : '';
    var sDisplay = s > 0 ? s + (s == 1 ? ' sec' : ' sec') : '';
  }
  return hDisplay + mDisplay + sDisplay;
}

export function dateFormaterToYear(dateAux) {
  const date = new Date(dateAux);
  return date.getFullYear();
}
