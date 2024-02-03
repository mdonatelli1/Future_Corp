import "./Slide.css";

function Slide({ slideData, objective }) {
  return (
    <section id="slide">
      <aside className="img-container">
        <img src={`http://localhost:4242${slideData.imageUrl}`} alt="slide" />
      </aside>
      <article className="info-container">
        <h2>OBJECTIF : {objective}</h2>
        <h3>{`${slideData.number}. ${slideData.step}`}</h3>
        <p>{slideData.desc}</p>
      </article>
    </section>
  );
}

export default Slide;
