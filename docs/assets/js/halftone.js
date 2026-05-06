(function () {
  var DIGITS = {
    '0': ['01110','10001','10011','10101','11001','10001','01110'],
    '1': ['00100','01100','00100','00100','00100','00100','01110'],
    '2': ['01110','10001','00001','00010','00100','01000','11111'],
    '3': ['11110','00001','00001','01110','00001','00001','11110'],
    '4': ['00010','00110','01010','10010','11111','00010','00010'],
    '5': ['11111','10000','11110','00001','00001','10001','01110'],
    '6': ['00110','01000','10000','11110','10001','10001','01110'],
    '7': ['11111','00001','00010','00100','01000','01000','01000'],
    '8': ['01110','10001','10001','01110','10001','10001','01110'],
    '9': ['01110','10001','10001','01111','00001','00010','01100'],
  };

  function halftoneText(value, scale) {
    var chars = String(value).split('');
    var charW = 5 * scale;
    var charH = 7 * scale;
    var gap = Math.round(scale * 1.2);
    var r = scale * 0.42;
    var totalW = chars.length * charW + (chars.length - 1) * gap;
    var circles = '';

    chars.forEach(function (ch, ci) {
      var rows = DIGITS[ch] || DIGITS['0'];
      var offsetX = ci * (charW + gap);
      for (var y = 0; y < 7; y++) {
        for (var x = 0; x < 5; x++) {
          var on = rows[y][x] === '1';
          var cx = offsetX + x * scale + scale / 2;
          var cy = y * scale + scale / 2;
          var fill = on ? '#1a1a1a' : 'rgba(26,26,26,0.18)';
          circles += '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + fill + '"/>';
        }
      }
    });

    return '<svg width="' + totalW + '" height="' + charH + '" viewBox="0 0 ' + totalW + ' ' + charH + '" style="display:block">' + circles + '</svg>';
  }

  function contributionGrid(cols, rows, seed, cell) {
    var gap = 2;
    var s = seed;
    var rand = function () { s = (s * 9301 + 49297) % 233280; return s / 233280; };
    var dotR = cell * 0.42;
    var w = cols * (cell + gap);
    var h = rows * (cell + gap);
    var circles = '';

    for (var y = 0; y < rows; y++) {
      for (var x = 0; x < cols; x++) {
        var rv = rand();
        var fill = 'rgba(26,26,26,0.15)';
        if (rv > 0.85) fill = '#1a1a1a';
        else if (rv > 0.65) fill = 'rgba(26,26,26,0.6)';
        else if (rv > 0.4) fill = 'rgba(26,26,26,0.3)';

        var cx = x * (cell + gap) + cell / 2;
        var cy = y * (cell + gap) + cell / 2;
        circles += '<circle cx="' + cx + '" cy="' + cy + '" r="' + dotR + '" fill="' + fill + '"/>';
      }
    }

    return '<svg width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + ' ' + h + '" style="display:block">' + circles + '</svg>';
  }

  document.addEventListener('DOMContentLoaded', function () {
    var isMobile = window.innerWidth < 768;
    var scale = isMobile ? 5 : 7;

    document.querySelectorAll('[data-halftone]').forEach(function (el) {
      var value = el.getAttribute('data-halftone');
      el.innerHTML = halftoneText(value, scale);
    });

    var gridEl = document.querySelector('[data-contribution-grid]');
    if (gridEl) {
      var cols = isMobile ? 24 : 44;
      var cell = isMobile ? 5 : 6;
      gridEl.innerHTML = contributionGrid(cols, 5, 9, cell);
    }
  });
})();
