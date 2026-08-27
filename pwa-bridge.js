(function(){
  function ready(){
    if(!('serviceWorker' in navigator)) return;
    navigator.serviceWorker.register('./sw.js').catch(function(e){console.warn('PWA service worker:',e);});
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',ready); else ready();
  window.addEventListener('online',()=>console.log('Moviment\' Up: internet disponível — pronto para sincronização.'));
  window.addEventListener('offline',()=>console.log('Moviment\' Up: modo offline ativo.'));
})();
