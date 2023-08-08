import Image from "next/image";
import CommentBoxStyle from "./comment_box.module.css";

const CommentBox = ({
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
          CommentBoxStyle.container
        }
      >
        <section>
                <img className={CommentBoxStyle['avatar-hexagon']} src={"https://v3dboy.ir/previews/wordpress/paydar/wp-content/uploads/2021/06/avatar-4-160x160.jpg"} width={70} height={70} alt={iconAlt} />
        </section>
        <section
          className={
            "d-flex align-items-start justify-content-start flex-dir-column " +
            CommentBoxStyle["sec-2"]
          }
        >
            <div className="d-flex align-items-center justify-content-between w-100">
                <h3>{title}</h3>
                <Image src="/img/quotation.svg" width={30} height={30} alt="quotation" />
            </div>
          <p className={CommentBoxStyle.text}>{text}</p>
        </section>
      </div>
    </>
  );
};

export default CommentBox;
