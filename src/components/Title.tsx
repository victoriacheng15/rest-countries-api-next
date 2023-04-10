function Title({ title, classes }: { title: string, classes: string }) {
  return <h2 className={`font-extrabold italic ${classes}`}>{title}</h2>;
}

export default Title;
