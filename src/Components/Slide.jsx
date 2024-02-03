import "./Slide.css";

function Slide({ slideData, objective }) {
  return (
    <section id="slide">
      <aside className="img-container">
        <img src={`https://mdonatelli1.github.io/Future_Corp-API${slideData.imageUrl}`} alt="slide" />
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
