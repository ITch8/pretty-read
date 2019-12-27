import React from 'react';
import {HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button,SearchWrapper} from './style.js';
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import * as headerActions from '../../store/header/createAction';

//无状态组件
const Header = (props)=>{
	return(
		<HeaderWrapper>
			<Logo/>
			<Nav>
				<NavItem className='left active'>首页</NavItem>
				<NavItem className='left'>下载APP</NavItem>
				<NavItem className='right'>登陆</NavItem>
				<NavItem className='right'>
					<i className='iconfont'>&#xe636;</i>
				</NavItem>
				<SearchWrapper>
					<CSSTransition
						in={props.searchFocused}
						timeout={200}
						className='slide'
					>
						<NavSearch className={props.searchFocused ?'focused':''}
							onFocus={props.handleFocus}
							onBlur={props.handleBlur}
						></NavSearch>
					</CSSTransition>
					<i className={props.searchFocused ? 'focused iconfont':'iconfont'}>&#xe614;</i>
				</SearchWrapper>
			</Nav>
			<Addition>
				<Button className='writting'><i className='iconfont'>&#xe615;</i>写文章</Button>
				<Button className='reg'>注册</Button>
			</Addition>
		</HeaderWrapper>
	);
}

	const mapStateToProps = (state)=>{
		return {
			searchFocused: state.get('header').get('searchFocused')
		}
	}
	const mapDispathToProps = (dispath)=>{
		return {
			handleFocus(){
				dispath(headerActions.handleFocusAction());
			},
			handleBlur(){
				dispath(headerActions.handleBlurAction());
			}
		}
	}
	
export default connect(mapStateToProps,mapDispathToProps)(Header);
