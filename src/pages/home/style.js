import styled from 'styled-components';

export const HomeWrapper = styled.div`
	width: 960px;
	margin: 0 auto;
	padding: 50px 0;
        .loading-container {
          position: absolute;
          bottom: 40px;
          width: 100%;
          text-align: center;
        }
        .ant-list-vertical .ant-list-item-meta-title{
                font-weight: 700;
                font-size: 18px;
        }
`;

export const HomeLeft = styled.div`
	float: left;
	margin-left: 15px;
	padding-top: 30px;
	width: 625px;
	.banner-img {
		width: 625px;
		height: 270px;
	}
`;

export const HomeRight = styled.div`
	width: 280px;
	float: right;
`;

export const RecommendWrapper = styled.div`
	margin: 30px 0;
	width: 280px;
`;

export const RecommendItem = styled.div`
	background: url(${(props) => props.imgUrl});
	background-size: contain;
    width: 100%;
    min-height: 50px;
    margin-bottom: 6px;
    border-radius: 4px;
`;

export const WriterWrapper = styled.div`
	width: 278px;
	border-radius: 3px;
	height: 300px;
	line-height: 300px;
	text-align: center;
	    .ant-card-head-title{
            text-align: left;
            font-size: 14px;
            color: #969696;
	    }
	    .ant-card-body{
	        padding:10px;
	    }
	    .ant-list-item{
	        padding:5px 0;
	    }
	    .ant-list-item-meta-title{
	         text-align: left;
	    }
	    .ant-list-item-meta-description{
	        margin-top: 2px;
            font-size: 12px;
            color: #969696;
            text-align: left;
	    }
	    .ant-btn-link{
	        color:#969696;
	    }
	    .ant-btn{
            font-size:12px;
            padding: 0 5px;
        }
`;
