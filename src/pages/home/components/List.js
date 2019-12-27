import React, { PureComponent } from 'react';
import {List,Icon,message, Avatar, Spin} from 'antd';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

import InfiniteScroll from 'react-infinite-scroller';
// import { Link } from 'react-router-dom';

class BlogList extends PureComponent {
	
	constructor(props) {
	    super(props);
		this.state = {
			data: [{
			"href": "http://ant.design",
			"title": "ant design part ",
			"avatar": "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
			"description": "Ant Design, a design language for background applications, is refined by Ant UED Team.",
			"content": "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
		}, {
			"href": "http://ant.design",
			"title": "ant design part ",
			"avatar": "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
			"description": "Ant Design, a design language for background applications, is refined by Ant UED Team.",
			"content": "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
		}, {
			"href": "http://ant.design",
			"title": "ant design part ",
			"avatar": "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
			"description": "Ant Design, a design language for background applications, is refined by Ant UED Team.",
			"content": "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
		}, {
			"href": "http://ant.design",
			"title": "ant design part ",
			"avatar": "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
			"description": "Ant Design, a design language for background applications, is refined by Ant UED Team.",
			"content": "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
		}, {
			"href": "http://ant.design",
			"title": "ant design part ",
			"avatar": "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
			"description": "Ant Design, a design language for background applications, is refined by Ant UED Team.",
			"content": "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
		}, {
			"href": "http://ant.design",
			"title": "ant design part ",
			"avatar": "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
			"description": "Ant Design, a design language for background applications, is refined by Ant UED Team.",
			"content": "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
		}],
			loading: false,
			hasMore: true,
		}
		
	}
	
	
	
	handleInfiniteOnLoad(){
		 let { data } = this.state;
		    this.setState({
		      loading:true,
		    });
			
			setTimeout(()=>{
				this.setState({
					data,
				  loading: false,
				});
			},2000)
			
		    if (data.length > 14) {
		      message.warning('Infinite List loaded all');
		      this.setState({
		        hasMore: false,
		        loading: false,
		      });
		      return;
		    }
			
			
			
	}
	
	render() {
		const { data} = this.props;
		
		const IconText = ({ type, text }) => (
		  <span>
		    <Icon type={type} style={{ marginRight: 8 }} />
		    {text}
		  </span>
		);
		
		return (
		<div className="demo-infinite-container">
		        <InfiniteScroll
		          initialLoad={false}
		          pageStart={0}
		          loadMore={this.handleInfiniteOnLoad}
		          hasMore={!this.state.loading && this.state.hasMore}
		          useWindow={false}
		        >
			<List
				dataSource={data}
				renderItem={item => (
				  <List.Item key={item.id}>
					<List.Item.Meta
					  avatar={
						<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
					  }
					  title={<a href="https://ant.design">{item.name.last}</a>}
					  description={item.email}
					/>
					<div>Content</div>
				  </List.Item>
				)}
			  >
				{this.state.loading && this.state.hasMore && (
				  <div className="demo-loading-container">
					<Spin />
				  </div>
				)}
			  </List>
			  </InfiniteScroll>
			</div>
		)
	}
}

const mapState = (state) => ({
	list: state.getIn(['home', 'articleList']),
	page: state.getIn(['home', 'articlePage'])
});

const mapDispatch = (dispatch) => ({
	getMoreList(page) {
		dispatch(actionCreators.getMoreList(page))
	}
})

export default connect(mapState, mapDispatch)(BlogList);