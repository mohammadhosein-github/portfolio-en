import React from "react";

function Contact() {
  return (
    <section className="contact section-padding my-section" id="contact">
      <div className="container">
        <div className="col-12 text-center title-container">
          <h3 className="my-title text-capitalize">contact me</h3>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-3">
            <div className="icons">
              <p className="email">
                <i className="fa fa-envelope"></i>
                Mohammadhosein.forbusiness@gmail.com
              </p>
              <p className="phone-number">
                <i className="fa fa-phone"></i>
                0903-3562044
              </p>
            </div>
          </div>

          <div className="col-lg-5">
            <form
              action="https://formspree.io/f/xbjqybep"
              method="POST"
              className="form-group"
            >
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                required
                className="form-control"
              />
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                required
                className="form-control"
              />
              <textarea
                name="message"
                required
                className="form-control"
                placeholder="Message"
                rows="4"
              />
              <div className="btn-container text-center">
                <button
                  type="submit"
                  className="btn btn-primary my-btn text-capitalize"
                >
                  send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
