import s from "./style.module.css";

//const HeaderBlock = (props) => {
const HeaderBlock = ({ title }) => {
  // console.log("props", title);
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1 className={s.header}>{title}</h1>
        <p className={s.paragraph}>Simple Triple Triad Card Game</p>
      </div>
    </div>
  );
};

export default HeaderBlock;
