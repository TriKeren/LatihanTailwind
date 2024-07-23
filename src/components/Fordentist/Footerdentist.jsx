const Footerdentist = () => {
  return (
    <>
      <div className="relative px-0  ">
        <div style={{ width: "100%", height: "500px" }}>
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31580.96659085482!2d113.5221763743164!3d-8.340420099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd684ba6553d04f%3A0x2b551aebb536af00!2sKlinik%20Madinah!5e0!3m2!1sid!2sid!4v1717057667315!5m2!1sid!2sid"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
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
