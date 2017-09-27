
/*=========================================================================
   Prettyphoto
========================================================================= */
$(document).ready(function() {
$("a[class^='prettyPhoto']").prettyPhoto({theme:'pp_default'});

});


			
/*=========================================================================
		GALLERY QUICKSAND
========================================================================= */
var $filterType = $('#filterOptions li.active a').attr('class');
var $holder = $('ul.holder');
var $data = $holder.clone();

$('#filterOptions li a').click(function(e) {
	
	$('#filterOptions li').removeClass('active');
	
	var $filterType = $(this).attr('class');
	$(this).parent().addClass('active');
	
	if ($filterType == 'all') {
		var $filteredData = $data.find('li');
	} 
	else {
		var $filteredData = $data.find('li[data-type~=' + $filterType + ']');
	}
	
	// call quicksand
	$holder.quicksand($filteredData, {
		duration: 800,
		easing: 'easeInOutQuad'
		},
		function() {
			callprettyPhoto();
			galleryHover();
	});
	return false;
});


/*=========================================================================
   Accordion
========================================================================= */
/* -- 1 -- */
$(document).ready(function() {
  $(function() {
      $( "#f-accordion" ).accordion({
        collapsible: true,
        heightStyle: "content"
      });
    });
});


/*=========================================================================
   Accordion social icons
========================================================================= */

$(document).ready(function(){

   //BUILD IN
   $('#top-container h1').css("opacity", "0");
   $('#centerwell').css("width", "0");
   $('#top-container .ani-social-row').animate({
      'opacity': '0.01'
      }, 500, function() {
         $('#centerwell').animate({ 
      	  width: '100%'
      	  }, 700, function() {
            $('').animate({
               'opacity': '1'
            }, 300, function() {
            $('').animate({
               'height': sch,
               'opacity': '1'
            }, 300, function() {
               $('#top-container h1').stop().animate({
                  opacity: "1"
               });
            })
         })
      })
   })
   
   // EVENTS
    $('#centerwell li').click(function() {
        window.open($(this).find('a').attr('href'));
      });
      
   $('#centerwell li').hover(function() {
      
      $(this).stop().animate({
      	width: "148px"
      	}, 300, function() {
      })
      $(this).find('h3').stop().animate({
      	backgroundPosition: "-40px"
      	}, 300, function() {
      })
   }, function() {
   	$(this).stop().animate({
      	width: "40px"
      	}, 300, function() {
      })
      $(this).find('h3').stop().animate({
      	backgroundPosition: "0px"
      	}, 300, function() {
      })
   })
});


/*=========================================================================
 Tabs
========================================================================= */

