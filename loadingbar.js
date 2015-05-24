var loadingBar = {
		el: null,
		init: function() {
			loadingBar.el = document.createElement( 'div' );
			loadingBar.el.id = 'loadingbar';
			loadingBar.el.style.cssText = 'position:fixed;top:0;left:0;display:block;height:1px;width:0%;background:#00B8D4;transition:1s width;-webkit-transition:1s width;-moz-transition:1s width;-ms-transition:1s width;z-index:99999';
			document.body.appendChild( loadingBar.el );
		},
		setProgress: function( p ) {
			if( p >= 0 && p <= 100 ) {
				loadingBar.el.style.width = p + '%';
				loadingBar.onChange(p);
			}
		},
		// alias of setProgress
		prog: function( p ) {
			loadingBar.setProgress( p )
		},
		inc: function( ) {
			var pNow = loadingBar.el.style.width.slice(0,-1);
			loadingBar.setProgress( ++pNow );
		},
		dec: function( ) {
			var pNow = loadingBar.el.style.width.slice(0,-1);
			loadingBar.setProgress( --pNow );
		},
		color: function( clr ) {
			loadingBar.el.style.background = '#' + clr;
		},
		height: function( h ) {
			loadingBar.el.style.height = h + 'px';
		},
		onChange: function ( val ) {}
	}