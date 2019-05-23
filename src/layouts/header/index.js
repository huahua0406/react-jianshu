import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    Addition,
    Button
} from './style';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';


class Header extends Component {

    getListArea () {
        const { focused, list, page , totalPage,  mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage} = this.props;
        const pageList = [];
        const jsList = list.toJS();
        if(jsList.length){
            for (let i = (page - 1) * 10; i < page * 10; i++) {
                if(jsList[i]){
                    pageList.push(
                        <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
                    )
                }
            }
        }

        if(focused||mouseIn){
            return (
                <SearchInfo onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}>
                    <SearchInfoTitle>热门搜索
                        <SearchInfoSwitch onClick={()=>{ handleChangePage(page, totalPage, this.spinIcon ) }}>
                            <i ref={(icon)=>this.spinIcon = icon} className="iconfont spin">&#xe851;</i> 换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        { pageList }
                    </SearchInfoList>
                </SearchInfo>
            )
        }else{
            return null
        }
    }

    render(){
        const { focused, handleInputFocus, handleInputBlur, list, login, logout  } = this.props;
        return (
            <HeaderWrapper className="header">
				<Logo/>
                <Nav>
                    <NavItem className="left active">
                        首页
                    </NavItem>
                    <NavItem className="left">下载APP</NavItem>
                    {
						login ?
							<NavItem onClick={logout} className='right'>退出</NavItem> :
							<Link to='/login'><NavItem className='right sign-in'>登陆</NavItem></Link>
					}
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition in={focused}
                        timeout={200}
                        classNames="slide">
                            <NavSearch
                            className={focused ? 'focused' : ''}
                            onFocus={() => handleInputFocus(list)}
                            onBlur={handleInputBlur}
                            />
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe609;</i>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Link to="/write">
                        <Button className="writting">
                            <i className="iconfont">&#xe62b;</i>写文章
                        </Button>
                    </Link>
                    <Button className="sign-up">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        // 获取数据的时候用get('header').get('focused')，或者getIn([])
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        login: state.getIn(['login', 'isLogin'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list){
            (list.size === 0)&&dispatch(actionCreators.getList());
            dispatch(actionCreators.serachFocus());
        },
        handleInputBlur(){
            dispatch(dispatch(actionCreators.serachBlur()));
        },
        handleMouseEnter(){
            dispatch(dispatch(actionCreators.mouseEnter()));
        },
        handleMouseLeave(){
            dispatch(dispatch(actionCreators.mouseLeave()));
        },
        handleChangePage(page, totalPage, spin){
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
            if(originAngle){
                originAngle =  parseInt(originAngle);
            }else{
                originAngle = 0;
            }

            spin.style.transform = `rotate(${originAngle + 360}deg)`;

            if(page < totalPage){
                dispatch(dispatch(actionCreators.changePage(page+1)));
            }else{
                dispatch(dispatch(actionCreators.changePage(1)));
            }
        },
        logout() {
			dispatch(loginActionCreators.logout());
		}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
