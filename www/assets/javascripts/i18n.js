var set_locale_to = function(locale) {
  if (locale){
    $.i18n().locale = locale;
  }
  $('body').i18n();
};

jQuery(function() {
  $.i18n().load( {
      'en': './assets/javascripts/i18n/en.json',
      'ja': './assets/javascripts/i18n/ja.json'
  } ).done(function() {
    set_locale_to(url('?locale'));

    History.Adapter.bind(window, 'statechange', function(){
      set_locale_to(url('?locale'));
    });

    $('.switch-locale').on('click', 'button', function(e) {
      e.preventDefault();
      History.pushState(null, null, "?locale=" + $(this).data('locale'));
    });
  });
});