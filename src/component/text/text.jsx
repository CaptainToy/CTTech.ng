const Text = ({ content,info }) => {
  return (
    <header className="transformative-header">
      <div className="development-process-lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <h2 className="subtitle">{info}</h2>
      <h1 className="title">{content}</h1>
      {/* <p className="description">{content}</p> */}
    </header>
  );
}

export default Text;
