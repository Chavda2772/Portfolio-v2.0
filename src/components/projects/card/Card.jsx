import './Card.css'

function Card() {
  return (
    <a href="LocalTodoApplication/index.html">
      <div className="card">
        <div className="imgBox">
          <img className='rounded' src="/images/SpyglassFilter.png" alt="Extjs Todo Application" />
        </div>
        <div className="content -mt-36 pt-5 pb-5 pl-4 pr-4 text-center">
          <h2 className='mb-3'>Advance TodoList</h2>
          <p>Extjs Morden theme Todolist and it use browser LocalStorage for storing data</p>
        </div>
      </div>
    </a>
  );
}

export default Card;
