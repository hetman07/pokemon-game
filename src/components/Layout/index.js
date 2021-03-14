import s from "./style.module.css";

const Layout = ({ title, description, colorBg, urlBg }) => {
  const layoutStyle = urlBg
    ? { backgroundImage: `url(${urlBg})` }
    : { backgroundColor: `${colorBg}` };

  console.log("colorBg", colorBg);
  return (
    <section className={s.root} style={layoutStyle}>
      <div className={s.wrapper}>
        <article>
          <div className={s.title}>
            <h3>{title}</h3>
            <span className={s.separator}></span>
          </div>
          <div className={`${s.desc} ${s.full}`}>
            <p>{description}</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Layout;
