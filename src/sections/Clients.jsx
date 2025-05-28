import React from "react";
import ClientSlider, { BWClientSlider } from "./ClientSlider";
import { BorderedButton } from "@/components/Button";

const Clients = ({ data }) => {
  return (
    <section id="clients" className="clients">
      <div className="container">
        <div className="clients-header">
          <div className="clients-header-title">{data.title}</div>
          <div
            className="clients-header-subtext"
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
        </div>
      </div>
      <BWClientSlider data={data.clients[0]} />
      <div className="container">
        <div className="clients-cta">
          <BorderedButton link={"/clients"} text={"View All"} />
        </div>
      </div>
    </section>
  );
};

export default Clients;
