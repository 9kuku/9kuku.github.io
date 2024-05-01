import React from "react";
import loadingImage from './css/image/Loading.gif';
import loading from './css/Loading.module.css';

const Loading = () => {
    return (
        <div className={loading.LoadingContainer}>
            <h2>잠시만 기다려 주세요!</h2>
            <img className={loading.loadingImage} src={loadingImage} alt="로딩" />
        </div>
    )
}

export default Loading;