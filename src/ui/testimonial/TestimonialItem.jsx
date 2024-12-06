import PropTypes from "prop-types";

function TestimonialItem({ children, image, testimonyBy }) {
  return (
    <div className="p-4 h-full flex items-stretch">
      <div className="p-6 bg-customGray-100 rounded-[1rem]">
        <img src={image} alt={testimonyBy} />
        <div className="py-6 text-[1.4rem] font-light">{children}</div>
        <span className="text-[1.2rem]">- {testimonyBy}</span>
      </div>
    </div>
  );
}

TestimonialItem.propTypes = {
  children: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  testimonyBy: PropTypes.string.isRequired,
};

export default TestimonialItem;
