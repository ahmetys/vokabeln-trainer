function ShowAlert({ type, message }) {
  return (
    <>
      <div className={`alert alert-${type}`}>
        <strong className="d-block">Error!</strong>
        <p>{message}</p>
      </div>
    </>
  );
}

export default ShowAlert;