;(function ( $, window, document, undefined ) {

    var pluginName = "tabulous",
        defaults = {
            effect: 'scale'
        };

       // $('<style>body { background-color: red; color: white; }</style>').appendTo('head');

    function Plugin( element, options ) {
        this.element = element;
        this.$elem = $(this.element);
        this.options = $.extend( {}, defaults, options );
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {

        init: function() {

            var links = this.$elem.find('a');
            var firstchild = this.$elem.find('li:first-child').find('a');
            var lastchild = this.$elem.find('li:last-child').after('<span class="tabulousclear"></span>');

            if (this.options.effect == 'scale') {
             tab_content = this.$elem.find('div').not(':first').not(':nth-child(1)').addClass('hidescale');
            } else if (this.options.effect == 'slideLeft') {
                 tab_content = this.$elem.find('div').not(':first').not(':nth-child(1)').addClass('hideleft');
            } else if (this.options.effect == 'scaleUp') {
                 tab_content = this.$elem.find('div').not(':first').not(':nth-child(1)').addClass('hidescaleup');
            } else if (this.options.effect == 'flip') {
                 tab_content = this.$elem.find('div').not(':first').not(':nth-child(1)').addClass('hideflip');
            }

            var firstdiv = this.$elem.find('#tabs_container, #tabs_container_dark');
            var firstdivheight = firstdiv.find('div:first').height();

            var alldivs = this.$elem.find('div:first').find('div');

            alldivs.css({'position': 'absolute','top':'40px'});

            firstdiv.css('height',firstdivheight+'px');

            firstchild.addClass('tabulous_active');

            links.bind('click', {myOptions: this.options}, function(e) {
                e.preventDefault();

                var $options = e.data.myOptions;
                var effect = $options.effect;

                var mythis = $(this);
                var thisform = mythis.parent().parent().parent();
                var thislink = mythis.attr('href');


                firstdiv.addClass('transition');

                links.removeClass('tabulous_active');
                mythis.addClass('tabulous_active');
                thisdivwidth = thisform.find('div'+thislink).height();

                if (effect == 'scale') {
                    alldivs.removeClass('showscale').addClass('make_transist').addClass('hidescale');
                    thisform.find('div'+thislink).addClass('make_transist').addClass('showscale');
                } else if (effect == 'slideLeft') {
                    alldivs.removeClass('showleft').addClass('make_transist').addClass('hideleft');
                    thisform.find('div'+thislink).addClass('make_transist').addClass('showleft');
                } else if (effect == 'scaleUp') {
                    alldivs.removeClass('showscaleup').addClass('make_transist').addClass('hidescaleup');
                    thisform.find('div'+thislink).addClass('make_transist').addClass('showscaleup');
                } else if (effect == 'flip') {
                    alldivs.removeClass('showflip').addClass('make_transist').addClass('hideflip');
                    thisform.find('div'+thislink).addClass('make_transist').addClass('showflip');
                }


                firstdiv.css('height',thisdivwidth+'px');

                


            });

           


         
            
        },

        yourOtherFunction: function(el, options) {
            // some logic
        }
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations

    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            new Plugin( this, options );
        });
    };

})( jQuery, window, document );


$(document).ready(function($) {
    

    $('#tabs').tabulous({
    	effect: 'scale'
    });

     $('#tabs2').tabulous({
    	effect: 'slideLeft'
    });

     $('#tabs3').tabulous({
    	effect: 'scaleUp'
    });

    $('#tabs4, #tabs3-left-dark').tabulous({
    	effect: 'flip'
    });


});


/*=========================================================================
 Close Message box
========================================================================= */

$('.message-box').find('.closemsg').click(function() {
        $(this).parent('.message-box').slideUp(500);
    });


/*=========================================================================
 animated text
========================================================================= */

