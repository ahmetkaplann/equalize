/* Equalize */
!function(e){"use strict";e.fn.equalize=function(t){var i=this,n=e.extend({selector:".item"},t);e(window).on("load resize",function(){i.each(function(){var t=0;e(n.selector,this).each(function(){e(this).height()>t&&(t=e(this).height())}),e(n.selector,this).height(t)})})}}(jQuery);
