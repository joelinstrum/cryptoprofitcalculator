import React from 'react';

const CryptoListHeaders = () => {
  return <div className='row crypto__list'>
    <div className='crypto__list_header'>Name</div>
    <div className='crypto__list_header'>Price</div>
    <div className='crypto__list_header'>Change</div>
    <div className='crypto__list_header'>Market cap</div>
  </div> 
}

export default CryptoListHeaders;