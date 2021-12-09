function notification(status, msg) {
  toastr.options = {
    closeButton: false,
    debug: false,
    newestOnTop: false,
    progressBar: true,
    positionClass: 'toast-bottom-center',
    preventDuplicates: false,
    onclick: null,
    showDuration: '500',
    hideDuration: '1500',
    timeOut: '5500',
    extendedTimeOut: '1500',
    showEasing: 'swing',
    hideEasing: 'linear',
    showMethod: 'fadeIn',
    hideMethod: 'fadeOut',
  };
  toastr[status](msg);
}
