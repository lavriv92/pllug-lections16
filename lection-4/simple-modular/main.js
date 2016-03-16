
function loadScript(name) {
  var script = document.createElement('script');
  script.src = name + '.js';
  document.body.appendChild(script);
}


loadScript('module');

window.onload = function () {
  window.Module.log();
};
