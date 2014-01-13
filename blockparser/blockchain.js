var fs = require( 'fs' );
var utils = require( './utils' )
var me = module.exports;

var magicIdBuf = new Buffer( [ 0xf9, 0xbe, 0xb4, 0xd9 ] );
me.openFile = function( dirPath, callback ) {
  fs.readFile( dirPath, function( err, fileBuf ) {
    if ( err ) return callback( err )

    callback( null, fileBuf )
  } )
}

me.readNext = function( fileBuf ) {
  magicBuf = fileBuf.slice( 0, 4 )
  if ( !magicEquals( magicBuf ) ) {
    throw "Wrong magic bytes"
  }

  blockLength = fileBuf.readUint32LE( 4 )
  console.log( blockLength )
}

function magicEquals( magicBuf ) {
  if ( magicBuf.length !== 4 ) {
    return false
  }

  return utils.bufEqual( magicBuf, magicIdBuf )
}
