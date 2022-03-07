import "./style.scss";

type PageTitleType = {
  text: string;
};

export const PageTitle: React.FC<PageTitleType> = ({ text }) => {
  return <h1 className="title">{text}</h1>;
};
