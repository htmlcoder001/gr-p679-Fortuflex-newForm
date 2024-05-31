(function initRegForm() {
  const formEl = document.querySelector('.js-rf-form');
  window.window.intlTelInput(formEl.phone, {
    autoHideDialCode: true,
    separateDialCode: true,
    utilsScript: 'files/js/intlTelInput-utils.js',
  });
})();
