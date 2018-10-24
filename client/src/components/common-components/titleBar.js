import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'antd'
import { createHistory } from 'history'
const history = createHistory()
/**
 * 导航栏
 */
export default class titleBar extends PureComponent {
	static defaultProps={
		ifBackShow:true
	};
	static propTypes={
		ifBackShow:PropTypes.bool,
		titleText:PropTypes.string
	};
	goBack=()=> {
		history.goBack()
	};
	render() {
		const {titleText} = this.props
		return (
			<div>

				<div className="title-bar h-80 t-tc color-fff">
					<Row>
						<Col span={2}>
							{this.props.ifBackShow
								? <span onClick={this.goBack}>&lt;</span>
								: ''
							}
						</Col>
						<Col span={20}>{titleText}</Col>
						<Col span={2}></Col>
					</Row>
				</div>

			</div>
		)
	}
}