import PropTypes from 'prop-types';
import { Swiper } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';

SwiperCore.use([Pagination]);

const Slider = ({ items, render }) => {
  return (
    <div>
      <Swiper spaceBetween={20} pagination={{ clickable: true }}>
      {items.map(render)}
      </Swiper>
    </div>
  );
};

Slider.propTypes = {
  items: PropTypes.array.isRequired,
  render: PropTypes.func.isRequired
};

export default Slider;
