const Footerdentist = () => {
  return (
    <>
      <div className="relative  mt-10 px-0 ">
        <div style={{ width: "100%", height: "500px" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.2608485231756!2d-73.22856368464486!3d-12.078418845740894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDA0JzQzLjMiUyA3M8KwMTMnMzQuOCJX!5e0!3m2!1sen!2s!4v1623423456789!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div
          style={{
            backgroundColor: "black",
            color: "white",
            textAlign: "center",
            padding: "10px 0",
          }}
        >
          <p style={{ margin: 0 }}>Diseñado por Uncoder.com.ar</p>
        </div>
      </div>
    </>
  );
};

export default Footerdentist;
