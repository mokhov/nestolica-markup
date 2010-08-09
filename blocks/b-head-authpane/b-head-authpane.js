$(function(){
    var Tabs = {};

    Tabs.init = function(){
         $('.js-tabs').find('.js-activate').each(function(){
             var class = $(this).attr('class');
             var activated = /js-activate\_(\w+)/.exec(class)[1];

             $(this).click(function(){
                 $(this).closest('.js-tabs').find('.js-tab').hide().filter('.js-tab_' + activated).show();

                 $('.js-activate').removeClass('b-switcher__link_current');
                 $(this).addClass('b-switcher__link_current');

                 return false;
             });
         }).eq(0).click();
    }

    Tabs.init();
});