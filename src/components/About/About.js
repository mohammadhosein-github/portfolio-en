import React from "react";
import Card from "./Card";

function About() {
  const about_data = [
    {
      title: "responsible",
      icon: <i className="far fa-handshake"></i>,
      des: (
        <p>
          delivering projects on time and creating a assuring, countable and
          professional connection with my client is my number one priority.
        </p>
      ),
    },
    {
      title: "eager to learn",
      icon: <i className="fas fa-book-reader"></i>,
      des: (
        <p>
          learning new web technologies and trends has been always enjoyable for
          me and i believe it is a very important part of my profession.
        </p>
      ),
    },
    {
      title: "accurate in details",
      icon: <i className="fas fa-laptop-code"></i>,
      des: (
        <p>
          details can make a project look much more unique in comparison to
          others, that's why i always try to be accurate in implementation...
        </p>
      ),
    },
  ];
  return (
    <section className="about-me my-section section-padding" id="about">
      <div className="container">
        <div className="col-12 title-container text-left p-0">
          <h3 className="my-title text-capitalize">about me</h3>
        </div>
        <div className="row text-left text-capitalize">
          {about_data.map((card) => (
            <Card card_info={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
