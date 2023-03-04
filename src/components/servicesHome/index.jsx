import React from 'react'
import AppButton from '../../common/button';
import AppCard from '../../common/card';

function ServicesHome() {
  return (
    <div className="et_pb_section et_pb_section_2 et_pb_with_background et_section_regular">
      <div className="et_pb_row et_pb_row_2">
        <div className="et_pb_column et_pb_column_4_4 et_pb_column_2 et_pb_css_mix_blend_mode_passthrough et-last-child">
          <div className="et_pb_module et_pb_text et_pb_text_2 et_pb_text_align_left et_pb_bg_layout_light">
            <div className="et_pb_text_inner">
              <h3>Services</h3>
              <h2>My Services</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="et_pb_row et_pb_row_3">
        <AppCard
          children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
          img="/assets/images/illustration-05.png"
          text="Crystall Ball Reading"
          textInner="Orb Study"
          cardType="child"
          btnType="button_0"
        />
        <AppCard
          children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
          img="/assets/images/astrologist-illustrations-15.png"
          text="Personal Consultation"
          textInner="Divine Power"
          cardType="lastChild"
          btnType="button_0"
        />
      </div>
      <div className="et_pb_row et_pb_row_4">
        <AppCard
          children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
          img="http://zaib.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/08/astrologist-illustrations-07.png"
          text="Crystall Ball Reading"
          textInner="Orb Study"
          cardType="child"
          btnType="button_0"
        />
        <AppCard
          children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
          img="/assets/images/astrologist-illustrations-08.png"
          text="Personal Consultation"
          textInner="Divine Power"
          cardType="lastChild"
          btnType="button_0"
        />
      </div>
      <div className="et_pb_row et_pb_row_5">
        <div className="et_pb_column et_pb_column_4_4 et_pb_column_7 et_pb_css_mix_blend_mode_passthrough et-last-child">
          <div className="et_pb_button_module_wrapper et_pb_button_4_wrapper et_pb_button_alignment_center et_pb_module">
            <AppButton
              children="Book a Free Consultation"
              btnType="button_1"
              htmlType="a"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesHome