/* helperbars.js - A collection of helpers for Handlebars. 
 * Eddie Flores (http://github.com/eddflrs/helperbars)
 */

(function (window, H, undefined){

  H.registerHelper('_upper', function (s) {
    return s.toUpperCase();
  });

  H.registerHelper('_lower', function (s) {
    return s.toLowerCase();
  });

  H.registerHelper('_capitalize', function (s) {
    var str = s.toLowerCase(s)
    return str.charAt(0).toUpperCase() + str.slice(1);
  });

  H.registerHelper('_reverse', function (s) {
    return s.split('').reverse().join('');
  });

  H.registerHelper('_absolute', function (n) {
    return Math.abs(n);
  });

  H.registerHelper('_trim', function (s) {
    return s.replace(/^\s+|\s+$/g,'');
  });

  H.registerHelper('_safe', function (s) {
    return new H.SafeString(s);
  });

  H.registerHelper('_eq', function (x, y, options) {
    if (x === y) {
      return options.fn(this);
    }
    return options.inverse(this);
  });

  H.registerHelper('_ne', function (x, y, options) {
    if (x !== y) {
      return options.fn(this);
    }
    return options.inverse(this);
  });

  H.registerHelper('_lt', function (x, y, options) {
    if (x < y) {
      return options.fn(this);
    }
    return options.inverse(this);
  });

  H.registerHelper('_lte', function (x, y, options) {
    if (x <= y) {
      return options.fn(this);
    }
    return options.inverse(this);
  });

  H.registerHelper('_gt', function (x, y, options) {
    if (x > y) {
      return options.fn(this);
    }
    return options.inverse(this);
  });

  H.registerHelper('_gte', function (x, y, options) {
    if (x >= y) {
      return options.fn(this);
    }
    return options.inverse(this);
  });

})(window, Handlebars);