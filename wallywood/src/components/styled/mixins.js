const Reset = ` 
margin: 0px;
padding: 0px;
box-sizing: border-box;
margin-block-start: 0em;
margin-block-end: 0em;
margin-inline-start: 0px;
margin-inline-end: 0px;
paddin-inline-start: 0px
`
const ClearList = `
	list-style-type: none;
	${Reset};	
`

export {Reset, ClearList}