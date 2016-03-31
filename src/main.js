( function() {

  'use strict';

  let canvasSize = 480.0;

  let image = new Image();

  // ---

  file.onchange = function( _event ) {
    let files = file.files;

    let fileReader = new FileReader();
    fileReader.onload = function() {
      image.src = fileReader.result;
      update();
    }
    fileReader.readAsDataURL( files[ 0 ] );
  }

  // ---

  let context = canvas.getContext( '2d' );

  let catColor = function( _theta ) {
    let r = parseInt( Math.cos( _theta ) * 127 + 127 );
    let g = parseInt( Math.cos( _theta + Math.PI / 3.0 * 2.0 ) * 127 + 127 );
    let b = parseInt( Math.cos( _theta + Math.PI / 3.0 * 4.0 ) * 127 + 127 );
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  }

  let beginTime = +new Date();

  let update = function() {
    let time = ( +new Date - beginTime ) * 0.01;

    for ( let iy = 0; iy < 20; iy ++ ) {
      for ( let ix = 0; ix < 20; ix ++ ) {
        let len = Math.sqrt( Math.pow( ( ix - 9.5 ), 2.0 ) + Math.pow( ( iy - 9.5 ), 2.0 ) );
        context.fillStyle = catColor( len - time );

        let x = ix * 24;
        let y = iy * 24;
        context.fillRect( x, y, 24, 24 );
      }
    }

    let max = Math.max( image.width, image.height );

    let size = 0.6 + Math.sin( time / 2.0 ) * 0.1;
    let wid = image.width / max * size * canvasSize;
    let hei = image.height / max * size * canvasSize;
    context.drawImage(
      image,
      ( canvasSize - wid ) * 0.5,
      ( canvasSize - hei ) * 0.5,
      wid,
      hei
    );

    requestAnimationFrame( update );
  }

} )();
