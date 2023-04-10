function Title({ title, classes }: TitleProps) {
	return <h2 className={`font-extrabold italic ${classes}`}>{title}</h2>;
}

export default Title;
