// 작품 필터링

$(function(){
    let dutation = 0;
  
    // all
    $('.btn-all').on('click', function(){
      $('#portfolio .list li').show(dutation);
    })
  
    // web
    $('.btn-web').on('click', function(){
      $('#portfolio .list li')
        .hide(dutation)
        .filter('.web')
        .show(dutation);
    })
  
    // uiux
    $('.btn-uiux').on('click', function(){
      $('#portfolio .list li')
        .hide(dutation)
        .filter('.uiux')
        .show(dutation);
    })
  
    // visual
    $('.btn-visual').on('click', function(){
      $('#portfolio .list li')
        .hide(dutation)
        .filter('.visual')
        .show(dutation);
    })
  
  });