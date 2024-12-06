import PropTypes from "prop-types";
import ContactButton from "./ContactButton";

function Growth({ heading, image, children }) {
  return (
    <div>
      <div className="w-full h-[65%] overflow-hidden" style={{ borderRadius: "1.5rem" }}>
        <img src={image} alt={heading} className="w-full h-full object-cover" />
      </div>

      <div className="h-[35%] flex flex-col justify-between pt-4">
        <h3 className="font-bold text-[1.8rem]">{heading}</h3>
        <p className="text-[1.2rem] py-3">{children}</p>

        <div className="w-fit">
          <ContactButton>More info</ContactButton>
        </div>
      </div>
    </div>
  );
}

Growth.propTypes = {
  heading: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Growth;
