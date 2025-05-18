

const ContactPage = () => {
  return (
    <div className="px-[5%] py-10 space-y-16 bg-white text-gray-800">
      {/* First Section - Contact Info */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-2 text-left">
          <h3 className="text-xl font-semibold">📍 Office Address</h3>
          <a href="https://maps.app.goo.gl/aJgt42WT6jX79Uiu9" target="_blank">
            Jalil Biswas Point (4th Floor), Zero Point <br />
            (West side of Boro Mosque), Saheb Bazar, Rajshahi.
          </a>
        </div>
        <div className="space-y-2 text-center">
          <h3 className="text-xl font-semibold">📧 Email: </h3>
          <a href="mailto: info@ramitbd.com" target="_blank">
            info@ramitbd.com
          </a>
        </div>
        <div className="space-y-2 text-right">
          <h3 className="text-xl font-semibold"> 📞 Phone: </h3>
          <a href="tel:01766-358772" target="_blank">
            {" "}
            01766-358772{" "}
          </a>
        </div>
      </section>

      {/* Second Section - Google Map */}
      <section>
        <div className="w-full h-[400px]">
          <iframe
            title="RAM IT Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d764.052422727287!2d88.59940688427758!3d24.365076641212845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbefb0409beb51%3A0xf1f4a242c7eed04a!2sRAM%20IT!5e0!3m2!1sen!2sbd!4v1747567563148!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

        </div>
      </section>

      {/* Third Section - CTA + Contact Form */}
      <section className="text-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">
            Let's Build Something Great Together
          </h2>
          <p className="text-lg text-gray-600">
            Have a question, a project in mind, or just want to say hello? We'd
            love to hear from you. Our team is always ready to help you turn
            your ideas into reality.
          </p>
        </div>

      </section>
    </div>
  );
};

export default ContactPage;
