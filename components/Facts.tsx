import AnimateIn from "./AnimateIn";

export default function Facts() {
  const items = [
    {
      icon: "fa fa-users",
      title: "Happy Clients",
      value: "12345",
      primary: true,
      delay: 0.1,
    },
    {
      icon: "fa fa-check",
      title: "Projects Done",
      value: "12345",
      primary: false,
      delay: 0.3,
    },
    {
      icon: "fa fa-award",
      title: "Win Awards",
      value: "12345",
      primary: true,
      delay: 0.6,
    },
  ];

  return (
    <div className="container-fluid facts py-5 pt-lg-0">
      <div className="container py-5 pt-lg-0">
        <div className="row gx-0">
          {items.map((item, i) => (
            <AnimateIn key={i} className="col-lg-4" animation="zoomIn" delay={item.delay}>
              <div
                className={`shadow d-flex align-items-center justify-content-center p-4 ${item.primary ? "bg-primary" : "bg-light"}`}
                style={{ height: 150 }}
              >
                <div
                  className={`d-flex align-items-center justify-content-center rounded mb-2 ${item.primary ? "bg-white" : "bg-primary"}`}
                  style={{ width: 60, height: 60 }}
                >
                  <i
                    className={`${item.icon} ${item.primary ? "text-primary" : "text-white"}`}
                  />
                </div>
                <div className="ps-4">
                  <h5 className={item.primary ? "text-white mb-0" : "text-primary mb-0"}>
                    {item.title}
                  </h5>
                  <h1 className={item.primary ? "text-white mb-0" : "mb-0"}>
                    {item.value}
                  </h1>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </div>
  );
}
