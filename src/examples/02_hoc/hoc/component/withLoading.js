import React from 'react';
// import PropTypes from 'prop-types';

// import Loading from './Loading';

const withLoading = (Component) => {
    return ({ isLoading, ...props }) => {
        if (isLoading) {
            return (<span>Loading...</span>);
        }
        return (<Component {...props} />);
    };
    
    // return function WihLoadingComponent({ isLoading, ...props }) {
    //     if (!isLoading) return (<Component {...props} />);
    //     return (<p>Be Hold, fetching data may take some time :)</p>);
    // }

    // const WithLoadingComponent = ({ isLoading, ...props }) => {
    //     if (!isLoading) return (<Component {...props} />);
    //     return (<p>Be Hold, fetching data may take some time :)</p>);
    // }
    // return WithLoadingComponent;
}


// const withLoading = (WrappedComponent) => {
//     class WithLoading extends React.Component {
//         static propTypes = {
//             // wrappedComponentRef: PropTypes.oneOfType([
//             //     PropTypes.func,
//             //     PropTypes.object,
//             // ]),
//             loading: PropTypes.bool,
//         };

//         // static defaultProps = {
//         //     loading: false,
//         // };

//         constructor(props) {
//             super(props);

//             this.state = {
//                 loading: false,
//                 fullscreen: false,
//             };
//         }

//         static getDerivedStateFromProps(props, state) {
//             if (typeof props.loading !== 'undefined' && props.loading !== state.loading) {
//                 return {
//                     loading: props.loading,
//                 };
//             }
//             return null;
//         }

//         // setLoading = (isBool = true) => {
//         //     this.setState({ loading: isBool });
//         // }
//         // setFullscreen = (isBool = true) => {
//         //     this.setState({ fullscreen: isBool });
//         // }

//         showLoading = (fullscreen = false) => {
//             this.setState({
//                 loading: true,
//                 fullscreen,
//             });
//         }

//         hideLoading = () => {
//             this.setState({ loading: false });
//         }

//         render() {
//             const { forwardedRef, loading, ...rest } = this.props;
//             // console.log('withLoading Render', loading);
//             return (
//                 <React.Fragment>
//                     <WrappedComponent
//                         ref={forwardedRef}
//                         {...rest}
//                         showLoading={this.showLoading}
//                         hideLoading={this.hideLoading}
//                         // loading={this.loading}
//                         loading={loading}
//                     />
//                     <Loading
//                         fullscreen={this.state.fullscreen}
//                         // show={typeof loading !== 'undefined' ? loading : this.state.loading}
//                         show={this.state.loading}
//                     />
//                 </React.Fragment>
//             );
//         }
//     }

//     return React.forwardRef((props, ref) => {
//         return <WithLoading {...props} forwardedRef={ref} />;
//     });
// };

export default withLoading;

