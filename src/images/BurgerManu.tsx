import React from 'react';
import styled from 'styled-components';

const BurgerMaenu = (props) => (
	<SVG
		width={30}
		height={30}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<g
			style={{
				mixBlendMode: 'darken',
			}}
			fill="#FF5757"
			fillOpacity={0.9}
		>
			<rect y={0} width={30} height={5} rx={3} />
			<rect y={10} width={30} height={5} rx={3} />
			<rect y={20} width={30} height={5} rx={3} />
		</g>
	</SVG>
);

export default BurgerMaenu;

const SVG = styled.svg`
    margin-top: 13px;
    margin-left: 1px;
`;