import React from "react";
import Title from "../Title";
export default function Contact() {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <Title title="bizimle İletişime geçin" />
          <form
            className="mt-5"
            action="https://formspree.io/kilicasamed06@gmail.com"
            method="POST"
          >
            {/* first */}
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                className="form-control"
                placeholder="isminiz"
              />
            </div>
            {/* email */}
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="email@email.com"
              />
            </div>
            {/* subject */}
            <div className="form-group">
              <input
                type="text"
                name="subject"
                className="form-control"
                placeholder="mesaj konusu"
              />
            </div>
            {/* message */}
            <div className="form">
              <textarea
                name="message"
                className="form-control"
                rows="10"
                placeholder="mesajınızı buraya yazınız."
              />
            </div>
            {/* submit */}
            <div className="form-group mt-3">
              <input
                type="submit"
                value="Gönder"
                className="form-control bg-primary text-white"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
