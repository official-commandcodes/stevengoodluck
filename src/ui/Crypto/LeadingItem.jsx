import ContactButton from "../ContactButton";
import PropTypes from "prop-types";

function LeadingItem({ url, image, children, heading }) {
  return (
    <div>
      <img src={image} alt={heading} className="py-4" />
      <h3 className="font-semibold text-[38px]">{heading}</h3>
      <p className="text-[20px] text-white py-4">{children}</p>
      <ContactButton to={url} weight={true}>
        LinkedIn
      </ContactButton>
    </div>
  );
}

LeadingItem.propTypes = {
  children: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
};

export default LeadingItem;
