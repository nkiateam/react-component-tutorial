import React from 'react';

const withAuth = (Component) => {
    return ({ ...props }) => {
        // 권한 체크 API를 조회하던 로그인시 권한을 들고있던 로직이 있다는 가정..
        const isAuth = Math.random() > 0.5 ? true : false;

        return (<Component {...props} isAuth={isAuth}/>);
    };
}

export default withAuth;

