var utils = require( './blockparser/utils' )
var dirPath = '/Users/alumn/projects/bitcoinmafia/blockchain-read-only/blk00000.dat'
var blockchain = require( './blockparser/blockchain' )

blockchain.blockchain( dirPath, function( err, fileBuf ) {
  if ( err ) throw err;

  blockchain.readNext( fileBuf )
} )
