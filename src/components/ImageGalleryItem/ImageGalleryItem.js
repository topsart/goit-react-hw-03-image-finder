import React from "react";
import PropTypes from "prop-types";
import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ src, alt }) => (
  <img src={src} alt={alt} className={styles.ImageGalleryItemImage} />
);

ImageGalleryItem.defaultProps = {
  alt: "photo",
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default ImageGalleryItem;
