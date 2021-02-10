export default function Spinner () {
  return (
    <div className="d-flex justify-content-center my-4">
      <div className="spinner-grow text-primary" style={{ width: '5rem', height: '5rem'}} role="status">
        {/* <span className="visually-hidden">Loading...</span> */}
      </div>
    </div>
  );
}