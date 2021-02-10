export default function SourceCard (props) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.source.name}</h5>
        <p className="card-text">{props.source.description}</p>
        <a href={props.source.url} target="_blank" className="btn btn-secondary">Tous les articles</a>
        <a href={props.source.url} target="_blank" className="btn btn-primary">Site web</a>
      </div>
    </div>
  );
}