$(document).ready(function(){

var TxtRotate = function(el, toRotate, period) { 
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate-inner');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate-inner > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};
});


/*=========================================================================
 Testimonials slider
========================================================================= */
/*
 * jQuery Quovolver v1.0 - http://sandbox.sebnitu.com/jquery/quovolver
 *
 * By Sebastian Nitu - Copyright 2009 - All rights reserved
 * 
 */

(function($) {
	$.fn.quovolver = function(speed, delay) {
		
		/* Sets default values */
		if (!speed) speed = 500;
		if (!delay) delay = 6000;
		
		// If "delay" is less than 4 times the "speed", it will break the effect 
		// If that's the case, make "delay" exactly 4 times "speed"
		var quaSpd = (speed*4);
		if (quaSpd > (delay)) delay = quaSpd;
		
		// Create the variables needed
		var	quote = $(this),
			firstQuo = $(this).filter(':first'),
			lastQuo = $(this).filter(':last'),
			wrapElem = '<div id="quote_wrap"></div>';
		
		// Wrap the quotes
		$(this).wrapAll(wrapElem);
		
		// Hide all the quotes, then show the first
		$(this).hide();
		$(firstQuo).show();
		
		// Set the hight of the wrapper
		$(this).parent().css({height: $(firstQuo).height()});		
		
		// Where the magic happens
		setInterval(function(){
			
			// Set required hight and element in variables for animation
			if($(lastQuo).is(':visible')) {
				var nextElem = $(firstQuo);
				var wrapHeight = $(nextElem).height();
			} else {
				var nextElem = $(quote).filter(':visible').next();
				var wrapHeight = $(nextElem).height();
			}
			
			// Fadeout the quote that is currently visible
			$(quote).filter(':visible').fadeOut(speed);
			
			// Set the wrapper to the hight of the next element, then fade that element in
			setTimeout(function() {
				$(quote).parent().animate({height: wrapHeight}, speed);
			}, speed);
			
			if($(lastQuo).is(':visible')) {
				setTimeout(function() {
					$(firstQuo).fadeIn(speed*2);
				}, speed*2);
				
			} else {
				setTimeout(function() {
					$(nextElem).fadeIn(speed);
				}, speed*2);
			}
			
		}, delay);
	
	};
})

(jQuery);

	$(document).ready(function() {
		
		$('.quote-text').quovolver();
		
	});



/*=========================================================================
   Animated circle loader
========================================================================= */


(function(c, e, l, j) {
    var d = function(a, b) {
        arguments.length && this.init(a, b);
    };
    d.CANVAS_NAMES = [ "back", "fill", "front" ];
    var i = d, f;
    f = l.createElement("canvas");
    f.getContext ? (f = f.getContext("2d"), f = (e.devicePixelRatio || 1) / (f.webkitBackingStorePixelRatio || f.mozBackingStorePixelRatio || f.msBackingStorePixelRatio || f.oBackingStorePixelRatio || f.backingStorePixelRatio || 1)) : f = 1;
    i.PIXEL_RATIO = f;
    i = [ "ms", "moz", "webkit", "o" ];
    for (f = 0; f < i.length && !e.requestAnimationFrame; f++) e.requestAnimationFrame = e[i[f] + "RequestAnimationFrame"], e.cancelAnimationFrame = e[i[f] + "CancelAnimationFrame"] || e[i[f] + "CancelRequestAnimationFrame"];
    e.requestAnimationFrame || (e.requestAnimationFrame = function(a) {
        return e.setTimeout(function() {
            a();
        }, 16);
    });
    e.cancelAnimationFrame || (e.cancelAnimationFrame = function(a) {
        clearTimeout(a);
    });
    var q = function(a) {
        arguments.length && this.init(a);
    };
    q.prototype = {
        attributes: {
            onLoop: null,
            afterStop: null,
            afterStopRequest: null,
            params: {},
            owner: null
        },
        init: function(a) {
            this.options = c.extend({}, this.attributes, a);
            this.animationHandle = null;
            this.loops = 0;
            this.stopRequested = !1;
        },
        start: function() {
            var a = this;
            this.animationHandle = e.requestAnimationFrame(function() {
                a.options.onLoop.apply(a.options.owner, [ a._getThreadInfo() ]) && a._loop();
            });
        },
        _getThreadInfo: function() {
            return {
                loops: ++this.loops,
                params: this.options.params,
                stopRequested: this.stopped
            };
        },
        _kill: function() {
            this.animationHandle && e.cancelAnimationFrame(this.animationHandle);
            c.isFunction(this.options.afterStop) && this.options.afterStop.call(this.options.owner);
            c.isFunction(this.options.afterStopRequest) && this.options.afterStopRequest.call(this.options.owner);
        },
        _loop: function() {
            var a = this;
            this.animationHandle = e.requestAnimationFrame(function() {
                a.options.onLoop.apply(a.options.owner, [ a._getThreadInfo() ]) ? a._loop() : a._kill();
            });
        },
        stop: function(a) {
            this.stopped = !0;
            this.options.afterStopRequest = a;
        }
    };
    d.prototype = {
        defaults: {
            initialValue: 0,
            maxValue: 100,
            label: "",

            labelClassName: "text-label",
            title: "",
            
            titleClassName: "text-title",
            dates: "",
            datesClassName: "text-dates",
            
            percent: !1,
            decimals: 0,
            digitClassName: "digit-label",
            format: null,
            duration: 4e3,
            fillColor: "#eeeeee",
            wrapperClassName: "circular-stat",
            outerThickness: 8,
            fillThickness: 10
        },
        init: function(a, b) {
            this.element = c(a);
            this.options = c.extend({}, this.defaults, b, this.element.data());
            this.attributes = {};
            this.labels = {};
            this.canvases = {};
            this.activeAnimationThread = null;
            this._parseOptions();
            if (this.canvases = this._build()) this._drawBackside(this.canvases.back), this._drawFrontside(this.canvases.front), this.labels = this._attachLabels(), this._updateVal(0), this.animate(this.options.initialValue, !1);
            return this;
        },
        _parseOptions: function() {
            var a = Math.max(this.element.width(), this.element.height()) / 2, b = this.options.outerThickness;

            this.attributes = c.extend({}, this.attributes, {
                currentValue: 0,
                radius: {
                    back: a,
                    fill: a - b,
                    front: a - b - this.options.fillThickness
                }
            });
        },
        _createCanvas: function(a, b) {
            if (0 === a || 0 === b) return console.log("Invalid canvas dimensions"), !1;
            var g = l.createElement("canvas");
            g.width = a * d.PIXEL_RATIO;
            g.height = b * d.PIXEL_RATIO;
            1 < d.PIXEL_RATIO && (g.style.width = a + "px", g.style.height = b + "px");
            if (!g.getContext) if ("undefined" !== typeof G_vmlCanvasManager) G_vmlCanvasManager.initElement(g); else return console.log("Your browser does not support HTML5 Canvas, or excanvas is missing on IE"), !1;
            return g;
        },
        _attachLabels: function() {
            var a = c("<span></span>").addClass(this.options.digitClassName), b = c("<span></span>").addClass(this.options.labelClassName).text(this.options.label),  z = c("<span></span>").addClass(this.options.titleClassName).text(this.options.title), y = c("<span></span>").addClass(this.options.datesClassName).text(this.options.dates);;
            
            this.element.append([ a, b, z, y ]);
            return {
                digit: a,
                text: b,
                text: z,
                text: y
            };
        },
        _build: function() {
            for (var a = {}, b, g = 2 * this.attributes.radius.back, m = 0; m < d.CANVAS_NAMES.length; ++m) {
                if (!(b = this._createCanvas(g, g))) return !1;
                b.style.position = "absolute";
                b.style.top = 0;
                b.style.left = 0;
                b.className = d.CANVAS_NAMES[m];
                a[d.CANVAS_NAMES[m]] = b;
            }
            this.element.addClass(this.options.wrapperClassName).append(c.map(a, function(a) {
                return a;
            }));
            return a;
        },
        _drawBackside: function(a) {
            var b = this.attributes.radius.back, g = this.attributes.radius.fill, a = a.getContext("2d"), c = a.createLinearGradient(0, 0, 0, 2 * b);
            c.addColorStop(0, "#d5d5d5");
            c.addColorStop(1, "#ffffff");
            1 < d.PIXEL_RATIO && a.scale(d.PIXEL_RATIO, d.PIXEL_RATIO);
            this._drawCircle(a, b, b, b);
            a.fillStyle = c;
            a.fill();
            this._drawCircle(a, b, b, g);
            a.fillStyle = "#eeeeee";
            a.fill();
        },
        _drawFrontside: function(a) {
            var b = this.attributes.radius.back, c = this.attributes.radius.front, a = a.getContext("2d");
            1 < d.PIXEL_RATIO && a.scale(d.PIXEL_RATIO, d.PIXEL_RATIO);
            this._drawCircle(a, b, b, c);
            a.shadowColor = "rgba(0, 0, 0, 0.3)";
            a.shadowBlur = 3;
            a.shadowOffsetY = 1;
            a.fillStyle = "#ffffff";
            a.fill();
        },
        _drawCircle: function(a, b, c, d) {
            a.beginPath();
            a.arc(b, c, d, 0, 2 * Math.PI, !1);
            a.closePath();
        },
        _updateVal: function(a, b, d) {
            c.isNumeric(a) && c.isNumeric(b) && c.isNumeric(d) ? (d = (d - b) * a, a = Math.max(0, Math.min(b + 100 * d / this.options.maxValue, 100)), b = Math.max(0, Math.min(b + d, this.options.maxValue))) : (a = Math.min(this.attributes.currentValue / this.options.maxValue, 100), b = Math.min(this.attributes.currentValue, this.options.maxValue));
            this.labels.digit[0].innerHTML = (c.isFunction(this.options.format) ? this.options.format : function(a, b, c) {
                return this.options.percent ? a.toFixed(this.options.decimals) + "%" : b.toFixed(this.options.decimals) + "/" + c.toFixed(this.options.decimals);
            }).apply(this, [ a, b, this.options.maxValue ]);
        },
        _redraw: function() {
            var a = this.canvases.fill, b = a.getContext("2d"), c = this.attributes.radius.back, f = this.attributes.radius.fill, e = 2 * (this.attributes.currentValue / this.options.maxValue) * Math.PI;
            b.fillStyle = this.options.fillColor;
            b.clearRect(0, 0, a.width, a.height);
            0 !== e && (b.save(), 1 < d.PIXEL_RATIO && b.scale(d.PIXEL_RATIO, d.PIXEL_RATIO), b.translate(c, c), b.rotate(-Math.PI / 2), b.beginPath(), b.arc(0, 0, f, 0, e, !1), b.lineTo(0, 0), b.closePath(), b.fill(), b.restore());
            this._updateVal();
        },
        animate: function(a, b) {
            function f(b) {
                1 === b.loops && (j = (new Date).getTime(), r = 2 * (a / this.options.maxValue) * Math.PI, p = 2 * (this.attributes.currentValue / this.options.maxValue) * Math.PI);
                var c = Math.min(((new Date).getTime() - j) / this.options.duration, 1), e = p + (r - p) * c;
                h.clearRect(0, 0, n.width, n.height);
                0 !== e && (h.save(), 1 < d.PIXEL_RATIO && h.scale(d.PIXEL_RATIO, d.PIXEL_RATIO), h.translate(i, i), h.rotate(-Math.PI / 2), h.beginPath(), h.arc(0, 0, l, 0, e, !1), h.lineTo(0, 0), h.closePath(), h.fill(), h.restore());
                k._updateVal(c, k.attributes.currentValue, a);
                return b.stopRequested || 1 <= c ? (k.attributes.currentValue += (a - k.attributes.currentValue) * c, !1) : !0;
            }
            function e(a) {
                c(this).queue("circular", function(a) {
                    (this.activeAnimationThread = new q({
                        onLoop: function() {
                            return f.apply(this, arguments);
                        },
                        afterStop: function() {
                            a();
                            0 === c(this).queue("circular").length && (this.activeAnimationThread = null);
                        },
                        owner: this
                    })).start();
                });
                a && c(this).dequeue("circular");
            }
            if (c.isNumeric(a) && !(0 > a || a > this.options.maxValue)) {
                var k = this, n = this.canvases.fill, h = n.getContext("2d"), i = this.attributes.radius.back, l = this.attributes.radius.fill, j, r, p;
                h.fillStyle = this.options.fillColor;
                !b && this.activeAnimationThread ? (c(this).clearQueue("circular"), this.activeAnimationThread.stop(function() {
                    e.apply(this, [ !0 ]);
                })) : e.apply(this, [ !this.activeAnimationThread ]);
            }
        },
        option: function(a, b) {
            if (0 === arguments.length) return c.extend({}, this.options);
            if ("string" === typeof a) {
                if (b === j) return this.options[a];
                switch (a) {
                  case "label":
                    this.options[a] = b;
                    this.labels.text.html(b);
                    break;
                  case "maxValue":
                    this.options.percent || (this.attributes.currentValue = Math.max(Math.min(this.attributes.currentValue, b), 0), this.options[a] = b, this._redraw());
                    break;
                  case "percent":
                    b && (this.options.maxValue = 100, this.attributes.currentValue = Math.max(Math.min(this.attributes.currentValue, 100), 0));
                  case "format":
                  case "decimals":
                  case "fillColor":
                  case "duration":
                    this.options[a] = b, this._redraw();
                }
            }
            return this;
        }
    };
    d.defaults = d.prototype.defaults;
    c.fn.CircularStat = function(a) {
        var b = "string" === typeof a, e = Array.prototype.slice.call(arguments, 1), f = this;
        if (b && "_" === a.charAt(0)) return f;
        b ? this.each(function() {
            var b = c.data(this, "circular-stat"), d = b && c.isFunction(b[a]) ? b[a].apply(b, e) : b;
            if (d !== b && d !== j) return f = d, !1;
        }) : this.each(function() {
            c.data(this, "circular-stat") || c.data(this, "circular-stat", new d(this, a));
        });
        return f;
    };
    c(function() {
        c('[data-provide="circular"]').each(function() {
            var a = c(this);
            a.CircularStat(a.data());
        });
    });
})(jQuery, window, document);












/**
 * StyleFix 1.0.3 & PrefixFree 1.0.7
 * @author Lea Verou
 * MIT license
 (function(){function t(e,t){return[].slice.call((t||document).querySelectorAll(e))}if(!window.addEventListener)return;var e=window.StyleFix={link:function(t){try{if(t.rel!=="stylesheet"||t.hasAttribute("data-noprefix"))return}catch(n){return}var r=t.href||t.getAttribute("data-href"),i=r.replace(/[^\/]+$/,""),s=(/^[a-z]{3,10}:/.exec(i)||[""])[0],o=(/^[a-z]{3,10}:\/\/[^\/]+/.exec(i)||[""])[0],u=/^([^?]*)\??/.exec(r)[1],a=t.parentNode,f=new XMLHttpRequest,l;f.onreadystatechange=function(){f.readyState===4&&l()};l=function(){var n=f.responseText;if(n&&t.parentNode&&(!f.status||f.status<400||f.status>600)){n=e.fix(n,!0,t);if(i){n=n.replace(/url\(\s*?((?:"|')?)(.+?)\1\s*?\)/gi,function(e,t,n){return/^([a-z]{3,10}:|#)/i.test(n)?e:/^\/\
*/

/*=========================================================================
   Icon iparallax
========================================================================= */

if ("undefined" != typeof jQuery) {
	(function(a) {
		a.imgpreload = function(b, c) {
			c = a.extend({}, a.fn.imgpreload.defaults, c instanceof Function ? {
				all: c
			} : c);
			if ("string" == typeof b) {
				b = [b]
			}
			var d = [];
			var e = b.length;
			for (var f = 0; f < e; f++) {
				var g = new Image;
				a(g).bind("load error", function(b) {
					d.push(this);
					a.data(this, "loaded", "error" == b.type ? false : true);
					if (c.each instanceof Function) {
						c.each.call(this)
					}
					if (d.length >= e && c.all instanceof Function) {
						c.all.call(d)
					}
				});
				g.src = b[f]
			}
		};
		a.fn.imgpreload = function(b) {
			var c = [];
			this.each(function() {
				c.push(a(this).attr("src"))
			});
			a.imgpreload(c, b);
			return this
		};
		a.fn.imgpreload.defaults = {
			each: null,
			all: null
		}
	})(jQuery)
}
// DOM ready
$(document).ready(function() {
	var _ParallaxHover = function(el) {
			// Set up handle
			var t = this,
				$orig = $(el);
			// Extend object with handy variables
			t.$link = $orig.clone().addClass('enhanced');
			t.levels = parseInt(t.$link.data('levels'));
			t.space = parseInt(t.$link.data('space'));
			t.imgName = t.$link.data('imgname');
			t.images = new Array();
			t.pos = $orig.offset();
			t.dim = {
				w: $orig.outerWidth(),
				h: $orig.outerHeight()
			};
			t.$levels = $();
			t.threshold = 1;
			t.cPos = {
				x: t.dim.w / 2,
				y: t.dim.h / 2
			};
			t.tPos = {
				x: t.cPos.x,
				y: t.cPos.y
			};
			t.vPos = {
				x: 0,
				y: 0
			};
			t.interval;
			t.isLooping = false;
			// Set up elements and bind events
			if (t.levels > 0 && t.space > 0 && t.imgName.indexOf('*') > -1) {
				for (var i = 0; i < t.levels; i++) {
					(function() {
						var levelImgName = t.imgName.replace('*', i),
							index = i + 1,
							mid = Math.round(t.levels / 2),
							dist = (index - mid) / (t.levels - mid),
							$level = $('<span />').addClass('level').data('dist', dist).css('background-image', 'url(' + levelImgName + ')').prependTo(t.$link);
						t.$levels.push($level);
						t.images.push(levelImgName);
					})();
				}
				t.$link.mousemove(function(e) {
					var mPos = {
						x: e.pageX,
						y: e.pageY
					},
						xPos = mPos.x - t.pos.left,
						yPos = mPos.y - t.pos.top;
					t.tPos = {
						x: xPos,
						y: yPos
					};
					t.startAnimationLoop();
				}).mouseenter(function() {
					t.startAnimationLoop();
				}).mouseleave(function() {
					t.tPos.x = t.dim.w / 2;
					t.tPos.y = t.dim.h / 2;
				});
				$.imgpreload(t.images, function() {
					$orig.replaceWith(t.$link);
				});
			}
			// Return object
			return this;
		};
	_ParallaxHover.prototype.animateTo = function(x, y) {
		var t = this;
		t.tPos = {
			x: x,
			y: y
		};
		t.startAnimationLoop();
	};
	_ParallaxHover.prototype.startAnimationLoop = function() {
		var t = this;
		if (!t.isLooping) {
			t.isLooping = true;
			t.interval = setInterval(function() {
				t.animationLoop();
			}, 35);
		}
	};
	_ParallaxHover.prototype.setPosition = function() {
		var t = this;
		t.$levels.each(function() {
			var $level = $(this);
			$level.css({
				'top': -((t.cPos.y / t.dim.h) * 2 - 1) * t.space * $level.data('dist'),
				'left': -((t.cPos.x / t.dim.w) * 2 - 1) * t.space * $level.data('dist')
			});
		});
		return t.cPos;
	};
	_ParallaxHover.prototype.animationLoop = function() {
		var t = this,
			x = (t.tPos.x - t.cPos.x),
			y = (t.tPos.y - t.cPos.y);
		t.vPos.x *= 0.7;
		t.vPos.y *= 0.7;
		x *= 0.10;
		y *= 0.10;
		t.vPos.x += x;
		t.vPos.y += y;
		t.cPos.x += t.vPos.x;
		t.cPos.y += t.vPos.y;
		if (t.vPos.x >= t.threshold || t.vPos.y >= t.threshold || t.vPos.x <= -t.threshold || t.vPos.y <= -t.threshold) {
			t.setPosition();
		} else {
			t.isLooping = false;
			clearInterval(t.interval);
		}
	};
	$('.iparallax').each(function() {
		window.parallaxHover = new _ParallaxHover(this);
	});
});

/*=========================================================================
   flat shadow
========================================================================= */

$(window).ready(function(){$("[class*='flat']").hide(function(){$("[class*='flat']").addClass("animated fadeInLeft");$(this).fadeIn()})});!function(e){function s(e,t){e=e.replace("#","");r=parseInt(e.substring(0,2),16);g=parseInt(e.substring(2,4),16);b=parseInt(e.substring(4,6),16);result="rgba("+r+","+g+","+b+","+t/100+")";return result}function o(e,t){e=String(e).replace(/[^0-9a-f]/gi,"");if(e.length<6){e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]}t=t||0;var n="#",r,i;for(i=0;i<3;i++){r=parseInt(e.substr(i*2,2),16);r=Math.round(Math.min(Math.max(0,r+r*t),255)).toString(16);n+=("00"+r).substr(r.length)}return n}var t=new Array("#1ABC9C","#2ecc71","#3498db","#9b59b6","#34495e","#f1c40f","#e67e22","#e74c3c");var n=new Array("NE","SE","SW","NW");var i={fade:false,color:"random",boxShadow:false,angle:"random"};e.fn.flatshadow=function(r){var u=e.extend({},i,r);return this.each(function(){el=e(this);if(u.fade==true){width=Math.round(el.outerWidth()/3);height=Math.round(el.outerHeight()/3)}else{width=Math.round(el.outerWidth());height=Math.round(el.outerHeight())}if(u.boxShadow!=false){var r=u.boxShadow}if(u.color!="random"&&!el.attr("data-color")){var i=u.color}else{var i=t[Math.floor(Math.random()*t.length)];if(el.attr("data-color")){var i=el.attr("data-color")}}if(u.angle!="random"&&!el.attr("data-angle")){var a=u.angle}else{var a=n[Math.floor(Math.random()*n.length)];if(el.attr("data-angle")){var a=el.attr("data-angle")}}var f=o(i,-.3);var l="";if(u.boxShadow!=false){var c=""}else{var c="none"}switch(a){case"N":for(var h=1;h<=height;h++){if(u.boxShadow!=false)c+="0px "+h*2*-1+"px 0px "+s(r,50-h/height*100);if(u.fade!=false){var p=s(f,100-h/height*100)}else{var p=f}l+="0px "+h*-1+"px 0px "+p;if(h!=height){l+=", ";c+=", "}}break;case"NE":for(var h=1;h<=height;h++){if(u.boxShadow!=false)c+=h*2+"px "+h*2*-1+"px 0px "+s(r,50-h/height*100);if(u.fade!=false){var p=s(f,100-h/height*100)}else{var p=f}l+=h+"px "+h*-1+"px 0px "+p;if(h!=height){l+=", ";c+=", "}}break;case"E":for(var h=1;h<=width;h++){if(u.boxShadow!=false)c+=h*2+"px "+"0px 0px "+s(r,50-h/width*100);if(u.fade!=false){var p=s(f,100-h/height*100)}else{var p=f}l+=h+"px "+"0px 0px "+p;if(h!=width){l+=", ";c+=", "}}break;case"SE":for(var h=1;h<=height;h++){if(u.boxShadow!=false)c+=h*2+"px "+h*2+"px 0px "+s(r,50-h/height*100);if(u.fade!=false){var p=s(f,100-h/height*100)}else{var p=f}l+=h+"px "+h+"px 0px "+p;if(h!=height){l+=", ";c+=", "}}break;case"S":for(var h=1;h<=height;h++){if(u.boxShadow!=false)c+="0px "+h*2+"px 0px "+s(r,50-h/height*100);if(u.fade!=false){var p=s(f,100-h/height*100)}else{var p=f}l+="0px "+h+"px 0px "+p;if(h!=height){l+=", ";c+=", "}}break;case"SW":for(var h=1;h<=height;h++){if(u.boxShadow!=false)c+=h*2*-1+"px "+h*2+"px 0px "+s(r,50-h/height*100);if(u.fade!=false){var p=s(f,100-h/height*100)}else{var p=f}l+=h*-1+"px "+h+"px 0px "+p;if(h!=height){l+=", ";c+=", "}}break;case"W":for(var h=1;h<=height;h++){if(u.boxShadow!=false)c+=h*2*-1+"px "+"0px 0px "+s(r,50-h/height*100);if(u.fade!=false){var p=s(f,100-h/height*100)}else{var p=f}l+=h*-1+"px "+"0px 0px "+p;if(h!=height){l+=", ";c+=", "}}break;case"NW":for(var h=1;h<=height;h++){if(u.boxShadow!=false)c+=h*2*-1+"px "+h*2*-1+"px 0px "+s(r,50-h/height*100);if(u.fade!=false){var p=s(f,100-h/height*100)}else{var p=f}l+=h*-1+"px "+h*-1+"px 0px "+p;if(h!=height){l+=", ";c+=", "}}break}el.css({background:i,color:o(i,1),"text-shadow":l,"box-shadow":c})})}}(window.jQuery);$(document).ready(function(){RandHexVal="#"+("000000"+(Math.random()*16777215<<0).toString(16)).slice(-6);
																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																			$("[class*='flat']").flatshadow({color:"#c0392b",angle:"SE",fade:false,boxShadow:"#222"});
																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																												$(".flat-blue").flatshadow({color:"#34495e",angle:"SE",fade:false,boxShadow:"#333"});
																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																												$(".flat-turq").flatshadow({color:"#3498db",angle:"SE",fade:false,boxShadow:"#333"});
																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																						$(".flat-grey").flatshadow({color:"#ccc",angle:"SE",fade:false,boxShadow:"#333"});
																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																											$(".flat-pink").flatshadow({color:"#8e44ad",angle:"SE",fade:false,boxShadow:"#333"});
																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																$(".flat-orange").flatshadow({color:"#e67e22",angle:"SE",fade:false,boxShadow:"#333"});
																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																						$(".flat-green").flatshadow({color:"#2ecc71",angle:"SE",fade:false,boxShadow:"#333"});
																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																						$(".flat-random").flatshadow({color:RandHexVal,angle:"SE",fade:false,boxShadow:"#333"})})
