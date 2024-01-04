import LoginImg from './Login.svg';

const LoginImage = () => {
    const imgStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block',
    };
    return <img src={LoginImg} alt="login" style={imgStyle} />;
};

export default LoginImage;
