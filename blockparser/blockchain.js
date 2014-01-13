var fs = require( 'fs' );
var utils = require( './utils' )

var me = module.exports;

var magicIdBuf = new Buffer( [ 0xf9, 0xbe, 0xb4, 0xd9 ] );
me.openFile = function( dirPath, callback ) {
  fs.readFile( dirPath, function( err, fileBuf ) {
    if ( err ) {
      return callback( err )
    }

    fileBuf = utils.initFileBuf( fileBuf )
    callback( null, fileBuf )
  } )
}

me.readNextBlock = function( fileBuf ) {
  var magicBuf = utils.readMagic( fileBuf )

  if ( !magicEquals( magicBuf ) ) {
    throw "Wrong magic bytes"
  }

  var blockLength = utils.readUInt32LE( fileBuf )

  return utils.readNext( fileBuf, blockLength )
}

function magicEquals( magicBuf ) {

  if ( magicBuf.length !== 4 ) {
    return false
  }

  return utils.bufEqual( magicBuf, magicIdBuf )
}
