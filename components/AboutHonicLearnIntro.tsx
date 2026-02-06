import AnimateIn from "./AnimateIn";

export default function AboutHonicLearnIntro() {
  return (
    <AnimateIn className="container-fluid py-5" animation="fadeUp">
      <div className="container py-5">
        <div
          className="rounded p-5 mx-auto shadow-sm"
          style={{
            maxWidth: 900,
            backgroundColor: "rgba(255, 255, 255, 0.92)",
            color: "#091E3E",
            boxShadow: "0 0 0 1px rgba(9, 30, 62, 0.1), 0 4px 24px rgba(9, 30, 62, 0.08)",
            backgroundImage: "linear-gradient(160deg, rgba(9, 30, 62, 0.06) 0%, rgba(255,255,255,0.97) 40%, rgba(9, 30, 62, 0.04) 100%)",
          }}
        >
          <h2 className="h4 fw-bold mb-4" style={{ color: "#091E3E" }}>
            About HonicLearn
          </h2>
          <p className="mb-4 mb-lg-4" style={{ color: "#091E3E", lineHeight: 1.7 }}>
            HonicLearn is an education-focused innovation department established to bridge the gap between theoretical education and hands-on, practical learning in Tanzania. Operating under Honic Company Limited, HonicLearn designs and manufactures curriculum-based practical learning kits and skills development tools in Science, Engineering, and Technology.
          </p>
          <p className="mb-0" style={{ color: "#091E3E", lineHeight: 1.7 }}>
            By providing practical, hands-on educational tools, HonicLearn transforms students from passive learners into confident creators and problem-solvers, nurturing practical intelligence, creativity, and technical skills that empower learners to tackle real-world challenges.
          </p>
        </div>
      </div>
    </AnimateIn>
  );
}
