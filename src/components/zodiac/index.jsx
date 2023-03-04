import "./zodiac.css";
import TextInner from './../textInner/index';
import AppButton from "../../common/button";

function Zodiac() {
    const imgZodiac = [
      {
        img: "http://zaib.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/08/icon-01.png",
        place: "image_1",
      },
      {
        img: "http://zaib.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/08/icon-12.png",
        place: "image_2",
      },
      {
        img: "http://zaib.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/08/icon-11.png",
        place: "image_3",
      },
      {
        img: "http://zaib.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/08/icon-10.png",
        place: "image_4",
      },
      {
        img: "http://zaib.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/08/icon-09.png",
        place: "image_5",
      },
      {
        img: "http://zaib.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/08/icon-07.png",
        place: "image_6",
      },
      {
        img: "http://zaib.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/08/icon-08.png",
        place: "image_7",
      },
      {
        img: "http://zaib.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/08/icon-06.png",
        place: "image_8",
      },
      {
        img: "http://zaib.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/08/icon-04.png",
        place: "image_9",
      },
      {
        img: "http://zaib.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/08/icon-03.png",
        place: "image_10",
      },
      {
        img: "http://zaib.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/08/icon-02.png",
        place: "image_11",
      },
      {
        img: "http://zaib.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/08/icon-05.png",
        place: "image_12",
      },
    ];
  return (
    <div className="with_background">
      <div className="zodiac_row_1 zodiac_row">
        <div className="left column"></div>
        <div className="right column">
          <TextInner
            child="Horoscope Forecast"
            last="Choose your Zodiac Sign"
            color="#fff"
          />
          <div className="et_pb_module et_pb_text et_pb_text_4  et_pb_text_align_left et_pb_bg_layout_light">
            <div className="et_pb_text_inner">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>
          </div>
          <div className="et_pb_button_module_wrapper et_pb_button_0_wrapper  et_pb_module ">
            <AppButton children="get started" btnType="button_1" htmlType="a" />
          </div>
        </div>
      </div>
      <div className="zodiac_row_2 zodiac_row">
        <div className="mode column">
          <div className="image_01">
            <span>
              <img
                src="http://zaib.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/08/illustration-01.png"
                alt=""
              />
            </span>
          </div>
          {imgZodiac.map((zodiac, index) => (
            <div className={`${zodiac.place} image_overlay`} key={index}>
              <span className="has-box-shadow-overlay">
                <div className="box-shadow-overlay" />
                <img src={zodiac.img} alt="" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Zodiac;
