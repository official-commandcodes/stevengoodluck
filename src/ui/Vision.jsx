import PropTypes from "prop-types";

function Vision({ title, children }) {
  return (
    <div className="bg-primary-100 py-16 px-12">
      <h3 className="text-[24px] font-[600] pb-10">{title}</h3>
      <p className="capitalize font-[400]">{children}</p>
    </div>
  );
}

Vision.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Vision;
