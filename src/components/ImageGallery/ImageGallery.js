import React from "react";
import ImageGalleryItem from "../ImageGalleryItem";
import PropTypes from "prop-types";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ images, onModal }) => (
  <ul className={styles.ImageGallery}>
    {images.map(({ id, webformatURL, type, largeImageURL }) => (
      <li
        key={id}
        className={styles.ImageGalleryItem}
        onClick={() => onModal(largeImageURL)}
      >
        <ImageGalleryItem src={webformatURL} alt={type} />
      </li>
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ImageGallery;
