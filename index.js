var utils = require( './blockparser/utils' )
var dirPath = '/Users/alumn/projects/bitcoinmafia/blockchain-read-only/blk00000.dat'
var blockchain = require( './blockparser/blockchain' )

blockchain.openFile( dirPath, function( err, fileBuf ) {
  if ( err ) throw err;

  for ( var i = 0; true; i++ ) {
    console.log( i )
    try {
      var rawBlockBuf = blockchain.readNextBlock( fileBuf )
    } catch ( err ) {
      console.error( err )
      break
    }

  }
} )
