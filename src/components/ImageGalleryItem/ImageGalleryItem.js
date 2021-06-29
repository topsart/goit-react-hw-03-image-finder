import React from "react";
import PropTypes from "prop-types";
import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ id, src, alt, largeImageURL, onModal }) => (
  <li
    key={id}
    onClick={() => onModal(largeImageURL)}
    className={styles.ImageGalleryItem}
  >
    <img src={src} alt={alt} className={styles.ImageGalleryItemImage} />
  </li>
);

ImageGalleryItem.defaultProps = {
  alt: "photo",
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default ImageGalleryItem;
