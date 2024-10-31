import React from "react";
import "./info.scss";
import Button from "./../Button/Button";
const info = {
  firstName: "Vu",
  lastName: "Xuan An",
  birthday: "26",
  sex: "man",
  nation: "Vietnam",
  address: "Hai Phong city",
  phone: "0705882717",
  email: "vuxuanan1998@gmail.com",
  facebook: "https://www.facebook.com/VuXuanAn204",
  git: "https://github.com/VuXuanAn1998",
  language: "Vietnamese, English",
};
const card = [
  {
    title: "7",
    span: "Projects",
  },
  {
    title: "2",
    span: "Years of experience",
  },
];
const Info = () => {
  return (
    <div className="info">
      <div className="info__basic" data-aos="fade-up-right">
        <h3>Basic information</h3>
        <ul className="info-list">
          <li>
            <span>Surname: </span>
            {info.firstName}
          </li>
          <li>
            <span>Name: </span>
            {info.lastName}
          </li>
          <li>
            <span>Date of birth: </span>
            {info.birthday}
          </li>
          <li>
            <span>Gender: </span>
            {info.sex}
          </li>
          <li>
            <span>Nationality: </span>
            {info.nation}
          </li>
          <li>
            <span>Current address: </span>
            {info.address}
          </li>
          <li>
            <span>Telephone number: </span>
            {info.phone}
          </li>
          <li>
            <span>Facebook: </span>
            {info.facebook}
          </li>
          <li>
            <span>Language: </span>
            {info.language}
          </li>
          <li>
            <span>Email: </span>
            {info.email}
          </li>
        </ul>
        <Button>
          <a
            href="https://drive.google.com/file/d/14BNcLxvB7DAkVSYYgVbuBf9fup7E4eNB"
            rel="noopener"
            download
          >
            <span className="btn-text">Download resume</span>
            <span className="btn-icon">
              <i className="bx bxs-download"></i>
            </span>
          </a>
        </Button>
      </div>
      <div className="info__more" data-aos="fade-up-left">
        {card.map((item, i) => (
          <div className="info__more__card" key={i}>
            <h3>
              {item.title}
              <i className="bx bx-plus bx-rotate-90"></i>
            </h3>
            <p>
              {item.text} <span>{item.span}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Info;
