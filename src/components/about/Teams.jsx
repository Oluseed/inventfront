import React from "react";
import { motion } from "framer-motion";
import team_image from "../../assets/images/team-image-1.png";

const data = [
  { id: 1, firstName: "John", lastName: "Doe", position: "CEO", photo: team_image },
  { id: 2, firstName: "John", lastName: "Doe", position: "Chief Operating Officer", photo: team_image },
  { id: 3, firstName: "John", lastName: "Doe", position: "Chief Technology Officer", photo: team_image },
];

const Teams = () => {
  return (
    <section className="grid place-content-center overflow-hidden">
      <div className="mt-5 mb-5 grid place-content-center gap-y-3">
        <h1 className="text-center font-clashDisplay font-medium text-3xl md:text-4xl">
          Management Team
        </h1>

        <div className="grid md:grid-cols-3 gap-6 place-items-center mt-5 mb-5 mx-10">
          {data.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <img src={member.photo} alt={`${member.firstName} ${member.lastName}`} />
              <div className="mt-1">
                <h1 className="font-clashDisplay text-xl font-medium text-[#070707]">
                  {member.firstName}{" "}
                  <span className="text-[#FF4C05]">{member.lastName}</span>
                </h1>
                <p className="font-inter text-[13.5px] text-[#5E5E5E]">{member.position}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
