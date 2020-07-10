import React, { useState, useEffect, useRef } from "react";
const imageList = {
  beach: {
    folderName: "Beach",
    imgList: ["Beach1", "Beach2", "Beach3", "Beach4", "Beach5", "Beach6"],
  },
  bird: {
    folderName: "Bird",
    imgList: [
      "Bird1",
      "Bird2",
      "Bird3",
      "Bird4",
      "Bird5",
      "Bird6",
      "Bird7",
      "Bird8",
    ],
  },
  food: {
    folderName: "Food",
    imgList: ["Food1", "Food2", "Food3", "Food4", "Food5", "Food6", "Food7"],
  },
  mountain: {
    folderName: "Mountain",
    imgList: [
      "mountain1",
      "mountain2",
      "mountain3",
      "mountain4",
      "mountain5",
      "mountain6",
      "mountain7",
      "mountain8",
    ],
  },
  "": {},
};
const ImageCard = (props) => {
  const [spansValue, setSpansValue] = useState(0);
  let imgRef = useRef();
  useEffect(() => {
    imgRef.current.addEventListener("load", () => {
      const height = imgRef.current && imgRef.current.clientHeight;
      const spans = Math.ceil(height / 10);
      setSpansValue(spans);
    });
  });
  return (
    <div style={{ gridRowEnd: `span ${spansValue}` }}>
      <img
        ref={imgRef}
        alt={`${props.folderName}-->${props.imgSrc}`}
        src={require(`../../assets/images/${props.folderName}/${props.imgSrc}.jpg`)}
      />
    </div>
  );
};
export default function SearchImage(props) {
  const heplerFunction = () => {
    try {
      const { folderName, imgList = [] } = imageList[props.searchedValue];
      return (
        <div className="imgList">
          {imgList.map((imgName, index) => {
            try {
              return (
                <ImageCard
                  key={index}
                  folderName={folderName}
                  imgSrc={imgName}
                />
              );
            } catch (error) {
              return null;
            }
          })}
        </div>
      );
    } catch (error) {
      return <div className="noData">No Image Found...</div>;
    }
  };
  return heplerFunction();
}
