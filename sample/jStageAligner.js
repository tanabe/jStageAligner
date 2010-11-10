/**
 *  jStageAligner.js
 *  require jQuery 1.2
 *  (c) Hideaki Tanabe
 *  http://blog.kaihatsubu.com
 *
 *  usage:
 *    .jStageAligner(position, [options]);
 *
 *  options:
 *    - time
 *    - marginTop
 *    - marginRight
 *    - marginBottom
 *    - marginLeft
 *    - easing
 *    - callback
 *
 *  returns:
 *    jQuery object
 *
 *  sample:
 *    $("#box").jStageAligner("RIGHT_BOTTOM", {time: 500, easing: "swing", marginBottom: 50});
 */
(function($) {
  $.fn.jStageAligner = function(position, options) {
    var self = this;
    this.css("position", "absolute");

    if (!options) {
      var options = {};
    }
    options.marginTop    = options.marginTop    || 0;
    options.marginRight  = options.marginRight  || 0;
    options.marginBottom = options.marginBottom || 0;
    options.marginLeft   = options.marginLeft   || 0;
    //options.delay        = options.delay        || 0;
    options.time         = options.time         || 0;
    options.easing       = options.easing       || "linear";
    options.callback     = options.callback     || null;

    var calculatePosition = function() {
      var targetPosition = {left: $(window).scrollLeft(), top: $(window).scrollTop()};
      var stageWidth = $(window).width();
      var stageHeight = $(window).height();

      switch (position) {
        case "LEFT_TOP":
          targetPosition.left += options.marginLeft;
          targetPosition.top  += options.marginTop;
          break;

        case "LEFT_MIDDLE":
          targetPosition.left += options.marginLeft;
          targetPosition.top  += Math.floor(stageHeight / 2 - self.height() / 2 + options.marginTop);
          break;

        case "LEFT_BOTTOM":
          targetPosition.left += options.marginLeft;
          targetPosition.top  += stageHeight - self.height() + options.marginTop;
          break;

        case "RIGHT_TOP":
          targetPosition.left += stageWidth - self.width() + options.marginLeft;
          targetPosition.top  += options.marginTop;
          break;

        case "RIGHT_MIDDLE":
          targetPosition.left += stageWidth - self.width() + options.marginTop;
          targetPosition.top  += Math.floor(stageHeight / 2 - self.height() / 2 + options.marginTop);
          break;

        case "RIGHT_BOTTOM":
          targetPosition.left += stageWidth - self.width() + options.marginLeft;
          targetPosition.top  += stageHeight - self.height() + options.marginTop;
          break;

        case "CENTER_TOP":
          targetPosition.left += Math.floor(stageWidth / 2 - self.width() / 2 + options.marginLeft);
          targetPosition.top  += options.marginTop;
          break;

        case "CENTER_MIDDLE":
          targetPosition.left += Math.floor(stageWidth / 2 - self.width() / 2 + options.marginLeft);
          targetPosition.top  += Math.floor(stageHeight / 2 - self.height() / 2 + options.marginTop);
          break;

        case "CENTER_BOTTOM":
          targetPosition.left += Math.floor(stageWidth / 2 - self.width() / 2 + options.marginLeft);
          targetPosition.top  += stageHeight - self.height() + options.marginTop;
          break;
      }
        return targetPosition;
    };
    
    //do alignment
    var align = function() {
      var targetPosition = calculatePosition();
      self.clearQueue();
      self.animate({ 
        left: targetPosition.left,
        top : targetPosition.top
      }, options.time, options.easing, options.callback);
    };

    //resize handler
    $(window).resize(function() {
      align();
    });

    $(window).scroll(function() {
      align();
    });

    //initialize
    var targetPosition = calculatePosition();
    this.css("left", targetPosition.left);
    this.css("top", targetPosition.top);

    return this;
  };
})(jQuery);
