import React from "react";
import ImageGalleryItem from "../ImageGalleryItem";

const ImageGallery = ({ images, onModal }) => (
  <ul className="ImageGallery">
    {images.map(({ id, webformatURL, type, largeImageURL }) => (
      <li
        key={id}
        className="ImageGalleryItem"
        onClick={() => onModal(largeImageURL)}
      >
        <ImageGalleryItem src={webformatURL} alt={type} />
      </li>
    ))}
  </ul>
);

export default ImageGallery;
