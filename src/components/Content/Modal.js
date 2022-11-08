import React from "react";
import ReactDOM from "react-dom";
import close from "../assets/close.svg";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const PortalModal = ({ isOpen, onClose }) => {
  const Navigate = useNavigate();

  const schema = yup.object().shape({
    firstName: yup.string().required("skriv dit navn"),

    email: yup
      .string()
      .email("Invalid Email Format")
      .required("Skriv din Email"),
    subject: yup
      .string()
      .email("Invalid Email Format")
      .required("Hvad skal vi vide?"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    Navigate("/");

    console.log(onSubmit);
  };

  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="closebox">
        <div className="closer">
          <div className="div"></div>
          <img src={close} onClick={onClose} alt="" />
        </div>
      </div>
      <form className="formbox" onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input
          id="firstName"
          type="text"
          placeholder="Your name"
          {...register("firstName")}
        />
        <span>{errors.firstName?.message}*</span>
        <label>Email</label>
        <input type="email" name="" id="email" placeholder="Your Email" />
        <span>{errors.email?.message}*</span>
        <label>Subject</label>
        <input type="text" placeholder="Your subject" />
        <span>{errors.subject?.message}*</span>
        <label>Message</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Leave a Message for us here"
        ></textarea>
        <input type="submit" value="Submit" />
      </form>
    </div>,
    document.body
  );
};

export default PortalModal;
