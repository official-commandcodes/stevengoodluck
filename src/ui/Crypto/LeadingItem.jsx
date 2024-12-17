import ContactButton from "../ContactButton";
import PropTypes from "prop-types";

import { useContactContext } from "../../context/ContactContext";

function LeadingItem({ image, children, heading }) {
  const { handleContact } = useContactContext();

  return (
    <div>
      <img src={image} alt={heading} className="py-4" />
      <h3 className="font-semibold text-[24px] md:text-[38px]">{heading}</h3>
      <p className="text-[16px] md:text-[20px] text-white py-4">{children}</p>
      <ContactButton handleContact={handleContact} weight={true}>
        LinkedIn
      </ContactButton>
    </div>
  );
}

LeadingItem.propTypes = {
  children: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
};

export default LeadingItem;
