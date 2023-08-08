import Image from "next/image";
import SimpleStyle from "./simple_box.module.css";

const SimpleBox = ({
  title,
  text,
  icon,
  iconAlt = "technologies I work with icon",
}: {
  title: string;
  text: string;
  icon: string;
  iconAlt?: string;
}) => {
  return (
    <>
      <div
        className={
          "d-flex align-items-start justify-content-between  " +
          SimpleStyle.container
        }
      >
        <section>
          <Image src={icon} width={40} height={40} alt={iconAlt} />
        </section>
        <section
          className={
            "d-flex align-items-start justify-content-start flex-dir-column " + SimpleStyle["sec-2"]
          }
        >
          <h3>{title}</h3>
          <p className={SimpleStyle.text}>{text}</p>
        </section>
      </div>
    </>
  );
};

export default SimpleBox;
