const Shimmer = () => {
  return (
    <div className="res-container">
      {Array(12)
        .fill("")
        .map((_, i) => (
          <div className="shimmer-card" key={i}>
            <div className="shimmer-img"></div>
            <div className="shimmer-line"></div>
            <div className="shimmer-line short"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;