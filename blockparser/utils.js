var me = module.exports;
me.bufEqual = function( buf1, buf2 ) {
  if ( buf1.length !== buf2.length ) {
    return false;
  }
  for ( var i = 0; i < buf1.length; i++ ) {
    if ( buf1[ i ] !== buf2[ i ] ) {
      return false;
    }
  }

  return true;
}
