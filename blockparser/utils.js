var me = module.exports;

me.bufEqual = function( buf1, buf2 ) {
  if ( buf1.length !== buf2.length ) {
    return false;
  }
  for ( var i = 0; i < buf1.length; i++ ) {
    if ( buf1[ i ] !== buf2[ i ] ) {
      console.error( magicBuf, magicIdBuf )
      return false;
    }
  }

  return true;
}

me.initFileBuf = function( fileBuf ) {
  fileBuf.filePointer = 0
  return fileBuf;
}
me.readMagic = function( fileBuf ) {

  var magicBuf = fileBuf.slice( fileBuf.filePointer, fileBuf.filePointer + 4 )
  fileBuf.filePointer += 4;
  magicBuf.filePointer = 0;
  return magicBuf
}

me.readNext = function( fileBuf, offset ) {
  var nextBuf = fileBuf.slice( fileBuf.filePointer, fileBuf.filePointer + offset )
  fileBuf.filePointer += offset
  nextBuf.filePointer = 0
  return nextBuf
}

me.readUInt32LE = function( fileBuf ) {
  var uint32 = fileBuf.readUInt32LE( fileBuf.filePointer )
  fileBuf.filePointer += 4
  return uint32
}
