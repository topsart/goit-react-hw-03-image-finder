import React from "react";
import ImageGalleryItem from "../ImageGalleryItem";
import PropTypes from "prop-types";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ images, onModal }) => (
  <ul className={styles.ImageGallery}>
    {images.map(({ id, webformatURL, type, largeImageURL }) => (
      <ImageGalleryItem
        key={id}
        src={webformatURL}
        alt={type}
        largeImageURL={largeImageURL}
        onModal={onModal}
      />
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
