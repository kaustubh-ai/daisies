const Icon = ({id, stroke, strokeWidth, fill, width, height}) => (
	<svg className={`${stroke} ${strokeWidth} ${fill}`} width={width} height={height}>
		<use href={`sprite.svg#${id}`}/>
	</svg>
);

Icon.defaultProps = {
	stroke: 'black',
	fill: 'none',
	width: 16,
	height: 16
};

export default Icon;
