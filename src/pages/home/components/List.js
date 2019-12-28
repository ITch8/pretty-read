import React, { PureComponent } from 'react';
import {List,Icon, Avatar,Spin,Skeleton,BackTop } from 'antd';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

import InfiniteScroll from 'react-infinite-scroller';
// import { Link } from 'react-router-dom';

class BlogList extends PureComponent {

	handleInfiniteOnLoad= ()=>{
		console.log(`handleInfiniteOnLoad...`)
		this.props.showLoading(true);
		this.props.getMoreList(this.props.page);
	}

	
	render() {
		const { list,showMore,loading} = this.props;
		console.log(`list----${list}`)
		console.log(`showMore----${showMore}`)
		console.log(`loading----${loading}`)
		const IconText = ({ type, text }) => (
		  <span>
		    <Icon type={type} style={{ marginRight: 8 }} />
		    {text}
		  </span>
		);
		
		return (
			<InfiniteScroll
				pageStart={0}
				loadMore={this.handleInfiniteOnLoad}
				hasMore={!loading && showMore}
			>
				<List
					itemLayout="vertical"
					dataSource={list}
					renderItem={item => (
						<List.Item
							key={item.title}
							actions={[
								<IconText type="star-o" text="156" key="list-vertical-star-o" />,
								<IconText type="like-o" text="156" key="list-vertical-like-o" />,
								<IconText type="message" text="2" key="list-vertical-message" />,
							]}
							extra={
								<img
									width={152}
									alt="logo"
									src={item.image}
								/>
							}
						>
							<Skeleton loading={loading} active avatar>
								<List.Item.Meta
									title={<a href={item.href}>{item.title}</a>}
									description={item.description}
								/>
							</Skeleton>
						</List.Item>
					)}>
					{loading && showMore && (
						<div className="loading-container">
							<Spin />
						</div>
					)}
				</List>
				<BackTop />
			</InfiniteScroll>
		)
	}
}

const mapState = (state) => ({
	list: state.getIn(['home', 'articleList']),
	page: state.getIn(['home', 'articlePage']),
	showMore: state.getIn(['home', 'showMore']),
	loading: state.getIn(['home', 'loading'])
});

const mapDispatch = (dispatch) => ({
	getMoreList(page) {
		dispatch(actionCreators.getMoreList(page))
	},
	showLoading(showLoading) {
		dispatch(actionCreators.showLoading(true))
	}
})

export default connect(mapState, mapDispatch)(BlogList);