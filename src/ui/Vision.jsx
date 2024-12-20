import PropTypes from "prop-types";

function Vision({ title, children }) {
  return (
    <div className="md:basis-5/12 lg:basis-0 bg-primary-100 py-10 px-8 lg:py-16 lg:px-12">
      <h3 className="text-[16px] md:text-[18px] lg:text-[24px] font-[600] pb-6 lg:pb-10">{title}</h3>
      <p className="capitalize font-[400]">{children}</p>
    </div>
  );
}

Vision.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Vision;
