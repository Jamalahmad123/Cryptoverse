const Wrapper = ({ children, classes = "" }) => {
  const className = `container border border-secondary rounded-2xl shadow-xl px-2 bg-primary max-w-[1140px] w-full mx-auto ${classes}`;
  return <div className={className}>{children}</div>;
};

export default Wrapper;
