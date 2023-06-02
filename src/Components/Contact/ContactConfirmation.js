import { Modal } from "Components/context/Modal";
import React from "react";
import snail from "../SiteImg/snail-transparent.png";
import xImg from "../SiteImg/Vector.png";
import { motion } from "framer-motion";

const ContactConfirmation = ({ setShowModal }) => {
  return (
    <Modal setShowModal={setShowModal}>
      <motion.div
        className="h-3/5 bg-[#FFF9F0] rounded-md flex flex-col items-center md:p-10 p-8 gap-10 w-3/4 text-center relative"
        initial={{ opacity: 0, y: "-100vh" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "100vh" }}
      >
        <img className="h-44 object-contain" src={snail} alt="logo" />
        <div className="bg-[#FFF9F0] md:text-xl text-md">
          Thank you for submitting a form! Our team will review and will be in
          touch with you soon!
        </div>
        <button
          className="absolute md:h-10 h-6 md:top-5 md:right-5 top-3 right-3 flex flex-col gap-1 items-center"
          onClick={() => setShowModal(false)}
        >
          <img src={xImg} className="h-full" />
          <span className="md:text-sm text-xs">Close</span>
        </button>
      </motion.div>
    </Modal>
  );
};

export default ContactConfirmation;
