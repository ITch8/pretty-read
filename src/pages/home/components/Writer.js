import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Card,Avatar ,List,Button  } from 'antd';
import { WriterWrapper } from '../style';
import {actionCreators} from "../store";

class Writer extends PureComponent {

	render() {
		const {usersList,changeUsers} = this.props;
		return (
			<WriterWrapper>
				<Card title="推荐作者" extra={<Button type="dashed" icon="sync" onClick={changeUsers}>换一批</Button>} style={{ width: 300 }}>
					<List
						itemLayout="horizontal"
						split={false}
						dataSource={usersList}
						renderItem={item => (
							<List.Item>
								<List.Item.Meta
									avatar={<Avatar src={item.avatar_source} />}
									title={<a href="/">{item.nickname}</a>}
									description={"写了728.1k字 · 24.6k喜欢"}
								/>
							</List.Item>
						)}
					/>
				</Card>
			</WriterWrapper>
		)
	}
}

const mapState = (state) => ({
	usersList: state.getIn(['home', 'usersList'])
})

const mapDispatch = (dispatch) => ({
	changeUsers() {
		dispatch(actionCreators.changeUsersInfo());
	},
});


export default connect(mapState, mapDispatch)(Writer);
