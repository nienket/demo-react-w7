import React from 'react'
import Banner from '../../../components/banner';
import CoverFooter from '../../../components/coverFooter';
import Sticky from '../../../components/sticky';
import Zodiac from '../../../components/zodiac';

function Landing() {
  return (
    <div className="et_builder_inner_content et_pb_gutters3">
      <Banner />
      <Sticky/>
      <Zodiac />
      <CoverFooter />
    </div>
  );
}

export default Landing