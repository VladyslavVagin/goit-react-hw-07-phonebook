import { ThreeCircles } from 'react-loader-spinner';

const Loader = () => {
  return (
    <ThreeCircles
      visible={true}
      height="100"
      width="100"
      color="#5c5c5c"
      ariaLabel="three-circles-loading"
      wrapperStyle={{}}
      wrapperClass="loaderWrapper"
    />
  );
};

export default Loader;
