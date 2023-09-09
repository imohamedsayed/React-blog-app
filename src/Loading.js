const Loading = ({ number }) => {
  const skeletons = Array.from({ length: number }, (_, index) => (
    <div key={index} className="blog-skelton"></div>
  ));
  return <div className="loading">{skeletons}</div>;
};

export default Loading;
